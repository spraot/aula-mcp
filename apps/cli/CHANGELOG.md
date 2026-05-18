# Changelog

## [1.1.0](https://github.com/spraot/aula-mcp/compare/v1.0.0...v1.1.0) (2026-05-18)


### Features

* **auth:** legacy MitID /prove + /verify fallback (J3) ([af05323](https://github.com/spraot/aula-mcp/commit/af0532372cba69f7b7a27f4ec207cdc86f49cfbe))
* **cli,auth:** add `aula refresh-stepup` for silent OIDC re-authorize ([873a952](https://github.com/spraot/aula-mcp/commit/873a9528a6ff76c5af9d75df59822d466c8d71e5))
* **cli:** add `aula thread fetch <id>` for diagnosing sensitive-thread errors ([8a615c3](https://github.com/spraot/aula-mcp/commit/8a615c3d5233e1cf34fd8c0a33a215d51920e1c6))
* **cli:** add `aula threads list-ids --json` for pre-check polling ([8486b30](https://github.com/spraot/aula-mcp/commit/8486b3098e218d2eabcbc3e838ff1980c4b0d86d))
* **cli:** aula doctor + transcript view/list/prune + --json + prompt timeout + locale cleanup ([25351c3](https://github.com/spraot/aula-mcp/commit/25351c32671431136c40d9bffc423a32584b1518))
* **cli:** aula login / status / whoami / logout ([8b8c5c4](https://github.com/spraot/aula-mcp/commit/8b8c5c4e5250413ec1c5568774d4c56d8f10f9f5))
* **cli:** aula tokens export/import for self-host migration ([03852f5](https://github.com/spraot/aula-mcp/commit/03852f5de3ba83db36e80aaa8f920189e32f28df))
* macOS Keychain backend (Q4) + login activity log (F7) + nightly canary (W6) ([10d09d6](https://github.com/spraot/aula-mcp/commit/10d09d624a6f0b9d1ba607486a95114245d918e7))
* **mitid:** typed CAP008 'parallel sessions' error + CLI hint + log footer ([61945aa](https://github.com/spraot/aula-mcp/commit/61945aa948d67bf1078aa3c983719bd8e76c37bc))


### Bug Fixes

* **cli:** chown cookies.json to AULA_MCP_DIR owner ([16d8286](https://github.com/spraot/aula-mcp/commit/16d82865ca3d7147576da2a4ee6073a1cd46823c))
* **cli:** prime guardian profile before getThreads in `threads list-ids` ([b3bedb4](https://github.com/spraot/aula-mcp/commit/b3bedb41212360641c9389195b9fafca3e3f10ab))
* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/spraot/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))

## 1.0.0 (2026-05-13)


### Features

* **auth:** legacy MitID /prove + /verify fallback (J3) ([af05323](https://github.com/Casperjuel/aula-mcp/commit/af0532372cba69f7b7a27f4ec207cdc86f49cfbe))
* **cli:** aula doctor + transcript view/list/prune + --json + prompt timeout + locale cleanup ([25351c3](https://github.com/Casperjuel/aula-mcp/commit/25351c32671431136c40d9bffc423a32584b1518))
* **cli:** aula login / status / whoami / logout ([8b8c5c4](https://github.com/Casperjuel/aula-mcp/commit/8b8c5c4e5250413ec1c5568774d4c56d8f10f9f5))
* **cli:** aula tokens export/import for self-host migration ([03852f5](https://github.com/Casperjuel/aula-mcp/commit/03852f5de3ba83db36e80aaa8f920189e32f28df))
* macOS Keychain backend (Q4) + login activity log (F7) + nightly canary (W6) ([10d09d6](https://github.com/Casperjuel/aula-mcp/commit/10d09d624a6f0b9d1ba607486a95114245d918e7))
* **mitid:** typed CAP008 'parallel sessions' error + CLI hint + log footer ([61945aa](https://github.com/Casperjuel/aula-mcp/commit/61945aa948d67bf1078aa3c983719bd8e76c37bc))


### Bug Fixes

* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/Casperjuel/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))
