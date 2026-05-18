# Changelog

## [1.1.0](https://github.com/spraot/aula-mcp/compare/v1.0.0...v1.1.0) (2026-05-18)


### Features

* **aula-auth:** foundation utilities (HTTP, crypto, cookies, HTML, PKCE) ([b2678e1](https://github.com/spraot/aula-mcp/commit/b2678e14d38c82cf557139d0ceeb06a8c8750b73))
* **aula-client:** API version probing + core endpoints + widget token manager ([d8c7c9f](https://github.com/spraot/aula-mcp/commit/d8c7c9f76c2808daddfc4526973d72a11db8edd6))
* **aula-client:** integration plugins (EasyIQ, Meebook, Min Uddannelse, Systematic) ([26a6798](https://github.com/spraot/aula-mcp/commit/26a6798a641fb15784bd29c385c6eab7f00d5594))
* **cli:** add `aula threads list-ids --json` for pre-check polling ([8486b30](https://github.com/spraot/aula-mcp/commit/8486b3098e218d2eabcbc3e838ff1980c4b0d86d))
* **integrations:** add EasyIQ Lektier widget (0142) ([#8](https://github.com/spraot/aula-mcp/issues/8)) ([106f4c8](https://github.com/spraot/aula-mcp/commit/106f4c80da1eea050ce89f135876209481d0e366))
* **integrations:** EasyIQ SkolePortal (widget 0128, PR scaarup/aula[#352](https://github.com/spraot/aula-mcp/issues/352)) ([e754f1b](https://github.com/spraot/aula-mcp/commit/e754f1b954dd1e7c9aaec4c66cc4b38ce7795c21))
* **mcp-server:** aula.messages.get_attachment tool — download server-side, return local path ([0638b83](https://github.com/spraot/aula-mcp/commit/0638b83ff874ff4ea5816d0d0eb4f2e215cee803))
* **mcp:** widget detection, friendly calendar range, raw escape hatch, notifications + posts tools ([1ec1a5f](https://github.com/spraot/aula-mcp/commit/1ec1a5f4aa3bddeec8187a054df7a7b56f62b2fd))


### Bug Fixes

* **aula-client:** probe API version in getMessagesForThread ([60c4246](https://github.com/spraot/aula-mcp/commit/60c424664a96480f2d6c843734f248af1aef05da))
* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/spraot/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))

## 1.0.0 (2026-05-13)


### Features

* **aula-auth:** foundation utilities (HTTP, crypto, cookies, HTML, PKCE) ([b2678e1](https://github.com/Casperjuel/aula-mcp/commit/b2678e14d38c82cf557139d0ceeb06a8c8750b73))
* **aula-client:** API version probing + core endpoints + widget token manager ([d8c7c9f](https://github.com/Casperjuel/aula-mcp/commit/d8c7c9f76c2808daddfc4526973d72a11db8edd6))
* **aula-client:** integration plugins (EasyIQ, Meebook, Min Uddannelse, Systematic) ([26a6798](https://github.com/Casperjuel/aula-mcp/commit/26a6798a641fb15784bd29c385c6eab7f00d5594))
* **integrations:** add EasyIQ Lektier widget (0142) ([#8](https://github.com/Casperjuel/aula-mcp/issues/8)) ([106f4c8](https://github.com/Casperjuel/aula-mcp/commit/106f4c80da1eea050ce89f135876209481d0e366))
* **integrations:** EasyIQ SkolePortal (widget 0128, PR scaarup/aula[#352](https://github.com/Casperjuel/aula-mcp/issues/352)) ([e754f1b](https://github.com/Casperjuel/aula-mcp/commit/e754f1b954dd1e7c9aaec4c66cc4b38ce7795c21))
* **mcp:** widget detection, friendly calendar range, raw escape hatch, notifications + posts tools ([1ec1a5f](https://github.com/Casperjuel/aula-mcp/commit/1ec1a5f4aa3bddeec8187a054df7a7b56f62b2fd))


### Bug Fixes

* **login,mcp:** unblock end-to-end auth + ugeplan, sharpen MCP UX ([f711ca4](https://github.com/Casperjuel/aula-mcp/commit/f711ca4b48ff495459c15f8b2b8dda838880e01e))
