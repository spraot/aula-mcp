/**
 * `aula threads list-ids` — print just the (threadId, latestMessageId)
 * pairs for the most recent threads, as JSON. Cheap pre-check for
 * polling scripts: compare against a state-file `seenMessageIds`
 * list and only fire downstream classification when something is
 * actually new.
 *
 * Why not use `messaging.getThreads` through the MCP server?
 * openclaw's `/tools/invoke` HTTP surface doesn't expose
 * MCP-plugin-server tools (only the built-in operator tools like
 * `sessions_list`). So a shell-script poller can't reach
 * `aula.messages.list_threads` from outside the LLM path. A CLI
 * command sidesteps that entirely.
 */

import { AulaHttpClient, withFreshTokens } from '@aula-mcp/aula-auth';
import { AulaClient } from '@aula-mcp/aula-client';
import { fail, fmt, printJson } from '../io.ts';
import { defaultStore } from '../store.ts';

export interface ThreadsListIdsCommandArgs {
  pageSize?: number;
}

export async function runThreadsListIds(args: ThreadsListIdsCommandArgs = {}): Promise<void> {
  const store = defaultStore();
  const http = new AulaHttpClient();
  let record: Awaited<ReturnType<typeof withFreshTokens>>;
  try {
    record = await withFreshTokens({ store, http });
  } catch (e) {
    printJson({
      ok: false,
      error: 'tokens',
      message: (e as Error).message,
      hint: `Run ${fmt.bold('aula login')} or ${fmt.bold('aula refresh-stepup')} to recover.`,
    });
    process.exit(1);
  }

  const client = new AulaClient({ tokens: record.tokens, http });
  try {
    const threads = await client.getThreads({ pageSize: args.pageSize ?? 20 });
    printJson({
      ok: true,
      threads: threads.map((t) => ({
        threadId: t.id,
        latestMessageId: t.latestMessage?.id ?? null,
        read: t.read,
      })),
    });
  } catch (e) {
    printJson({
      ok: false,
      error: 'api',
      message: (e as Error).message,
    });
    fail((e as Error).message);
    process.exit(1);
  }
}
