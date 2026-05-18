# Changelog

## [1.2.0](https://github.com/spraot/aula-mcp/compare/v1.1.0...v1.2.0) (2026-05-18)


### Features

* **aula-client:** integration plugins (EasyIQ, Meebook, Min Uddannelse, Systematic) ([26a6798](https://github.com/spraot/aula-mcp/commit/26a6798a641fb15784bd29c385c6eab7f00d5594))
* **cli:** aula doctor + transcript view/list/prune + --json + prompt timeout + locale cleanup ([25351c3](https://github.com/spraot/aula-mcp/commit/25351c32671431136c40d9bffc423a32584b1518))
* **ha-addon:** in-addon MitID login UI via HA Ingress ([#20](https://github.com/spraot/aula-mcp/issues/20)) ([3899ab5](https://github.com/spraot/aula-mcp/commit/3899ab561a50a0833a3085c2d073561f3c3702d8))
* **integrations:** add EasyIQ Lektier widget (0142) ([#8](https://github.com/spraot/aula-mcp/issues/8)) ([106f4c8](https://github.com/spraot/aula-mcp/commit/106f4c80da1eea050ce89f135876209481d0e366))
* **integrations:** EasyIQ SkolePortal (widget 0128, PR scaarup/aula[#352](https://github.com/spraot/aula-mcp/issues/352)) ([e754f1b](https://github.com/spraot/aula-mcp/commit/e754f1b954dd1e7c9aaec4c66cc4b38ce7795c21))
* **mcp-server:** add legacy SSE transport for Home Assistant compatibility ([#18](https://github.com/spraot/aula-mcp/issues/18)) ([e6af96d](https://github.com/spraot/aula-mcp/commit/e6af96d181a73c4537bbd0c19b9842bacd3a4f1b))
* **mcp-server:** aula.messages.get_attachment tool — download server-side, return local path ([0638b83](https://github.com/spraot/aula-mcp/commit/0638b83ff874ff4ea5816d0d0eb4f2e215cee803))
* **mcp-server:** auto-invalidate cached client on token-file change ([c577929](https://github.com/spraot/aula-mcp/commit/c577929ecb11a88a3547b020ac95e9c6601bc86b))
* **mcp-server:** Hono + Streamable HTTP + aula.discover ([2466d2f](https://github.com/spraot/aula-mcp/commit/2466d2f71f2ee0c5d5992d8748d27dc3cc516918))
* **mcp-server:** silent-reauth on token refresh to preserve MitID step-up ([0fb3574](https://github.com/spraot/aula-mcp/commit/0fb3574c499b680b44a6886a63414f5fe40b0288))
* **mcp:** widget detection, friendly calendar range, raw escape hatch, notifications + posts tools ([1ec1a5f](https://github.com/spraot/aula-mcp/commit/1ec1a5f4aa3bddeec8187a054df7a7b56f62b2fd))


### Bug Fixes

* **auth-correctness:** meta-refresh fallback, refresh race, fetch errors, cookie warnings, graceful shutdown, remote-bind guard ([e337e77](https://github.com/spraot/aula-mcp/commit/e337e7744840a35df70563207b287ca06e0fed31))
* critical issues from gap review ([53a9ea4](https://github.com/spraot/aula-mcp/commit/53a9ea4c86b8fb2c22b65614c5a71442ebc2e443))
* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/spraot/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))
* **mcp-server:** cap + idle-evict SSE sessions, validate inbound JSON-RPC ([#21](https://github.com/spraot/aula-mcp/issues/21)) ([6f7f003](https://github.com/spraot/aula-mcp/commit/6f7f003041f7dbd3dbcf7c817d83ed653427584d))
* **mcp-server:** duck-type the token-store path check so the fs.watch actually attaches ([96fde4a](https://github.com/spraot/aula-mcp/commit/96fde4ad3386955db2e4a493779e1fa26e8a5472))
* **mcp-server:** prime guardian profile in aula.messages.get_thread ([6336455](https://github.com/spraot/aula-mcp/commit/6336455a67ac5d7321c2ec82f982f1541db8971a))
* **mcp-server:** prime guardian profile in list_threads, notifications.list, posts.list ([3db9573](https://github.com/spraot/aula-mcp/commit/3db957332b41548bbae977c1c3da4752988bc40e))

## [1.1.0](https://github.com/Casperjuel/aula-mcp/compare/v1.0.0...v1.1.0) (2026-05-13)


### Features

* **ha-addon:** in-addon MitID login UI via HA Ingress ([#20](https://github.com/Casperjuel/aula-mcp/issues/20)) ([3899ab5](https://github.com/Casperjuel/aula-mcp/commit/3899ab561a50a0833a3085c2d073561f3c3702d8))
* **mcp-server:** add legacy SSE transport for Home Assistant compatibility ([#18](https://github.com/Casperjuel/aula-mcp/issues/18)) ([e6af96d](https://github.com/Casperjuel/aula-mcp/commit/e6af96d181a73c4537bbd0c19b9842bacd3a4f1b))


### Bug Fixes

* **mcp-server:** cap + idle-evict SSE sessions, validate inbound JSON-RPC ([#21](https://github.com/Casperjuel/aula-mcp/issues/21)) ([6f7f003](https://github.com/Casperjuel/aula-mcp/commit/6f7f003041f7dbd3dbcf7c817d83ed653427584d))

## 1.0.0 (2026-05-13)


### Features

* **aula-client:** integration plugins (EasyIQ, Meebook, Min Uddannelse, Systematic) ([26a6798](https://github.com/Casperjuel/aula-mcp/commit/26a6798a641fb15784bd29c385c6eab7f00d5594))
* **cli:** aula doctor + transcript view/list/prune + --json + prompt timeout + locale cleanup ([25351c3](https://github.com/Casperjuel/aula-mcp/commit/25351c32671431136c40d9bffc423a32584b1518))
* **integrations:** add EasyIQ Lektier widget (0142) ([#8](https://github.com/Casperjuel/aula-mcp/issues/8)) ([106f4c8](https://github.com/Casperjuel/aula-mcp/commit/106f4c80da1eea050ce89f135876209481d0e366))
* **integrations:** EasyIQ SkolePortal (widget 0128, PR scaarup/aula[#352](https://github.com/Casperjuel/aula-mcp/issues/352)) ([e754f1b](https://github.com/Casperjuel/aula-mcp/commit/e754f1b954dd1e7c9aaec4c66cc4b38ce7795c21))
* **mcp-server:** Hono + Streamable HTTP + aula.discover ([2466d2f](https://github.com/Casperjuel/aula-mcp/commit/2466d2f71f2ee0c5d5992d8748d27dc3cc516918))
* **mcp:** widget detection, friendly calendar range, raw escape hatch, notifications + posts tools ([1ec1a5f](https://github.com/Casperjuel/aula-mcp/commit/1ec1a5f4aa3bddeec8187a054df7a7b56f62b2fd))


### Bug Fixes

* **auth-correctness:** meta-refresh fallback, refresh race, fetch errors, cookie warnings, graceful shutdown, remote-bind guard ([e337e77](https://github.com/Casperjuel/aula-mcp/commit/e337e7744840a35df70563207b287ca06e0fed31))
* critical issues from gap review ([53a9ea4](https://github.com/Casperjuel/aula-mcp/commit/53a9ea4c86b8fb2c22b65614c5a71442ebc2e443))
* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/Casperjuel/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))
