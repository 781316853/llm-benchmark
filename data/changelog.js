// AI 编程工具更新日志快照(由 scripts/lib/changelog.js 每日抓取维护,每日 2 次)
// 来源:Codex/Claude Code/OpenCode/Kimi Code 取 GitHub Releases;Qoder 取 docs.qoder.cn 更新日志页;Trae/ZCode/CodeBuddy/WorkBuddy 取各官网更新日志页
// 口径:仅正式版(不收 alpha/beta/rc);本文件存各源可得的全量条目,展示窗口由前端控制
// 字段:tools[]=工具(name/vendor/changelogUrl/status ok|stale|empty/lastOkAt);entries[]=一条更新
//   entry 字段:version=版本号 title=标题 date=日期(UTC YYYY-MM-DD) dateRaw=源站原文日期
//   tags=小节/产品线标签 url=源站地址(可深链到具体版本) body=完整正文(纯文本,保留换行,不摘要)
//   h=英文原文哈希(仅已翻译条目携带):title/body 为中文译文,原文见 url 指向的源站页面
window.CHANGELOG = {
  'updated': '2026-09-24',
  'refreshedAt': '2026-09-24 18:00',
  'uiWindowDays': 14,
  'desc': '9 个 AI 编程工具的官方更新日志汇总(仅正式版);每个工具只展示最近一次更新,「最近一次更新」超出 14 天时不显示卡片',
  'tools': [
    {
      'id': 'codex',
      'name': 'Codex',
      'vendor': 'OpenAI',
      'kind': 'github',
      'changelogUrl': 'https://github.com/openai/codex/releases',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '0.156.1',
          'title': '0.156.1',
          'date': '2026-09-23',
          'dateRaw': '2026-09-23T02:43:57Z',
          'tags': [],
          'url': 'https://github.com/openai/codex/releases/tag/rust-v0.156.1',
          'body': 'New Features\n- Choose GPT-6 Sol or GPT-6 Luna from the model picker. The rate-limit switch prompt now recommends GPT-6 Luna. ( #47405 )\nChangelog\nFull Changelog: rust-v0.156.0...rust-v0.156.1\n- #47405 [hotfix 0.156.0] Add GPT-6 Sol and Luna to the model catalog ( #47332 ) @imac-oai'
        }
      ]
    },
    {
      'id': 'claude-code',
      'name': 'Claude Code',
      'vendor': 'Anthropic',
      'kind': 'github',
      'changelogUrl': 'https://github.com/anthropics/claude-code/releases',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '2.1.281',
          'title': 'v2.1.281',
          'date': '2026-09-23',
          'dateRaw': '2026-09-23T19:19:15Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.281',
          'body': 'What\'s changed\n- Added Claude apps gateway support for newer Claude Desktop keys in desktop policy blocks, including blockReadsOutsideWorkingDirectories and disableBypassPermissionsMode\n- Added assume_role on Claude apps gateway Bedrock upstreams: the gateway calls Bedrock as an IAM role it assumes through STS, in another AWS account if needed, optionally one session per developer\n- Added guardrail: {id, version} on Claude apps gateway Bedrock upstreams to apply an Amazon Bedrock guardrail to every request sent through them (set it on all Bedrock upstreams or none)\n- Added telemetry.resource_attributes to the Claude apps gateway config, to put fixed labels on the telemetry of Claude Desktop and /login sessions\n- Added \'attribution\': false in settings.json to hide all commit and PR attribution; older CLI versions skip a settings file that holds it, so keep the object form in files shared across versions\n- Added MCP URL-mode elicitation on 2026-07-28 protocol connections, so servers can ask Claude Code to open a browser-based flow; no waiting dialog is left on screen when the server has no way to confirm completion\n- Added MCP server checks to claude plugin validate : it reports .mcp.json entries that would be silently dropped at load, undeclared ${user_config.*} references, and insecure URLs\n- Added an auto mode recommendation to /insights that estimates how many permission prompts auto mode could have handled in your recent sessions\n- Added a scrollbar to the /skills , /mcp and /plugin Installed lists in fullscreen mode, like the one /workflows now has: it appears while the mouse is over the list and can be clicked or dragged\n- Fixed a crash (\'unrecoverable interface error\') that could end a session while an API request was being retried\n- Fixed a turn that could retry indefinitely, ignoring --max-turns , when the model alternated unparseable tool calls and output-limit truncation\n- Fixed resumed sessions re-sending earlier turns in a changed form (a parallel tool-call turn, an MCP tool call\'s input or a tool-search result while its server was still reconnecting, or a tool-search result whose loading turn was interrupted), which could make the API drop the conversation\'s prior reasoning\n- Fixed resuming a very large session sometimes restoring only its last few messages\n- Fixed a session resumed after a restart during a pending permission prompt sending a different history than before, which broke the prompt cache from that point\n- Fixed resuming a session that ended during a tool call: Claude now sees the call and is told its outcome is unknown, and a manual resume no longer adds a hidden \'Continue\' message\n- Fixed sessions with an earlier advisor result the API could no longer read failing one request every turn and repeatedly losing earlier reasoning; the history is now repaired once\n- Fixed the prompt cache being lost when an MCP server disconnects mid-conversation, or is still connecting after a resume, while tool search is off (for example behind a proxy or gateway)\n- Fixed responses cut short by a proxy or gateway that closes the stream cleanly being shown as complete with no warning, and tool calls running twice on duplicated stream events\n- Fixed responses failing with \'Content block not found\' when a proxy drops a stream event mid-response; the partial response is now kept, and web search keeps results that already arrived\n- Fixed an empty completed response being requested twice when the connection dropped before the stream\'s final event\n- Fixed the stop reason being lost when a proxy sends a trailing usage-only frame\n- Fixed CLAUDE_CODE_RETRY_WATCHDOG sessions failing on the first 5xx or dropped connection after a run of 429/529 waits, and sleeping uncapped and silently on a long Retry-After from a 5xx\n- Fixed fast mode retrying rate-limited requests back to back when the server sent Retry-After: 0\n- Fixed a tool that returned an oversized image leaving sibling tool calls unanswered and still running, or ending the turn with no final message\n- Fixed conversations getting permanently stuck on \'tool_use.name: String should have at most 200 characters\' after the model called a tool by an overlong name\n- Fixed tool calls failing with \'Failed to get memory usage\', or being reported as failed after they ran, when Claude Code cannot read its own memory usage, for example when it has run out of file descriptors\n- Fixed --input-format stream-json sessions (Agent SDK, VS Code extension) and scheduled cloud sessions failing every turn with an error when an earlier assistant message had plain-string content\n- Fixed non-interactive sessions ( -p , Agent SDK) failing on the next turn after the directory they were started in was deleted mid-session\n- Fixed headless sessions with host-side (SDK) MCP servers stalling on the first message when the host stops responding mid-handshake; remote sessions now wait a few seconds at most\n- Fixed interactive startup waiting on the managed-settings network request (about 80 ms, 17+ seconds when the network is unreachable) when no MCP servers or plugins are configured\n- Fixed a delay of up to two minutes before responding when reading or @-mentioning a PDF larger than 3 MB\n- Fixed an interrupted Read of specific PDF pages leaving its page render running for up to two minutes\n- Fixed permission dialogs and attachment checks reading a path under macOS\'s /.vol , /.nofollow or /.resolve (which can reach a network mount) before approval\n- Fixed a recursive rm whose target is only command-substitution output, such as rm -rf \'$(pwd)\' , running unprompted in auto and --dangerously-skip-permissions mode; it now asks even with a Bash allow rule, unless run with CLAUDE_CODE_DISABLE_SUBSTITUTION_RM_PROMPT=1\n- Fixed a permission rule containing a NUL byte being expanded into a wildcard match; such a rule now matches nothing\n- Fixed sandbox excludedCommands entries not matching git rev-parse --git-dir , programs named like shell builtins, and commit messages containing [WIP] or # lines\n- Fixed sandboxed Bash commands being unable to write to $TMPDIR when CLAUDE_CODE_TMPDIR is set\n- Fixed claude --bg starting a background session, and running its project hooks, in a directory that had not passed the workspace trust prompt; it now asks for trust first, or exits when not run interactively\n- Fixed --setting-sources (and SDK settingSources ) not being forwarded to spawned sessions: teammates, /bg , claude agents sessions and --worktree --tmux now start with the parent\'s restriction\n- Fixed Read, Write, Edit and NotebookEdit: a file path containing a null byte now fails that tool call with a clear error instead of ending the whole turn\n- Fixed Write refusing a call that gives the file path or content twice under two parameter names with identical values\n- Fixed CLAUDE.md and rules files from an --add-dir directory inside the working directory being sent to the model twice in headless and SDK sessions\n- Fixed remote sessions staying on \'needs approval\' with a stale prompt after a permission prompt and a sandbox network-access prompt overlapped and both were answered\n- Fixed cloud sessions not telling Claude about background agents that finished just before a worker restart\n- Fixed scheduled routine and notification turns in remote sessions not receiving turn-start notices (newly available tools, MCP changes, date, todos) until after the first tool call\n- Fixed scheduled tasks and /loop wakeups being fired again every second when their delivery failed, which could make Claude Code exit at the end of a turn\n- Fixed Remote Control reporting \'disabled by your organization\'s policy\' when the org policy simply hadn\'t loaded yet; it now retries the fetch and says it couldn\'t verify\n- Fixed the Artifact tool missing from Remote Control sessions that claude remote-control starts for you to open from Claude Desktop, claude.ai or the mobile app\n- Fixed macOS credential writes dropping stored MCP OAuth tokens or deleting the keychain entry when the login keychain was locked (e.g. right after wake)\n- Fixed gcpAuthRefresh / awsAuthRefresh login processes being left running (and holding their localhost callback port on Windows) when Claude Code exits or the refresh times out\n- Fixed the \'Not logged in · Run /login\' footer and missing claude.ai connectors persisting in a session after logging in from another Claude Code process\n- Fixed mcp_tool hooks on blocking events (PreToolUse and similar) being skipped while their MCP server was still connecting; they now wait for it, up to the MCP connect timeout\n- Fixed the same MCP server being connected twice when a plugin or claude.ai connector and a configured server spell its URL differently (host letter case, default port, trailing slash)\n- Fixed MCP_CONNECTION_NONBLOCKING=0 giving up on claude.ai connectors after 1s instead of honoring MCP_CONNECT_TIMEOUT_MS\n- Fixed --channels plugin entries being checked against the installed plugin\'s marketplace alone; the installed plugin\'s name must now match the entry as well\n- Fixed --plugin-dir on a folder of plugins that also has a .claude-plugin/marketplace.json loading one empty plugin instead of the plugins in it\n- Fixed claude plugin uninstall refusing to remove a project-scope plugin that isn\'t enabled, saying it is \'enabled at project scope\' while claude plugin disable says it is already disabled\n- Fixed claude plugin update failing for project-scoped plugins when --scope is omitted — it now resolves the scope the plugin is installed at instead of assuming user\n- Fixed claude plugin validate reporting privacyPolicyUrl , supportUrl and other listing metadata keys in plugin.json as unknown fields\n- Fixed known_marketplaces.json recording a marketplace as refreshed when its remote could not be reached and CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE kept the existing clone\n- Fixed the /plugin Errors tab showing no confirmation after its last error is resolved\n- Fixed /plugin starting a second uninstall or update of the same plugin when Enter was pressed again while the first was still running\n- Fixed a y held while /plugin checks a marketplace source adding the marketplace the instant the \'Add marketplace?\' question appears, before it can be read\n- Fixed 1 answering Yes in /permissions \' delete and remove-directory confirms while the pointer is on No, which let a held 1 remove one workspace directory after another\n- Fixed Alt+T and /config offering to turn thinking off on models that can\'t; thinking now stays on there, with a one-line reason in place of the switch\n- Fixed /context total leaving out messages added since the last response; it now matches its categories and can read higher than the status line\n- Fixed /model showing the raw API error JSON and request ID when the API refuses the picked model; it now shows the server\'s message and says the model was not changed\n- Fixed API errors from an HTML error page (such as a proxy\'s 429 or 502 page) printing the page\'s raw markup or leaving out the HTTP status, and error messages breaking onto a second line when the server\'s error text ended in a newline\n- Fixed /feedback, /bug and /share still sending your report after you cancelled it while it was being sent\n- Fixed /feedback, /bug and /share failing every send with \'Couldn\'t send feedback\' after a Remote Control Stop arrived while the dialog was open\n- Fixed /ide showing \'No available IDEs detected\' while also listing a running IDE\n- Fixed the terminal being left in a broken state (crash or garbled input) when /setup-bedrock or /setup-vertex restarts Claude Code to apply new settings\n- Fixed /config exiting when respectGitignore or copyFullResponse in ~/.claude.json holds null\n- Fixed the session name from /rename disappearing while Claude asks a multiple-choice question, so side-by-side sessions stay identifiable\n- Fixed one-line pastes showing on their own lines in the sent message for prompts from VS Code or Remote Control and for expanded paste placeholders\n- Fixed a message queued while Claude is working losing or changing the IDE selection it was written with, and queued messages not showing their selection\n- Fixed pressing Shift+Tab twice quickly landing on the wrong permission mode\n- Fixed Ctrl+C or Ctrl+D pressed twice quitting Claude Code instead of closing the dialog in the remaining dialogs and pickers, such as /memory , /hooks , /mcp (including a server\'s sign-in screen), /export , /copy , /theme , and /teleport \'s uncommitted-changes and login prompts (where Esc also quit)\n- Fixed keys that arrive in one burst of input (e.g. over Remote Control), such as an arrow key followed by Enter, x or s , acting on the previous selection: a stale effort level in /effort and the model picker, and the previously highlighted row in /skills , the background task rows under the prompt, MCP server prompts and /install-github-app\n- Fixed /install-github-app updating the workflow after \'Skip workflow update\' was chosen, running setup twice on a repeated Enter, and ↑ on the repository step blocking a typed repository name when no repository was detected\n- Fixed vim mode: dj / dk / dG / dgg and their c / y forms acting on part of a line; 1G going to the last line; d0 / c0 / y0 doing nothing; the cursor being off by one after . repeats an insert; and o / p on a ! -prefixed line switching to shell mode\n- Fixed vim mode cw on a space, an empty line, a word\'s last letter or a one-letter word also changing the next word; word motions stopping inside words in Hindi, Bengali and other scripts; and . , p or P that inserts text starting with ! switching to shell mode, losing text or editing the wrong character\n- Fixed the prompt cursor moving one character too far after an accent typed as its own key\n- Fixed an extra blank line above a list item whose text starts on the line after its bullet, in screen-reader mode, quoted lists and long lists\n- Fixed bulleted lists of plain numbers (like - 316. ) showing as letters, roman numerals or the wrong numbers\n- Fixed the agent panel\'s footer hint ignoring keys rebound in keybindings.json , and showing a stray · when the stop-all-agents shortcut is unbound\n- Fixed the agent panel footer offering \'Enter to view\' and \'x to stop\' on the agent you are already viewing (where x types into its input), and \'Enter to view\' on the main row when main is already shown\n- Fixed a mouse click on an agent-panel row leaving the keyboard cursor on the previously selected row\n- Fixed Esc interrupting the running turn instead of deselecting the selected agent-panel row\n- Fixed PgUp and PgDn doing nothing in a dialog\'s list (for example /skills ) in fullscreen mode\n- Fixed /heapdump summary saying most memory is native when it is in the JS heap snapshot\n- Fixed Bash edit-diff snapshot directories piling up in the temp folder: abandoned ones are now deleted right away and the rest when Claude Code exits\n- Fixed /workflows moving the pointer to a different run, and x stopping it, when a new run started while the list was open\n- Fixed the selected tab in tabbed dialogs ( /config , /plugin , /permissions ) showing no highlight while the tab bar has focus when color is off ( NO_COLOR )\n- Fixed the mouse wheel over the /plugin Installed list scrolling the pane behind it instead of the list\n- Fixed the hover highlight lingering on a list row in fullscreen mode after scrolling or filtering moved it away from the mouse\n- Fixed long list rows, such as in the /remote-control menu, wrapping onto a second line in narrow terminals; they\'re now cut with …\n- Fixed /hooks and /mcp detail views printing a long value over the row below it in narrow terminals\n- Fixed lists such as a skill\'s state options in /plugin not being answerable by typing a number in screen-reader mode\n- Windows: Fixed Bash commands that write to $TMPDIR/… failing with \'Permission denied\'\n- Windows: Fixed a race in which Claude Code sessions updating at the same moment could delete each other\'s claude.exe backup, which could leave no claude.exe behind\n- Improved Claude Desktop sign-in and usage-limit error messages to point at the app instead of terminal commands\n- Improved startup: managed settings and policy fetches no longer retry requests that can never succeed\n- Improved interactive startup time: git reads, startup telemetry and the Bedrock/Vertex model-upgrade checks no longer run before the first frame\n- Improved the time to resume long sessions that read many files; the restored file cache now matches the files as they were read\n- Improved the time to resume very long sessions that have been compacted, most noticeably through the Agent SDK and Claude Desktop\n- Improved \'Prompt is too long\' recovery in sessions dominated by one very large first prompt: that prompt is now summarized on its own instead of being left out of the summary\n- Improved auto mode after resuming a session in a new process: the permission classifier can now reuse its earlier prompt cache instead of rewriting it\n- Improved the auto mode denial message so Claude treats a denial as covering the outcome, not only the exact command\n- Improved the dangerous-rm check to also flag a removal at a shell variable followed by a top-level directory name, at a variable derived from the working directory, or at a backslash-only target\n- Improved sandbox guidance on macOS: when a local dev server can\'t bind a port, Claude now points to sandbox.network.allowLocalBinding\n- Improved --agents to accept the path to a JSON file (with -p ) as well as inline JSON, and to allow an empty prompt\n- Improved /batch to run where a WorktreeCreate hook provides the agent worktrees, not only inside a git repository\n- Improved plugin hook-failure errors to name the offending plugin, and added a claude plugin validate warning when a shell-form hook leaves ${CLAUDE_PLUGIN_ROOT} unquoted (it breaks on plugin paths with spaces)\n- Improved the / menu, /skills , /context and the /plugin Installed list to show skills synced from claude.ai by their short name when no other command uses it, not anthropic-skills:<name>\n- Improved /deep-research reliability on long research briefs by removing unused required fields from the scope step\'s output\n- Improved the writing in published artifact pages: the bundled artifact-design skill now asks Claude for plain, direct prose\n- Improved artifact publishing on slow connections: large page uploads are now sent compressed\n- Improved the large CLAUDE.md startup notice to also count instruction files together, so many mid-sized files and @-imports are caught\n- Improved debug logs to name settings env variables ignored because the session\'s launch environment already sets them\n- Improved keyboard navigation in tabbed dialogs such as /permissions and /usage : ↑/↓ move focus between the tab row and the content, and a list responds to keys only while it has focus\n- Improved /help and /sandbox : ←/→ and Tab switch tabs from inside a tab\'s list, and ↓ on an empty Custom commands tab in /help no longer leaves the keys stuck until Esc\n- Improved /install-github-app , /desktop , the /permissions auto mode environment prompts, and the /plugin \'Add marketplace?\' and \'Run this command?\' prompts: they now use the standard dialog frame with key hints, and Ctrl+C or Ctrl+D cancels them on the second press like other dialogs\n- Improved the /workflows and /mcp lists: they page (PgUp/PgDn, Home/End) and take j/k and the mouse like other lists, their arrows follow select:previous / select:next rebinds, and x in /workflows stops the run the pointer is on\n- Improved the /plugin plugin and marketplace details menus and the /remote-control already-connected menu: they now support Home/End and clicking a row\n- Improved the background workflow row below the prompt: it now shows the name, a progress bar, the agent count on wide terminals, elapsed time, total tokens, and the large-workflow warning\n- Improved the /plugin Installed list: rows now line up in columns (status, name, type, details) across every section\n- Improved /skills : each row now leads with the skill\'s name, with ✔ or ◯ alone showing on or off, and stays on one line in narrow terminals\n- Improved narrow list rows ( /skills , /workflows , /feedback ): a name keeps 20 columns beside its first detail, and details are shown whole or not at all\n- Improved /diff : a scrollbar shows where you are in a long list of changed files, and long paths no longer wrap their rows\n- Improved /hooks : a hook\'s detail screen now says what kind of hook it is and where to change it, instead of always pointing at settings.json, and the hooks-disabled, safe mode and managed-hooks-only notices each say what is happening in one plain sentence\n- Improved screen-reader output in /mcp : a disabled server is read as \'off\' instead of \'pending\'\n- Improved the Remote Control confirmation: its options are briefly inactive again after the terminal window regains focus, so a key pressed while switching back cannot answer it\n- Changed send now (ctrl+enter or ctrl+x ctrl+s) to move running tools to the background instead of cancelling the turn\n- Changed auto mode so that, where its classifier review runs server-side, read-only and sandboxed shell commands also wait for that review and are blocked when it flags them\n- Changed CLAUDE_CODE_AUTO_MODE_SERVER to also apply on a direct Anthropic API connection: 0 opts out of the server-side auto mode classifier (the local classifier then counts toward usage), 1 opts in\n- Changed the dangerous rm prompt in --dangerously-skip-permissions and auto mode to wait 2 minutes for an answer, then deny the command with a rewrite hint so unattended sessions keep going ( CLAUDE_CODE_DISABLE_DANGEROUS_RM_TIMEOUT=1 turns this off)\n- Changed Claude apps gateway to refuse to start when a managedMcpServers entry\'s envHelper path starts with \\??\\ or /??/ , a path form current Claude Desktop refuses to run\n- Changed self-hosted runners to pass system prompts to Claude Code as private files instead of command-line text, so large prompts no longer fail the launch; a wrapper or command hook that appends --system-prompt or --append-system-prompt must switch to --system-prompt-file or --append-system-prompt-file\n- Changed queued messages to show in the conversation above the spinner instead of under it\n- Changed the session artifact links under the prompt into one footer pill ( ⧉ name or ⧉ N ) that opens /artifacts , which now lists this session\'s artifacts first\n- Changed the Artifact tool to let Claude load scripts from unpkg.com in artifact pages\n- Changed hovering a list row in fullscreen mode, including in /config , to tint the row instead of drawing a second ❯ pointer beside the focused row\'s\n- Changed /mcp: each server\'s row now starts with its status icon and name, says its state once, and in a narrow terminal drops trailing facts like \'managed\' before shortening the name\n- Changed /workflows: each run\'s row leads with its status icon and elapsed time, and a narrow terminal keeps the run\'s name and time, dropping the agent and token counts first\n- Changed Remote Control attachment downloads to reuse connections and to skip files already downloaded in the session\n- Changed MCP resource lists (the resource list tool and @-mention suggestions) to skip MCP Apps UI resources; reading one by URI still works\n- Changed claude plugin uninstall --json and the /plugin dialog to say a plugin\'s data was kept when its folder stays because another installed plugin uses it or install records cannot be read\n- Changed the background tasks list ( /tasks ): pressing x on a running /ultrareview now asks for confirmation before stopping the review\n- Removed the leftover \'(removed)\' /agents entry from the command menu and /help ; typing /agents still explains where the wizard went\n- [VSCode] Added a Continue/Stop prompt in the VS Code and JetBrains panels when auto mode falls back to billed classifier requests, replacing the unanswerable warning line\n- [VSCode] Fixed opening a Web session with no messages saving an empty local copy that could not be resumed; an error now says where to continue it\n- [VSCode] Fixed a claude.ai/code session opening empty or with only part of its conversation, with no error, when the server failed to return its history, part of it failed to load, or a network sign-in page answered in its place; it now shows an error and can be opened again\n- [VSCode] Fixed conversations in editor tabs hanging silently after the extension host restarts; the tab now tells you to reopen it from the session list\n- [VSCode] Fixed Claude attaching option previews to multiple-choice questions in the chat panel, where the question card never shows them\n- [VSCode] Fixed the session manager\'s cost and usage block wrapping mid-text on a narrow side bar, and showing totals from a previous login after an account switch\n- [Claude Code on the web] Added a Fast mode switch to the composer\'s model menu in cloud sessions, shown when your plan includes fast mode and the selected model supports it\n- [Claude Code on the web] Added a settings shortcut on the GitHub setup tip and a \'Troubleshoot GitHub connection\' link in the repository pickers, both opening your GitHub connection page\n- [Claude Code on the web] Fixed routines with a GitHub trigger for a pull request being converted to draft never firing; they now start a run when the pull request is converted\n- [Claude Code on the web] Fixed cloud sessions on a repository that isn\'t hosted on GitHub showing a Create PR button that could never work; the button is now hidden there\n- [Claude Code on the web] Fixed the GitHub setup tip on claude.ai/code covering the repository picker\'s search box and rows while the picker is open; it now steps aside until the picker closes\n- [Claude Code on the web] Improved the file card shown when a cloud session can\'t open a file: it now says whether the file no longer exists or the session\'s permission settings block reading it\n- [Claude Tag] Added a short line in the Slack thread after someone presses Stop, naming who stopped Claude\'s response and saying to mention @claude to continue\n- [Claude Tag] Fixed Slack channels where Claude could permanently stop responding to replies inside threads; affected channels now recover on their own with the next new message to Claude\n- [Claude Tag] Fixed Claude resuming a stopped request after you press Stop in Slack, for example when a check-in fired or a background task ended; messages sent mid-response are now read\n- [Claude Tag] Fixed Slack replies arriving many minutes late, or never, after Claude\'s session crashed mid-task, such as on a failed setup script; it now restarts on its own within minutes\n- [Claude Tag] Fixed Claude in Slack promising an automatic restart, then failing generically, when a session\'s configuration is too large to start; the thread now says why and how to retry\n- [Claude Tag] Fixed very long Slack threads: Claude could silently withhold a reply after judging it against weeks-old messages, and a restart deep into the thread could lose recent context\n- [Claude Tag] Fixed Claude answering every mention with \'Couldn\'t check this channel just now\' in a Slack channel moved from Enterprise Grid org-wide sharing into a single workspace\n- [Claude Tag] Fixed very large Enterprise Grid workspaces reached mostly through channels shared across workspaces getting \'Couldn\'t check this channel\' again after a quiet hour\n- [Claude Tag] Fixed a Slack request blocked by your organization\'s inference hook showing a generic retry notice; the thread now shows the hook\'s deny message and Claude doesn\'t retry\n- [Claude Tag] Fixed Claude in Slack offering to switch to models your organization can\'t use; it now lists and offers only models the switch will actually accept\n- [Claude Tag] Fixed requests to DynamoDB and Kinesis account-based endpoints failing to authenticate when sent through an AWS connection in Claude Tag\n- [Claude Tag] Fixed the Plugins sections in Claude Tag admin settings failing to load for organization admins and listing attached plugins as raw IDs; they now load and show each plugin\'s name\n- [Claude Tag] Changed the routine list Claude gives when asked in a Slack thread to show that thread\'s own scheduled tasks by default instead of every routine in the channel\n- [Code Review] Fixed a pull request getting no review when its reviewed commit was force-pushed away while a failed review was being retried in a repository not set to review every push'
        },
        {
          'version': '2.1.280',
          'title': 'v2.1.280',
          'date': '2026-09-22',
          'dateRaw': '2026-09-22T16:38:14Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.280',
          'body': 'What\'s changed\n- Added Claude Opus 5.5 ( claude-opus-5-5 ), now the default Opus model — 1M context, $4/$20 per Mtok with $0.20/Mtok cache reads\n- Added mouse support to more lists in fullscreen mode: the wheel scrolls the /skills list, and a skill\'s state options in /plugin can be clicked\n- Added CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH to change the 2,048-character cap on MCP tool descriptions and server instructions for every MCP server in the session\n- Added hook output sizes and the number of oversized outputs saved to a file to the hook_execution_complete OpenTelemetry event\n- Fixed writes through a symlinked path being judged by their in-tree spelling: the prompt names where the write lands, and acceptEdits , allow rules and auto mode no longer approve one landing outside\n- Fixed auto mode retrying an action over and over when a safety check declined to review it; the action is now denied once, noting that retrying won\'t help\n- Fixed auto mode denying actions over and over without pause when a safety check gave no answer; retries now back off, and the turn stops with a message after ten in a row\n- Fixed Write calls failing validation when a model sends path , file_text , file_content or a stray description instead of file_path and content\n- Fixed Ctrl+C or Ctrl+D pressed twice in most dialogs ( /model , /effort , /config , /status , /usage , /plugin , /sandbox , /permissions , /artifacts , /mobile , /login , /upgrade , /usage-credits , /install-github-app , /setup-bedrock , /setup-vertex ) quitting Claude Code instead of closing the dialog\n- Fixed a click that only brought the terminal window to the front also triggering the item under the pointer — in search pickers, tab bars, agent/workflow rows, slash-command links and suggestion dropdowns\n- Fixed a stray n closing dialogs and a stray y confirming them; Enter and Esc accept and cancel (bind y / n to confirm:yes / confirm:no in keybindings.json to restore)\n- Fixed text fields in dialogs losing a typed letter, digit or Space to a keybinding on that key\n- Fixed the prompt line staying scrambled on Windows terminals after invisible characters were removed on Enter; the screen is now repainted so you review the exact text that will be sent\n- Fixed the invisible-character cleanup removing the zero-width non-joiner that Persian and Arabic text uses to attach a suffix to a Latin word or number, such as the plural of \'PDF\'\n- Fixed voice dictation not stopping on Ctrl+C (the prompt cleared but the microphone kept recording), Esc not cancelling while a transcript was processing, and held Space starting dictation from the transcript view and vim NORMAL mode\n- Fixed a model switch made from a host app (Claude Desktop, VS Code, SDK) while Claude is working causing a prompt-cache miss on the next prompt\n- Fixed resumed fork subagents rebuilding their tool list instead of re-sending the one they first used, which broke prompt caching for that agent\n- Fixed subagent hand-back messages showing an internal provenance preamble when expanded outside verbose mode\n- Fixed installed_plugins.json keeping the install-time commit after updating a plugin from a GitHub repository or git URL that tracks a branch or tag\n- Fixed skills in ~/.claude/skills/ being moved to ~/.claude/skills/.trash/ when a manifest.json in that folder listed their names\n- Fixed the session feedback survey showing no hover highlight on light and ANSI themes\n- Fixed /workflows briefly showing a one-row list before opening the only run\n- Fixed the mouse wheel not scrolling selection lists with hidden options (such as /model and /permissions ) in fullscreen mode\n- Fixed a skill you switched off showing the same red ✘ as a plugin that failed to load in /plugin and /skills ; off now shows a dim ◯\n- Fixed multi-select option descriptions being indented under the option number instead of under the label\n- Fixed the search box in /plugin , /skills and /mcp losing its right border in fullscreen mode\n- Fixed /mcp showing △ in the server list but ⚠ in the detail view for the same server; the list, detail views and /plugin now all show ⚠\n- Fixed Home and End doing nothing in the /config settings list and in selection lists such as /model , /memory and permission prompts\n- Fixed PgUp/PgDn in the /skills menu wrapping past the first or last skill instead of stopping there\n- Fixed Tab silently changing the selected setting\'s value in the /config list; it now does nothing there\n- Fixed conversations failing on every turn with a \'role \'system\' must precede an \'assistant\' message\' API error\n- Fixed conversations with the advisor on failing every turn with API Error 400 \'Input tag \'advisor_20260301\'\' behind a proxy or gateway that doesn\'t support it; the request now retries without it\n- Fixed a session failing on every turn and /compact when its saved history held a malformed notice about MCP tools that could not be loaded\n- Fixed a crash when resuming a session whose saved transcript holds a malformed system message or a memory-saved notice without its file list\n- Fixed one cause of long-running fullscreen sessions exiting with \'Claude Code exited after an unrecoverable interface error\': a damaged cached message list is now rebuilt\n- Fixed Claude Code hanging when a settings file, or a file it re-reads after an edit, is replaced by a named pipe mid-read\n- Fixed /config crashing and some on/off preferences being misread when a preference that has moved to settings.json still holds a value like null or \'false\' in ~/.claude.json\n- Fixed resuming a session with unfinished background agents, shells or workflows starting a model turn on its own before you typed anything\n- Fixed messages sent to a background subagent being silently lost in headless and SDK sessions when the subagent was finishing its turn\n- Fixed a finished subagent\'s report being lost when the conversation that launched it was compacted before the report was read\n- Fixed background subagents being unable to use the LSP tool when an LSP plugin is active\n- Fixed background shell tasks reporting benign non-zero exits (e.g. grep with no matches) as failures\n- Fixed background sessions ( claude --bg ) being unable to run git, hooks, plugins and other helper programs when an environment variable handed to the session contained a NUL character\n- Fixed Ctrl+C needing three or four presses to exit while background subagents are running; two presses now exit\n- Fixed IDE selection being dropped when a sent prompt comes back into the input, such as pressing Esc to edit it, rewinding to it, or pressing Esc while startup hooks run\n- Fixed a ! shell-mode prompt stashed with Ctrl+S coming back as a plain prompt when restored, and / listing file paths right after stashing one\n- Fixed claude agents showing a blank, unresponsive screen instead of an error when the temp directory is full, not writable or owned by another user\n- Fixed an MCP server re-added under the same name after claude mcp remove still showing as needing authentication instead of reconnecting\n- Fixed background plugin marketplace auto-update ignoring git credential helpers, so private-repo marketplaces were re-cloned every run or never updated\n- Fixed claude plugin update clearing a plugin\'s recorded commit and moving it to version \'unknown\' when the official marketplace\'s snapshot file is a link or too large\n- Fixed the Artifact tool silently disappearing when your organization\'s policy can\'t be loaded (for example behind a web proxy); Claude now says what\'s blocking it\n- Fixed artifact republishes silently resetting stored database access rules or dropping the viewer profile scope when that capability was re-sent without them; they are now refused\n- Fixed /ultrareview reporting a stopped cloud review as completed or as an error to retry, and waiting out the full timeout when its session was deleted or the signed-in account changed\n- Fixed the Claude app showing a missing or stale context usage figure for Remote Control and cloud sessions right after /compact or /clear\n- Fixed the Claude app\'s diff view for Remote Control and cloud sessions dropping a branch\'s committed files whenever there are also uncommitted changes\n- Fixed cloud and self-hosted runner sessions failing with \'Authentication failed\' after waiting out a long overload during which the session\'s access token was rotated\n- Fixed memory write conflicts in Cowork sessions showing Claude only the start and end of a memory file over about 10,800 characters, so the retried write dropped the middle\n- Self-hosted runner: Fixed lifecycle-hook commits failing to sign under --configure-git\n- Windows: Fixed background cleanup deleting a directory symlink or junction used to relocate ~/.claude/session-env , image-cache or another cleaned-up folder\n- Self-hosted runner: Fixed a turn that ended right at a --retire-at release losing its finished signal; the runner now briefly waits for the turn to be reported before stopping the session\n- Reverted ctrl+l / cmd+k in fullscreen mode clearing the transcript view (added in 2.1.260); they redraw the screen again\n- Improved /permissions : focus returns to the rule list after viewing, adding or deleting a rule, and the delete-rule and remove-directory confirmations now default to No\n- Improved /permissions tab navigation: ←/→ and Tab pressed in a rule list now switch tabs without moving focus to the tab bar\n- Improved /cost cache-miss causes to name thinking mode and thinking display changes\n- Improved the Artifact tool so that when Claude cannot read an artifact link it was given, it tells the user before continuing\n- Improved /install-github-app : the GitHub CLI check and repository selection steps now show \'Esc to cancel\'\n- Improved the /artifacts and /workflows lists: a scrollbar at the right edge shows how much of a long list is hidden and where you are in it\n- Improved the workflow progress tree: running agents and phases now show a dim dot instead of ⟳\n- Improved /plugin \'s Add Marketplace form in fullscreen: it no longer draws a box inside the pane, and its text and key hints line up with the rest of /plugin\n- Improved the /workflows detail view in fullscreen: it no longer draws a second horizontal rule under the pane\'s divider\n- Improved code blocks that don\'t name a language: they are now colored like inline code, so commands stand out from the surrounding text\n- Improved /btw asked while a tool is still running: the side question now knows that call is in progress instead of reading it as a failed one\n- Improved the UserPromptSubmit hook timeout notice and the debug log to name which hook command timed out\n- Improved @ file suggestions: a file whose name contains the query now ranks above one that only matches across its folder names\n- Improved artifact pages: no Print buttons, confirm dialogs or device features the viewer blocks, email and phone details shown as text, and dark mode that reaches form controls and scrollbars\n- Improved /ultrareview uploads: renamed copies of key files, such as id_rsa copy or kubeconfig (1).yaml , now also stay on your machine\n- Improved the cross-session messaging startup warning to explain that --debug-file writes a debug log to a path you choose\n- Changed the default model on Pro and Team Standard plans from Sonnet to Opus, matching Max, Team Premium, and Enterprise\n- Changed an effort level saved before /effort became per-model to no longer apply to newly released models such as Opus 5.5; they start at their default until you pick a level\n- Changed Opus 4.7, Opus 4.8 and Fable 5 to stop holding their launch-default effort over /effort in -p or the Agent SDK, a project, managed or --settings effortLevel , or a per-model level\n- Changed /autocompact \'s footer hint to name ←/→, the keys that adjust other ordered values\n- Changed /fast \'s footer to name Space as the toggle key\n- Self-hosted runner: Changed git in lifecycle hooks to ignore hook folders and programs named in the runner\'s shared git files; local-path and git:// remotes there now need GIT_ALLOW_PROTOCOL\n- Changed plugin marketplaces whose name imitates a reserved marketplace name to be refused when added, and to stop loading if one was already added\n- Changed PermissionRequest hooks: an agent-type hook no longer runs there, since its answer could never allow or deny the request; it now shows an error pointing to command or http hooks\n- [VSCode] Added a Status dialog, with a typed /status , showing the session\'s version, account, model and server details\n- [VSCode] Added a Sandbox dialog for the sandbox mode, the unsandboxed fallback and excluded commands, opened from the panel menu or by typing /sandbox\n- [VSCode] Added a Claude in Chrome dialog (extension status, the install, reconnect and permissions pages, the enabled-by-default setting), opened from the panel menu or by typing /chrome\n- [VSCode] Added Export conversation, with a typed /export , to copy or save the conversation as plain text\n- [VSCode] Added each skill\'s source, token estimate and on/off state to the Slash commands dialog, with a click to change the state, and a typed /skills that opens it\n- [VSCode] Added a typed /plan that switches to plan mode, sends a first planning prompt, or shows the session\'s plan\n- [VSCode] Improved pasted-text handling in the chat box: a paste over 800 characters or over 2 line breaks is now marked so Claude can tell it from what you typed\n- [VSCode] Improved prompt handling in the chat box: invisible Unicode formatting and tag characters are removed from pasted text with a notice, and from anything else before it is sent\n- [VSCode] Changed \'Open in New Tab\' to open Claude beside the editor group you are working in rather than after the last group\n- [VSCode] Fixed the effort chip showing a stale saved effort level instead of the level the session runs at\n- [VSCode] Fixed Claude Code never starting when the Python extension hangs while activating; it now starts after 60 seconds without the Python environment\n- [VSCode] Fixed the plan approval card never offering auto mode: when auto mode is available, its first option is now \'Yes, and use auto mode\', as in the terminal\n- [VSCode] Fixed arrow-key navigation in the session list stopping after archiving or unarchiving a session from the keyboard\n- [VSCode] Fixed paste marker lines showing in your own messages after reopening a session\n- [Claude Code on the web] Changed the admin Routines on/off setting to live under Admin settings → Capabilities → Remote sessions; the Claude Code admin page now links to it\n- [Claude Code on the web] Fixed gh and GitHub API calls inside a cloud session on a GitHub Enterprise Server repository failing after about eight hours; the token now renews automatically\n- [Claude Code on the web] Fixed a routine that resumes an existing session running with its old prompt and name when it was edited moments before the scheduled run started\n- [Claude Code on the web] Fixed file links in a cloud session transcript that point outside the session\'s working directory opening a file card that never loads; they\'re now disabled and say why\n- [Claude Code on the web] Fixed auto mode refusing to retry a tool call because an approval prompt that expired unanswered, or was superseded by a newer message, had been recorded as your rejection\n- [Claude Code on the web] Improved cloud sessions viewed in the Claude app: Claude now saves files meant for you where the app can open them\n- [Claude Code on the web] Removed the empty repository picker shown when starting a session on a self-hosted environment in an organization where an admin has turned GitHub off\n- [Claude Tag] Added Slack\'s native Working indicator, Stop button and thread title to Claude\'s threads in channels; the indicator stays up until Claude finishes, and Stop interrupts the task\n- [Claude Tag] Added a short notice in the Slack channel when a guest joining, or the last guest leaving, changes how Claude responds there under a Restrict or Channel only guest setting\n- [Claude Tag] Fixed scheduled routines silently failing to run in Slack workspaces that were connected to Claude before the workspace joined its Enterprise Grid\n- [Claude Tag] Fixed Claude asking you to re-upload a Slack file when a brief file-scanning outage, not the file, was the problem; it now retries the scan and is told when the scanner is down\n- [Claude Tag] Fixed a bullet in Claude\'s Slack reply whose text starts with +, - or * rendering as an empty bullet with a stray nested item; it now shows as one bullet with the character kept\n- [Claude Tag] Fixed the Slack notice for a failed cloud environment setup script sometimes being a generic \'mention me to retry\'; it now names the setup script and says to fix it first\n- [Claude Tag] Improved the GitHub banner in Claude Tag admin settings to say why GitHub isn\'t connected: not signed in, app not linked or not installed, sign-in expired, or SSO not authorized\n- [Code Review] Improved the Code Review check run to say when REVIEW.md instructions were cut or left out of a review for exceeding a size limit, naming the file and the limit'
        },
        {
          'version': '2.1.278',
          'title': 'v2.1.278',
          'date': '2026-09-19',
          'dateRaw': '2026-09-19T03:10:40Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.278',
          'body': 'What\'s changed\n- Changed auto mode for Claude API and Enterprise users, and on Bedrock, Vertex, Foundry and gateways, to default to the server-side classifier, which does not charge for classifier overhead ( CLAUDE_CODE_AUTO_MODE_SERVER=0 opts out on Bedrock, Vertex, Foundry and gateways); warns on billed fallback. See https://code.claude.com/docs/en/auto-mode-classifier-billing\n- Added an Auto mode server row to /status showing whether this session\'s auto mode classifier runs on the server'
        },
        {
          'version': '2.1.277',
          'title': 'v2.1.277',
          'date': '2026-09-18',
          'dateRaw': '2026-09-18T18:06:32Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.277',
          'body': 'What\'s changed\n- Added AGENTS.md support: in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead; change it under \'Project instructions\' in /config (not yet on Bedrock, Vertex or Foundry)\n- Added CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1 for Claude apps gateways whose only egress is a forward proxy: every outbound request hands the proxy the hostname instead of resolving it locally\n- Added an optional headers: map on Claude apps gateway upstreams, to send static headers to a proxy you run in front of a provider\n- Added a line saying a background task\'s update is waiting when it finishes while a panel such as /tasks is open\n- Fixed claude -p and Agent SDK sessions that could hang with no result after an internal error; they now report the error and exit with code 1\n- Fixed conversations failing every request with \'text content blocks must be non-empty\' when an earlier assistant turn held an empty text block beside other content, including after --resume\n- Fixed being unexpectedly logged out when an older Claude Code build (for example an IDE extension\'s bundled CLI) runs on the same machine as the current one\n- Fixed interactive start-up hanging or showing an error for ANTHROPIC_API_KEY users when ~/.claude.json holds a malformed customApiKeyResponses value\n- Fixed update checks erroring every 30 minutes, and claude update hanging when a minimum or maximum version is set, if a proxy returns an invalid version; a malformed minimumVersion is now ignored\n- Fixed claude update on winget- or apk-managed installs reporting \'up to date\' when the version lookup failed\n- Fixed claude plugin install sometimes failing and breaking the installed copy when reinstalling a plugin version that a session or another program was using; an unchanged copy is now left alone\n- Fixed Grep and Glob reporting no matches when the search could not start because the system was out of processes, memory or file handles; they now return an error saying so\n- Fixed the Write tool silently ending the turn as a declined permission when the target path is an existing directory; it now reports a clear error\n- Fixed the Edit tool treating an escaped backslash followed by uXXXX text as a \\uXXXX escape, which could make an edit of a non-ASCII character rewrite an escaped backslash sequence instead\n- Fixed the Edit tool reporting \'Invalid regular expression: regular expression too large\' instead of \'String not found in file\' when a very large edit containing non-ASCII text did not match the file\n- Fixed a turn ending early with \'Path contains null bytes\' when a tool call\'s file path contained \\u0000 written as an escape sequence; escaped control characters now stay as literal text\n- Fixed background sessions ( claude --bg ) exiting when a plugin\'s LSP server exited or closed its stdin\n- Fixed a crash (\'Type error\') when opening /mcp or /plugin manage with a malformed claudeAiMcpEverConnected value in ~/.claude.json\n- Fixed a crash at launch when ~/.claude.json holds a malformed theme value\n- Fixed a crash (\'unrecoverable interface error\') when the prompt held text containing terminal color codes, for example a prompt recalled from history or text loaded from the external editor\n- Fixed a crash when resuming a session whose saved history holds an assistant message stored as a plain string\n- Fixed sessions on slow or heavily loaded machines sometimes exiting with \'Claude Code exited after an unrecoverable interface error\' when the first spinner appeared\n- Fixed a rare case where the screen could stop updating for the rest of the session after an internal rendering error\n- Fixed a rare case on Windows where a turn could stop with an error such as \'Out of memory\' right after Claude replied, so that reply\'s tool calls never ran\n- Fixed sessions continued after /clear (restart, --continue , --resume ) missing part of their first message when a SessionStart hook printed output, causing a full prompt-cache miss\n- Fixed messages from other agents (such as a subagent\'s SendMessage) that arrived mid-turn showing up below the \'Ran N shell commands\' row instead of where they arrived\n- Fixed the \'copied\' notice not appearing after drag-selecting text in the fullscreen /resume picker and other panels that cover the prompt area\n- Fixed $TMPDIR expanding empty in Bash commands that run outside the sandbox while sandboxing is enabled\n- Fixed WebFetch and WebSearch in Cowork cloud sessions not telling Claude why a request was refused, such as a used-up fetch budget or an admin policy\n- Fixed the Claude apps gateway\'s telemetry relay ignoring a collector hostname or domain listed in NO_PROXY when a proxy is set\n- Fixed one malformed strictKnownMarketplaces or blockedMarketplaces entry silently disabling the whole enterprise marketplace policy\n- Fixed failed auto-updates leaving large staged downloads behind in ~/.cache/claude/staging\n- Fixed /plugin not stripping terminal control characters from messages on the Installed tab, such as the error of a failed plugin update\n- Fixed /plugin → Installed and /skills crashing when a skill or legacy command is named like a built-in Object property such as constructor or toString\n- Fixed /plugin closing with no message when every install in a multi-select failed\n- Fixed uninstalled plugins reappearing as \'failed to load\' rows in /plugin Installed, and Remove not clearing such a row\n- Fixed plugins from the official marketplace being recorded without their commit in installed_plugins.json , and installed_plugins.json keeping the old commit after updating a pinned-commit plugin\n- Fixed plugin reload previews keeping every previewed copy of a plugin archive unpacked until exit, and overwriting the cached --plugin-url archive a reload falls back to when its download fails\n- Fixed Remote Control session bookkeeping failing when ~/.claude.json holds a malformed placeholder record\n- Fixed the error after a revoked claude.ai login blaming an expired Anthropic profile; it now leads with /login\n- Fixed typed or pasted text occasionally coming out scrambled in the claude agents dispatch input during key repeat or very fast input\n- Fixed a crash (\'unrecoverable interface error\') when resuming a session whose saved transcript contains a stop hook summary without a well-formed hook list\n- Fixed Enter on a selected agent panel row doing nothing when keybindings.json rebinds Enter in the Chat context, for example to chat:queueSubmit\n- Fixed PDF page reads on Windows failing when the working folder\'s path is long (about 120 characters or more)\n- Fixed a headless resume ( claude -p --resume , the SDK, a VS Code extension window reload) starting the session\'s cost and usage totals at zero; headless sessions now save their totals at exit\n- Fixed project skills from the main repository not loading in --worktree sessions when .claude/skills is untracked\n- Fixed a sandbox.excludedCommands glob exempting an entire compound Bash command from the sandbox when only one part matched; every part must now match\n- Fixed resumed subagents and teammates re-rendering the MCP tool definitions they had loaded, which broke prompt caching for that agent\n- Fixed rate-limited artifact publishes telling Claude to stop retrying; Claude is now told nothing was published and when to send the same publish again\n- Fixed attachments recorded earlier in a conversation being re-rendered after a resume or relaunch, which dropped extended thinking and missed the prompt cache\n- Fixed Console sign-in showing only \'Request failed with status code 400\' when the server refuses to create an API key; it now shows the server\'s message\n- Fixed messages typed while Claude is still working sometimes being ignored by the model\n- Improved session start-up for SDK and headless ( -p ) use: the first turn no longer waits on the per-directory CLAUDE.md lookup\n- Improved the Claude apps gateway\'s loopback error messages to name CLAUDE_GATEWAY_ALLOW_LOOPBACK\n- Improved /plugin Installed: an MCP server listed apart from its plugin now shows which plugin it belongs to\n- Improved claude plugin install on an already-installed plugin: it now says when the marketplace offers a newer version and names the claude plugin update command\n- Improved the startup notice overflow line under the logo: it now reads \'N more notices hidden\' instead of \'+N more · /status\'\n- Improved prompt handling: invisible Unicode formatting and tag characters in a prompt are removed and the cleaned prompt is shown for review before it is sent\n- Improved /ultrareview when there\'s nothing to review: messages say which case you\'re in, offer a command that reviews your latest commit, and a new repository\'s first commit is reviewed in full\n- Improved artifact link handling so Claude reads claude.ai artifact links with the Artifact tool instead of WebFetch when that tool is available\n- Improved the dangerous-rm permission prompt to name the flagged rm command and suggest a ${VAR:?} guard, so headless runs can recover\n- Improved the Artifact tool\'s permission prompts: shorter sentences, pages and artifacts named by title or file name, and links listed after the text\n- Changed Fable to always appear in /model on the Anthropic API; it is greyed out only when your organization\'s settings disable it\n- Changed the Bash sandbox instructions on Bedrock, Vertex and Foundry to the first-party wording, which frames the sandbox as the boundary of what the task was given\n- Changed /ultrareview in non-interactive sessions to refuse when the repository has no base branch or shared history\n- Changed subagent results to reach the main agent under a header marking them as subagent output, with the result indented, so text in a subagent\'s result cannot pass as the session\'s own instructions\n- Changed workflow scripts\' computed agent() prompts on Bedrock, Vertex and Foundry to reach the subagent framed as script-authored text, so the safety classifier does not read them as the user\n- Removed the background Haiku auto-title request from claude -p runs launched outside an SDK or IDE\n- Removed the deprecated TaskOutput tool; Claude reads a background task\'s output file with Read instead, and the taskOutputMaxChars setting and TASK_MAX_OUTPUT_LENGTH no longer have any effect\n- [VSCode] Added a Sign out row to the panel menu, with /logout in the typed command menu\n- [VSCode] Added background shells and other running tasks to the agent map, each with a Stop, and a typed /tasks that opens it\n- [VSCode] Added a Copy response button on responses and a typed /copy\n- [VSCode] Added a one-time notice when inactive sessions are archived automatically, and an \'Unarchive all\' action on the Archived sessions group\n- [VSCode] Added the session\'s cost and token usage to the Account & usage dialog and the session manager where plan limits do not apply (Vertex, Bedrock, Foundry, API key)\n- [VSCode] Fixed the \'General config\' menu row showing /config usage text instead of opening settings, and made typed /mcp , /hooks , /memory , /rewind and similar commands open their dialogs\n- [VSCode] Fixed the effort slider\'s level not persisting into later sessions on a model that already had a level saved with /effort\n- [VSCode] Fixed Auto missing from the mode picker for conversations opened in an already-used panel when the saved model setting is a differently-cased alias such as \'Sonnet\'\n- [VSCode] Fixed /fast not saving fast mode as the default, so it was lost when the extension relaunched Claude Code\n- [Claude Code on the web] Added Personal and Organization sections to the environment picker on Team and Enterprise plans, and admins can now share a personal environment with the organization\n- [Claude Code on the web] Changed organization environments to open as a read-only summary from the Code tab on Team and Enterprise plans, with editing under Admin settings → Cloud environments\n- [Claude Code on the web] Fixed a cloud environment saved with Custom network access and no domains silently reverting to Trusted; the dialog now asks for at least one domain\n- [Claude Code on the web] Changed the admin Claude Code setting labeled \'Web\' to \'Cloud sessions\' and removed the redundant read-only Mobile row beneath it\n- [Claude Tag] Fixed routines created in a Slack channel on an Enterprise Grid org-wide install failing to read other public channels in their workspace when they ran\n- [Claude Tag] Fixed the \'Learn more\' links on credential presets in Claude Tag access bundles to open each vendor\'s credential-setup page instead of a generic API reference\n- [Claude Tag] Changed the Pylon credential preset in Claude Tag access bundles so admins can point it at Pylon\'s EU host\n- [Claude Tag] Fixed Google Cloud credential forms in Claude Tag access bundles: a refused key file now says why, the website and scopes stay locked, and a rejected rotation keeps the pasted key\n- [Claude Tag] Fixed the network events log in Claude Tag admin settings showing no response status for requests through connections that use AWS signing, client certificates or a custom CA'
        },
        {
          'version': '2.1.276',
          'title': 'v2.1.276',
          'date': '2026-09-18',
          'dateRaw': '2026-09-18T02:12:26Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.276',
          'body': 'What\'s changed\n- Fixed every request failing with 400 … Input tag \'advisor_20260301\' when ANTHROPIC_BASE_URL points at a proxy or gateway (2.1.275 regression)'
        },
        {
          'version': '2.1.275',
          'title': 'v2.1.275',
          'date': '2026-09-17',
          'dateRaw': '2026-09-17T22:33:17Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.275',
          'body': 'What\'s changed\n- Added the signed-in account to Claude apps gateway sign-in: when the gateway names it, you confirm it before the credential is saved, and /status shows it\n- Added a send-now key (ctrl+enter, or ctrl+x ctrl+s) that interrupts the current turn and sends all queued messages at once; sent and queued messages show in gray until the model receives them\n- Added a startup warning when a configured otelHeadersHelper fails, so sessions that silently export no telemetry are noticed\n- Added syncing of the skills and plugins enabled on your claude.ai account to terminal sessions signed in with it; opt out with syncClaudeAiSkills: false or syncClaudeAiPlugins: false\n- Added /plugin install <plugin> --marketplace <source> , which offers to add the marketplace before installing the plugin\n- Fixed a restored memory file\'s age note changing between requests after a compaction or resume, which caused prompt cache misses\n- Fixed --forward-subagent-text stream-json and SDK output dropping the messages of subagents spawned by a context: fork skill, and of forked skills invoked by a subagent or another forked skill\n- Fixed @-mention file suggestions being buried below MCP resources when using a custom fileSuggestion command or typing @. / @./\n- Fixed fullscreen mode placing background-task completion notices beneath a long turn\'s collapsed tool row instead of where they arrived; each notice now closes the open row\n- Fixed claude plugin marketplace update deleting a GitHub marketplace\'s local copy when the fetch failed and the marketplace was named after its repository\n- Fixed plugin and marketplace messages, logs and claude plugin marketplace list showing a password or token stored in a git, ssh or marketplace URL\n- Fixed a resumed cloud session leaving an unanswered question open in the transcript after a queued message superseded it\n- Fixed vim mode placing the cursor one character right after a dot-repeated \'!\' or a fast-typed \'i!\' switched a non-empty prompt into shell mode\n- Fixed fullscreen mode freezing or blanking for several seconds when scrolling up past a large file diff\n- Fixed a stray </ccmemory> -style closing tag occasionally appearing in responses\n- Fixed plugin messages, logs and the VS Code plugin dialog showing the wrong server for some git addresses\n- Fixed a terminal API Error: 400 on every turn for users behind a network gateway that rewrites API error responses when a beta request header is rejected\n- Fixed sandboxed Bash commands on Linux reporting exit code 0 for failed commands when the shell is zsh\n- Fixed the Read tool hanging instead of reporting an error when part of a large file could not be decoded under memory pressure\n- Fixed --resume , the resume picker preview, resumed background agents and the transcript view failing on a session whose saved history contains a malformed task-reminder or @-file attachment entry\n- Fixed a crash when resuming a conversation whose transcript contains a malformed message entry, and a fullscreen crash when such a conversation received new messages while scrolled up\n- Fixed sessions failing to resume or start when their saved transcript contains a malformed message content block\n- Fixed Grep, Glob and @-file suggestions hanging or running out of memory on searches over the 20MB output cap, and system ripgrep reporting \'no matches\' instead of an error after a flood of warnings\n- Fixed /rewind in a forked or background session restoring a zero-filled or truncated file when the session\'s file-history backups could not be fully copied\n- Fixed fullscreen sessions sometimes exiting with \'Claude Code exited after an unrecoverable interface error\' when typing fast or holding a key with the slash-command dropdown open\n- Fixed background sessions crashing and restarting their worker when a command fed through stdin ran on a machine that had run out of file descriptors\n- Fixed a crash at launch when ~/.claude.json holds a malformed mcpNeedsAuthNoticed value\n- Fixed --resume and --continue dropping a conversation\'s earlier thinking when a built-in tool it started with has since been switched off by a server-side flag\n- Fixed text selected with the mouse in the fullscreen claude --resume session picker never reaching the clipboard\n- Fixed plugin reload previews replacing a running session\'s extracted plugin files when the plugin was loaded from a --plugin-dir or --plugin-url archive\n- Fixed self-hosted runners with --drain-wait-sec losing the final result of a turn that finished during a SIGTERM drain; the runner now waits briefly for the turn to be reported\n- Fixed SubagentStop hooks with a specific matcher firing for every stopping subagent whose agent type was empty\n- Fixed sandboxed Bash commands being unable to write to project directories named hooks/ or config/\n- Fixed Artifact updates failing with \'File not found\' after a session resumes on another machine or its scratchpad is cleared: the page\'s last published version is restored\n- Fixed /update-config writing Write(path) permission rules, which file permission checks don\'t match, instead of Edit(path) rules\n- Fixed four dead documentation URLs (Pricing, Computer Use, Skills, CLI) in the bundled claude-api skill\'s live-sources table\n- Improved prompt caching for a --system-prompt that contains a __SYSTEM_PROMPT_DYNAMIC_BOUNDARY__ line: the text above it is now cached globally, as the SDK\'s array form already is\n- Improved the /desktop error when Claude Desktop does not open: it now says why and what to do next\n- Improved the Artifact tool\'s publish and read results: they now say who can open the page and what the owner\'s Share menu offers\n- Improved artifact publish results: they name the tab icon sent, warn when the page contains a NUL byte, and retry a flaky fetch of the newer page to merge after a stale publish\n- Improved pasted and attached images: they are now saved where Claude can open them as files without a permission prompt, including in Desktop and VS Code\n- Improved the Artifact tool\'s guidance so Claude updates a shared artifact in place when you were given edit access to it, instead of publishing a separate copy\n- Improved plan-usage reads: editor windows and non-interactive sessions on one machine now share a read made in the last minute instead of each calling the usage endpoint\n- Improved the ListPlugins tool description so Claude knows it lists plugins enabled on your claude.ai account, not plugins installed locally with /plugin\n- Improved responsiveness when the terminal is slow or paused: output no longer falls further behind while the terminal catches up\n- Improved Write and Edit results for files in the synced account-skills folder: they now say the change is not saved to your account and how to save it\n- Updated /logout for Claude apps gateway sign-ins to also end the session on gateways that advertise token revocation\n- Changed hosted sessions to keep an unanswered permission prompt up after a container restart, instead of asking again\n- Changed the Artifact tool to ask for a one-word tab icon on a first publish instead of an emoji favicon\n- Changed Claude in Chrome in auto mode to skip the extension\'s per-site check for classifier-approved calls, as bypass mode does, fixing browser_batch \'Permission denied\' after a redirect\n- Changed plugins installed from an npm source to be fetched with npm pack --ignore-scripts and integrity-verified, so a package\'s install scripts no longer run\n- Changed scheduled and Run now routine runs to save data to, and republish the page of, an artifact you can edit without asking; public artifacts, first publishes and deletes still ask\n- Removed the startup notice that told you a one-off scheduled routine had run since your last session\n- [VSCode] Added viewing, editing and deleting a saved memory inside the Memory dialog\n- [VSCode] Added sending an attached image without typing any text\n- [VSCode] Added a Retry link to the MCP servers dialog when the server list fails to load\n- [VSCode] Added accept and reject buttons under each change in the proposed-change diff tab, so an edit can be reviewed change by change\n- [VSCode] Fixed the transcript creeping toward the bottom in small steps while a permission card waits and content keeps arriving\n- [VSCode] Fixed rewound and forked conversations not keeping the permission mode you had picked for the original conversation\n- [VSCode] Fixed an empty CLAUDE_CONFIG_DIR entry in the environmentVariables setting making Claude Code keep its files in the workspace\n- [VSCode] Fixed plugin install links opening the Manage plugins dialog for plugin names and marketplace addresses that can\'t be used in a link\n- [VSCode] Fixed Remote Control staying shown as connected after a turn-off that Claude Code reported as failed; it now shows as off\n- [VSCode] Fixed the scroll to the bottom on send stopping short of the reply when the reply starts arriving during the scroll\n- [VSCode] Fixed the agent map showing agents a crash left unfinished as stopped instead of failed once the session is reopened\n- [VSCode] Fixed the \'Continuing the step\' notice not appearing, and the continue limit resetting, after a reload that follows a crash with background tasks still running\n- [VSCode] Fixed the session list showing when a session was last reopened, such as after a window reload, instead of when its last message was sent\n- [VSCode] Fixed \'Fork conversation from here\' failing on the message right after one sent while Claude was working\n- [VSCode] Fixed the prompt cache clock showing too few minutes after reopening a session with a message sent while Claude was working\n- [VSCode] Fixed a background agent that finished while Claude was running a tool losing its completion notice, and its result on the agent map, after a window reload\n- [VSCode] Fixed a rare case where text selected in a git-ignored file could be sent to Claude after the extension was unresponsive for several seconds\n- [VSCode] Fixed renaming a running session reverting to the generated name (regression in 2.1.269)\n- [VSCode] Fixed some claude.ai/code sessions opening in VS Code as an empty conversation with no messages\n- [VSCode] Fixed slash commands typed while Claude is responding being sent to the model as text instead of running once the response finishes\n- [VSCode] Fixed unreadable code in the plan preview and the Hooks and Permission rules dialogs with the High Contrast Light theme\n- [VSCode] Fixed /remote-control being ignored while Remote Control is still connecting: running it again now turns Remote Control off immediately\n- [VSCode] Fixed the conversation pulling you back to the bottom while a reply streams after you scroll up, and added a claudeCode.scrollToBottomOnSend setting to turn off the jump on send\n- [VSCode] Fixed the Manage plugins dialog showing a password or token that was typed into a marketplace URL\n- [VSCode] Improved the agent map: the pill counts running agents and turns red after a failure, the main agent stays in view while the map scrolls, and agents sort by state then end time\n- [VSCode] Changed New session in a Claude editor tab to open in the sidebar when Preferred Location is set to Sidebar, instead of always opening another tab\n- [VSCode] Changed a message sent while Claude is working to wait at the bottom of the conversation until Claude starts on it\n- [Claude Code on the web] Added a \'New routine\' button to the page shown when a routine link no longer resolves, next to the link back to your routines list\n- [Claude Code on the web] Fixed routine \'paused\' and \'on hold\' notifications being cut off mid-sentence; the paused-subscription notice now says to turn the routine back on yourself\n- [Claude Code on the web] Fixed cloud environments with a very long allowed-domains list saving fine and then failing every session start; saving now fails up front and says how much to trim\n- [Claude Code on the web] Fixed Claude\'s guidance when a cloud session on a personal account is denied GitHub access: it now links to claude.ai/connect-github instead of an admin settings page\n- [Claude Code on the web] Improved what Claude tells you when asked to edit, delete or run a routine it didn\'t create: it now links to the routine\'s page so you can do it yourself\n- [Claude Tag] Added attach conditions for access bundles in Claude Tag settings: an Owner can let a bundle also apply in channels with guests or Slack Connect channels, not just member-only\n- [Claude Tag] Added Amazon CloudWatch, CloudWatch Logs, Amazon SNS, Google Cloud Monitoring and Cloud Logging presets to an access bundle\'s Credentials tab in Claude Tag admin settings\n- [Claude Tag] Added Datadog presets for the US3, AP1, AP2 and US1-FED sites; new Datadog connections are now limited to Datadog\'s read and query API routes\n- [Claude Tag] Fixed S3 uploads from recent AWS CLI and SDK versions failing with a 502 error when sent through an AWS connection\n- [Claude Tag] Fixed Claude treating a channel as inactive, and skipping untagged messages there, while it was still posting in that channel from a routine or a thread\n- [Claude Tag] Fixed a thread\'s \'Claude [task]\' display name reverting to plain \'Claude\' after the session behind that thread was refreshed or restarted\n- [Claude Tag] Fixed the model you switched to in a Slack thread silently reverting to the channel\'s default after that thread\'s session was restarted or refreshed\n- [Claude Tag] Fixed Claude sometimes replying twice when another app or bot @mentioned it in a top-level channel message\n- [Claude Tag] Improved Claude\'s notices in Enterprise Grid channels shared across workspaces: they now say when no workspace is set up yet, or why only organization defaults apply\n- [Code Review] Fixed reviews occasionally dropping part of their analysis when one of the reviewing agents returned its findings in an unexpected format\n- [Code Review] Fixed pull requests with more than 100 Claude reviews getting a full re-review on every clean merge from the base branch instead of the lighter merge-focused review'
        },
        {
          'version': '2.1.274',
          'title': 'v2.1.274',
          'date': '2026-09-17',
          'dateRaw': '2026-09-17T00:12:02Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.274',
          'body': 'What\'s changed\n- Added a visible warning when memory usage is critical, with steps to free memory or restart safely\n- Added CLAUDE_CODE_MCP_STARTUP_WAIT_MS to bound how long the first non-interactive turn waits for connecting MCP servers ( 0 = don\'t wait)\n- Added effort attribute to the claude_code.llm_request OpenTelemetry trace span, matching the api_request event\n- Added claude_code.managed_settings_resolved OTel event: managed-settings sources and policy helper state; redacted settings and digests with OTEL_LOG_MANAGED_SETTINGS=1\n- Added store.connect_timeout_seconds to the Claude apps gateway config to lengthen the Postgres connect timeout (default 5 seconds), and improved the boot error when the database is unreachable to point to store.postgres_url and the configured timeout\n- Added enduser.sub , the IdP subject, to the telemetry Claude Desktop and Cowork send through a Claude apps gateway\n- Added a Claude apps gateway warning when a replica has more requests open than the 256 it sends upstream at once, and a startup log line showing that limit\n- Added click-to-expand for collapsed teammate and agent messages in fullscreen mode\n- Fixed sessions getting stuck endlessly retrying \'unexpected tool_use_id\' 400 errors: corrupted transcripts now self-heal where possible, and otherwise a clear error (with a /rewind hint) ends the loop\n- Fixed MCP servers configured as http that only speak legacy HTTP+SSE failing to connect when they answer the first request with 422 or another 4xx error\n- Fixed Streamable HTTP MCP tool calls timing out after about 5 minutes even when a longer per-server timeout was set\n- Fixed MCP prompts and resources not refreshing when a server sends list-changed notifications without declaring listChanged\n- Fixed MCP tool calls refused with 403 insufficient_scope being reported as an expired sign-in: the error now names the missing permissions and points to /mcp re-authentication\n- Fixed hook-driven sessions (such as an active /goal ) ending with \'Prompt is too long\' instead of compacting when the context overflowed again after a reactive compaction\n- Fixed an active /goal being lost when resuming ( --continue / --resume ) a session that had compacted\n- Fixed claude agents losing --model , --effort , --permission-mode , --allow-dangerously-skip-permissions and --agent after an auto-update relaunch\n- Fixed a per-turn slowdown when a language server publishes project-wide diagnostics for thousands of files\n- Fixed subagents with model: \'opus\' on Bedrock, Vertex or Foundry leaving the session\'s model when its id has no recognizable model family (unless ANTHROPIC_DEFAULT_OPUS_MODEL is set)\n- Fixed self-hosted runner sessions failing every turn with a 401 after a few failed token refreshes, until the next scheduled refresh; the runner now keeps retrying, and fetches a new token after a 401\n- Fixed clickable links to local file paths doing nothing in VS Code and other terminals that require a file:// URI\n- Fixed the transcript renumbering ordered lists in your own messages (typing \'3. 2. 1.\' displayed \'3. 4. 5.\'); numbers and \'N)\' markers now show as typed\n- Fixed AskUserQuestion preview notes being attached to a previously chosen option instead of the highlighted one\n- Fixed AskUserQuestion preview mode dropping the highlighted option when submitting a note with Enter\n- Fixed a resumed background agent keeping half of an interrupted tool batch when one of its calls was approved with a message\n- Fixed a local claude -p --resume started with CLAUDE_CODE_RESUME_INTERRUPTED_TURN not reporting background tasks the previous process left unfinished\n- Fixed the first turn of a cloud session sometimes starting without the tools of an SDK-hosted MCP server that was still connecting\n- Fixed background agent notifications claiming the agent had no live background work when it was still waiting on its own background task and would resume\n- Fixed error hints in Claude Desktop sessions to suggest slash commands like /usage-credits instead of CLI flags that cannot be used there\n- Fixed /schedule saving a routine\'s prompt without its message role when Claude writes the routine in the shape that listing routines returns\n- Fixed /status not showing the apiKeyHelper failure that its own error banner told you to check\n- Fixed /fast on in non-interactive sessions reporting on and then turning off under an organization\'s managed fast mode policy; it now says the organization has disabled it\n- Fixed the Artifact tool asking you to approve an update to an artifact that it then refused because the session had not read the latest version\n- Fixed Cowork and claude.ai cloud sessions with network access on treating reads of a teammate\'s artifact as if network access were off\n- Fixed a plugin or marketplace directory with no git repository of its own taking its version from an enclosing git repository, such as a git-managed ~/.claude\n- Fixed --strict-mcp-config with an empty --mcp-config holding the first non-interactive turn for up to MCP_TIMEOUT on incidental MCP servers\n- Fixed Stop prompt hooks re-sending their whole prompt on every block in a conversation; repeat blocks now name the condition with a 500-character label\n- Fixed extra empty editor windows opening at startup on Linux under Wayland when running inside the Cursor or VS Code terminal\n- Fixed an unhandled promise rejection in the Claude apps gateway when Postgres drops a connection during a spend check\n- Fixed Claude apps gateway cutting every open stream on SIGTERM: it now lets in-flight requests finish for up to 25 seconds before exiting ( CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS )\n- Fixed installed_plugins.json being rewritten on nearly every start-up when plugin policy comes from remote managed settings, which made Claude Desktop reload every open session\'s plugins\n- Fixed headless and SDK sessions making a separate model call for every background task that finished; completions already queued are now answered by one call\n- Fixed the Bash tool re-sourcing the shell profile (a multi-second stall on the next command) after every plugin reload; it now does so only when the plugins\' bin/ directories changed\n- Fixed plugins with a top-level $schema in hooks/hooks.json showing an \'unknown key\' notice\n- Fixed MCP connection errors and the MCP login tool\'s description showing secrets resolved from ${VAR} placeholders in MCP configs\n- Fixed Bash permission checks for commands that loop over or assign certain special shell variables; these commands now ask for permission\n- Fixed worktree-isolated sessions accepting Bash commands with certain nested shell expansions; these are now refused\n- Fixed the Edit permission prompt preview sometimes showing a different location than the approved edit in files with multi-byte characters\n- Fixed background commands being stopped after 30 idle minutes on machines under mild memory pressure; they\'re now stopped only when memory is critically low, and the debug log says why\n- Fixed a message a subagent sends to the main session disappearing from the Claude Desktop transcript after a relaunch\n- Fixed a plugin loaded from a .zip being served from a stale extraction after several overlapping reloads\n- Fixed a sub-agent\'s progress summary being replaced by a runaway multi-paragraph reply\n- Improved startup in --input-format stream-json sessions: the first turn no longer waits up to 2s for still-connecting MCP servers whose tools tool search defers; they arrive on a later turn\n- Improved Monitor tool notifications: a script\'s final output and its exit now arrive as one notification instead of two, saving a model turn\n- Improved Artifact tool errors: when you are not signed in to claude.ai the terminal now says so on the first attempt, and Claude is told to stop retrying a rejected call sooner\n- Improved artifact publishing: a publish built on an older version is stopped before it is sent, with the newer page to merge\n- Improved safety checks before removing an agent worktree that contains submodule checkouts\n- Improved OTEL_LOG_RAW_API_BODIES=file:<dir> output: a new index.jsonl and request_body_id / message.id event attributes link each response to its request file and transcript message\n- Improved Claude apps gateway boot: it now tries the first Postgres connection up to three times before exiting, so a database that is reachable a few seconds late no longer fails the boot\n- Improved the Claude apps gateway\'s spend-limit check under load: it now takes one database round trip instead of four, so fewer checks time out on a busy gateway\n- Improved Claude apps gateway sign-in rate limit errors: /login now explains the refusal, and the gateway log says which limit was hit and which setting to change\n- Changed Bedrock, Vertex, Foundry and telemetry-disabled installs to use the v2 MCP client and MCP 2026-07-28 negotiation with direct HTTP servers by default, as other installs already do (opt out: MCP_SDK_GENERATION=v1 or MCP_PROTOCOL_NEGOTIATION=legacy )\n- Changed /code-review to use leaner inline review prompts for every model that has no tuned settings of its own, instead of spawning many review subagents\n- Changed \'type\': \'sdk\' MCP entries in .mcp.json , settings, plugins and agent files to be skipped with a warning: only an SDK host application can register in-process servers\n- Changed artifact watching in local sessions: a new version published elsewhere no longer starts a turn; Claude learns of it from a later Artifact tool result\n- Changed plugin and marketplace clones to leave Git LFS files as pointers instead of downloading them; git lfs pull in the checkout fetches them\n- Changed self-hosted runners to skip a read-only repository the git host refuses at the access check instead of failing the session start\n- Changed the /status GitHub line to read \'Cloud sessions\', and /web-setup , /ultrareview , and teleport messages to say \'cloud session\' instead of \'Claude Code on the web\'\n- [VSCode] Added continuation of the step a window reload interrupted, labeled in the chat, with a Claude Code: Continue After Reload setting to turn it off\n- [VSCode] Added Memory and Instructions entries to the Customize menu: Memory shows the auto-memory toggles, the saved memories and the memory folders, and Instructions edits the CLAUDE.md files\n- [VSCode] Added a claudeCode.lockEditorGroups setting to stop Claude from locking the editor groups it opens in\n- [VSCode] Fixed a /btw side question asked in a new conversation\'s first seconds occasionally showing another session\'s side-question history\n- [VSCode] Fixed a brief freeze when the extension first looks up your global gitignore file\n- [VSCode] Fixed a message sent while Claude was running a tool disappearing from the conversation after a window reload\n- [VSCode] Fixed the Manage Plugins enable toggle and MCP servers dialog rows being unreachable from the keyboard\n- [VSCode] Fixed sign-ins and sign-outs made in a terminal not showing until a reload after CLAUDE_CONFIG_DIR changed in the Environment Variables setting\n- [VSCode] Fixed Edit diffs in the chat being cut off at the bottom at some panel widths and for long wrapped lines; diff boxes now fit the rows shown\n- [VSCode] Fixed overlapping settings writes from the extension leaving ~/.claude/settings.json unparseable or dropping a setting\n- [VSCode] Fixed Open in New Tab (Ctrl/Cmd+Shift+Esc) sometimes leaving the new tab\'s message box unfocused, so typing went nowhere until you clicked it\n- [VSCode] Fixed reopening a closed Claude tab splitting the editor layout when its locked group still holds another Claude tab and a file\n- [VSCode] Fixed New session opening another locked editor group whenever a file tab shared the group with your Claude tab\n- [VSCode] Fixed session names shifting sideways in the session picker while typing a search query\n- [VSCode] Fixed the plan review card cutting off its Send feedback button and reason field when a plan has several comments; the comment list now scrolls\n- [VSCode] Fixed inline code and code blocks in chat replies being unreadable under the High Contrast themes\n- [VSCode] Improved screen reader navigation of the conversation: each message is announced as \'You\' or \'Claude\', with the tool name for tool steps\n- [VSCode] Changed the default global gitignore file to $XDG_CONFIG_HOME/git/ignore when XDG_CONFIG_HOME is an absolute path\n- [Claude Code on the web] Added a \'Compare against\' branch picker to a cloud session\'s diff view, so you can diff its changes against any branch instead of only the base branch\n- [Claude Code on the web] Fixed git operations in cloud sessions failing with \'service unavailable\' when GitHub\'s token renewal briefly errors\n- [Claude Code on the web] Fixed editing a routine occasionally making it fire twice or re-enabling a routine that had just been paused\n- [Claude Code on the web] Fixed commits in cloud sessions occasionally failing with a signing error for a few minutes after the session\'s credentials refreshed\n- [Claude Code on the web] Fixed the toast after saving a routine whose GitHub trigger couldn\'t be linked to show the reason, such as a per-repository trigger limit, instead of only \'edit to retry\'\n- [Claude Code on the web] Fixed sessions sometimes flipping back to unread right after you mark them read\n- [Claude Code on the web] Changed routines to skip a run and retry for up to 72 hours when the owner\'s GitHub connection is missing, instead of switching the routine off at the first failed check\n- [Claude Code on the web] Changed a routine\'s on-hold notice: when your subscription is paused it now tells you to turn the routine back on yourself instead of promising an automatic resume\n- [Claude Tag] Added a Guests setting to the Add channel and Add workspace forms in Claude Tag admin settings, so owners can pick Inherit, Allow, Channel only or Restrict up front\n- [Claude Tag] Fixed Claude not answering when another Slack app or bot @mentions it; the tag now gets a reply and wakes Claude in a channel it had stopped following after days of inactivity\n- [Claude Tag] Fixed Claude missing another app\'s message that tagged @claude right after a new Slack channel was created; it\'s now delivered once Claude has joined\n- [Claude Tag] Fixed Claude folding a follow-up sent minutes after its last Slack message into it as a silent edit; late updates such as blockers now post as a new reply that notifies\n- [Claude Tag] Fixed Claude\'s Slack search failing with an error whenever it searched within a single channel; it now returns that channel\'s matching messages\n- [Claude Tag] Fixed a safety-filter stop silently resetting a Slack thread\'s context when nobody was waiting; Claude now always says so and no longer cancels background work still running\n- [Claude Tag] Fixed email addresses in Claude\'s Slack replies rendering with a visible mailto: prefix; they now show as the plain, clickable address\n- [Claude Tag] Fixed Claude refusing to watch an Enterprise Grid channel shared with the whole organization when asked from another workspace in the grid\n- [Claude Tag] Fixed the Environment picker in Claude Tag admin settings showing a raw environment ID instead of the environment\'s name for archived or app-created environments\n- [Claude Tag] Improved Claude\'s live progress checklist in Slack: capped at 2,000 characters, reposted at most every 15 minutes in busy threads, with older \'Latest task list\' links updated\n- [Claude Tag] Removed the repeated guest-attribution note Claude appended to a Slack canvas each time it edited one in a channel using the \'Channel only\' guest setting\n- [Code Review] Fixed re-reviews occasionally leaving a fixed finding\'s thread open when the new review also filed a lower-severity note under it\n- [Code Review] Fixed rare reviews ending with \'Code review encountered an error\' when GitHub or an internal service failed transiently at launch; they now wait and retry\n- [Code Review] Improved how Code Review words each posted finding: short plain sentences that say who is affected, where the code goes wrong, and the fix up front\n- [Code Review] Improved the check-run card and PR comment when a review is skipped because of an organization limit: each cause now links the admin page that fixes it'
        },
        {
          'version': '2.1.273',
          'title': 'v2.1.273',
          'date': '2026-09-15',
          'dateRaw': '2026-09-15T20:23:03Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.273',
          'body': 'What\'s changed\n- Added x-claude-code-request-class , x-claude-code-agent-type , x-claude-code-prev-tool-durations , x-claude-code-compaction and x-claude-code-context-compacted request headers for LLM gateways; opt in with CLAUDE_CODE_GATEWAY_HINT_HEADERS=1\n- Added a notification when an MCP server disconnects mid-session and automatic reconnection gives up, pointing at /mcp\n- Added forking a session started with claude --remote-control or /remote-control from the Claude app; the fork runs as a background session on your computer\n- Fixed Bash commands the permission checker cannot fully analyze skipping the prompt under permissions.blockReadsOutsideWorkingDirectories , and a subshell hiding a dangerous rm in bypass mode\n- Fixed skills synced from claude.ai staying available after your organization turns Skills off; they now move to the recoverable trash\n- Fixed allowManagedMcpServersOnly , deniedMcpServers and disableClaudeAiConnectors set via MDM or managed-settings.json being ignored when server-managed settings are also present\n- Fixed 401/403 errors on Bedrock, Vertex and Foundry, and Claude apps gateway 403s, telling you to run /login ; the message now names the credential to refresh or points to your gateway administrator\n- Fixed /login , /upgrade , and /extra-usage discarding earlier thinking from the conversation, which forced a full prompt-cache rewrite on the next request\n- Fixed auto mode stopping for approval when the Artifact tool uploads a file you attached to the chat in a cloud or Remote Control session\n- Fixed a long-running session recreating a stub .git/info/exclude after the repository\'s .git directory was removed or moved away\n- Fixed the main prompt dropping a ! typed at the start while already in shell mode, so negated commands like ! grep … can be typed\n- Fixed Read on macOS refusing a dragged-in screenshot, or any file the system reports under a second path, with \'symlink resolution changed after permission was checked\'\n- Fixed permissions.blockReadsOutsideWorkingDirectories : a memory directory chosen by a repository\'s settings is no longer loaded into the prompt, recalled, indexed, or used by memory extraction\n- Fixed sub-agents and background agents being reported as failed, with their result never delivered, when the final streamed reply omitted token usage or carried no model id\n- Fixed the context meter and auto-compact counting advisor-tool turns at roughly twice their real context size, which made auto-compact fire at about half the real window\n- Fixed /tui refusing to restart because of an agent-team teammate that had already finished its work and was no longer shown in the agents panel\n- Fixed saved scheduled tasks running in the wrong session after .claude/scheduled_tasks.json was copied into another folder, such as a new worktree\n- Fixed SDK and --output-format stream-json output dropping a subagent\'s remaining messages and final report after it is moved to the background mid-run (e.g. by CLAUDE_AUTO_BACKGROUND_TASKS )\n- Fixed /install-github-app reporting a SAML single sign-on block as \'admin permissions required\'\n- Fixed Remote Control clients attached to a Claude Desktop, VS Code or JetBrains session being refused when they ask for the session\'s context window usage\n- Fixed the spinner showing a doubled ellipsis (\'……\') on compaction status lines such as \'Running PreCompact hooks…\'\n- Fixed a false-positive spinner tip suggesting the frontend-design plugin after reading or publishing Artifacts\n- Reverted a 2.1.268 change that checked Read and Edit deny rules on Bash lines the permission checker can\'t analyze ( eval , env -C ); commands like time -p make build prompt again instead of being denied\n- Improved responsiveness in long sessions: hook progress and sub-agent activity no longer re-process the whole conversation on every update\n- Improved the Artifact tool\'s error when a publish includes a file type artifacts don\'t serve: Claude is told which types are served and what to do instead, and the terminal shows one plain line\n- Improved the Artifact tool\'s page read to state the capabilities and database rules the artifact service holds for the page, for anyone who can publish to it\n- Improved artifact database writes: an update can now remove a single field instead of rewriting the whole document\n- Improved artifact publishing: a publish whose connection drops after reaching claude.ai is now re-sent safely instead of failing or creating a duplicate version\n- Improved the cloud-session GitHub error for an IP allow list, a suspended app installation or SAML single sign-on to show the cause instead of a generic install hint\n- Improved /autofix-pr : when gh pr view fails it now shows gh\'s own error (sign-in, SAML, rate limit) instead of a generic exit-code line\n- Improved /autofix-pr to say why GitHub webhook delivery couldn\'t be set up for the PR (for example, no linked GitHub account) instead of a generic warning\n- Improved /web-setup errors: a refused GitHub token now lists the likely reasons and the fix, and a connection failure names a configured proxy or TLS certificate problem\n- Improved the in-session SSL certificate and proxy connection errors to name the error code and what to fix, such as NODE_EXTRA_CA_CERTS for an untrusted corporate CA\n- Improved the error when a cloud session can\'t be created because your Claude login expired or was revoked: it now tells you to run /login\n- Improved the error shown when an MCP server\'s sign-in expires mid-session to say how to re-authenticate ( /mcp )\n- Changed auto mode on Bedrock, Vertex and Foundry to use the local classifier by default for now; set CLAUDE_CODE_AUTO_MODE_SERVER=1 to use the platform\'s server-side classifier\n- Changed OTEL_LOG_TOOL_DETAILS=1 to also include real agent, skill, plugin and MCP server names on cost and token metrics\n- Changed sign-in with a Claude account to also request access to your claude.ai plugins\n- Changed /bug and /feedback reports to include only model-behavior params (model, system prompt, tools) from the last API request, omitting request metadata and CLAUDE_CODE_EXTRA_BODY fields\n- [VSCode] Fixed \'Report a problem\' still appearing, and /bug / /feedback opening a report form, for organizations that have product feedback disabled\n- [VSCode] Fixed a red \'Claude Code process exited with code 4294967295\' banner appearing after completed turns on Windows\n- Windows: Improved the network-path permission check for UNC paths when a mapped network drive was added with --add-dir\n- [Claude Code on the web] Fixed routines losing access to an organization connector, and still calling the old one, after an admin removed and re-added that connector\n- [Claude Code on the web] Fixed creating a self-hosted environment from organization settings occasionally failing with a server error and leaving a half-created environment behind\n- [Claude Code on the web] Changed the admin \'Share cloud sessions\' setting to live under Data and privacy instead of the Claude Code page, where Data and privacy admins can also manage it\n- [Claude Code on the web] Added a \'Discard unsaved changes?\' confirmation before the New routine page or the Edit routine dialog throws away a routine name, prompt or edit you typed\n- [Claude Code on the web] Removed the full-page desktop-app download screen that new users without a cloud environment saw on Mac and Windows; they now go straight to setup\n- [Claude Code on the web] Improved the routine detail page: menu and rename in the breadcrumb, the on/off switch and Run now at the top, and run history beside the routine\'s settings\n- [Claude Tag] Fixed Claude going silent minutes after reinstalling the app when an Enterprise Grid was disconnected but one of its workspaces stayed connected\n- [Claude Tag] Fixed scheduled tasks set up in an organization-shared private Slack channel silently never posting; they now keep running in the thread they were created in\n- [Claude Tag] Fixed replying in an older Slack thread while Claude is mid-task sometimes restarting it from scratch and losing work it had not pushed yet\n- [Claude Tag] Fixed Claude occasionally dropping a message with an incorrect \'couldn\'t find a Claude Code environment\' notice right after your account token refreshed\n- [Claude Tag] Fixed AWS connections refusing region-less endpoints such as Budgets, Savings Plans, WAF Classic and Import/Export; Global Accelerator requests now sign correctly\n- [Claude Tag] Improved AWS connection failures: when a request can\'t be signed, such as a hostname with no region, Claude is told why and how to fix it instead of a bare error\n- [Claude Tag] Fixed OAuth client-credentials and JWT-bearer connections failing with providers that return a lowercase token type; requests now send the standard Bearer scheme\n- [Claude Tag] Fixed adding a channel manager being refused on Enterprise Grid shared channels, on channels where Claude hasn\'t been used yet, and on legacy private channels\n- [Claude Tag] Changed Claude to start watching related public channels on its own, such as an incident channel a conversation depends on, instead of only when asked\n- [Claude Tag] Fixed the admin Memory page not listing Slack channels Claude set up on its own even when they had saved memory; admins can now open, edit and delete that memory\n- [Code Review] Fixed merging the base branch into a PR whose earlier review listed \'Additional findings\' triggering a full re-review; these pushes now get the lighter follow-up review\n- [Code Review] Fixed a whole REVIEW.md being ignored because of an @-mention, a code span wrapped across lines, or a backticked HTML tag; only lines linking to changed files are withheld\n- [Code Review] Improved suggested fixes to say what the fix must keep working when other code depends on the behavior being changed\n- [Code Review] Improved review comments that point to a second affected location to state that location\'s issue in a full sentence instead of a cut-off stub\n- [Code Review] Fixed /ultrareview --post so a retry after a GitHub error posts the findings comment exactly once instead of never or twice; the comment now names the reviewed commit\n- [Code Review] Fixed empty or content-identical pushes being re-reviewed on GitHub repositories whose owner or name contains a capital letter; these pushes are now skipped'
        },
        {
          'version': '2.1.272',
          'title': 'v2.1.272',
          'date': '2026-09-15',
          'dateRaw': '2026-09-15T00:42:25Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.272',
          'body': 'What\'s changed\n- Bug fixes and reliability improvements'
        },
        {
          'version': '2.1.271',
          'title': 'v2.1.271',
          'date': '2026-09-14',
          'dateRaw': '2026-09-14T22:12:54Z',
          'tags': [],
          'url': 'https://github.com/anthropics/claude-code/releases/tag/v2.1.271',
          'body': 'What\'s changed\n- Added fast mode in Claude Code Remote sessions (cloud and self-hosted runners): the host\'s fast-mode setting or /fast typed in the session applies where your organization allows it\n- Added mouse support to the /config panel in fullscreen mode: the wheel scrolls the settings list, a click on a setting\'s value changes it, and the row under the pointer is highlighted\n- Added claude self-hosted-runner --drain-marker-file <path> : when that file exists at a SIGTERM drain, the runner reports its exit to the server as a host drain (telemetry only)\n- Added per-command allowed_domains to Bash, PowerShell and Monitor in auto mode with sandboxing: the hosts a command needs are reviewed with it and opened for it alone; other hosts are refused\n- Added omitClaudeMd to agent frontmatter and --agents JSON, letting custom and plugin subagents run without user, project and local CLAUDE.md files; managed policy files still load\n- Added --accept-command <sha256> to claude plugin install and claude plugin update to accept exactly the command a previous --json run displayed, instead of -y\n- Added support for a multiplier above 1, up to 10, in the modelPricing managed setting and the Claude apps gateway pricing block, for marked-up internal chargeback rates\n- Added a spinner tip pointing Bedrock, Vertex AI, Foundry and LLM gateway users to the Claude desktop app; the claude.ai desktop app tip now suggests /desktop , which offers to download the app\n- Fixed a cached organization policy being reused after switching accounts, organizations, or API keys, and the policy not refreshing until the hourly check when the credential changes mid-session\n- Fixed the tool and command lists not updating when the organization policy finishes loading after startup or changes mid-session\n- Fixed an enterprise managed-mcp.json that can\'t be read or parsed being ignored: it now keeps exclusive MCP control (user, project and plugin servers don\'t load) and warns at startup\n- Fixed org policy being fetched through, and rejected by, third-party local proxies set via ANTHROPIC_UNIX_SOCKET ; they are again treated like other custom gateways, including for Remote Control\n- Fixed cloud sessions rejecting every subagent tool call (\'updatedInput … failed schema validation\') when a workflow or agent approval was applied after the session\'s worker restarted\n- Fixed /fast off answering \'Fast mode unavailable\' instead of turning fast mode off when the organization has fast mode disabled\n- Fixed sessions started with CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK re-sending fast requests every turn after the API rejected fast mode; the rejection now stands and its reason is shown\n- Fixed fast mode under CLAUDE_CODE_RETRY_WATCHDOG failing the turn on a usage-credits limit, or retrying an overload at fast speed, instead of falling back to standard speed\n- Fixed Bash permission checks missing the file that fmt , column and similar commands read when it follows an option the checker doesn\'t recognize\n- Fixed Bash permission checks skipping files a wildcard expands to when the wildcard sits in a command\'s pattern or option value (for example grep -v dir/* file )\n- Fixed Bash permission checks so that shell variable declaration flags cannot misrepresent the command being run\n- Fixed Bash commands with two directory changes, a subshell, or a cd + git chain skipping the prompt under permissions.blockReadsOutsideWorkingDirectories in bypass and auto mode\n- Fixed a stale .git/config.lock breaking git checkout -b , git push -u and git config for the rest of a session after a sandboxed command failed to start (Linux)\n- Fixed settings file changes made outside the session going unnoticed on macOS machines whose system file-event service is saturated; the watcher now falls back to polling\n- Fixed resumed claude -p sessions whose tools all come from MCP servers failing with \'At least one tool must have defer_loading=false\'\n- Fixed turns failing with \'API returned an empty or malformed response\' when an LLM gateway returns the non-streaming reply as text/plain\n- Fixed sustained high CPU usage and repeated tool-list requests when an MCP server sends list_changed notifications in a tight loop\n- Fixed MCP OAuth mishandling client registrations: denying consent forced a new one, one for another redirect URI was reused, and a concurrent write could delete a valid one or keep a mismatched one\n- Fixed tool search returning no match when Claude selects an MCP tool by its bare name instead of its full mcp__server__tool name\n- Fixed Ctrl+O cancelling pending MCP server reconnects, and /mcp sent from Remote Control failing while the transcript view is open\n- Fixed the Claude in Chrome prompt telling the model to load tools through ToolSearch when ToolSearch is unavailable\n- Fixed cross-session messages held by the receiving session\'s permission-mode policy leaving no trace: headless senders now get a delivery notice, and SendMessage results no longer imply it was read\n- Fixed Claude starting a second copy of a background command (such as a watch task or dev server) that was still running after the conversation was compacted\n- Fixed /model warning about losing the conversation cache when switching back to the model the conversation actually ran on\n- Fixed /reload-skills reporting a skill count that disagreed with the slash menu after /cd\n- Fixed /resume and /continue showing only 1-2 sessions in fullscreen mode on short terminals\n- Fixed /resume and /teleport keeping the previous conversation\'s file-read tracking, so Claude could edit files the resumed conversation had never read\n- Fixed --resume dropping the 1M context window ( [1m] ) when the resumed session\'s model family differs from the configured default model\n- Fixed artifacts attached with /artifacts disappearing from the session after --resume\n- Fixed background sessions ( claude --bg , claude agents ) not watching the artifacts they publish for republishes made elsewhere\n- Fixed custom agents, slash commands and output styles beyond the first not loading from a virtual drive that reports inode 0, such as an encrypted vault mounted as a Windows drive\n- Fixed self-hosted runner sessions silently losing all host config (settings, skills, plugins, MCP servers) when the host config directory exceeds 64 MiB; added --host-config-snapshot disk|memory\n- Fixed skills synced from claude.ai staying on disk indefinitely after signing out; copies not refreshed within cleanupPeriodDays now move to the recoverable trash at the next launch\n- Fixed spinner tips suggesting commands that aren\'t available for your account type or are disabled in your session\n- Fixed the /add-dir path input: the left and right arrow keys now move the cursor, and Enter adds only the typed path instead of also adding the highlighted completion\n- Fixed text fields outside the main prompt moving a leading ! to the end of what you typed ( !foo came out as foo! )\n- Fixed the interactive /hooks menu crashing when a hook matcher is named after an inherited object property such as __proto__ or constructor\n- Fixed a fullscreen rendering glitch where text kept a stale background color after the box around it lost its background\n- Fixed Delete in st and Alt+arrow keys in rxvt-unicode not working in attached background sessions\n- Fixed the terminal\'s replies to capability queries ( ^[[?1;2c ) appearing at the shell prompt or in an editor when Claude Code exits, is suspended, or opens an editor right after starting\n- Improved terminal rendering performance: large diffs and long transcripts render faster, with fewer slow frames\n- Improved startup time slightly by skipping a redundant validation of built-in model data on every launch\n- Improved hook feedback: while a SessionStart, UserPromptSubmit, PreToolUse or SessionEnd hook runs, the spinner says so with elapsed time, and Esc cancels a prompt waiting on a SessionStart hook\n- Improved the spinner status during long thinking: it now reads \'deep in thought\' after 45s, and shows \'picking the thought back up\' while recovering from the output-token limit\n- Improved dynamic workflows to pause when you hit your usage limit and continue automatically when it resets, instead of dropping the affected agents\n- Improved Remote Control to leave fewer empty sessions on claude.ai when setup fails on a flaky network\n- Improved the Claude in Chrome message in cloud sessions when the browser can\'t be reached: it now says the computer may be asleep before it suggests an install\n- Improved claude mcp serve : a running tool call now sends a progress update every 30 seconds, so clients show it is still running and idle timeouts don\'t abort a long command that prints nothing\n- Improved Foundry and Claude Platform on AWS sessions: an alwaysLoad MCP server that finishes connecting mid-conversation is usable on the next turn without a tool-search round trip\n- Improved Markdown files published as artifacts: they now render as styled document pages (title header, document typography, syntax-highlighted code)\n- Improved Artifact tool publish errors: a publish with no file now says to write the page to a file first, and an unsupported file type is reported before a missing favicon\n- Improved the Artifact tool\'s error when a page declares a capability its contract version lacks: it now lists every supported capability and notes when a newer contract version has it\n- Improved artifact watching: a session can now watch up to 10 published artifacts at once for republishes made elsewhere, up from 5\n- Improved PDF @-mentions to say \'page count unknown\' instead of a page count guessed from the file size when pdfinfo cannot count the pages\n- Improved /mobile to show a single QR code for claude.ai/mobile, which opens the right app store for your phone\n- Changed auto mode so that a skill\'s or slash command\'s inline ! shell commands follow default-mode permission rules instead of the classifier; a command no rule decides runs as a reviewed tool call\n- Changed auto mode so a subagent reports back to its caller through a dedicated hand-back call that the safety classifier reviews, instead of its last message being reviewed after the fact\n- Changed Monitor watches to always have a deadline (at most 30 minutes; 10 in single-prompt -p runs) and notify Claude to re-arm, replacing the no-timeout persistent option\n- Changed the IDE selection indicator in the prompt to a [⧉ …] pill that wraps with the text instead of squeezing multi-line prompts; delete it with Backspace to leave the selection out\n- Changed the default dynamic workflow size to small on Pro plans and lowered the medium size guideline from 15 to 10 agents\n- Changed Claude apps gateway, Bedrock, Vertex AI, and Foundry sessions so that they no longer refresh a leftover claude.ai login that the session does not use\n- Updated the bundled claude-api skill to enable eager_input_streaming on streaming custom tools, and to start deliverable-shaped Managed Agents work with user.define_outcome\n- [VSCode] Added an Attach Open File setting that, when turned off, stops the open file from being added to messages; selected text is still attached\n- [VSCode] Fixed the Hooks and Permission rules dialogs reporting a save that landed as failed, and the Hooks dialog going blank under a plugin-only policy lock or showing color codes in save errors\n- [VSCode] Fixed Hooks dialog saves: no duplicate hook on replace, a header name retyped in other capitals keeps its secret, and settings.local.json is gitignored before the save returns\n- [VSCode] Fixed session history showing only the current session when the workspace is on a Windows mapped network drive or SUBST drive\n- [VSCode] Fixed the session list\'s Active filter hiding open idle sessions when Open is also checked in the filter menu\n- [VSCode] Fixed a new chat switching back to the previous chat when the session list refreshed\n- [VSCode] Fixed open tabs and the side bar keeping the old config folder until a window reload after CLAUDE_CONFIG_DIR changed in the environmentVariables setting\n- [VSCode] Fixed console windows flashing on Windows when the extension runs background commands such as git, ripgrep, and the sign-in status check\n- [VSCode] Fixed the prompt cache clock\'s hover text appearing only after a delay, and the auto-compact icon showing the browser\'s own tooltip beside its popup\n- [VSCode] Improved the Hooks dialog: a save refused because of the settings file itself now opens a popup with an \'Open settings file\' button and the reason behind \'Copy error\'\n- [VSCode] Changed the on state of toggle switches from Claude orange to the editor theme\'s button color\n- [Claude Code on the web] Fixed a cloud session sometimes taking about ten minutes to respond after its process exited while the session still looked live; sending a message now restarts it right away\n- [Claude Code on the web] Changed the Routines page on claude.ai/code to a new layout with Yours and Templates tabs and two-column routine cards that show run status, and removed its calendar view\n- [Claude Code on the web] Added a Custom network access option to the Cloud environments editor in admin settings, with the same allowed-domains list the environment dialog on claude.ai/code offers\n- [Claude Code on the web] Improved the Cloud environments admin page: it shows the default environment for Claude Tag and Claude Code, with a link to change it, and marks the recommended kind to create\n- [Claude Tag] Fixed Claude in a channel where it stays active losing its working context about once an hour when the conversation is mostly in threads; thread activity now keeps it from being reset\n- [Claude Tag] Fixed a thread that asked Claude to watch a pull request no longer hearing about CI failures, comments and reviews after Claude was restarted in that thread\n- [Claude Tag] Fixed deleting the first message of a thread Claude had already replied in not ending Claude\'s work there; it now stops, as it did when a message with no replies was deleted\n- [Claude Tag] Fixed Claude holding back a post because of an earlier instruction addressed to a different bot or assistant; only instructions addressed to Claude bind it, and it asks when unsure\n- [Claude Tag] Fixed the reply-mode card Claude posts on joining a busy channel saying it \'sees a lot of automated posts\' when the channel is only chatty or large; the card now names the real reason\n- [Claude Tag] Improved the Environment picker in Claude Tag admin settings: options are labeled Anthropic-hosted or self-hosted, with links to edit that environment or create one\n- [Code Review] Fixed a pull request in a repository reviewed once per PR sometimes getting no review when a commit arrived while its review was waiting to start; it now reviews the requested commit\n- [Code Review] Fixed Code Review occasionally posting the same findings two or three times when GitHub reported an error for a review it had in fact created\n- [Code Review] Fixed follow-up reviews re-posting a security finding a person had already resolved when a later push moved the lines it was anchored to\n- [Code Review] Fixed reopening a finished /ultrareview cloud session in the Claude app starting the whole review over again unprompted\n- Windows: Fixed PowerShell commands failing with \'Exit code 1\' and no output when the session\'s temp output path reaches 260 characters'
        }
      ]
    },
    {
      'id': 'opencode',
      'name': 'OpenCode',
      'vendor': 'Anomaly (原 SST)',
      'kind': 'github',
      'changelogUrl': 'https://github.com/anomalyco/opencode/releases',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '2.0.16',
          'title': 'v2.0.16',
          'date': '2026-09-24',
          'dateRaw': '2026-09-24T06:34:09Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.16',
          'body': 'release: v2.0.16'
        },
        {
          'version': '2.0.15',
          'title': 'v2.0.15',
          'date': '2026-09-23',
          'dateRaw': '2026-09-23T07:15:48Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.15',
          'body': 'release: v2.0.15'
        },
        {
          'version': '2.0.14',
          'title': 'v2.0.14',
          'date': '2026-09-22',
          'dateRaw': '2026-09-22T13:13:04Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.14',
          'body': 'release: v2.0.14'
        },
        {
          'version': '2.0.13',
          'title': 'v2.0.13',
          'date': '2026-09-22',
          'dateRaw': '2026-09-22T10:07:53Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.13',
          'body': 'release: v2.0.13'
        },
        {
          'version': '2.0.12',
          'title': 'v2.0.12',
          'date': '2026-09-21',
          'dateRaw': '2026-09-21T09:56:54Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.12',
          'body': 'release: v2.0.12'
        },
        {
          'version': '1.18.32',
          'title': 'v1.18.32',
          'date': '2026-09-21',
          'dateRaw': '2026-09-21T22:51:20Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v1.18.32',
          'body': 'Core\nBugfixes\n- Fixed Bedrock image attachments so they are only hoisted for Claude, Nova, and Llama 4 models.\n- Fixed Together AI streaming usage reporting.\nThank you to 1 community contributor:\n- @dc85 :\n- docs: add DeepSeek V4.1 Flash to Zen ( #49897 )\n- feat: add Grok 4.7 to Zen and Go ( #50288 )'
        },
        {
          'version': '2.0.11',
          'title': 'v2.0.11',
          'date': '2026-09-20',
          'dateRaw': '2026-09-20T08:57:34Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.11',
          'body': 'release: v2.0.11'
        },
        {
          'version': '2.0.10',
          'title': 'v2.0.10',
          'date': '2026-09-19',
          'dateRaw': '2026-09-19T13:40:52Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.10',
          'body': 'release: v2.0.10'
        },
        {
          'version': '2.0.9',
          'title': 'v2.0.9',
          'date': '2026-09-19',
          'dateRaw': '2026-09-19T05:12:53Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.9',
          'body': 'release: v2.0.9'
        },
        {
          'version': '2.0.8',
          'title': 'v2.0.8',
          'date': '2026-09-18',
          'dateRaw': '2026-09-18T09:12:25Z',
          'tags': [],
          'url': 'https://github.com/anomalyco/opencode/releases/tag/v2.0.8',
          'body': 'release: v2.0.8'
        }
      ]
    },
    {
      'id': 'kimi-code',
      'name': 'Kimi Code',
      'vendor': 'Moonshot AI',
      'kind': 'github',
      'changelogUrl': 'https://github.com/MoonshotAI/kimi-code/releases',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '2.1.1',
          'title': '@moonshot-ai/kimi-code@2.1.1',
          'date': '2026-09-24',
          'dateRaw': '2026-09-24T07:45:05Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%402.1.1',
          'body': 'Patch Changes\n#4013 929403b Thanks @7Sageer ! - Roll back some of the overly defensive changes in 2.1.0\n#4015 c7dd841 Thanks @sailist ! - Revert filesystem watchers for config and workspace files to on by default. Set [watch] enabled to false or KIMI_CODE_WATCH=0 to keep them off.'
        },
        {
          'version': '2.1.0',
          'title': '@moonshot-ai/kimi-code@2.1.0',
          'date': '2026-09-23',
          'dateRaw': '2026-09-23T12:45:41Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%402.1.0',
          'body': 'Minor Changes\n#3990 32000d0 Thanks @Grapedge ! - In fullscreen, click a folded block to open or close it.\n#4004 e17ff67 Thanks @Grapedge ! - Add a TUI mode setting to /settings with an experimental fullscreen layout; switching modes takes effect after restarting Kimi Code. You can also set tui_mode in ~/.kimi-code/tui.toml directly: \'regular\' renders into the terminal scrollback, while \'fullscreen\' makes parts of the UI mouse-interactive for a smoother experience.\nPatch Changes\n#3964 6451f1e Thanks @7Sageer ! - Block file tools from accessing files outside the working directory through symlinks.\n#3975 bb96d80 Thanks @RealKai42 ! - Reduce the CLI\'s startup time and memory usage.\n#3957 6a214b8 Thanks @huangzheng2016 ! - Fix a \'Maximum call stack size exceeded\' error when opening large sessions.\n#3974 994287a Thanks @liruifengv ! - Fix forked sessions getting their titles overwritten by auto-generated titles.\n#3964 6451f1e Thanks @7Sageer ! - Apply project-local configuration only after the workspace is trusted.\n#3964 6451f1e Thanks @7Sageer ! - Block repository git configuration from executing commands during background git operations.\n#3969 b3212fd Thanks @sailist ! - Skip cloud telemetry on the global login until its collector is live, and keep shutdown from aborting TUI exit.\n#3979 e796bb5 Thanks @sailist ! - Fix MCP OAuth not requesting the offline_access scope, which caused hourly browser re-authorization with providers like Vercel.\n#3969 b3212fd Thanks @sailist ! - Fix Remote Control failing to start after kimi login --region global .\n#3964 6451f1e Thanks @7Sageer ! - Reject additional directories that resolve to the home directory or filesystem root.\n#3995 a54e6f6 Thanks @7Sageer ! - Turn off repeat reminders and forced stops with KIMI_CODE_REPEAT_BREAKER=0 .\n#3970 895e9d9 Thanks @chengluyu ! - Fix missing Swarm members after reopening an interrupted conversation.\n#3989 a268ad7 Thanks @Grapedge ! - Show a Thinking… spinner and keep the status row height steady during streaming.\n#3989 a268ad7 Thanks @Grapedge ! - Add a clickable \'Jump to bottom\' indicator to the fullscreen TUI.\n#3976 f7012aa Thanks @tpoisonooo ! - Tower mode: smaller missions, stricter completion and review checks, and review history in rework briefings.\n#3847 65ae3e3 Thanks @tpoisonooo ! - Tower mode: mission titles must be ASCII, and task cards show the mission id.\n#3931 f17a22e Thanks @sailist ! - Turn off filesystem watchers for config and workspace files by default. Set [watch] enabled to true or KIMI_CODE_WATCH=1 to turn them back on.\n#4005 ba41d07 Thanks @liruifengv ! - web: Improved interactions and fixed known bugs.'
        },
        {
          'version': '2.0.2',
          'title': '@moonshot-ai/kimi-code@2.0.2',
          'date': '2026-09-19',
          'dateRaw': '2026-09-19T12:32:48Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%402.0.2',
          'body': 'Patch Changes\n#3922 9df7a9c Thanks @sailist ! - Fix new messages occasionally landing at an old position in the conversation after resuming a session.\n#3911 88a7d93 Thanks @Grapedge ! - Fix compaction failing after switching to a model with a smaller context window.\n#3929 6ffdf0d Thanks @7Hanrui ! - The agent no longer assumes the current working directory is the project root.\n#3933 9721259 Thanks @liruifengv ! - Fix a message sent while the agent was running sometimes appearing twice in the chat.\n#3934 2e605b1 Thanks @liruifengv ! - web: Improved interactions and fixed known bugs.'
        },
        {
          'version': '2.0.1',
          'title': '@moonshot-ai/kimi-code@2.0.1',
          'date': '2026-09-18',
          'dateRaw': '2026-09-18T13:27:59Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%402.0.1',
          'body': 'Patch Changes\n#3878 f233f9d Thanks @7Sageer ! - Stop listing unavailable media tools in subagent menus and clarify Read errors for images and videos.\n#3762 c5ad17f Thanks @7Sageer ! - Providers can read their API key from a named environment variable ( api_key_env in config.toml or the provider API).\n#3896 73ebe9a Thanks @sailist ! - Keep follow-up messages sent during a turn from appearing twice after a session reload.\n#3889 5108cad Thanks @huangzheng2016 ! - Compact the session index on startup when many entries point to deleted sessions.\n#3889 5108cad Thanks @huangzheng2016 ! - Start the CLI faster by removing a duplicate skills directory scan.\n#3889 5108cad Thanks @huangzheng2016 ! - Open the session list and resume sessions faster on workspaces with many sessions.\n#3889 5108cad Thanks @huangzheng2016 ! - Resume long sessions faster.\n#3889 5108cad Thanks @huangzheng2016 ! - Index sessions for search in capped, incremental background passes, tunable via the [database] searchSyncSessionCap and searchSyncDebounceMs settings.\n#3864 25dd4ce Thanks @wbxl2000 ! - Rename the kimi install-app subcommand to kimi install-desktop; the old name keeps working as a hidden alias.\n#3910 7dc253c Thanks @sailist ! - Restore thinking display for OpenAI-compatible providers that send a reasoning string next to an unrecognized reasoning_details array.\n#3875 c1047a6 Thanks @7Sageer ! - Fix kimi -p exiting early and cancelling the active turn when a cron task fires.\n#3894 910aba2 Thanks @7Sageer ! - Drop literal decision clauses from the system prompt and the auto permission mode reminder.\n#3889 5108cad Thanks @huangzheng2016 ! - Restore sessions with large file-edit histories faster.\n#3889 5108cad Thanks @huangzheng2016 ! - Serve session transcript APIs faster on repeated calls.\n#3885 5acc863 Thanks @starquakee ! - select_tools now points out already-available tools to call directly and suggests announced names for near-miss selections.\n#3887 e3f48a2 Thanks @RealKai42 ! - Fix deleting or archiving a session sometimes never finishing.\n#3891 53e5e3f Thanks @sailist ! - Keep follow-up messages sent during a turn attached to that turn in the conversation history.\n#3906 60f2a63 Thanks @sailist ! - Keep a follow-up sent during a turn as one message, and undo the host turn instead of the follow-up alone.\n#3879 1fddc16 Thanks @7Sageer ! - Remove the system-prompt rule that forbade all file access outside the working directory.\n#3892 a80fe31 Thanks @sailist ! - Stop workspace file watchers from scanning an unbounded project root, and add [watch] enabled / KIMI_CODE_WATCH to disable watching entirely.\n#3869 86e0820 Thanks @sailist ! - Stop asking for approval of bash commands that cannot be statically analyzed in Ask When Needed permission mode.'
        },
        {
          'version': '2.0.0',
          'title': '@moonshot-ai/kimi-code@2.0.0',
          'date': '2026-09-17',
          'dateRaw': '2026-09-17T05:33:07Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%402.0.0',
          'body': 'Major Changes\n- #3849 34ec5d2 Thanks @wbxl2000 ! - Add the /desktop slash command (alias /install-desktop) and the kimi install-app subcommand to open the Kimi Code desktop app page in the browser.\nMinor Changes\n- #3851 faec32c Thanks @Grapedge ! - Render mermaid code blocks as diagrams in the terminal; turn it off under /settings → Mermaid diagrams, or set mermaid = \'off\' in the [markdown] section of tui.toml.\nPatch Changes\n#3838 f4e5822 Thanks @sailist ! - Fix an occasional crash when a running turn is canceled.\n#3802 c72a202 Thanks @Grapedge ! - Highlight diff code blocks.\n#3844 0cf413f Thanks @Grapedge ! - Fix a steered message appearing twice after interrupting the turn.\n#3848 b4d0b8a Thanks @Grapedge ! - Fix @ file mentions duplicating or dropping the path when accepting a suggestion while still typing.\n#3828 2bb6e12 Thanks @wbxl2000 ! - Fix duplicate user messages when steering an ongoing conversation.\n#3832 1c7e996 Thanks @chengluyu ! - Fix files attached while steering an ongoing conversation appearing only after a reload.\n#3853 bd06178 Thanks @wbxl2000 ! - Keep the original prompt visible when steering a running turn, instead of replacing it with the steered text.\n#3832 1c7e996 Thanks @chengluyu ! - Fix slash commands sent while steering an ongoing conversation missing from the transcript.\n#3837 cafd9b5 Thanks @wbxl2000 ! - Fix missing and reappearing chat messages after undoing a steered message.\n#3818 19ce4b3 Thanks @liruifengv ! - Fix /usage showing a wrong error message when no session has been created yet.\n#3784 5653c73 Thanks @7Sageer ! - Images sent to Kimi models are uploaded as file references instead of inline data, and a warning is shown when media are dropped from a retried request.\n#3778 7d174ac Thanks @huangzheng2016 ! - Limit memory growth from finished subagents.\n#3778 7d174ac Thanks @huangzheng2016 ! - Report background subagents that time out or are stopped as cancelled instead of failed.\n#3846 31f1b68 Thanks @7Sageer ! - Fix OAuth login never triggering for MCP servers that allow anonymous tool discovery but reject tool calls with 401.\n#3784 5653c73 Thanks @7Sageer ! - When accumulated images and videos exceed the request size budget, the oldest media are omitted from requests with a warning instead of failing.\n#3778 7d174ac Thanks @huangzheng2016 ! - Report tools and subagents interrupted by the user as cancelled instead of aborted or failed.\n#3803 39a7455 Thanks @kimi-agent-bot ! - The built-in browser plugin now appears as \'Kimi Browser Extension\' in the plugins panel, marketplace catalog, and docs, matching the product rename.\n#3858 95d4a9d Thanks @liruifengv ! - Sign the Windows CLI executable with a trusted publisher certificate.\n#3795 a7bdabb Thanks @Grapedge ! - Feedback surveys now appear at better times in long conversations.\n#3833 8660a07 Thanks @tpoisonooo ! - Fix tower worker cards wrongly showing \'completed\' during rework.\n#3840 9c5e9b4 Thanks @chengluyu ! - Fix a Windows crash when a project or config folder is opened through a short 8.3 path.'
        },
        {
          'version': '0.43.1',
          'title': '@moonshot-ai/kimi-code@0.43.1',
          'date': '2026-09-15',
          'dateRaw': '2026-09-15T07:03:40Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.43.1',
          'body': 'Patch Changes\n#3780 486dcd2 Thanks @Grapedge ! - Update the terminal UI engine, fixing link colors in wrapped markdown tables and @ file-completion ordering, and adding native clipboard support on Linux X11.\n#3776 48fad6e Thanks @huangzheng2016 ! - Fix memory not being released when subagent scopes are disposed.\n#3777 dc76b0c Thanks @huangzheng2016 ! - Fix progressively slower rendering on each round of large agent swarm runs.\n#3631 1336be3 Thanks @wbxl2000 ! - Stop returning deleted sessions from global search before the search index catches up.\n#3775 f248624 Thanks @huangzheng2016 ! - Reduce event-loop stalls and GC churn in sessions with many concurrent subagents.\n#3779 82ec469 Thanks @huangzheng2016 ! - Fix pressing Ctrl+C while subagents are running exiting the whole CLI instead of just interrupting the subagents.\n#3752 0725ef1 Thanks @tpoisonooo ! - Fix tower mode mistaking newly spawned agents for previous sessions\' roster entries.'
        },
        {
          'version': '0.43.0',
          'title': '@moonshot-ai/kimi-code@0.43.0',
          'date': '2026-09-14',
          'dateRaw': '2026-09-14T12:14:33Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.43.0',
          'body': 'Minor Changes\n#3749 6126472 Thanks @liruifengv ! - web: AI session titles are now always on — a title is generated after the first turn and can be regenerated from the rename field, with no experimental flag required.\n#3670 a9efbe0 Thanks @Grapedge ! - Delete sessions from the session picker: press Ctrl+X on a session, then y to confirm.\nPatch Changes\n#3763 dd6a411 Thanks @liruifengv ! - web: add user agreement and privacy policy entries to the Settings → About page.\n#3750 775a6c3 Thanks @7Sageer ! - Add the loop_control.compaction_max_attempts config option to set the maximum total attempts for a failing compaction request (default 5).\n#3667 9296e68 Thanks @sailist ! - Add the dynamically_loaded_tools capability to official Kimi Code models when the service declares support for message-level tool declarations.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix sessions containing many brackets or backslashes getting stuck while loading.\n#3734 ee2cac1 Thanks @kimi-agent-bot ! - Fix a crash that killed the process when a retried LLM request had streamed a partial tool call before disconnecting.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix persistent UI stuttering while streaming in long sessions.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix certain formulas, links, tool results, and log contents causing the UI to stutter or become unresponsive.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix the send button staying disabled when starting a new session.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix previous sessions being wrongly marked as unread and triggering \'turn complete\' notifications after starting a new conversation.\n#3763 dd6a411 Thanks @liruifengv ! - web: render Markdown frontmatter metadata as key-value cards and tag lists.\n#3688 9f7e68e Thanks @RealKai42 ! - Preserve MCP attachments that cannot be delivered directly to the model.\n#3667 9296e68 Thanks @sailist ! - Add a per-server deferred field to MCP server configuration: when the model supports dynamic tool loading (experimental tool-select flag), set deferred: true to keep a server\'s tools out of the top-level tool list and load them on demand via select_tools ; servers are exposed inline by default.\n#3763 dd6a411 Thanks @liruifengv ! - web: drop the Changes entry from the panel new-tab menu while a diff tab is open.\n#3657 5b3b5b6 Thanks @chengluyu ! - Exclude time spent with the session closed from goal time budgets.\n#3728 b180725 Thanks @kimi-agent-bot ! - Add the KIMI_CODE_PERMISSION_MODE_REMINDER environment variable: set it to 0 to stop injecting the auto permission-mode reminders into the model context.\n#3696 d3dc594 Thanks @sailist ! - Include the server token in the Remote Control Local UI link so it opens already signed in.\n#3709 306f6f6 Thanks @sailist ! - Fix Remote Control uploads larger than ~3.5MB always failing with a 400 error.\n#3718 ab9e688 Thanks @sailist ! - Reuse unchanged Remote Control assets across page loads instead of retransferring them.\n#3657 5b3b5b6 Thanks @chengluyu ! - Remove the 24-hour limit on goal time budgets.\n#3714 565093f Thanks @sailist ! - Skip the confirmation prompt for rm -rf commands that target only /tmp or /temp paths.\n#3667 9296e68 Thanks @sailist ! - Fix the select_tools tool never being registered because agent profiles do not list it in their tool allowlists.\n#3763 dd6a411 Thanks @liruifengv ! - web: restructure the Settings pages — Account moves right after General, Agent is renamed to Agents & Sessions and now includes message folding, Advanced is renamed to About, and data & privacy settings move into General.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix the selected segment background flashing and shifting while the Settings segmented control loads.\n#3697 5e452fc Thanks @RealKai42 ! - Allow steering messages to interrupt waits for background tasks.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix the switch thumb deforming at both ends when stretched on hover.\n#3763 dd6a411 Thanks @liruifengv ! - web: fix tooltips popping up even when the mouse has not moved.\n#3648 2da4aa2 Thanks @tpoisonooo ! - Tower mode reliability fixes across messaging, worktrees, and the review-to-merge gate.\n#3707 e409bc8 Thanks @sailist ! - Compress Remote Control tunnel responses with gzip.\n#3702 42998cf Thanks @sailist ! - Add -y, --yes to kimi upgrade (alias kimi update ) to skip the confirmation prompt and install the update directly.\n#3681 1306a9a Thanks @7Sageer ! - Warn at startup when a [models] entry in config.toml is missing the model field and cannot be used.'
        },
        {
          'version': '0.42.0',
          'title': '@moonshot-ai/kimi-code@0.42.0',
          'date': '2026-09-09',
          'dateRaw': '2026-09-09T06:34:31Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.42.0',
          'body': 'Minor Changes\n#3613 d4d20d2 Thanks @liukx0205 ! - Add read-only tools to the /btw side agent.\n#3524 f6a9c39 Thanks @RealKai42 ! - Add an experimental Updates panel with paginated progress messages from the main agent and subagents; enable it with KIMI_CODE_EXPERIMENTAL_NOTIFY_USER=1 .\n#3634 e831fd1 Thanks @7Sageer ! - The subagent model pool ( [secondary_model] ) is now always on; the experimental secondary-model flag and the KIMI_CODE_EXPERIMENTAL_SECONDARY_MODEL opt-out have been removed.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: support permanently deleting sessions from the session row context menu, with a confirmation prompt.\n#3526 55685c5 Thanks @RealKai42 ! - Stop reminding the model of its context budget before automatic compaction.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: preview images and videos in a reorderable media rail in the composer, mention them in the text on demand, and keep the previews after queueing and sending.\nPatch Changes\n#3671 e6bc8b8 Thanks @liruifengv ! - web: fix the conversation scrollbar being too thin to click and drag easily.\n#3539 34ad513 Thanks @RealKai42 ! - Collapse finished tool calls in the transcript to a header plus one marked outcome row: short output is shown whole, hidden output is counted ( N more lines , +N more ) and revealed by Ctrl+O , which the footer advertises while it is available.\n#3537 f12d59e Thanks @7Sageer ! - Fix the agent resuming the wrong request after automatic context compaction in long sessions.\n#3552 f0434f2 Thanks @sailist ! - The minidb session-index read model and global search worker are now always on; the experimental flags have been replaced by the [database] config section and the KIMI_CODE_PERSISTENCE_MINIDB_READMODEL / KIMI_CODE_SEARCH_WORKER env vars.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: fix background task notifications lingering at the bottom of the session during subsequent tool calls.\n#3658 ff7371b Thanks @RealKai42 ! - Allow file searches to retrieve matches beyond the first 100 results.\n#3652 7f5debf Thanks @RealKai42 ! - Accept HEIC, HEIF, and BMP images on a session\'s first prompt when the configured default model is served by Kimi and no model has been selected yet.\n#3649 80480c0 Thanks @RealKai42 ! - Accept HEIC, HEIF, and BMP images in ReadMediaFile and prompt attachments when the model is served by Kimi.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: fix page jank caused by hundreds of simultaneous requests when reloading a session with many background tasks.\n#3654 6de0cec Thanks @RealKai42 ! - Preserve distinct structured data in MCP tool results.\n#3669 f8c606e Thanks @wbxl2000 ! - Support compressed downloads from updated native release manifests.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: reduce jank when opening and scrolling back through long conversations, while preserving message and tool expansion state.\n#3548 baf17a8 Thanks @chengluyu ! - Preserve image and video filenames in session history.\n#3645 5000f98 Thanks @RealKai42 ! - Add configurable character limits and resumable long-line file reads without repeated output truncation.\n#3645 5000f98 Thanks @RealKai42 ! - Read malformed UTF-16 files with an explicit lossy-decoding warning.\n#3645 5000f98 Thanks @RealKai42 ! - Avoid repeated scanning for common tail reads and report file changes detected during tail rereads.\n#3616 260ac3f Thanks @Grapedge ! - Upgrade the default thinking effort to the recommended level for eligible users.\n#3552 f0434f2 Thanks @sailist ! - Remote Control is now always on; the experimental KIMI_CODE_EXPERIMENTAL_REMOTE_CONTROL flag has been removed.\n#3618 75682b0 Thanks @sailist ! - Fix recent sessions missing from the session list when the sessions directory contains stray files.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: fix skills created mid-session not appearing in the slash list until the app restarts.\n#3671 e6bc8b8 Thanks @liruifengv ! - web: fix trailing backticks briefly flashing at the end of code blocks while they stream.\n#3596 0d7833e Thanks @tpoisonooo ! - The /tasks panel now shows each background agent\'s model under its task row.\n#3607 5eea890 Thanks @huangzheng2016 ! - Fix the streaming debug timing attributing client-side busy time to the server.\n#3596 0d7833e Thanks @tpoisonooo ! - Tower worker and reviewer briefings now carry the full mission context, and tower agent timeouts follow the subagent timeout setting ( [subagent] timeout_ms or KIMI_SUBAGENT_TIMEOUT_MS ), defaulting to 2 hours. Fix the /tasks list not showing the model for tower-spawned agents.\n#3593 00cfbb0 Thanks @7Sageer ! - Print a warning in kimi -p when project-level MCP servers are skipped because the folder is not trusted.\n#3608 fb0353a Thanks @liukx0205 ! - Watch the user-level skill roots ( ~/.kimi-code/skills and ~/.agents/skills ) so the workspace skill catalog refreshes automatically when skills are created, modified, or deleted while the daemon is running — no restart or manual reload needed.\n#3560 af81bb9 Thanks @kimi-agent-bot ! - Open the browser on localhost instead of the wildcard bind address for kimi web --host 0.0.0.0 .\n#3605 f1e9152 Thanks @huangzheng2016 ! - Fix slow response streaming and rendering after resuming sessions with many scheduled cron turns.'
        },
        {
          'version': '0.41.0',
          'title': '@moonshot-ai/kimi-code@0.41.0',
          'date': '2026-09-04',
          'dateRaw': '2026-09-04T11:19:10Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.41.0',
          'body': 'Minor Changes\n#3423 b199e33 Thanks @RealKai42 ! - Remind the model of its context budget before automatic compaction, and after compaction point it at the session\'s event log for exact details.\n#3525 eba23ed Thanks @wbxl2000 ! - Turn-level file history is now always on; the experimental file-history flag has been removed.\n#3516 6013658 Thanks @Grapedge ! - Add an occasional session rating prompt above the input box.\n#3549 29e1875 Thanks @wbxl2000 ! - web: add tower multi-agent collaboration mode (experimental), enabled via the /tower command or the composer plus menu; /tower supports specifying a base branch (e.g. /tower add-new-feature).\nPatch Changes\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix background agent message cards incorrectly showing a running indicator.\n#3529 b184b31 Thanks @sailist ! - Stop blocking dangerous commands and commands that cannot be statically analyzed in auto permission mode.\n#3522 523d35b Thanks @RealKai42 ! - Deliver background question answers to the agent directly instead of via a saved output file.\n#3522 523d35b Thanks @RealKai42 ! - Fix background questions being cancelled as soon as the agent finishes its turn.\n#3549 29e1875 Thanks @wbxl2000 ! - web: polish the style and interaction of Bash commands in the right-side panel.\n#3549 29e1875 Thanks @wbxl2000 ! - web: support selection comments and quote-to-chat in the diff and per-turn changes panels.\n#3459 b6b9b37 Thanks @RealKai42 ! - Subagent final messages are no longer bounced back for expansion when they are under 200 characters.\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix file change previews showing added/removed lines that never existed when the same file is edited multiple times in one turn.\n#3549 29e1875 Thanks @wbxl2000 ! - web: pressing Esc no longer closes the right detail panel.\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix the default thinking effort in settings not being settable to the highest level (Max).\n#3549 29e1875 Thanks @wbxl2000 ! - web: rename the three permission modes to Always Ask / Ask When Needed / Never Ask and update their Chinese and English descriptions.\n#3473 d567a6a Thanks @7Sageer ! - Show a warning after switching to Ask When Needed or Never Ask mode.\n#3498 a3b48a7 Thanks @7Sageer ! - Fix print mode ( kimi -p ) ignoring the KIMI_DISABLE_TELEMETRY environment variable.\n#3531 51bd52a Thanks @7Sageer ! - Fix print mode ( kimi -p ) losing session records when the run exits on an error or a termination signal.\n#3549 29e1875 Thanks @wbxl2000 ! - web: restyle selection quote pills from blue to the same neutral ink as other mentions, with a vertical bar separating the quote and comment.\n#3549 29e1875 Thanks @wbxl2000 ! - web: shorten selection quote pill excerpts to at most 12 characters.\n#3549 29e1875 Thanks @wbxl2000 ! - web: restore selection quoting — after selecting text in a message or file preview, you can add a comment or quote it into the chat.\n#3478 052e98e Thanks @RealKai42 ! - Resuming a subagent by its agent id now works after the session is reopened in a new process; the resumed subagent follows the current permission mode and is matched by its own profile in permission rules.\n#3549 29e1875 Thanks @wbxl2000 ! - web: selection comment bubbles near the bottom of the page now pop above the selection and grow upward, eliminating double scrollbars.\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix selection bubbles displayed over the panel header being unclickable and lacking a hover state.\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix the comment bubble popping up before mouse release when selecting text with a slow drag.\n#3549 29e1875 Thanks @wbxl2000 ! - web: rework selection comment bubble actions into right-aligned Cancel / Add to chat below the input, with an Enter hint on the confirm button.\n#3549 29e1875 Thanks @wbxl2000 ! - web: revamp the selection comment bubble — the comment box supports multi-line input and auto-grows, and the confirm button now matches the chat composer send button.\n#3549 29e1875 Thanks @wbxl2000 ! - web: support selection quoting in the terminal — select text to add a comment or quote it into the chat.\n#3549 29e1875 Thanks @wbxl2000 ! - web: lengthen the hover delay of quote and mention preview cards so merely passing the mouse over them no longer triggers them.\n#3461 8057d30 Thanks @tpoisonooo ! - Tower mode (experimental, KIMI_CODE_EXPERIMENTAL_TOWER=1 ): fix tower mode never starting when enabled through [experimental] tower = true in config.toml instead of the environment variable. When tower mode cannot be enabled, the error now names the actual blocker — the disabled experiment, a required restart, or the owning session. When another live session owns the workspace tower, the message also names the owning session\'s title alongside its id. /tower now also works in a directory that is not a git repository — it runs git init and commits what is there (an empty initial commit for empty directories).\n#3521 744b718 Thanks @kimi-agent-bot ! - Remove the /dance Easter egg hint from the TUI tips rotation.\n#3549 29e1875 Thanks @wbxl2000 ! - web: fix inaccurate added/removed line counts in per-turn file change summaries after the same file is edited or overwritten multiple times.\n#3549 29e1875 Thanks @wbxl2000 ! - web: per-turn file change cards now show only exact line statistics, and the card no longer appears when statistics are unavailable.'
        },
        {
          'version': '0.40.1',
          'title': '@moonshot-ai/kimi-code@0.40.1',
          'date': '2026-09-02',
          'dateRaw': '2026-09-02T09:33:43Z',
          'tags': [],
          'url': 'https://github.com/MoonshotAI/kimi-code/releases/tag/%40moonshot-ai%2Fkimi-code%400.40.1',
          'body': 'Patch Changes\n- #3469 979baad Thanks @sailist ! - Fix the condition for showing the kimi-cli migration prompt.'
        }
      ]
    },
    {
      'id': 'qoder',
      'name': 'Qoder',
      'vendor': '阿里巴巴',
      'kind': 'qoder',
      'changelogUrl': 'https://docs.qoder.cn/product-overview/qoder-update-log',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '0.4.2',
          'title': '日常优化',
          'date': '2026-09-24',
          'dateRaw': '2026年09月24日',
          'tags': [
            '日常优化',
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n优化\n- 支持设置用户昵称，并在账号信息中展示。\n修复\n- 修复 Prompt Suggestion 处理过程中可能阻塞下一轮请求的问题，建议生成不再影响后续对话的响应。\n- 修复 Side Chat 丢失主会话上下文的问题，侧边对话现在可以正确延续主会话的内容。\n- 修复 Remote Control 中删除会话后未正确同步的问题，会话状态在各端保持一致。\n- 修复共享资源包耗尽后用量页不再展示该资源包的问题，耗尽状态现在会正常显示。\n2026年09月23日'
        },
        {
          'version': '0.4.1',
          'title': '给人和Agent协作的新空间',
          'date': '2026-09-23',
          'dateRaw': '2026年09月23日',
          'tags': [
            '功能',
            '项目与讨论（企业版）',
            '智能体团队（企业版）',
            '云端自动化',
            'Skill 自进化建议',
            '优化'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '给人和Agent协作的新空间\n功能\n- 项目与讨论（企业版） ：现在，你可以与 Agent 在同一空间讨论方案、推进任务，让想法落地。\n- 智能体团队（企业版） ：支持创建和配置 Agent，并将多个 Agent 组成团队，由团队负责人分派工作、协调成员并汇总进展。\n- 云端自动化 ：有可用云环境的账号，可通过对话或配置创建定时任务，在桌面端查看执行记录、继续追问。\n- Skill 自进化建议 ：会话完成后，可从可复用经验中获得 Skill 创建或更新建议；采纳后进入独立会话，确认方案后再执行。可在“设置 → 常规”中管理此功能。\n优化\n- 工作区索引 ：新建本地工作区时，可选择是否建立索引，并查看索引数据处理说明。\n- MCP 配置 ：新增自定义超时设置，可按服务需要调整等待时间，可前往设置-扩展管理-连接器管理进行设置。\n- 网络代理 ：支持使用包含用户名和密码的 HTTP/HTTPS 代理地址，方便连接需要认证的代理服务。\n修复\n- 修复任务运行中切换为完全访问权限后，操作可能卡住的问题。\n- 修复插件列表刷新后，已选择的插件可能被误判为不可用或从菜单中消失的问题。\n- 修复 PDF 预览中部分中文显示异常，以及放大后页面边缘无法完整查看的问题。\n- 修复 Windows 上使用 Git Bash 风格路径的文件无法打开的问题。\n2026年09月20日'
        },
        {
          'version': '0.3.4',
          'title': '日常优化',
          'date': '2026-09-20',
          'dateRaw': '2026年09月20日',
          'tags': [
            '日常优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n修复\n- 修复安全相关问题。\n2026年09月18日'
        },
        {
          'version': '0.3.3',
          'title': 'Sites：通过对话创建和发布网站',
          'date': '2026-09-18',
          'dateRaw': '2026年09月18日',
          'tags': [
            '功能',
            'Sites 建站',
            'PPT 创建与编辑',
            '电脑操控',
            '成就贴纸',
            '回复批注'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': 'Sites：通过对话创建和发布网站\n功能\n- Sites 建站 ：支持选择模板，通过对话创建网站，并在桌面端内预览、发布和管理站点。\n- PPT 创建与编辑 ：支持在桌面端内打开工作区中的 PPTX 文件，直接编辑并保存，可在扩展-插件市场下载PPT插件获得更好的体验。\n- 电脑操控 ：升级至 Computer Use 2.0，带来更流畅的使用体验，并支持 Linux 系统。在设置-电脑操作中开启后即可体验。\n- 成就贴纸 ：新增 7 枚成就贴纸，随使用逐步解锁，等你探索收集。\n- 回复批注 ：在设置-实验功能中开启后，可划选 Agent 回复中的文字并添加到输入框，附加评论，并在后续回复中回引对应批注。\n优化\n- 语音输入 ：支持在输入框内长按鼠标进行语音输入，松开后将转写内容保留在输入框，方便编辑后发送。\n- 发送快捷键 ：支持在设置中选择使用 Enter 或 Cmd/Ctrl+Enter 发送消息。\n- Remote Control ：支持自动同步最近 7 天内更新的本地会话历史，并优化增量同步，减少重复传输。\n- Worktree ：优化大型仓库的起点列表加载和创建准备，减少本地改动较多时出现的加载或创建失败。\n修复\n- 修复升级后 Remote Control 无法恢复连接，以及重新连接时旧消息可能被重复执行的问题。\n- 修复 Side Chat 首轮回复无法正确继承来源会话上下文的问题。\n- 修复会话压缩期间发送消息后，回复可能无法显示的问题。\n- 修复 Windows 更新后，任务栏固定入口仍可能打开旧版本的问题。\n2026年09月12日'
        },
        {
          'version': '0.2.5',
          'title': '日常优化',
          'date': '2026-09-12',
          'dateRaw': '2026年09月12日',
          'tags': [
            '日常优化',
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n优化\n- 文件打开方式：可以根据文件类型选择在桌面端内或系统关联应用打开文件；Qoder 会记住成功使用的打开方式。\n- 实时语音：提升连接的稳定性，降低意外断开的可能。\n- 文件审阅：降低同时展开多个代码差异并打开终端时的 CPU 占用。\n- 创作成就：个人资料页新增 Credits 与活跃数据，并提供连续 7、30、100 天创作成就贴纸。\n修复\n- 修复内置浏览器在不同任务间无法复用网站登录状态的问题。\n- 修复流式回复无法持续自动滚动到最新内容，以及布局变化后回复停留在旧内容的问题。\n- 修复 Computer Use 中文输入异常的问题。\n2026年09月10日'
        },
        {
          'version': '0.2.3',
          'title': '日常优化',
          'date': '2026-09-10',
          'dateRaw': '2026年09月10日',
          'tags': [
            '日常优化',
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n优化\n- Computer Use 执行点击等视觉操作前，会校验截图是否为最新、目标窗口是否仍然一致，提升操作准确性。\n- 优化 Computer Use 的取消与超时处理，长时间运行的操作响应更及时。\n修复\n- 修复 Computer Use 操作结果暂时无法确认时可能重复执行同一操作的问题。\n2026年09月09日'
        },
        {
          'version': '0.2.2',
          'title': '已支持企业专属版账号使用',
          'date': '2026-09-09',
          'dateRaw': '2026年09月09日',
          'tags': [
            '已支持企业专属版账号使用',
            '功能',
            '企业专属版登录',
            '网络代理',
            '优化',
            '模型选择'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '已支持企业专属版账号使用\n功能\n- 企业专属版登录 ：适用于已订阅企业专属版的用户。保存组织专属域名并重启应用后，成员登录、模型推理等请求将自动路由至对应的企业专属版实例，无需重复配置。\n- 网络代理 ：新增网络代理配置，支持连接测试，保存后重启生效。\n优化\n- 模型选择 ：新建会话会按账号和运行环境，沿用你最近手动选择的模型。\n- Goal 模式 ：新增 Goal 最大轮次设置，并在停止会话后暂停 Goal 计时。\n- 数据导入 ：优化页面分组、选择项保留和任务恢复逻辑。\n修复\n- 增强远程控制异常自动恢复，修复 VPC 下 Managed SSH 会话失败、移动端 BYOK 模型识别与跨端同步问题。\n- 修复任务准备阶段无法停止、插话时模型被覆盖、冷会话切换模型依赖旧连接等会话问题。\n- 修复 Windows 启动失败并自动进入兼容模式、macOS 小尺寸图标花屏，以及自动化模型列表滚动等问题。\n2026年09月07日'
        },
        {
          'version': '0.2.1',
          'title': '现已支持使用手机进行远程控制',
          'date': '2026-09-07',
          'dateRaw': '2026年09月07日',
          'tags': [
            '功能',
            '移动端远程控制',
            '支持拖入会话引用',
            '优化',
            '多任务性能优化',
            '视觉'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '现已支持使用手机进行远程控制\n功能\n- 移动端远程控制 ：开启后，可以使用手机在电脑端上创建并执行任务。手机端与电脑端共用同一会话，重命名、删除、创建任务分支、继续追问等操作均会双向同步。\n- 支持拖入会话引用 ：把会话直接拖入对话输入框即可引用。\n优化\n- 多任务性能优化 ：同时运行多任务时内存占用与消息链路开销更低。\n- 视觉 ：更新工作区文件空态插画。\n- 对话过程 ：默认不再折叠，你手动开启过的设置会保留。\n修复\n- 修复历史会话注册失败导致无法继续聊天的问题\n- 修复回退重发时最后一条消息短暂消失的问题\n- 修复会话输出过程中持续闪烁的问题\n- 修复 Markdown 中符号与公式渲染异常的问题\n2026年09月05日'
        },
        {
          'version': '0.1.8',
          'title': 'BYOK 现已支持自定义 Base URL',
          'date': '2026-09-05',
          'dateRaw': '2026年09月05日',
          'tags': [
            '功能',
            '优化',
            '更便捷的检索',
            '安装器',
            '扩展市场',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': 'BYOK 现已支持自定义 Base URL\n功能\n- BYOK 自定义 API 地址 ：个人版 BYOK 支持填写自定义 Base URL，可接入 OpenAI / Anthropic 兼容协议的模型服务。\n优化\n- 更便捷的检索 ：支持在 Markdown 预览界面直接搜索。\n- 安装器 ：改进 Windows 进程检测与安装恢复。\n- 扩展市场 ：优化分类切换与详情页展示。\n修复\n- 修复上下文压缩后消息丢失的问题\n- 修复 MCP OAuth 协商失败的诊断提示\n- 修复 Worktree 初始化失败无法重试的问题\n- 修复实时语音浮窗位置不保留的问题\n2026年09月03日'
        },
        {
          'version': '0.1.6',
          'title': '日常优化',
          'date': '2026-09-03',
          'dateRaw': '2026年09月03日',
          'tags': [
            '日常优化',
            '功能',
            '会话批量归档',
            '产物独立窗口预览',
            '终端链接跳转',
            '优化'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n功能\n- 会话批量归档 ：侧栏支持多选会话批量归档，工作模式可快捷切换。\n- 产物独立窗口预览 ：Agent 生成的产物支持在独立窗口中预览。\n- 终端链接跳转 ：终端中的 HTTP/HTTPS 链接可直接点击打开。\n优化\n- 优化应用启动速度和长会话的流式渲染性能。\n- 缩短新任务首次发送的响应等待。\n修复\n- 修复偶发的重复登录，以及浏览器授权返回后无法再次登录的问题。\n- 修复手动选择的模型被自动切换回默认模型的问题。\n- 修复调整分栏后会话消息互相叠印的问题。\n- 修复会话较多时侧栏拖拽排序失效的问题。\n2026年09月01日'
        },
        {
          'version': '0.1.4',
          'title': '日常优化',
          'date': '2026-09-01',
          'dateRaw': '2026年09月01日',
          'tags': [
            '日常优化',
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n优化\n- Windows 更新后自动清理旧版本备份，释放磁盘空间。\n修复\n- 修复 Windows 快速更新后任务栏图标显示为空白的问题。\n- 修复 macOS 从睡眠状态唤醒后插件被标记为无响应的问题。\n2026年08月31日'
        },
        {
          'version': '0.1.3',
          'title': '优化',
          'date': '2026-08-31',
          'dateRaw': '2026年08月31日',
          'tags': [
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '优化\n- 优化 Windows 安装与更新的可靠性\n- 优化长会话的流式渲染与持久化性能，回复更流畅\n- 降低插件与 MCP 状态变化引起的重复刷新，减少 CPU 与内存占用\n- 工作区文件树默认收起，并记住你的展开偏好\n修复\n- 修复支持视觉能力的自定义模型无法处理图片输入的问题\n- 修复附件的结构化上下文在发送时丢失的问题\n- 修复机器上存在已终止的残留进程时，Windows 安装被误判阻断的问题\n- 修复首次安装时关闭登录或引导窗口后，主窗口仍会显示的问题\n2026年08月28日'
        },
        {
          'version': '0.1.2',
          'title': '企业管控与稳定性优化',
          'date': '2026-08-28',
          'dateRaw': '2026年08月28日',
          'tags': [
            '企业管控与稳定性优化',
            '功能',
            '优化',
            '修复'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '企业管控与稳定性优化\n功能\n- 支持企业扩展与 MCP 策略管控。\n优化\n- 提升新会话首次发送与应用启动速度。\n- 优化首次启动数据导入，支持并行处理，单项异常不再阻断整批导入。\n- 扩展安装失败时提供更明确的原因和处理建议。\n- 优化知识中心登录态同步。\n修复\n- 修复输入历史覆盖当前内容、浏览历史后草稿丢失的问题。\n- 修复调整分栏后消息重叠、回复产物关联到错误会话的问题。\n- 修复大量会话下侧栏排序和置顶失败的问题。\n- 修复中文 SSH Host 无法识别、切换工作模式后 Remote SSH 会话消失的问题。\n- 修复不同工作模式窗口之间主题互相覆盖的问题。\n- 修复 Windows 托盘图标、首次登录窗口、语言切换及安装更新相关问题。\n2026年08月27日'
        },
        {
          'version': '0.1.1',
          'title': '日常优化',
          'date': '2026-08-27',
          'dateRaw': '2026年08月27日',
          'tags': [
            '日常优化',
            '优化',
            '语音输入',
            '安装体验',
            'MCP 连接',
            '启动反馈'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '日常优化\n优化\n- 语音输入 ：新增实时语音额度耗尽提示，及时了解可用额度。\n- 安装体验 ：安装器支持动态展示产品名称与下载链接；Linux 首装跳过引导流程。\n- MCP 连接 ：优化 stdio 授权连接生命周期与重试机制，连接管理更可靠。\n- 启动反馈 ：启动失败页新增问题反馈入口，遇到问题可直接反馈。\n修复\n- 修复首次启动重复弹出登录窗口的问题，认证校准不再阻塞主窗口启动。\n- 修复语音草稿在输入框重复渲染，以及退出时硬件资源清理异常的问题。\n- 修复 Windows 覆盖安装与卸载的多个问题，安装器文案展示更准确。\n- 修复首次登录时语言切换与官网入口异常的问题。\n- 修复用量状态标签换行、工作区侧边栏排序和限定身份卡文案等界面问题。\n- 修复 Windows 运行时冷启动误判的问题。\n2026年08月27日'
        },
        {
          'version': '0.1.0',
          'title': '你好，世界！',
          'date': '2026-08-27',
          'dateRaw': '2026年08月27日',
          'tags': [
            '你好，世界！',
            '核心能力'
          ],
          'url': 'https://docs.qoder.cn/product-overview/qoder-update-log',
          'body': '你好，世界！\n全新 Qoder，今天正式发布。Qoder 是一个面向所有人、以编程智能体为核心引擎的智能体平台，从想法到实现，轻松搞定。 自 2025 年 8 月 Qoder IDE 首发以来，Qoder 全球用户已超 600 万，服务超 10 万家企业。过去一年，我们看到越来越清晰的趋势： Coding 正在成为数字世界的通用能力。用软件解决问题的人，不再只是开发者，已经扩展到每一个想把想法变成现实的人。与此同时，人与智能体协作的方式也在改变：工作的对象从代码工程变为智能体任务，工作的姿势从亲手生产变为委派与验收。 人们需要的，是一个常驻自己机器、以任务为中心，并且可观察、可干预的操作界面。全新 Qoder，就是我们给出的答案。 核心能力\n- SOTA 模型与多模型策略 ：内置全球顶尖模型，不绑定单一模型。你可以按任务自主选择，也可以交给 Auto 智能调度引擎，在效果、速度和成本之间自动匹配更合适的模型。\n- Harness，把“想得到”变成“做得到” ：Qoder 的 Harness 支持规划、执行、验证与纠错的持续循环。面对长任务和复杂任务，它能记住上下文、根据真实结果调整策略，必要时重试或回滚，并通过分级权限与工具白名单守住安全边界。\n- 在真实任务环境里，把事情做完 ：智能体的工作环境不局限于对话框和代码工程。通过 Browser Use 和 Computer Use 能力，Qoder 可以像你一样操作网页与桌面应用，让智能体在真实环境里把事情做完。\n- 生态扩展与连接器，把智能体的触角伸远 ：原生集成 30+ 插件、20,000+ 技能与 20+ 连接器，把工作台接进你真实的工作环境：代码托管、文档与数据源、协作沟通工具，以及数据库、内部 API、工单与监控这些真正跑着业务的系统，端到端把事情办成。\n- 主动式，从“你驱动它”到“它提醒你” ：没人处理的报错、缺少测试的改动、前后不一致的逻辑，Qoder 会主动带到你面前，由你决定做不做。你依然是做决定的人，但不必再是想起一切的人。\n这只是开始。 我们的方向很清楚：让人必须介入的次数越来越少，同时让结果越来越可信。当 Coding 成为数字世界的通用能力，拥有一个 Coding Agent，就等于拥有把想法变成现实的能力。 我们希望这个能力，属于每一个人。\n上一页\nQoder CN IDE 更新日志\n下一页\nQoder CN\n立即体验 Qoder\nQoder 移动端\n集成 Qoder Agent\nAgent SDK Cloud Agents\nAI 员工\nQoderWake\n条款\n服务条款 隐私政策\n其他使用方式\nIDE JetBrains 插件 CLI\n立即获取\n企业版 价格 下载\n资源\n能力市场 活动 文档 博客 常见问题 更新日志\n联系我们\n联系我们 论坛 千问AI平台\n© 2026 通义云启（杭州）信息技术有限公司　浙ICP备2023034206号-81\nQoder CN home page\nzh\nQoder CN 系列\n网站\n论坛\n博客\n产品概述\n- 什么是 Qoder CN 系列\n- 账号与订阅\n- 客户案例\n快速入门\n- Qoder CN IDE 快速入门\n- 个人版快速入门\n- Qoder CN（全家桶）企业 VPC 版入门指南\n动态与公告\n- Qoder CN 系列更新日志\n- Qoder CN 更新日志\n- Qoder CN IDE 更新日志\n- Qoder CN JetBrains 插件更新日志\n- Qoder CN CLI 更新日志\n- Agent SDK 更新日志\n- Cloud Agents CN 更新日志\n- QoderWake CN 更新日志\n- QoderWork CN 更新日志\n- Qoder CN VS Code 插件更新日志\n- Visual Studio 端更新日志\n- 产品公告\n计费\n- 计费说明\n- Credits\n- 续费说明\n- 变配说明\n- 订单到期影响\n- 退费说明\n- 账单查询\n事件\n- Qwen 系列模型特惠折扣\n- 每日领取 100 Credits\n- Qwen3.8-Flash 限时免费使用\n- 9 月开通专业版 / 高级版，首月 Credits 翻倍，续费加赠 1,000\n- 全新 Qoder 正式上线：限时福利\n- Qoder 一周年 × Qwen3.8-Max 正式上线：多重好礼限时领\nself.__next_f.push([1,\'3:[\\\'$\\\',\\\'$L14\\\',null,{\\\'theme\\\':\\\'mint\\\',\\\'config\\\':{\\\'$schema\\\':\\\'https://mintlify.com/docs.json\\\',\\\'name\\\':\\\'Qoder CN\\\',\\\'description\\\':\\\'Qoder CN 官方文档站点 - Agentic 编码平台\\\',\\\'favicon\\\':\\\'/favicon.png\\\',\\\'logo\\\':{\\\'light\\\':\\\'/logo/qoder-cn-logo-light.png\\\',\\\'dark\\\':\\\'/logo/qoder-cn-logo-dark.png\\\',\\\'href\\\':\\\'https://qoder.cn/\\\'},\\\'redirects\\\':[{\\\'source\\\':\\\'/user-guide\\\',\\\'destination\\\':\\\'/user-guide/codebase-indexing\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/user-guide/index\\\',\\\'destination\\\':\\\'/user-guide/codebase-indexing\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide\\\',\\\'destination\\\':\\\'/en/user-guide/codebase-indexing\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/index\\\',\\\'destination\\\':\\\'/en/user-guide/codebase-indexing\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/product-overview/enterprise-users\\\',\\\'destination\\\':\\\'/account/teams/get-started\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/product-overview/enterprise-users\\\',\\\'destination\\\':\\\'/en/account/teams/get-started\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/\\\',\\\'destination\\\':\\\'/product-overview/introduction-of-qodercn\\\',\\\'permanent\\\':false},{\\\'source\\\':\\\'/index\\\',\\\'destination\\\':\\\'/product-overview/introduction-of-qodercn\\\',\\\'permanent\\\':false},{\\\'source\\\':\\\'/en\\\',\\\'destination\\\':\\\'/en/product-overview/introduction-of-qodercn\\\',\\\'permanent\\\':false},{\\\'source\\\':\\\'/en/index\\\',\\\'destination\\\':\\\'/en/product-overview/introduction-of-qodercn\\\',\\\'permanent\\\':false},{\\\'source\\\':\\\'/user-guide/qodercn-quest-overview\\\',\\\'destination\\\':\\\'/user-guide/quest/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/user-guide/qodercn-quest-quickstart\\\',\\\'destination\\\':\\\'/user-guide/quest/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/user-guide/qodercn-quest-spec\\\',\\\'destination\\\':\\\'/user-guide/quest/spec-driven\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/user-guide/qodercn-quest-vibe\\\',\\\'destination\\\':\\\'/user-guide/quest/agent-mode\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/user-guide/qodercn-quest-voice\\\',\\\'destination\\\':\\\'/user-guide/quest/qoder-voice\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/qodercn-quest-overview\\\',\\\'destination\\\':\\\'/en/user-guide/quest/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/qodercn-quest-quickstart\\\',\\\'destination\\\':\\\'/en/user-guide/quest/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/qodercn-quest-spec\\\',\\\'destination\\\':\\\'/en/user-guide/quest/spec-driven\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/qodercn-quest-vibe\\\',\\\'destination\\\':\\\'/en/user-guide/quest/agent-mode\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/user-guide/qodercn-quest-voice\\\',\\\'destination\\\':\\\'/en/user-guide/quest/qoder-voice\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/zh/qoder-plugins\\\',\\\'destination\\\':\\\'/qoder-plugins\\\',\\\'permanent\\\':false},{\\\'source\\\':\\\'/cli/what-is-qoder-cli-cn\\\',\\\'destination\\\':\\\'/cli/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/what-is-qoder-cli-cn\\\',\\\'destination\\\':\\\'/en/cli/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/qoder-cli-cn-get-started-quickly\\\',\\\'destination\\\':\\\'/cli/quickstart\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/qoder-cli-cn-get-started-quickly\\\',\\\'destination\\\':\\\'/en/cli/quickstart\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/using-the-cli\\\',\\\'destination\\\':\\\'/cli/run-tasks\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/using-the-cli\\\',\\\'destination\\\':\\\'/en/cli/run-tasks\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/model\\\',\\\'destination\\\':\\\'/cli/models\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/model\\\',\\\'destination\\\':\\\'/en/cli/models\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/command\\\',\\\'destination\\\':\\\'/cli/commands\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/command\\\',\\\'destination\\\':\\\'/en/cli/commands\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/subagent\\\',\\\'destination\\\':\\\'/cli/built-ins\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/subagent\\\',\\\'destination\\\':\\\'/en/cli/built-ins\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/plugins\\\',\\\'destination\\\':\\\'/cli/plugins-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/plugins\\\',\\\'destination\\\':\\\'/en/cli/plugins-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/mcp-servers\\\',\\\'destination\\\':\\\'/cli/mcp-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/mcp-servers\\\',\\\'destination\\\':\\\'/en/cli/mcp-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/skills\\\',\\\'destination\\\':\\\'/cli/built-ins\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/skills\\\',\\\'destination\\\':\\\'/en/cli/built-ins\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cli/hook\\\',\\\'destination\\\':\\\'/cli/hooks-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cli/hook\\\',\\\'destination\\\':\\\'/en/cli/hooks-reference\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/qoderwake/get-started-quickly\\\',\\\'destination\\\':\\\'/cloud-agents/quickstart\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/qoderwake/get-started-quickly\\\',\\\'destination\\\':\\\'/en/cloud-agents/quickstart\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-list-events\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/events/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-send-event\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/events/send\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-stream-events\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/events/stream\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/events-stream\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/events/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-add-resource\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/add\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/list-session-resources-new\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-get-resource\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/get\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-update-resource\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/update\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-delete-resource\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/delete\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-github-repositories\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/resources/github-repositories\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-list-threads\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/threads/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-get-thread\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/threads/get\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-archive-thread\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/threads/archive\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-list-thread-events\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/threads/events/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/cloud-agents/sessions-stream-thread-events\\\',\\\'destination\\\':\\\'/cloud-agents/api/sessions/threads/events/stream\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-list-events\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/events/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-send-event\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/events/send\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-stream-events\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/events/stream\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/events-stream\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/events/overview\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-add-resource\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/add\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/list-session-resources-new\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-get-resource\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/get\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-update-resource\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/update\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-delete-resource\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/delete\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-github-repositories\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/resources/github-repositories\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-list-threads\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/threads/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-get-thread\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/threads/get\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-archive-thread\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/threads/archive\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-list-thread-events\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/threads/events/list\\\',\\\'permanent\\\':true},{\\\'source\\\':\\\'/en/cloud-agents/sessions-stream-thread-events\\\',\\\'destination\\\':\\\'/en/cloud-agents/api/sessions/threads/events/stream\\\',\\\'permanent\\\':true}],\\\'appearance\\\':{\\\'colorScheme\\\':{\\\'primary\\\':\\\'#27BD51\\\',\\\'light\\\':\\\'#27BD51\\\',\\\'dark\\\':\\\'#27BD51\\\',\\\'default\\\':\\\'light\\\'},\\\'theme\\\':\\\'mint\\\',\\\'icons\\\':{\\\'library\\\':\\\'lucide\\\'},\\\'codeblocks\\\':\\\'system\\\'},\\\'navigation\\\':{\\\'languages\\\':[{\\\'language\\\':\\\'zh\\\',\\\'navbar\\\':{\\\'primary\\\':{\\\'type\\\':\\\'button\\\',\\\'label\\\':\\\'下载\\\',\\\'href\\\':\\\'https://qoder.cn/download\\\'}},\\\'anchors\\\':[{\\\'anchor\\\':\\\'网站\\\',\\\'icon\\\':\\\'globe\\\',\\\'href\\\':\\\'https://qoder.cn/\\\'},{\\\'anchor\\\':\\\'论坛\\\',\\\'icon\\\':\\\'messages-square\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma?spm=5176.28644950.0.0.30d03ea8iCIwBP\\\'},{\\\'anchor\\\':\\\'博客\\\',\\\'icon\\\':\\\'newspaper\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma/article\\\'}],\\\'tabs\\\':[{\\\'tab\\\':\\\'Qoder CN 系列\\\',\\\'groups\\\':[{\\\'group\\\':\\\'产品概述\\\',\\\'pages\\\':[\\\'product-overview/introduction-of-qodercn\\\',{\\\'group\\\':\\\'账号与订阅\\\',\\\'pages\\\':[\\\'product-overview/qoder-cn-ide-jetbrains\\\',\\\'product-overview/account-and-subscription\\\',{\\\'group\\\':\\\'Qoder CN （原灵码）账号与订阅\\\',\\\'pages\\\':[\\\'product-overview/qoder-cn-account-and-subscription\\\',\\\'product-overview/qoder-cn-qoder-cn\\\',\\\'product-overview/qoder-cn-enterprise-vpc\\\',\\\'product-overview/qoder-cn-original-spirit-code-enterprise-standard-edition-upgrade-guide\\\',\\\'product-overview/comparison-between-original-lingma-and-qoder-cn-for-enterprise\\\']},\\\'product-overview/account-subscription-faq\\\']},{\\\'group\\\':\\\'客户案例\\\',\\\'pages\\\':[\\\'product-overview/customer-case\\\',\\\'product-overview/60-percent-of-developers-use-qoder-cn-in-china-insurance\\\',\\\'product-overview/30-percent-of-code-is-generated-by-ai-in-icbu\\\',\\\'product-overview/hello-group-fully-connected-to-qoder-cn\\\',\\\'product-overview/ai-driven-r-d-mode-upgrade-in-landray\\\',\\\'product-overview/hundreds-of-developers-use-qoder-cn-33-percent-code-by-ai-finv\\\',\\\'product-overview/over-90-percent-of-developers-in-gaiaworks-use-qoder-cn\\\',\\\'product-overview/together-we-pioneer-ai-and-embrace-the-new-era\\\',\\\'product-overview/uncover-how-ai-developer-boosts-live-streaming-efficiency\\\',\\\'product-overview/fudian-bank-from-go-digital-to-all-in-ai\\\',\\\'product-overview/nio-qoder-cn-boosts-engineering-efficiency-with-70-code-generated-by-ai\\\',\\\'product-overview/yonyou-technology\\\',\\\'product-overview/icbc-joins-hands-with-ali-tong-yi-ling-code-to\\\',\\\'product-overview/support-15000-engineers-ping-an-group-s-self-developed-ai-coding-tool-introduced-tongyi-spirit-code-to-enhance-continuation-function\\\',\\\'product-overview/guangdong-wen-s-group-s-research-and-development-efficiency-increase-10-times-12-new-storage-code-ai-generation-58-adoption-rate\\\']}]},{\\\'group\\\':\\\'快速入门\\\',\\\'pages\\\':[\\\'getting-started/qodercn-ide-get-started\\\',\\\'getting-started/individual-edition-quick-start\\\',\\\'getting-started/qoder-cn-vpc\\\']},{\\\'group\\\':\\\'动态与公告\\\',\\\'pages\\\':[\\\'product-overview/qoder-cn-update-log\\\',\\\'product-overview/qoder-update-log\\\',\\\'product-overview/qoder-cn-ide-update-log\\\',\\\'product-overview/changelogs-jetbrains\\\',\\\'product-overview/qoder-cn-cli\\\',\\\'product-overview/qoder-agent-sdk-update-log\\\',\\\'product-overview/cloud-agents-cn-update-log\\\',\\\'product-overview/qoderwake-cn-update-log\\\',\\\'product-overview/qoderwork-cn-update-log\\\',\\\'product-overview/qoder-cn-vscode-update-log\\\',\\\'product-overview/visual-studio-side-update-log\\\',{\\\'group\\\':\\\'产品公告\\\',\\\'pages\\\':[\\\'product-overview/model-consumption-reference-update\\\',\\\'product-overview/quest-retirement-notice\\\',\\\'product-overview/qoder-cn-windows-7-windows-8-windows-8-1\\\']}]},{\\\'group\\\':\\\'计费\\\',\\\'pages\\\':[\\\'product-overview/billing-description\\\',\\\'product-overview/credits\\\',\\\'product-overview/renewal-description\\\',\\\'product-overview/change-description\\\',\\\'product-overview/order-expiration-impact\\\',\\\'product-overview/refund-description\\\',\\\'product-overview/bill-query\\\']},{\\\'group\\\':\\\'事件\\\',\\\'pages\\\':[\\\'product-overview/qwen-3-7-series-model-staggering-discount\\\',\\\'events/100credits\\\',\\\'events/flashoffer\\\',\\\'events/bogo\\\',\\\'events/newqoderlaunch\\\',\\\'events/qwen-max\\\',\\\'events/qwen-max-preview\\\',\\\'product-overview/qwen3-7-max-limited-time-offer\\\',\\\'product-overview/daily-check-in-100-credits-reward-program-terms\\\',\\\'product-overview/qoderwork-cn-new-user-credits-claim-and-referral-reward-program-terms-and-conditions\\\']}]},{\\\'tab\\\':\\\'Qoder CN\\\',\\\'groups\\\':[{\\\'group\\\':\\\'入门指南\\\',\\\'pages\\\':[\\\'qoder/overview\\\',{\\\'group\\\':\\\'安装指南\\\',\\\'pages\\\':[\\\'qoder/install-macos\\\',\\\'qoder/install-windows\\\']},\\\'qoder/quickstart\\\',\\\'qoder/vpc\\\']},{\\\'group\\\':\\\'功能说明\\\',\\\'pages\\\':[\\\'qoder/new-task\\\',{\\\'group\\\':\\\'模型选择\\\',\\\'pages\\\':[\\\'qoder/model-selector\\\',\\\'qoder/custom-models\\\']},\\\'qoder/task-management\\\',\\\'qoder/data-import\\\',{\\\'group\\\':\\\'对话与输入\\\',\\\'pages\\\':[\\\'qoder/voice-input\\\',\\\'qoder/approval-and-sandbox\\\',\\\'qoder/context-compaction\\\']},{\\\'group\\\':\\\'工具与操作\\\',\\\'pages\\\':[\\\'qoder/browser\\\',\\\'qoder/review-and-commit\\\',\\\'qoder/terminal-and-sandbox\\\',\\\'qoder/computer-use\\\',\\\'qoder/app-snapshots\\\']},{\\\'group\\\':\\\'安全与授权\\\',\\\'pages\\\':[\\\'qoder/security-and-authorization\\\']},{\\\'group\\\':\\\'环境与执行\\\',\\\'pages\\\':[\\\'qoder/execution-environments\\\',\\\'qoder/plan-driven\\\',\\\'qoder/goal-driven\\\']},\\\'qoder/automations\\\',\\\'qoder/sites\\\',\\\'qoder/presentations\\\',{\\\'group\\\':\\\'知识中心\\\',\\\'pages\\\':[\\\'qoder/repo-wiki\\\',\\\'qoder/knowledge-base\\\']},\\\'qoder/memory\\\',\\\'qoder/desktop-pet\\\',\\\'qoder/code-security\\\',\\\'qoder/better-harness\\\',\\\'qoder/china-mobile-edition\\\']},{\\\'group\\\':\\\'协作\\\',\\\'pages\\\':[\\\'qoder/projects\\\',\\\'qoder/discussions\\\']},{\\\'group\\\':\\\'扩展能力\\\',\\\'pages\\\':[\\\'qoder/skills\\\',\\\'qoder/plugins\\\',\\\'qoder/connectors\\\',\\\'qoder/hooks\\\',\\\'qoder/subagents\\\',\\\'qoder/custom-agents\\\',\\\'qoder/custom-agent-teams\\\',\\\'qoder/extension-publishing\\\']},{\\\'group\\\':\\\'配置\\\',\\\'pages\\\':[\\\'qoder/settings\\\',\\\'qoder/keyboard-shortcuts\\\',\\\'qoder/network-proxy\\\']},{\\\'group\\\':\\\'支持\\\',\\\'pages\\\':[\\\'qoder/faq\\\',\\\'qoder/troubleshooting\\\',\\\'qoder/feedback\\\']}]},{\\\'tab\\\':\\\'Qoder CN IDE\\\',\\\'groups\\\':[{\\\'group\\\':\\\'产品概述\\\',\\\'pages\\\':[\\\'user-guide/what-is-qoder-cn\\\']},{\\\'group\\\':\\\'快速入门\\\',\\\'pages\\\':[\\\'user-guide/installation-and-login-guide\\\',\\\'user-guide/compatible-ide-and-system\\\',\\\'user-guide/installation-guide\\\']},{\\\'group\\\':\\\'用户指南\\\',\\\'pages\\\':[{\\\'group\\\':\\\'模型\\\',\\\'pages\\\':[\\\'user-guide/model-selector\\\',\\\'user-guide/custom-model\\\']},{\\\'group\\\':\\\'Editor\\\',\\\'pages\\\':[\\\'user-guide/overview-of-chat\\\',\\\'user-guide/ask\\\',\\\'user-guide/agent\\\',\\\'user-guide/next-edit-suggestion\\\',\\\'user-guide/inline-chat\\\',\\\'user-guide/tools\\\',\\\'user-guide/ai-completion-guidlines\\\']},{\\\'group\\\':\\\'Quest\\\',\\\'pages\\\':[\\\'user-guide/quest/overview\\\',\\\'user-guide/quest/agent-mode\\\',\\\'user-guide/quest/experts-mode\\\',\\\'user-guide/quest/goal-driven\\\',\\\'user-guide/quest/spec-driven\\\',\\\'user-guide/quest/scheduled-tasks\\\',\\\'user-guide/quest/review-and-commit\\\',\\\'user-guide/quest/terminal-and-sandbox\\\',\\\'user-guide/quest/task-management\\\',\\\'user-guide/quest/execution-environments\\\',\\\'user-guide/quest/supabase\\\',\\\'user-guide/quest/qoder-voice\\\']},{\\\'group\\\':\\\'知识中心\\\',\\\'pages\\\':[\\\'user-guide/knowledge-engine/overview\\\',\\\'user-guide/repo-wiki\\\',\\\'user-guide/knowledge-engine/knowledge-cards\\\',\\\'user-guide/knowledge-engine/memory\\\']},{\\\'group\\\':\\\'代码安全\\\',\\\'pages\\\':[\\\'ide/security\\\',\\\'qoder-security-guide\\\',\\\'qoder-case-security\\\']},\\\'user-guide/knowledge-engine/better-harness\\\']},{\\\'group\\\':\\\'上下文\\\',\\\'pages\\\':[{\\\'group\\\':\\\'输入增强\\\',\\\'pages\\\':[\\\'user-guide/context\\\',\\\'user-guide/context/voice-input\\\',\\\'user-guide/context/optimize-prompt\\\']},\\\'user-guide/codebase-indexing\\\',\\\'user-guide/rules\\\']},{\\\'group\\\':\\\'扩展能力\\\',\\\'pages\\\':[{\\\'group\\\':\\\'内置智能体\\\',\\\'pages\\\':[\\\'user-guide/browser-agent\\\',\\\'user-guide/qodercn-planning-agent\\\',\\\'user-guide/code-review-agent\\\',\\\'user-guide/computer-use-agent\\\']},\\\'user-guide/custom-agent\\\',\\\'user-guide/skills\\\',\\\'qoder-plugins\\\',\\\'user-guide/guide-for-using-mcp\\\',\\\'user-guide/hooks\\\',\\\'user-guide/deeplinks\\\',\\\'user-guide/canvas\\\',\\\'user-guide/custom-commands\\\']},{\\\'group\\\':\\\'配置\\\',\\\'pages\\\':[\\\'user-guide/plug-in-configuration-guide\\\',\\\'user-guide/network-proxy-configuration\\\']},{\\\'group\\\':\\\'服务支持\\\',\\\'pages\\\':[\\\'support/faq\\\',\\\'support/troubleshooting-guide\\\',\\\'support/description-of-terminal-execution-exception\\\',\\\'support/faq-mcp\\\',\\\'support/service-agreement-and-privacy-policy\\\']}]},{\\\'tab\\\':\\\'Qoder CN CLI\\\',\\\'groups\\\':[{\\\'group\\\':\\\'开始使用\\\',\\\'pages\\\':[\\\'cli/overview\\\',\\\'cli/installation\\\',\\\'cli/authentication\\\',\\\'cli/quickstart\\\']},{\\\'group\\\':\\\'核心概念\\\',\\\'pages\\\':[\\\'cli/how-it-works\\\',\\\'cli/working-modes\\\',\\\'cli/config-scope\\\',\\\'cli/how-memory-works\\\',\\\'cli/models\\\']},{\\\'group\\\':\\\'使用 Qoder CLI\\\',\\\'pages\\\':[{\\\'group\\\':\\\'开始一个任务\\\',\\\'pages\\\':[\\\'cli/run-tasks\\\',\\\'cli/common-tasks\\\',\\\'cli/plan-mode\\\',\\\'cli/repo-wiki\\\']},{\\\'group\\\':\\\'任务自动化\\\',\\\'pages\\\':[\\\'cli/goal\\\',\\\'cli/scheduled-tasks\\\',\\\'cli/loop\\\',\\\'cli/run-in-scripts\\\']},{\\\'group\\\':\\\'并行协作\\\',\\\'pages\\\':[\\\'cli/parallel-tasks\\\',\\\'cli/agent-teams\\\',\\\'cli/cross-session-messaging\\\',\\\'cli/workflows\\\']},{\\\'group\\\':\\\'管理会话和改动\\\',\\\'pages\\\':[\\\'cli/sessions\\\',\\\'cli/review-changes\\\',\\\'cli/undo-restore\\\']},{\\\'group\\\':\\\'优化使用体验\\\',\\\'pages\\\':[\\\'cli/best-practices\\\',\\\'cli/usage\\\',\\\'cli/insights\\\']}]},{\\\'group\\\':\\\'扩展 Qoder CLI\\\',\\\'pages\\\':[\\\'cli/built-ins\\\',\\\'cli/tools\\\',\\\'cli/memory\\\',\\\'cli/commands\\\',\\\'cli/knowledge-base\\\']},{\\\'group\\\':\\\'集成与远程\\\',\\\'pages\\\':[\\\'cli/acp\\\',\\\'cli/qoder-action\\\',\\\'cli/cloud-mode\\\',\\\'cli/remote-control\\\']},{\\\'group\\\':\\\'配置与安全\\\',\\\'pages\\\':[\\\'cli/settings\\\',\\\'cli/permissions\\\',\\\'cli/network\\\',\\\'cli/vpc\\\',\\\'cli/custom-models\\\',\\\'cli/interface\\\',\\\'cli/output-styles\\\',\\\'cli/security\\\']},{\\\'group\\\':\\\'参考\\\',\\\'pages\\\':[\\\'cli/cli-reference\\\',\\\'cli/slash-reference\\\',\\\'cli/settings-reference\\\',\\\'cli/mcp-reference\\\',\\\'cli/plugins-reference\\\',\\\'cli/hooks-reference\\\',\\\'cli/builtins-reference\\\',\\\'cli/goal-reference\\\',\\\'cli/loop-reference\\\',\\\'cli/scheduled-reference\\\',\\\'cli/glossary\\\']},{\\\'group\\\':\\\'故障排查\\\',\\\'pages\\\':[\\\'cli/troubleshoot-install\\\',\\\'cli/troubleshoot-auth\\\',\\\'cli/troubleshoot-network\\\',\\\'cli/troubleshoot-performance\\\',\\\'cli/troubleshoot-loading\\\',\\\'cli/troubleshoot-config\\\',\\\'cli/troubleshoot-extensions\\\',\\\'cli/troubleshoot-faq\\\']}]},{\\\'tab\\\':\\\'Agent SDK\\\',\\\'groups\\\':[{\\\'group\\\':\\\'快速开始\\\',\\\'pages\\\':[\\\'cli/sdk/overview\\\',\\\'cli/sdk/quick-start\\\',\\\'cli/sdk/integration-scenarios\\\']},{\\\'group\\\':\\\'核心概念\\\',\\\'pages\\\':[\\\'cli/sdk/how-it-works\\\',\\\'cli/sdk/authentication\\\']},{\\\'group\\\':\\\'对话与会话\\\',\\\'pages\\\':[\\\'cli/sdk/multi-turn-conversation\\\',\\\'cli/sdk/streaming-output\\\',\\\'cli/sdk/session-control\\\',\\\'cli/sdk/session-storage\\\',\\\'cli/sdk/checkpoint\\\',\\\'cli/sdk/memory\\\']},{\\\'group\\\':\\\'工具与扩展\\\',\\\'pages\\\':[\\\'cli/sdk/system-prompt\\\',\\\'cli/sdk/tools\\\',\\\'cli/sdk/mcp\\\',\\\'cli/sdk/agents\\\',\\\'cli/sdk/skills\\\',\\\'cli/sdk/plugins\\\']},{\\\'group\\\':\\\'控制与安全\\\',\\\'pages\\\':[\\\'cli/sdk/permissions\\\',\\\'cli/sdk/security-scan\\\',\\\'cli/sdk/hooks\\\',\\\'cli/sdk/model-policy\\\',\\\'cli/sdk/cost-usage\\\']},{\\\'group\\\':\\\'参考\\\',\\\'pages\\\':[\\\'cli/sdk/troubleshooting\\\',\\\'cli/sdk/errors\\\',\\\'cli/sdk/references\\\',\\\'cli/sdk/references-typescript\\\',\\\'cli/sdk/references-python\\\']}]},{\\\'tab\\\':\\\'Cloud Agents CN\\\',\\\'groups\\\':[{\\\'group\\\':\\\'快速入门\\\',\\\'pages\\\':[\\\'cloud-agents/overview\\\',\\\'cloud-agents/api/overview\\\',\\\'cloud-agents/quickstart\\\']},{\\\'group\\\':\\\'构建 Agent\\\',\\\'pages\\\':[\\\'cloud-agents/define-agent\\\',\\\'cloud-agents/agent-tools\\\',\\\'cloud-agents/agent-skills\\\',\\\'cloud-agents/permission-policies\\\']},{\\\'group\\\':\\\'配置 Agent 环境\\\',\\\'pages\\\':[\\\'cloud-agents/environments\\\',\\\'cloud-agents/container-reference\\\',\\\'cloud-agents/ip-addresses\\\']},{\\\'group\\\':\\\'委派任务给 Agent\\\',\\\'pages\\\':[\\\'cloud-agents/sessions\\\',\\\'cloud-agents/vaults\\\',\\\'cloud-agents/multi-agents\\\']},{\\\'group\\\':\\\'集成 Agent\\\',\\\'pages\\\':[\\\'cloud-agents/natural-language-schedule-management\\\',\\\'cloud-agents/message-channel-integration\\\',\\\'cloud-agents/webhooks\\\']},{\\\'group\\\':\\\'管理 Agent 上下文\\\',\\\'pages\\\':[\\\'cloud-agents/files\\\',\\\'cloud-agents/memory-stores\\\',\\\'cloud-agents/dreams\\\']},{\\\'group\\\':\\\'账户\\\',\\\'pages\\\':[\\\'cloud-agents/billing\\\',\\\'cloud-agents/personal-and-enterprise-spaces\\\']},{\\\'group\\\':\\\'最佳实践\\\',\\\'pages\\\':[\\\'cloud-agents/best-practices/cloud-use\\\']},{\\\'group\\\':\\\'公告\\\',\\\'pages\\\':[\\\'cloud-agents/sse-initial-connection-behavior-change\\\']},{\\\'group\\\':\\\'API 参考\\\',\\\'pages\\\':[{\\\'group\\\':\\\'通用约定\\\',\\\'pages\\\':[\\\'cloud-agents/api-overview\\\',\\\'cloud-agents/api-authentication\\\',\\\'cloud-agents/api-pagination\\\',\\\'cloud-agents/generic-data-structure\\\',\\\'cloud-agents/api-errors\\\']},{\\\'group\\\':\\\'Forward Mode\\\',\\\'pages\\\':[\\\'cloud-agents/forward-mode-overview\\\',{\\\'group\\\':\\\'Templates\\\',\\\'pages\\\':[\\\'cloud-agents/create-template\\\',\\\'cloud-agents/list-templates\\\',\\\'cloud-agents/obtain-template-details\\\',\\\'cloud-agents/update-template-merge-patch\\\',\\\'cloud-agents/archive-template\\\',\\\'cloud-agents/clone-template\\\']},{\\\'group\\\':\\\'Identities\\\',\\\'pages\\\':[\\\'cloud-agents/create-identity\\\',\\\'cloud-agents/list-identity\\\',\\\'cloud-agents/get-identity\\\',\\\'cloud-agents/update-identity\\\',\\\'cloud-agents/delete-identity-soft-delete\\\',\\\'cloud-agents/clear-identity\\\',\\\'cloud-agents/disable-identity\\\',\\\'cloud-agents/enable-identity\\\',\\\'cloud-agents/ensure-admin-identity\\\',\\\'cloud-agents/get-identity-stats\\\',\\\'cloud-agents/list-identity-templates\\\',\\\'cloud-agents/query-all-template-configurations-under-this-identity\\\',\\\'cloud-agents/create-update-identity-config\\\',\\\'cloud-agents/get-identity-config\\\',\\\'cloud-agents/query-effective-config-composite-results\\\']},{\\\'group\\\':\\\'Service Account Tokens\\\',\\\'pages\\\':[\\\'cloud-agents/api/service-account-tokens/create\\\',\\\'cloud-agents/api/service-account-tokens/create-identity\\\',\\\'cloud-agents/api/service-account-tokens/revoke\\\']},{\\\'group\\\':\\\'Sessions\\\',\\\'pages\\\':[\\\'cloud-agents/session-and-event-data-structure\\\',\\\'cloud-agents/create-session\\\',\\\'cloud-agents/get-session-details\\\',\\\'cloud-agents/list-session\\\',\\\'cloud-agents/update-session\\\',\\\'cloud-agents/add-session-resource\\\',\\\'cloud-agents/archive-session\\\',\\\'cloud-agents/cancel-the-current-turn\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'cloud-agents/send-a-session-event\\\',\\\'cloud-agents/query-event-history\\\',\\\'cloud-agents/subscribe-to-event-sse\\\']},{\\\'group\\\':\\\'Threads\\\',\\\'pages\\\':[\\\'cloud-agents/list-session-threads\\\',\\\'cloud-agents/get-session-thread\\\',\\\'cloud-agents/archive-session-thread\\\',\\\'cloud-agents/list-session-thread-events\\\',\\\'cloud-agents/stream-session-thread-events\\\']}]},{\\\'group\\\':\\\'Batches\\\',\\\'pages\\\':[\\\'cloud-agents/batches-create\\\',\\\'cloud-agents/batches-list\\\',\\\'cloud-agents/batches-get\\\',\\\'cloud-agents/batches-list-tasks\\\',\\\'cloud-agents/batches-cancel\\\',\\\'cloud-agents/batches-get-output\\\',\\\'cloud-agents/batches-get-error\\\']},{\\\'group\\\':\\\'Schedules\\\',\\\'pages\\\':[\\\'cloud-agents/schedule-schemas\\\',\\\'cloud-agents/create-schedule\\\',\\\'cloud-agents/list-schedule\\\',\\\'cloud-agents/get-schedule\\\',\\\'cloud-agents/update-schedule\\\',\\\'cloud-agents/archive-schedule\\\',\\\'cloud-agents/archive-schedules\\\',\\\'cloud-agents/pause-1\\\',\\\'cloud-agents/restore-1\\\',\\\'cloud-agents/execute-immediately\\\',\\\'cloud-agents/list-all-run-histories\\\',\\\'cloud-agents/get-a-single-run\\\']},{\\\'group\\\':\\\'Webhooks\\\',\\\'pages\\\':[\\\'cloud-agents/api/webhooks/overview\\\',\\\'cloud-agents/api/webhooks/create\\\',\\\'cloud-agents/api/webhooks/list\\\',\\\'cloud-agents/api/webhooks/get\\\',\\\'cloud-agents/api/webhooks/update\\\',\\\'cloud-agents/api/webhooks/delete\\\',\\\'cloud-agents/api/webhooks/enable\\\',\\\'cloud-agents/api/webhooks/disable\\\',\\\'cloud-agents/api/webhooks/test\\\',\\\'cloud-agents/api/webhooks/receive\\\']},{\\\'group\\\':\\\'Channels\\\',\\\'pages\\\':[\\\'cloud-agents/create-a-channel\\\',\\\'cloud-agents/list-channels\\\',\\\'cloud-agents/get-channel\\\',\\\'cloud-agents/update-channel\\\',\\\'cloud-agents/delete-channel\\\',\\\'cloud-agents/create-scan-authorization-session\\\',\\\'cloud-agents/query-scan-session-status\\\',\\\'cloud-agents/list-channel-pairings\\\',\\\'cloud-agents/get-channel-pairing\\\',\\\'cloud-agents/update-channel-pairing\\\',\\\'cloud-agents/pair-channel\\\',\\\'cloud-agents/unpair-channel\\\']},{\\\'group\\\':\\\'Environments\\\',\\\'pages\\\':[\\\'cloud-agents/forward-environments-list\\\',\\\'cloud-agents/forward-environments-search\\\',\\\'cloud-agents/forward-environments-create\\\',\\\'cloud-agents/forward-environments-get\\\',\\\'cloud-agents/forward-environments-update\\\',\\\'cloud-agents/forward-environments-delete\\\',\\\'cloud-agents/forward-environments-schemas\\\']},{\\\'group\\\':\\\'Skills\\\',\\\'pages\\\':[\\\'cloud-agents/forward-skills-list\\\',\\\'cloud-agents/forward-skills-search\\\',\\\'cloud-agents/forward-skills-create\\\',\\\'cloud-agents/forward-skills-get\\\',\\\'cloud-agents/forward-skills-update\\\',\\\'cloud-agents/forward-skills-delete\\\',\\\'cloud-agents/forward-skills-schemas\\\',{\\\'group\\\':\\\'Versions\\\',\\\'pages\\\':[\\\'cloud-agents/forward-skills-versions-create\\\',\\\'cloud-agents/forward-skills-versions-list\\\',\\\'cloud-agents/forward-skills-versions-download\\\',\\\'cloud-agents/forward-skills-versions-get\\\',\\\'cloud-agents/forward-skills-versions-delete\\\']}]},{\\\'group\\\':\\\'Vaults\\\',\\\'pages\\\':[\\\'cloud-agents/forward-vaults-list\\\',\\\'cloud-agents/forward-vaults-search\\\',\\\'cloud-agents/forward-vaults-create\\\',\\\'cloud-agents/forward-vaults-get\\\',\\\'cloud-agents/forward-vaults-delete\\\',\\\'cloud-agents/forward-vaults-schemas\\\',{\\\'group\\\':\\\'Credentials\\\',\\\'pages\\\':[\\\'cloud-agents/forward-credentials-list\\\',\\\'cloud-agents/forward-credentials-create\\\',\\\'cloud-agents/forward-credentials-get\\\',\\\'cloud-agents/forward-credentials-update\\\',\\\'cloud-agents/forward-credentials-delete\\\',\\\'cloud-agents/forward-credentials-schemas\\\']}]},{\\\'group\\\':\\\'Files\\\',\\\'pages\\\':[\\\'cloud-agents/forward-files-list\\\',\\\'cloud-agents/forward-files-search\\\',\\\'cloud-agents/forward-files-upload\\\',\\\'cloud-agents/forward-files-get\\\',\\\'cloud-agents/forward-files-download\\\',\\\'cloud-agents/forward-files-delete\\\',\\\'cloud-agents/forward-files-schemas\\\']},{\\\'group\\\':\\\'Drives\\\',\\\'pages\\\':[\\\'cloud-agents/forward-drives-overview\\\',\\\'cloud-agents/forward-drives-list-entries\\\',\\\'cloud-agents/forward-drives-upload-url\\\',\\\'cloud-agents/forward-drives-download-url\\\',\\\'cloud-agents/forward-drives-delete-entry\\\',\\\'cloud-agents/forward-drives-clear\\\']},{\\\'group\\\':\\\'Memory Stores\\\',\\\'pages\\\':[\\\'cloud-agents/forward-memory-stores-schemas\\\',\\\'cloud-agents/forward-memory-stores-list\\\',\\\'cloud-agents/forward-memory-stores-create\\\',\\\'cloud-agents/forward-memory-stores-get\\\',\\\'cloud-agents/forward-memory-stores-update\\\',\\\'cloud-agents/forward-memory-stores-archive\\\',\\\'cloud-agents/forward-memory-stores-delete\\\',\\\'cloud-agents/forward-memory-stores-list-mounts\\\',\\\'cloud-agents/forward-memory-stores-mount\\\',\\\'cloud-agents/forward-memory-stores-detach\\\',{\\\'group\\\':\\\'Memories\\\',\\\'pages\\\':[\\\'cloud-agents/forward-memory-stores-list-memories\\\',\\\'cloud-agents/forward-memory-stores-create-memory\\\',\\\'cloud-agents/forward-memory-stores-get-memory\\\',\\\'cloud-agents/forward-memory-stores-update-memory\\\',\\\'cloud-agents/forward-memory-stores-delete-memory\\\']},{\\\'group\\\':\\\'Memory Versions\\\',\\\'pages\\\':[\\\'cloud-agents/forward-memory-stores-list-versions\\\',\\\'cloud-agents/forward-memory-stores-get-version\\\',\\\'cloud-agents/forward-memory-stores-redact-version\\\']}]},{\\\'group\\\':\\\'Dreams\\\',\\\'pages\\\':[\\\'cloud-agents/forward-dreams-schemas\\\',\\\'cloud-agents/forward-dreams-create\\\',\\\'cloud-agents/forward-dreams-list\\\',\\\'cloud-agents/forward-dreams-get\\\',\\\'cloud-agents/forward-dreams-cancel\\\',\\\'cloud-agents/forward-dreams-archive\\\']},{\\\'group\\\':\\\'Models\\\',\\\'pages\\\':[\\\'cloud-agents/forward-models-list\\\']},{\\\'group\\\':\\\'Realtime\\\',\\\'pages\\\':[\\\'cloud-agents/forward-realtime-create-conversation\\\',\\\'cloud-agents/forward-realtime-connect\\\']},{\\\'group\\\':\\\'Usage\\\',\\\'pages\\\':[\\\'cloud-agents/list-identity-usage\\\',\\\'cloud-agents/list-template-usage\\\']}]},{\\\'group\\\':\\\'Managed Mode\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Agents\\\',\\\'pages\\\':[\\\'cloud-agents/agents-list\\\',\\\'cloud-agents/agents-search\\\',\\\'cloud-agents/agents-create\\\',\\\'cloud-agents/agents-get\\\',\\\'cloud-agents/agents-update\\\',\\\'cloud-agents/agents-archive\\\',\\\'cloud-agents/agents-list-versions\\\',\\\'cloud-agents/agents-schemas\\\']},{\\\'group\\\':\\\'Sessions\\\',\\\'pages\\\':[\\\'cloud-agents/sessions-create\\\',\\\'cloud-agents/sessions-list\\\',\\\'cloud-agents/sessions-get\\\',\\\'cloud-agents/sessions-update\\\',\\\'cloud-agents/sessions-delete\\\',\\\'cloud-agents/sessions-archive\\\',\\\'cloud-agents/sessions-search\\\',\\\'cloud-agents/sessions-cancel\\\',\\\'cloud-agents/session-schemas\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'cloud-agents/api/sessions/events/list\\\',\\\'cloud-agents/api/sessions/events/send\\\',\\\'cloud-agents/api/sessions/events/stream\\\',\\\'cloud-agents/api/sessions/events/overview\\\']},{\\\'group\\\':\\\'Resources\\\',\\\'pages\\\':[\\\'cloud-agents/api/sessions/resources/add\\\',\\\'cloud-agents/api/sessions/resources/list\\\',\\\'cloud-agents/api/sessions/resources/get\\\',\\\'cloud-agents/api/sessions/resources/update\\\',\\\'cloud-agents/api/sessions/resources/delete\\\',\\\'cloud-agents/api/sessions/resources/github-repositories\\\']},{\\\'group\\\':\\\'Threads\\\',\\\'pages\\\':[\\\'cloud-agents/api/sessions/threads/list\\\',\\\'cloud-agents/api/sessions/threads/get\\\',\\\'cloud-agents/api/sessions/threads/archive\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'cloud-agents/api/sessions/threads/events/list\\\',\\\'cloud-agents/api/sessions/threads/events/stream\\\']}]}]},{\\\'group\\\':\\\'Deployments\\\',\\\'pages\\\':[\\\'cloud-agents/list-deployment\\\',\\\'cloud-agents/deployments-search\\\',\\\'cloud-agents/create-deployment-cron-manual\\\',\\\'cloud-agents/get-deployment\\\',\\\'cloud-agents/update-deployment\\\',\\\'cloud-agents/archive-stop-all-dispatches\\\',\\\'cloud-agents/api/deployments/pause\\\',\\\'cloud-agents/restore\\\',\\\'cloud-agents/trigger-once-manually\\\',\\\'cloud-agents/list-the-runs-for-this-deployment\\\',\\\'cloud-agents/get-single-run\\\',\\\'cloud-agents/list-all-runs-globally\\\',\\\'cloud-agents/global-acquisition-single-run\\\']},{\\\'group\\\':\\\'Dreams\\\',\\\'pages\\\':[\\\'cloud-agents/list-the-dream\\\',\\\'cloud-agents/create-a-dream\\\',\\\'cloud-agents/get-dream-status\\\',\\\'cloud-agents/cancel-pending-running\\\',\\\'cloud-agents/archiving-completed\\\',\\\'cloud-agents/dreams-schemas\\\']},{\\\'group\\\':\\\'Environments\\\',\\\'pages\\\':[\\\'cloud-agents/environments-list\\\',\\\'cloud-agents/environments-search\\\',\\\'cloud-agents/environments-create\\\',\\\'cloud-agents/environments-get\\\',\\\'cloud-agents/environments-update\\\',\\\'cloud-agents/environments-archive\\\',\\\'cloud-agents/environments-delete\\\',\\\'cloud-agents/environments-schemas\\\',{\\\'group\\\':\\\'Work\\\',\\\'pages\\\':[\\\'cloud-agents/pull-work-item-poll-new\\\',\\\'cloud-agents/environments-work-ack\\\',\\\'cloud-agents/environments-work-heartbeat\\\',\\\'cloud-agents/environments-work-update-metadata\\\',\\\'cloud-agents/environments-work-stop\\\',\\\'cloud-agents/environments-work-get\\\',\\\'cloud-agents/environments-work-list\\\',\\\'cloud-agents/environments-work-stats\\\',\\\'cloud-agents/environments-work-schemas\\\']}]},{\\\'group\\\':\\\'Skills\\\',\\\'pages\\\':[\\\'cloud-agents/skills-create\\\',\\\'cloud-agents/skills-list\\\',\\\'cloud-agents/skills-search\\\',\\\'cloud-agents/skills-get\\\',\\\'cloud-agents/skills-update\\\',\\\'cloud-agents/skills-delete\\\',{\\\'group\\\':\\\'Versions\\\',\\\'pages\\\':[\\\'cloud-agents/skills-create-version\\\',\\\'cloud-agents/skills-list-versions\\\',\\\'cloud-agents/skills-get-version-content\\\',\\\'cloud-agents/skills-get-version\\\',\\\'cloud-agents/skills-delete-version\\\']},\\\'cloud-agents/skills-schemas\\\']},{\\\'group\\\':\\\'Vaults\\\',\\\'pages\\\':[\\\'cloud-agents/vaults-list\\\',\\\'cloud-agents/vaults-search\\\',\\\'cloud-agents/vaults-create\\\',\\\'cloud-agents/vaults-get\\\',\\\'cloud-agents/vaults-archive\\\',\\\'cloud-agents/vaults-delete\\\',\\\'cloud-agents/vaults-archive-credential\\\',\\\'cloud-agents/vaults-get-credential\\\',\\\'cloud-agents/vaults-delete-credential\\\',\\\'cloud-agents/vaults-list-credentials\\\',\\\'cloud-agents/vaults-create-credential\\\',\\\'cloud-agents/vaults-update-credential\\\',\\\'cloud-agents/vaults-validate-credential\\\',\\\'cloud-agents/vaults-start-oauth\\\',\\\'cloud-agents/vaults-schemas\\\']},{\\\'group\\\':\\\'Files\\\',\\\'pages\\\':[\\\'cloud-agents/files-list\\\',\\\'cloud-agents/files-search\\\',\\\'cloud-agents/files-upload\\\',\\\'cloud-agents/files-get\\\',\\\'cloud-agents/files-download\\\',\\\'cloud-agents/files-delete\\\',\\\'cloud-agents/files-schemas\\\']},{\\\'group\\\':\\\'Memory Stores\\\',\\\'pages\\\':[\\\'cloud-agents/memory-stores-list\\\',\\\'cloud-agents/memory-stores-search\\\',\\\'cloud-agents/memory-stores-create\\\',\\\'cloud-agents/memory-stores-get\\\',\\\'cloud-agents/memory-stores-update\\\',\\\'cloud-agents/memory-stores-archive\\\',\\\'cloud-agents/memory-stores-delete\\\',\\\'cloud-agents/memory-stores-list-entries\\\',\\\'cloud-agents/memory-stores-create-entry\\\',\\\'cloud-agents/memory-stores-get-entry\\\',\\\'cloud-agents/memory-stores-update-entry\\\',\\\'cloud-agents/memory-stores-delete-entry\\\',\\\'cloud-agents/memory-stores-list-versions\\\',\\\'cloud-agents/memory-stores-get-version\\\',\\\'cloud-agents/memory-stores-redact-version\\\',\\\'cloud-agents/memory-stores-schemas\\\']},{\\\'group\\\':\\\'Models\\\',\\\'pages\\\':[\\\'cloud-agents/list-models-new\\\',\\\'cloud-agents/models-schemas\\\']}]}]}]},{\\\'tab\\\':\\\'移动端\\u0026网页版\\\',\\\'groups\\\':[{\\\'group\\\':\\\'移动端\\\',\\\'pages\\\':[\\\'mobile/app/remote-control\\\',\\\'mobile/app/cloud-tasks\\\',\\\'mobile/app/download\\\']},{\\\'group\\\':\\\'网页版\\\',\\\'pages\\\':[\\\'mobile/web/remote-control\\\',\\\'mobile/web/cloud-tasks\\\']},{\\\'group\\\':\\\'眼镜版\\\',\\\'pages\\\':[\\\'mobile/glasses/qwen-ai-glasses\\\',\\\'mobile/glasses/rokid-ai-glasses\\\']}]},{\\\'tab\\\':\\\'QoderWake CN\\\',\\\'groups\\\':[{\\\'group\\\':\\\'快速上手\\\',\\\'pages\\\':[\\\'qoderwake/overview\\\',\\\'qoderwake/installation\\\']},{\\\'group\\\':\\\'工作管理\\\',\\\'pages\\\':[\\\'qoderwake/conversation-tasks\\\',\\\'qoderwake/task-board\\\',\\\'qoderwake/im-configuration\\\',\\\'qoderwake/automated-tasks\\\']},{\\\'group\\\':\\\'员工资源\\\',\\\'pages\\\':[\\\'qoderwake/manage-wakers\\\',\\\'qoderwake/personal-avatar\\\',\\\'qoderwake/skills-and-integrations\\\',\\\'qoderwake/knowledge-base\\\',\\\'qoderwake/wakerflow\\\',\\\'qoderwake/projects\\\',\\\'qoderwake/memory\\\']},{\\\'group\\\':\\\'最佳实践\\\',\\\'pages\\\':[\\\'qoderwake/data-analyst-story-01\\\',\\\'qoderwake/business-collaboration-story-02\\\',\\\'qoderwake/development-relay-story-03\\\',\\\'qoderwake/github-devops\\\']},{\\\'group\\\':\\\'操作配置\\\',\\\'pages\\\':[\\\'qoderwake/ecs-deployment\\\',\\\'qoderwake/customer-service-best-practices\\\',\\\'qoderwake/at-waker-im-best-practices\\\',\\\'qoderwake/at-waker-experts-best-practices\\\',\\\'qoderwake/best-practices\\\',\\\'qoderwake/settings\\\']},{\\\'group\\\':\\\'云电脑\\\',\\\'pages\\\':[\\\'qoderwake/cloud-computer\\\']},{\\\'group\\\':\\\'命令行工具\\\',\\\'pages\\\':[\\\'qoderwake/cli-reference\\\']},{\\\'group\\\':\\\'支持\\\',\\\'pages\\\':[\\\'qoderwake/troubleshooting\\\']}]},{\\\'tab\\\':\\\'企业版\\\',\\\'groups\\\':[{\\\'group\\\':\\\'快速入门\\\',\\\'pages\\\':[\\\'account/teams/get-started\\\']},{\\\'group\\\':\\\'组织管理\\\',\\\'pages\\\':[\\\'account/teams/members-and-roles\\\',\\\'account/enterprise/user-group-and-billing-group\\\',\\\'product-overview/domain-verification\\\',\\\'product-overview/single-point-verification\\\',\\\'account/enterprise/dingtalk-identity-source\\\',\\\'product-overview/email-invitation\\\',\\\'product-overview/qoder-cn-ram-oauth-ram\\\',\\\'account/teams/analysis\\\',\\\'account/enterprise/knowledge-base\\\',\\\'user-guide/enterprise-knowledge-base-q-a\\\',\\\'account/enterprise/qmind\\\',\\\'user-guide/extensions-management\\\',\\\'account/teams/im-channel-controls\\\',\\\'user-guide/servicerole-for-qodercn-enterprise-vpc\\\',\\\'enterprise/service-account\\\']},{\\\'group\\\':\\\'安全\\\',\\\'pages\\\':[\\\'account/enterprise/mcp\\\',\\\'account/enterprise/audit-log\\\',\\\'user-guide/firewall-configuration\\\',\\\'user-guide/network-configuration\\\',\\\'user-guide/private-domain-control\\\']},{\\\'group\\\':\\\'购买与计费\\\',\\\'pages\\\':[\\\'product-overview/billing-description\\\',\\\'account/enterprise/credits-sharing\\\',\\\'account/enterprise/add-seats\\\']},{\\\'group\\\':\\\'OpenAPI\\\',\\\'pages\\\':[\\\'enterprise/teams-openapi\\\',\\\'enterprise/conventions\\\',\\\'enterprise/obtain-api-key\\\',\\\'enterprise/api-key-security\\\',\\\'enterprise/member-api\\\',\\\'enterprise/group-api\\\',\\\'enterprise/billing-group-api\\\',\\\'enterprise/usage-api\\\',\\\'enterprise/ai-code-metrics\\\']},{\\\'group\\\':\\\'解决方案\\\',\\\'pages\\\':[\\\'enterprise/solutions/ai-native-product-development-workflow\\\',\\\'enterprise/solutions/end-to-end-security\\\',\\\'enterprise/solutions/personalized-ai-agents\\\',\\\'enterprise/solutions/enterprise-ai-platforms\\\',\\\'enterprise/solutions/ai-employees\\\']}]}],\\\'footer\\\':{\\\'copyright\\\':\\\'© 2026 通义云启（杭州）信息技术有限公司　浙ICP备2023034206号-81\\\',\\\'links\\\':[{\\\'header\\\':\\\'立即体验 Qoder\\\',\\\'items\\\':[{\\\'label\\\':\\\'Qoder\\\',\\\'href\\\':\\\'https://qoder.cn/qoder\\\'},{\\\'label\\\':\\\'移动端\\\',\\\'href\\\':\\\'https://qoder.cn/mobile\\\'}]},{\\\'header\\\':\\\'集成 Qoder Agent\\\',\\\'items\\\':[{\\\'label\\\':\\\'Agent SDK\\\',\\\'href\\\':\\\'https://qoder.cn/agent-sdk\\\'},{\\\'label\\\':\\\'Cloud Agents\\\',\\\'href\\\':\\\'https://qoder.cn/cloud-agents\\\'}]},{\\\'header\\\':\\\'AI 员工\\\',\\\'items\\\':[{\\\'label\\\':\\\'QoderWake\\\',\\\'href\\\':\\\'https://qoder.cn/qoderwake\\\'}]},{\\\'header\\\':\\\'条款\\\',\\\'items\\\':[{\\\'label\\\':\\\'服务条款\\\',\\\'href\\\':\\\'https://terms.alicdn.com/legal-agreement/terms/c_platform_service_agreement/20231023213402278/20231023213402278.html\\\'},{\\\'label\\\':\\\'隐私政策\\\',\\\'href\\\':\\\'https://terms.alicdn.com/legal-agreement/terms/privacy_policy_full/20231023213159724/20231023213159724.html\\\'}]},{\\\'header\\\':\\\'其他使用方式\\\',\\\'items\\\':[{\\\'label\\\':\\\'IDE\\\',\\\'href\\\':\\\'https://qoder.cn/ide\\\'},{\\\'label\\\':\\\'JetBrains 插件\\\',\\\'href\\\':\\\'https://qoder.cn/jetbrains\\\'},{\\\'label\\\':\\\'CLI\\\',\\\'href\\\':\\\'https://qoder.cn/cli\\\'}]},{\\\'header\\\':\\\'立即获取\\\',\\\'items\\\':[{\\\'label\\\':\\\'企业版\\\',\\\'href\\\':\\\'https://qoder.cn/enterprise\\\'},{\\\'label\\\':\\\'价格\\\',\\\'href\\\':\\\'https://qoder.cn/pricing\\\'},{\\\'label\\\':\\\'下载\\\',\\\'href\\\':\\\'https://qoder.cn/download\\\'}]},{\\\'header\\\':\\\'资源\\\',\\\'items\\\':[{\\\'label\\\':\\\'能力市场\\\',\\\'href\\\':\\\'https://qoder.cn/marketplace\\\'},{\\\'label\\\':\\\'活动\\\',\\\'href\\\':\\\'https://qoder.cn/activities\\\'},{\\\'label\\\':\\\'文档\\\',\\\'href\\\':\\\'https://docs.qoder.cn/product-overview/introduction-of-qodercn\\\'},{\\\'label\\\':\\\'博客\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma/article\\\'},{\\\'label\\\':\\\'常见问题\\\',\\\'href\\\':\\\'https://docs.qoder.cn/support/faq\\\'},{\\\'label\\\':\\\'更新日志\\\',\\\'href\\\':\\\'https://docs.qoder.cn/product-overview/qoder-cn-update-log\\\'}]},{\\\'header\\\':\\\'联系我们\\\',\\\'items\\\':[{\\\'label\\\':\\\'联系我们\\\',\\\'href\\\':\\\'mailto:qoder@service.aliyun.com\\\'},{\\\'label\\\':\\\'论坛\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma\\\'},{\\\'label\\\':\\\'千问AI平台\\\',\\\'href\\\':\\\'https://www.qianwenai.com/\\\'}]}]}},{\\\'language\\\':\\\'en\\\',\\\'navbar\\\':{\\\'primary\\\':{\\\'type\\\':\\\'button\\\',\\\'label\\\':\\\'Download\\\',\\\'href\\\':\\\'https://qoder.cn/download\\\'}},\\\'anchors\\\':[{\\\'anchor\\\':\\\'Website\\\',\\\'icon\\\':\\\'globe\\\',\\\'href\\\':\\\'https://qoder.cn/\\\'},{\\\'anchor\\\':\\\'Forum\\\',\\\'icon\\\':\\\'messages-square\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma?spm=5176.28644950.0.0.30d03ea8iCIwBP\\\'},{\\\'anchor\\\':\\\'Blog\\\',\\\'icon\\\':\\\'newspaper\\\',\\\'href\\\':\\\'https://developer.aliyun.com/lingma/article\\\'}],\\\'tabs\\\':[{\\\'tab\\\':\\\'Qoder CN Series\\\',\\\'groups\\\':[{\\\'group\\\':\\\'Overview\\\',\\\'pages\\\':[\\\'en/product-overview/introduction-of-qodercn\\\',{\\\'group\\\':\\\'Account \\u0026 Subscription\\\',\\\'pages\\\':[\\\'en/product-overview/qoder-cn-ide-jetbrains\\\',\\\'en/product-overview/account-and-subscription\\\',{\\\'group\\\':\\\'Qoder CN (Original Lingma) Account \\u0026 Subscription\\\',\\\'pages\\\':[\\\'en/product-overview/qoder-cn-account-and-subscription\\\',\\\'en/product-overview/qoder-cn-qoder-cn\\\',\\\'en/product-overview/qoder-cn-enterprise-vpc\\\',\\\'en/product-overview/qoder-cn-original-spirit-code-enterprise-standard-edition-upgrade-guide\\\',\\\'en/product-overview/comparison-between-original-lingma-and-qoder-cn-for-enterprise\\\']},\\\'en/product-overview/account-subscription-faq\\\']},{\\\'group\\\':\\\'Customer Cases\\\',\\\'pages\\\':[\\\'en/product-overview/customer-case\\\',\\\'en/product-overview/60-percent-of-developers-use-qoder-cn-in-china-insurance\\\',\\\'en/product-overview/30-percent-of-code-is-generated-by-ai-in-icbu\\\',\\\'en/product-overview/hello-group-fully-connected-to-qoder-cn\\\',\\\'en/product-overview/ai-driven-r-d-mode-upgrade-in-landray\\\',\\\'en/product-overview/hundreds-of-developers-use-qoder-cn-33-percent-code-by-ai-finv\\\',\\\'en/product-overview/over-90-percent-of-developers-in-gaiaworks-use-qoder-cn\\\',\\\'en/product-overview/together-we-pioneer-ai-and-embrace-the-new-era\\\',\\\'en/product-overview/uncover-how-ai-developer-boosts-live-streaming-efficiency\\\',\\\'en/product-overview/fudian-bank-from-go-digital-to-all-in-ai\\\',\\\'en/product-overview/nio-qoder-cn-boosts-engineering-efficiency-with-70-code-generated-by-ai\\\',\\\'en/product-overview/yonyou-technology\\\',\\\'en/product-overview/icbc-joins-hands-with-ali-tong-yi-ling-code-to\\\',\\\'en/product-overview/support-15000-engineers-ping-an-group-s-self-developed-ai-coding-tool-introduced-tongyi-spirit-code-to-enhance-continuation-function\\\',\\\'en/product-overview/guangdong-wen-s-group-s-research-and-development-efficiency-increase-10-times-12-new-storage-code-ai-generation-58-adoption-rate\\\']}]},{\\\'group\\\':\\\'Getting Started\\\',\\\'pages\\\':[\\\'en/getting-started/qodercn-ide-get-started\\\',\\\'en/getting-started/individual-edition-quick-start\\\',\\\'en/getting-started/qoder-cn-vpc\\\']},{\\\'group\\\':\\\'News \\u0026 Announcements\\\',\\\'pages\\\':[\\\'en/product-overview/qoder-cn-update-log\\\',\\\'en/product-overview/qoder-update-log\\\',\\\'en/product-overview/qoder-cn-ide-update-log\\\',\\\'en/product-overview/changelogs-jetbrains\\\',\\\'en/product-overview/qoder-cn-cli\\\',\\\'en/product-overview/qoder-agent-sdk-update-log\\\',\\\'en/product-overview/cloud-agents-cn-update-log\\\',\\\'en/product-overview/qoderwake-cn-update-log\\\',\\\'en/product-overview/qoderwork-cn-update-log\\\',\\\'en/product-overview/qoder-cn-vscode-update-log\\\',\\\'en/product-overview/visual-studio-side-update-log\\\',{\\\'group\\\':\\\'Product Announcements\\\',\\\'pages\\\':[\\\'en/product-overview/model-consumption-reference-update\\\',\\\'en/product-overview/quest-retirement-notice\\\',\\\'en/product-overview/qoder-cn-windows-7-windows-8-windows-8-1\\\']}]},{\\\'group\\\':\\\'Billing\\\',\\\'pages\\\':[\\\'en/product-overview/billing-description\\\',\\\'en/product-overview/credits\\\',\\\'en/product-overview/renewal-description\\\',\\\'en/product-overview/change-description\\\',\\\'en/product-overview/order-expiration-impact\\\',\\\'en/product-overview/refund-description\\\',\\\'en/product-overview/bill-query\\\']},{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'en/product-overview/qwen-3-7-series-model-staggering-discount\\\',\\\'en/events/100credits\\\',\\\'en/events/flashoffer\\\',\\\'en/events/bogo\\\',\\\'en/events/newqoderlaunch\\\',\\\'en/events/qwen-max\\\',\\\'en/events/qwen-max-preview\\\',\\\'en/product-overview/qwen3-7-max-limited-time-offer\\\',\\\'en/product-overview/daily-check-in-100-credits-reward-program-terms\\\',\\\'en/product-overview/qoderwork-cn-new-user-credits-claim-and-referral-reward-program-terms-and-conditions\\\']}]},{\\\'tab\\\':\\\'Qoder CN\\\',\\\'groups\\\':[{\\\'group\\\':\\\'Get Started\\\',\\\'pages\\\':[\\\'en/qoder/overview\\\',{\\\'group\\\':\\\'Installation\\\',\\\'pages\\\':[\\\'en/qoder/install-macos\\\',\\\'en/qoder/install-windows\\\']},\\\'en/qoder/quickstart\\\',\\\'en/qoder/vpc\\\']},{\\\'group\\\':\\\'Features\\\',\\\'pages\\\':[\\\'en/qoder/new-task\\\',{\\\'group\\\':\\\'Model Selection\\\',\\\'pages\\\':[\\\'en/qoder/model-selector\\\',\\\'en/qoder/custom-models\\\']},\\\'en/qoder/task-management\\\',\\\'en/qoder/data-import\\\',{\\\'group\\\':\\\'Conversation and Input\\\',\\\'pages\\\':[\\\'en/qoder/voice-input\\\',\\\'en/qoder/approval-and-sandbox\\\',\\\'en/qoder/context-compaction\\\']},{\\\'group\\\':\\\'Tools and Actions\\\',\\\'pages\\\':[\\\'en/qoder/browser\\\',\\\'en/qoder/review-and-commit\\\',\\\'en/qoder/terminal-and-sandbox\\\',\\\'en/qoder/computer-use\\\',\\\'en/qoder/app-snapshots\\\']},{\\\'group\\\':\\\'Security and Access\\\',\\\'pages\\\':[\\\'en/qoder/security-and-authorization\\\']},{\\\'group\\\':\\\'Environment and Execution\\\',\\\'pages\\\':[\\\'en/qoder/execution-environments\\\',\\\'en/qoder/plan-driven\\\',\\\'en/qoder/goal-driven\\\']},\\\'en/qoder/automations\\\',\\\'en/qoder/sites\\\',\\\'en/qoder/presentations\\\',{\\\'group\\\':\\\'Knowledge Center\\\',\\\'pages\\\':[\\\'en/qoder/repo-wiki\\\',\\\'en/qoder/knowledge-base\\\']},\\\'en/qoder/memory\\\',\\\'en/qoder/desktop-pet\\\',\\\'en/qoder/code-security\\\',\\\'en/qoder/better-harness\\\',\\\'en/qoder/china-mobile-edition\\\']},{\\\'group\\\':\\\'Collaboration\\\',\\\'pages\\\':[\\\'en/qoder/projects\\\',\\\'en/qoder/discussions\\\']},{\\\'group\\\':\\\'Extensions\\\',\\\'pages\\\':[\\\'en/qoder/skills\\\',\\\'en/qoder/plugins\\\',\\\'en/qoder/connectors\\\',\\\'en/qoder/hooks\\\',\\\'en/qoder/subagents\\\',\\\'en/qoder/custom-agents\\\',\\\'en/qoder/custom-agent-teams\\\',\\\'en/qoder/extension-publishing\\\']},{\\\'group\\\':\\\'Configuration\\\',\\\'pages\\\':[\\\'en/qoder/settings\\\',\\\'en/qoder/keyboard-shortcuts\\\',\\\'en/qoder/network-proxy\\\']},{\\\'group\\\':\\\'Support\\\',\\\'pages\\\':[\\\'en/qoder/faq\\\',\\\'en/qoder/troubleshooting\\\',\\\'en/qoder/feedback\\\']}]},{\\\'tab\\\':\\\'Qoder CN IDE\\\',\\\'groups\\\':[{\\\'group\\\':\\\'Overview\\\',\\\'pages\\\':[\\\'en/user-guide/what-is-qoder-cn\\\']},{\\\'group\\\':\\\'Get Started\\\',\\\'pages\\\':[\\\'en/user-guide/installation-and-login-guide\\\',\\\'en/user-guide/compatible-ide-and-system\\\',\\\'en/user-guide/installation-guide\\\']},{\\\'group\\\':\\\'User Guide\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Models\\\',\\\'pages\\\':[\\\'en/user-guide/model-selector\\\',\\\'en/user-guide/custom-model\\\']},{\\\'group\\\':\\\'Editor\\\',\\\'pages\\\':[\\\'en/user-guide/overview-of-chat\\\',\\\'en/user-guide/ask\\\',\\\'en/user-guide/agent\\\',\\\'en/user-guide/next-edit-suggestion\\\',\\\'en/user-guide/inline-chat\\\',\\\'en/user-guide/tools\\\',\\\'en/user-guide/ai-completion-guidlines\\\']},{\\\'group\\\':\\\'Quest\\\',\\\'pages\\\':[\\\'en/user-guide/quest/overview\\\',\\\'en/user-guide/quest/agent-mode\\\',\\\'en/user-guide/quest/experts-mode\\\',\\\'en/user-guide/quest/goal-driven\\\',\\\'en/user-guide/quest/spec-driven\\\',\\\'en/user-guide/quest/scheduled-tasks\\\',\\\'en/user-guide/quest/review-and-commit\\\',\\\'en/user-guide/quest/terminal-and-sandbox\\\',\\\'en/user-guide/quest/task-management\\\',\\\'en/user-guide/quest/execution-environments\\\',\\\'en/user-guide/quest/supabase\\\',\\\'en/user-guide/quest/qoder-voice\\\']},{\\\'group\\\':\\\'Knowledge Center\\\',\\\'pages\\\':[\\\'en/user-guide/knowledge-engine/overview\\\',\\\'en/user-guide/repo-wiki\\\',\\\'en/user-guide/knowledge-engine/knowledge-cards\\\',\\\'en/user-guide/knowledge-engine/memory\\\']},{\\\'group\\\':\\\'Code Security\\\',\\\'pages\\\':[\\\'en/ide/security\\\',\\\'en/qoder-security-guide\\\',\\\'en/qoder-case-security\\\']},\\\'en/user-guide/knowledge-engine/better-harness\\\']},{\\\'group\\\':\\\'Context\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Input Enhancement\\\',\\\'pages\\\':[\\\'en/user-guide/context\\\',\\\'en/user-guide/context/voice-input\\\',\\\'en/user-guide/context/optimize-prompt\\\']},\\\'en/user-guide/codebase-indexing\\\',\\\'en/user-guide/rules\\\']},{\\\'group\\\':\\\'Extensions\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Built-in Agents\\\',\\\'pages\\\':[\\\'en/user-guide/browser-agent\\\',\\\'en/user-guide/qodercn-planning-agent\\\',\\\'en/user-guide/code-review-agent\\\',\\\'en/user-guide/computer-use-agent\\\']},\\\'en/user-guide/custom-agent\\\',\\\'en/user-guide/skills\\\',\\\'en/qoder-plugins\\\',\\\'en/user-guide/guide-for-using-mcp\\\',\\\'en/user-guide/hooks\\\',\\\'en/user-guide/deeplinks\\\',\\\'en/user-guide/canvas\\\',\\\'en/user-guide/custom-commands\\\']},{\\\'group\\\':\\\'Configuration\\\',\\\'pages\\\':[\\\'en/user-guide/plug-in-configuration-guide\\\',\\\'en/user-guide/network-proxy-configuration\\\']},{\\\'group\\\':\\\'Support\\\',\\\'pages\\\':[\\\'en/support/faq\\\',\\\'en/support/troubleshooting-guide\\\',\\\'en/support/description-of-terminal-execution-exception\\\',\\\'en/support/faq-mcp\\\',\\\'en/support/service-agreement-and-privacy-policy\\\']}]},{\\\'tab\\\':\\\'Qoder CN CLI\\\',\\\'groups\\\':[{\\\'group\\\':\\\'Getting started\\\',\\\'pages\\\':[\\\'en/cli/overview\\\',\\\'en/cli/installation\\\',\\\'en/cli/authentication\\\',\\\'en/cli/quickstart\\\']},{\\\'group\\\':\\\'Core concepts\\\',\\\'pages\\\':[\\\'en/cli/how-it-works\\\',\\\'en/cli/working-modes\\\',\\\'en/cli/config-scope\\\',\\\'en/cli/how-memory-works\\\',\\\'en/cli/models\\\']},{\\\'group\\\':\\\'Using Qoder CLI\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Starting a task\\\',\\\'pages\\\':[\\\'en/cli/run-tasks\\\',\\\'en/cli/common-tasks\\\',\\\'en/cli/plan-mode\\\',\\\'en/cli/repo-wiki\\\']},{\\\'group\\\':\\\'Task automation\\\',\\\'pages\\\':[\\\'en/cli/goal\\\',\\\'en/cli/scheduled-tasks\\\',\\\'en/cli/loop\\\',\\\'en/cli/run-in-scripts\\\']},{\\\'group\\\':\\\'Parallel collaboration\\\',\\\'pages\\\':[\\\'en/cli/parallel-tasks\\\',\\\'en/cli/agent-teams\\\',\\\'en/cli/cross-session-messaging\\\',\\\'en/cli/workflows\\\']},{\\\'group\\\':\\\'Managing sessions and changes\\\',\\\'pages\\\':[\\\'en/cli/sessions\\\',\\\'en/cli/review-changes\\\',\\\'en/cli/undo-restore\\\']},{\\\'group\\\':\\\'Optimizing usage\\\',\\\'pages\\\':[\\\'en/cli/best-practices\\\',\\\'en/cli/usage\\\',\\\'en/cli/insights\\\']}]},{\\\'group\\\':\\\'Extending Qoder CLI\\\',\\\'pages\\\':[\\\'en/cli/built-ins\\\',\\\'en/cli/tools\\\',\\\'en/cli/memory\\\',\\\'en/cli/commands\\\',\\\'en/cli/knowledge-base\\\']},{\\\'group\\\':\\\'Integrations and remote\\\',\\\'pages\\\':[\\\'en/cli/acp\\\',\\\'en/cli/qoder-action\\\',\\\'en/cli/cloud-mode\\\',\\\'en/cli/remote-control\\\']},{\\\'group\\\':\\\'Configuration and security\\\',\\\'pages\\\':[\\\'en/cli/settings\\\',\\\'en/cli/permissions\\\',\\\'en/cli/network\\\',\\\'en/cli/vpc\\\',\\\'en/cli/custom-models\\\',\\\'en/cli/interface\\\',\\\'en/cli/output-styles\\\',\\\'en/cli/security\\\']},{\\\'group\\\':\\\'Reference\\\',\\\'pages\\\':[\\\'en/cli/cli-reference\\\',\\\'en/cli/slash-reference\\\',\\\'en/cli/settings-reference\\\',\\\'en/cli/mcp-reference\\\',\\\'en/cli/plugins-reference\\\',\\\'en/cli/hooks-reference\\\',\\\'en/cli/builtins-reference\\\',\\\'en/cli/goal-reference\\\',\\\'en/cli/loop-reference\\\',\\\'en/cli/scheduled-reference\\\',\\\'en/cli/glossary\\\']},{\\\'group\\\':\\\'Troubleshooting\\\',\\\'pages\\\':[\\\'en/cli/troubleshoot-install\\\',\\\'en/cli/troubleshoot-auth\\\',\\\'en/cli/troubleshoot-network\\\',\\\'en/cli/troubleshoot-performance\\\',\\\'en/cli/troubleshoot-loading\\\',\\\'en/cli/troubleshoot-config\\\',\\\'en/cli/troubleshoot-extensions\\\',\\\'en/cli/troubleshoot-faq\\\']}]},{\\\'tab\\\':\\\'Agent SDK\\\',\\\'groups\\\':[{\\\'group\\\':\\\'Getting Started\\\',\\\'pages\\\':[\\\'en/cli/sdk/overview\\\',\\\'en/cli/sdk/quick-start\\\',\\\'en/cli/sdk/integration-scenarios\\\']},{\\\'group\\\':\\\'Core Concepts\\\',\\\'pages\\\':[\\\'en/cli/sdk/how-it-works\\\',\\\'en/cli/sdk/authentication\\\']},{\\\'group\\\':\\\'Conversations \\u0026 Sessions\\\',\\\'pages\\\':[\\\'en/cli/sdk/multi-turn-conversation\\\',\\\'en/cli/sdk/streaming-output\\\',\\\'en/cli/sdk/session-control\\\',\\\'en/cli/sdk/session-storage\\\',\\\'en/cli/sdk/checkpoint\\\',\\\'en/cli/sdk/memory\\\']},{\\\'group\\\':\\\'Tools \\u0026 Extensions\\\',\\\'pages\\\':[\\\'en/cli/sdk/system-prompt\\\',\\\'en/cli/sdk/tools\\\',\\\'en/cli/sdk/mcp\\\',\\\'en/cli/sdk/agents\\\',\\\'en/cli/sdk/skills\\\',\\\'en/cli/sdk/plugins\\\']},{\\\'group\\\':\\\'Control \\u0026 Safety\\\',\\\'pages\\\':[\\\'en/cli/sdk/permissions\\\',\\\'en/cli/sdk/security-scan\\\',\\\'en/cli/sdk/hooks\\\',\\\'en/cli/sdk/model-policy\\\',\\\'en/cli/sdk/cost-usage\\\']},{\\\'group\\\':\\\'Reference\\\',\\\'pages\\\':[\\\'en/cli/sdk/troubleshooting\\\',\\\'en/cli/sdk/errors\\\',\\\'en/cli/sdk/references\\\',\\\'en/cli/sdk/references-typescript\\\',\\\'en/cli/sdk/references-python\\\']}]},{\\\'tab\\\':\\\'Cloud Agents CN\\\',\\\'groups\\\':[{\\\'group\\\':\\\'First steps\\\',\\\'pages\\\':[\\\'en/cloud-agents/overview\\\',\\\'en/cloud-agents/api/overview\\\',\\\'en/cloud-agents/quickstart\\\']},{\\\'group\\\':\\\'Define your agent\\\',\\\'pages\\\':[\\\'en/cloud-agents/define-agent\\\',\\\'en/cloud-agents/agent-tools\\\',\\\'en/cloud-agents/agent-skills\\\',\\\'en/cloud-agents/permission-policies\\\']},{\\\'group\\\':\\\'Configure agent environment\\\',\\\'pages\\\':[\\\'en/cloud-agents/environments\\\',\\\'en/cloud-agents/container-reference\\\',\\\'en/cloud-agents/ip-addresses\\\']},{\\\'group\\\':\\\'Delegate work to your agent\\\',\\\'pages\\\':[\\\'en/cloud-agents/sessions\\\',\\\'en/cloud-agents/vaults\\\',\\\'en/cloud-agents/multi-agents\\\']},{\\\'group\\\':\\\'Agent integrations\\\',\\\'pages\\\':[\\\'en/cloud-agents/natural-language-schedule-management\\\',\\\'en/cloud-agents/message-channel-integration\\\',\\\'en/cloud-agents/webhooks\\\']},{\\\'group\\\':\\\'Manage agent context\\\',\\\'pages\\\':[\\\'en/cloud-agents/files\\\',\\\'en/cloud-agents/memory-stores\\\',\\\'en/cloud-agents/dreams\\\']},{\\\'group\\\':\\\'Account\\\',\\\'pages\\\':[\\\'en/cloud-agents/billing\\\',\\\'en/cloud-agents/personal-and-enterprise-spaces\\\']},{\\\'group\\\':\\\'Best Practices\\\',\\\'pages\\\':[\\\'en/cloud-agents/best-practices/cloud-use\\\']},{\\\'group\\\':\\\'Announcements\\\',\\\'pages\\\':[\\\'en/cloud-agents/sse-initial-connection-behavior-change\\\']},{\\\'group\\\':\\\'API reference\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Conventions\\\',\\\'pages\\\':[\\\'en/cloud-agents/api-overview\\\',\\\'en/cloud-agents/api-authentication\\\',\\\'en/cloud-agents/api-pagination\\\',\\\'en/cloud-agents/generic-data-structure\\\',\\\'en/cloud-agents/api-errors\\\']},{\\\'group\\\':\\\'Forward Mode\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-mode-overview\\\',{\\\'group\\\':\\\'Templates\\\',\\\'pages\\\':[\\\'en/cloud-agents/create-template\\\',\\\'en/cloud-agents/list-templates\\\',\\\'en/cloud-agents/obtain-template-details\\\',\\\'en/cloud-agents/update-template-merge-patch\\\',\\\'en/cloud-agents/archive-template\\\',\\\'en/cloud-agents/clone-template\\\']},{\\\'group\\\':\\\'Identities\\\',\\\'pages\\\':[\\\'en/cloud-agents/create-identity\\\',\\\'en/cloud-agents/list-identity\\\',\\\'en/cloud-agents/get-identity\\\',\\\'en/cloud-agents/update-identity\\\',\\\'en/cloud-agents/delete-identity-soft-delete\\\',\\\'en/cloud-agents/clear-identity\\\',\\\'en/cloud-agents/disable-identity\\\',\\\'en/cloud-agents/enable-identity\\\',\\\'en/cloud-agents/ensure-admin-identity\\\',\\\'en/cloud-agents/get-identity-stats\\\',\\\'en/cloud-agents/list-identity-templates\\\',\\\'en/cloud-agents/query-all-template-configurations-under-this-identity\\\',\\\'en/cloud-agents/create-update-identity-config\\\',\\\'en/cloud-agents/get-identity-config\\\',\\\'en/cloud-agents/query-effective-config-composite-results\\\']},{\\\'group\\\':\\\'Service Account Tokens\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/service-account-tokens/create\\\',\\\'en/cloud-agents/api/service-account-tokens/create-identity\\\',\\\'en/cloud-agents/api/service-account-tokens/revoke\\\']},{\\\'group\\\':\\\'Sessions\\\',\\\'pages\\\':[\\\'en/cloud-agents/session-and-event-data-structure\\\',\\\'en/cloud-agents/create-session\\\',\\\'en/cloud-agents/get-session-details\\\',\\\'en/cloud-agents/list-session\\\',\\\'en/cloud-agents/update-session\\\',\\\'en/cloud-agents/add-session-resource\\\',\\\'en/cloud-agents/archive-session\\\',\\\'en/cloud-agents/cancel-the-current-turn\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'en/cloud-agents/send-a-session-event\\\',\\\'en/cloud-agents/query-event-history\\\',\\\'en/cloud-agents/subscribe-to-event-sse\\\']},{\\\'group\\\':\\\'Threads\\\',\\\'pages\\\':[\\\'en/cloud-agents/list-session-threads\\\',\\\'en/cloud-agents/get-session-thread\\\',\\\'en/cloud-agents/archive-session-thread\\\',\\\'en/cloud-agents/list-session-thread-events\\\',\\\'en/cloud-agents/stream-session-thread-events\\\']}]},{\\\'group\\\':\\\'Batches\\\',\\\'pages\\\':[\\\'en/cloud-agents/batches-create\\\',\\\'en/cloud-agents/batches-list\\\',\\\'en/cloud-agents/batches-get\\\',\\\'en/cloud-agents/batches-list-tasks\\\',\\\'en/cloud-agents/batches-cancel\\\',\\\'en/cloud-agents/batches-get-output\\\',\\\'en/cloud-agents/batches-get-error\\\']},{\\\'group\\\':\\\'Schedules\\\',\\\'pages\\\':[\\\'en/cloud-agents/schedule-schemas\\\',\\\'en/cloud-agents/create-schedule\\\',\\\'en/cloud-agents/list-schedule\\\',\\\'en/cloud-agents/get-schedule\\\',\\\'en/cloud-agents/update-schedule\\\',\\\'en/cloud-agents/archive-schedule\\\',\\\'en/cloud-agents/archive-schedules\\\',\\\'en/cloud-agents/pause-1\\\',\\\'en/cloud-agents/restore-1\\\',\\\'en/cloud-agents/execute-immediately\\\',\\\'en/cloud-agents/list-all-run-histories\\\',\\\'en/cloud-agents/get-a-single-run\\\']},{\\\'group\\\':\\\'Webhooks\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/webhooks/overview\\\',\\\'en/cloud-agents/api/webhooks/create\\\',\\\'en/cloud-agents/api/webhooks/list\\\',\\\'en/cloud-agents/api/webhooks/get\\\',\\\'en/cloud-agents/api/webhooks/update\\\',\\\'en/cloud-agents/api/webhooks/delete\\\',\\\'en/cloud-agents/api/webhooks/enable\\\',\\\'en/cloud-agents/api/webhooks/disable\\\',\\\'en/cloud-agents/api/webhooks/test\\\',\\\'en/cloud-agents/api/webhooks/receive\\\']},{\\\'group\\\':\\\'Channels\\\',\\\'pages\\\':[\\\'en/cloud-agents/create-a-channel\\\',\\\'en/cloud-agents/list-channels\\\',\\\'en/cloud-agents/get-channel\\\',\\\'en/cloud-agents/update-channel\\\',\\\'en/cloud-agents/delete-channel\\\',\\\'en/cloud-agents/create-scan-authorization-session\\\',\\\'en/cloud-agents/query-scan-session-status\\\',\\\'en/cloud-agents/list-channel-pairings\\\',\\\'en/cloud-agents/get-channel-pairing\\\',\\\'en/cloud-agents/update-channel-pairing\\\',\\\'en/cloud-agents/pair-channel\\\',\\\'en/cloud-agents/unpair-channel\\\']},{\\\'group\\\':\\\'Environments\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-environments-list\\\',\\\'en/cloud-agents/forward-environments-search\\\',\\\'en/cloud-agents/forward-environments-create\\\',\\\'en/cloud-agents/forward-environments-get\\\',\\\'en/cloud-agents/forward-environments-update\\\',\\\'en/cloud-agents/forward-environments-delete\\\',\\\'en/cloud-agents/forward-environments-schemas\\\']},{\\\'group\\\':\\\'Skills\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-skills-list\\\',\\\'en/cloud-agents/forward-skills-search\\\',\\\'en/cloud-agents/forward-skills-create\\\',\\\'en/cloud-agents/forward-skills-get\\\',\\\'en/cloud-agents/forward-skills-update\\\',\\\'en/cloud-agents/forward-skills-delete\\\',\\\'en/cloud-agents/forward-skills-schemas\\\',{\\\'group\\\':\\\'Versions\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-skills-versions-create\\\',\\\'en/cloud-agents/forward-skills-versions-list\\\',\\\'en/cloud-agents/forward-skills-versions-download\\\',\\\'en/cloud-agents/forward-skills-versions-get\\\',\\\'en/cloud-agents/forward-skills-versions-delete\\\']}]},{\\\'group\\\':\\\'Vaults\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-vaults-list\\\',\\\'en/cloud-agents/forward-vaults-search\\\',\\\'en/cloud-agents/forward-vaults-create\\\',\\\'en/cloud-agents/forward-vaults-get\\\',\\\'en/cloud-agents/forward-vaults-delete\\\',\\\'en/cloud-agents/forward-vaults-schemas\\\',{\\\'group\\\':\\\'Credentials\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-credentials-list\\\',\\\'en/cloud-agents/forward-credentials-create\\\',\\\'en/cloud-agents/forward-credentials-get\\\',\\\'en/cloud-agents/forward-credentials-update\\\',\\\'en/cloud-agents/forward-credentials-delete\\\',\\\'en/cloud-agents/forward-credentials-schemas\\\']}]},{\\\'group\\\':\\\'Files\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-files-list\\\',\\\'en/cloud-agents/forward-files-search\\\',\\\'en/cloud-agents/forward-files-upload\\\',\\\'en/cloud-agents/forward-files-get\\\',\\\'en/cloud-agents/forward-files-download\\\',\\\'en/cloud-agents/forward-files-delete\\\',\\\'en/cloud-agents/forward-files-schemas\\\']},{\\\'group\\\':\\\'Drives\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-drives-overview\\\',\\\'en/cloud-agents/forward-drives-list-entries\\\',\\\'en/cloud-agents/forward-drives-upload-url\\\',\\\'en/cloud-agents/forward-drives-download-url\\\',\\\'en/cloud-agents/forward-drives-delete-entry\\\',\\\'en/cloud-agents/forward-drives-clear\\\']},{\\\'group\\\':\\\'Memory Stores\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-memory-stores-schemas\\\',\\\'en/cloud-agents/forward-memory-stores-list\\\',\\\'en/cloud-agents/forward-memory-stores-create\\\',\\\'en/cloud-agents/forward-memory-stores-get\\\',\\\'en/cloud-agents/forward-memory-stores-update\\\',\\\'en/cloud-agents/forward-memory-stores-archive\\\',\\\'en/cloud-agents/forward-memory-stores-delete\\\',\\\'en/cloud-agents/forward-memory-stores-list-mounts\\\',\\\'en/cloud-agents/forward-memory-stores-mount\\\',\\\'en/cloud-agents/forward-memory-stores-detach\\\',{\\\'group\\\':\\\'Memories\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-memory-stores-list-memories\\\',\\\'en/cloud-agents/forward-memory-stores-create-memory\\\',\\\'en/cloud-agents/forward-memory-stores-get-memory\\\',\\\'en/cloud-agents/forward-memory-stores-update-memory\\\',\\\'en/cloud-agents/forward-memory-stores-delete-memory\\\']},{\\\'group\\\':\\\'Memory Versions\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-memory-stores-list-versions\\\',\\\'en/cloud-agents/forward-memory-stores-get-version\\\',\\\'en/cloud-agents/forward-memory-stores-redact-version\\\']}]},{\\\'group\\\':\\\'Dreams\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-dreams-schemas\\\',\\\'en/cloud-agents/forward-dreams-create\\\',\\\'en/cloud-agents/forward-dreams-list\\\',\\\'en/cloud-agents/forward-dreams-get\\\',\\\'en/cloud-agents/forward-dreams-cancel\\\',\\\'en/cloud-agents/forward-dreams-archive\\\']},{\\\'group\\\':\\\'Models\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-models-list\\\']},{\\\'group\\\':\\\'Realtime\\\',\\\'pages\\\':[\\\'en/cloud-agents/forward-realtime-create-conversation\\\',\\\'en/cloud-agents/forward-realtime-connect\\\']},{\\\'group\\\':\\\'Usage\\\',\\\'pages\\\':[\\\'en/cloud-agents/list-identity-usage\\\',\\\'en/cloud-agents/list-template-usage\\\']}]},{\\\'group\\\':\\\'Managed Mode\\\',\\\'pages\\\':[{\\\'group\\\':\\\'Agents\\\',\\\'pages\\\':[\\\'en/cloud-agents/agents-list\\\',\\\'en/cloud-agents/agents-search\\\',\\\'en/cloud-agents/agents-create\\\',\\\'en/cloud-agents/agents-get\\\',\\\'en/cloud-agents/agents-update\\\',\\\'en/cloud-agents/agents-archive\\\',\\\'en/cloud-agents/agents-list-versions\\\',\\\'en/cloud-agents/agents-schemas\\\']},{\\\'group\\\':\\\'Sessions\\\',\\\'pages\\\':[\\\'en/cloud-agents/sessions-create\\\',\\\'en/cloud-agents/sessions-list\\\',\\\'en/cloud-agents/sessions-get\\\',\\\'en/cloud-agents/sessions-update\\\',\\\'en/cloud-agents/sessions-delete\\\',\\\'en/cloud-agents/sessions-archive\\\',\\\'en/cloud-agents/sessions-search\\\',\\\'en/cloud-agents/sessions-cancel\\\',\\\'en/cloud-agents/session-schemas\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/sessions/events/list\\\',\\\'en/cloud-agents/api/sessions/events/send\\\',\\\'en/cloud-agents/api/sessions/events/stream\\\',\\\'en/cloud-agents/api/sessions/events/overview\\\']},{\\\'group\\\':\\\'Resources\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/sessions/resources/add\\\',\\\'en/cloud-agents/api/sessions/resources/list\\\',\\\'en/cloud-agents/api/sessions/resources/get\\\',\\\'en/cloud-agents/api/sessions/resources/update\\\',\\\'en/cloud-agents/api/sessions/resources/delete\\\',\\\'en/cloud-agents/api/sessions/resources/github-repositories\\\']},{\\\'group\\\':\\\'Threads\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/sessions/threads/list\\\',\\\'en/cloud-agents/api/sessions/threads/get\\\',\\\'en/cloud-agents/api/sessions/threads/archive\\\',{\\\'group\\\':\\\'Events\\\',\\\'pages\\\':[\\\'en/cloud-agents/api/sessions/threads/events/list\\\',\\\'en/cloud-agents/api/sessions/threads/events/stream\\\']}]}]},{\\\'group\\\':\\\'Deployments\\\',\\\'pages\\\':[\\\'en/cloud-agents/list-deployment\\\',\\\'en/cloud-agents/deployments-search\\\',\\\'en/cloud-agents/create-deployment-cron-manual\\\',\\\'en/cloud-agents/get-deployment\\\',\\\'en/cloud-agents/update-deployment\\\',\\\'en/cloud-agents/archive-stop-all-dispatches\\\',\\\'en/cloud-agents/api/deployments/pause\\\',\\\'en/cloud-agents/restore\\\',\\\'en/cloud-agents/trigger-once-manually\\\',\\\'en/cloud-agents/list-the-runs-for-this-deployment\\\',\\\'en/cloud-agents/get-single-run\\\',\\\'en/cloud-agents/list-all-runs-globally\\\',\\\'en/cloud-agents/global-acquisition-single-run\\\']},{\\\'group\\\':\\\'Dreams\\\',\\\'pages\\\':[\\\'en/cloud-agents/list-the-dream\\\',\\\'en/cloud-agents/create-a-dream\\\',\\\'en/cloud-agents/get-dream-status\\\',\\\'en/cloud-agents/cancel-pending-running\\\',\\\'en/cloud-agents/archiving-completed\\\',\\\'en/cloud-agents/dreams-schemas\\\']},{\\\'group\\\':\\\'Environments\\\',\\\'pages\\\':[\\\'en/cloud-agents/environments-list\\\',\\\'en/cloud-agents/environments-search\\\',\\\'en/cloud-agents/environments-create\\\',\\\'en/cloud-agents/environments-get\\\',\\\'en/cloud-agents/environments-update\\\',\\\'en/cloud-agents/environments-archive\\\',\\\'en/cloud-agents/environments-delete\\\',\\\'en/cloud-agents/environments-schemas\\\',{\\\'group\\\':\\\'Work\\\',\\\'pages\\\':[\\\'en/cloud-agents/pull-work-item-poll-new\\\',\\\'en/cloud-agents/environments-work-ack\\\',\\\'en/cloud-agents/environments-work-heartbeat\\\',\\\'en/cloud-agents/environments-work-update-metadata\\\',\\\'en/cloud-agents/environments-work-stop\\\',\\\'en/cloud-agents/environments-work-get\\\',\\\'en/cloud-agents/environments-work-list\\\',\\\'en/cloud-agents/environments-work-stats\\\',\\\'en/cloud-agents/environments-work-schemas\\\']}]},{\\\'group\\\':\\\'Skills\\\',\\\'pages\\\':[\\\'en/cloud-agents/skills-create\\\',\\\'en/cloud-agents/skills-list\\\',\\\'en/cloud-agents/skills-search\\\',\\\'en/cloud-agents/skills-get\\\',\\\'en/cloud-agents/skills-update\\\',\\\'en/cloud-agents/skills-delete\\\',{\\\'group\\\':\\\'Versions\\\',\\\'pages\\\':[\\\'en/cloud-agents/skills-create-version\\\',\\\'en/cloud-agents/skills-list-versions\\\',\\\'en/cloud-agents/skills-get-version-content\\\',\\\'en/cloud-agents/skills-get-version\\\',\\\'en/cloud-agents/skills-delete-version\\\']},\\\'en/cloud-agents/skills-schemas\\\']},{\\\'group\\\':\\\'Vaults\\\',\\\'pages\\\':[\\\'en/cloud-agents/vaults-list\\\',\\\'en/cloud-agents/vaults-search\\\',\\\'en/cloud-agents/vaults-create\\\',\\\'en/cloud-agents/vaults-get\\\',\\\'en/cloud-agents/vaults-archive\\\',\\\'en/cloud-agents/vaults-delete\\\',\\\'en/cloud-agents/vaults-archive-credential\\\',\\\'en/cloud-agents/vaults-get-credential\\\',\\\'en/cloud-agents/vaults-delete-credential\\\',\\\'en/cloud-agents/vaults-list-credentials\\\',\\\'en/cloud-agents/vaults-create-credential\\\',\\\'en/cloud-agents/vaults-update-credential\\\',\\\'en/cloud-agents/vaults-validate-credential\\\',\\\'en/cloud-agents/vaults-start-oauth\\\',\\\'en/cloud-agents/vaults-schemas\\\']},{\\\'group\\\':\\\'Files\\\',\\\'pages\\\':[\\\'en/cloud-agents/files-list\\\',\\\'en/cloud-agents/files-search\\\',\\\'en/cloud-agents/files-upload\\\',\\\'en/cloud-agents/files-get\\\',\\\'en/cloud-agents/files-download\\\',\\\'en/cloud-agents/files-delete\\\',\\\'en/cloud-agents/files-schemas\\\']},{\\\'group\\\':\\\'Memory Stores\\\',\\\'pages\\\':[\\\'en/cloud-agents/memory-stores-list\\\',\\\'en/cloud-agents/memory-stores-search\\\',\\\'en/cloud-agents/memory-stores-create\\\',\\\'en/cloud-agents/memory-stores-get\\\',\\\'en/cloud-agents/memory-stores-update\\\',\\\'en/cloud-agents/memory-stores-archive\\\',\\\'en/cloud-agents/memory-stores-delete\\\',\\\'en/cloud-agents/memory-stores-list-entries\\\',\\\'en/cloud-agents/memory-stores-create-entry\\\',\\\'en/cloud-agents/memory-store'
        }
      ]
    },
    {
      'id': 'trae',
      'name': 'Trae',
      'vendor': '字节跳动',
      'kind': 'trae',
      'changelogUrl': 'https://www.trae.cn/changelog',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '3.3.93-96',
          'title': 'v3.3.93-96',
          'date': '2026-09-01',
          'dateRaw': '2026-09-01',
          'tags': [
            'TraeCode'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- Solo Agent 智能体和 Agent 智能体将合并为 Agent 智能体，支持在 IDE、SOLO 模式使用。Agent 智能体包含原Solo Agent 智能体、 Agent 智能体的能力集合，包括：支持 /goal、/plan、/spec 等内置命令，支持根据模型选择是否开启 Max 模式，支持选择是否使用 Auto Mode 模型，支持调用自定义智能体等。【仅企业版】\n- 修复了已知问题。'
        },
        {
          'version': '0.1.49-52',
          'title': 'v0.1.49-52',
          'date': '2026-08-21',
          'dateRaw': '2026-08-21',
          'tags': [
            'TraeWork'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 上线「电脑控制」功能。\n- Design 模式支持图片编辑。\n- 对话框可一键最小化为悬浮窗小标。\n- 修复了已知问题。'
        },
        {
          'version': '3.3.87-92',
          'title': 'v3.3.87-92',
          'date': '2026-08-20',
          'dateRaw': '2026-08-20',
          'tags': [
            'TraeCode'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 支持 TRAE 移动端连接 TraeCode。\n- 修复了已知问题。'
        },
        {
          'version': '0.0.17-0.0.18',
          'title': 'v0.0.17-0.0.18',
          'date': '2026-08-18',
          'dateRaw': '2026-08-18',
          'tags': [
            'TRAE APP'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 首页增加了「我的文件」入口，可查看新对话里生成的图片、视频、html 产物，可查看所有飞书文档\n- 通过 “+”入口，引用“当前项目文件”、“我的文件”、“飞书文档”。快速找到你在当前项目、TRAE 所有任务、飞书中的文件产物\n- 发送任务时，可以不选择文件夹直接发送任务\n- 支持会话分享：分享方式包括链接，二维码，长图，系统分享等\n- 新增反馈入口：可以在设置页中，找到「帮助与反馈」，点击即可提交你对 TRAE 的使用体验与产品建议'
        },
        {
          'version': '0.1.47-48',
          'title': 'v0.1.47-48',
          'date': '2026-08-11',
          'dateRaw': '2026-08-11',
          'tags': [
            'TraeWork'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 上线我的文件功能。\n- 修复了已知问题。'
        },
        {
          'version': '0.1.44-46',
          'title': 'v0.1.44-46',
          'date': '2026-08-07',
          'dateRaw': '2026-08-07',
          'tags': [
            'TraeWork'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 支持对话分享功能\n- 灰度上线插件自动推荐功能\n- 输入框 / 、附件上传按钮整合进「+」按钮\n- 上线办公助理功能'
        },
        {
          'version': '0.0.16',
          'title': 'v0.0.16',
          'date': '2026-08-07',
          'dateRaw': '2026-08-07',
          'tags': [
            'TRAE APP'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 视频产物支持对话流内预览：生成的视频现在支持在对话中直接预览，点击卡片即可播放'
        },
        {
          'version': '3.3.84-86',
          'title': 'v3.3.84-86',
          'date': '2026-08-07',
          'dateRaw': '2026-08-07',
          'tags': [
            'TraeCode'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 模型选择上线 Max 模式。\n- 对话流新交互新增 Query 跳转。\n- 修复了已知问题。'
        },
        {
          'version': '3.3.80-83',
          'title': 'v3.3.80-83',
          'date': '2026-07-31',
          'dateRaw': '2026-07-31',
          'tags': [
            'TraeCode'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 全新积分体系，用量更透明、积分更充足、奖励更丰富。\n- 修复了已知问题。'
        },
        {
          'version': '0.1.40-43',
          'title': 'v0.1.40-43',
          'date': '2026-07-31',
          'dateRaw': '2026-07-31',
          'tags': [
            'TraeWork'
          ],
          'url': 'https://www.trae.cn/changelog',
          'body': '- 全新积分体系，用量更透明、积分更充足、奖励更丰富。\n- TRAE Work 上线模版库。\n- 修复了已知问题。'
        }
      ]
    },
    {
      'id': 'zcode',
      'name': 'ZCode',
      'vendor': '智谱',
      'kind': 'zcode',
      'changelogUrl': 'https://zcode.z.ai/changelog',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '3.14.3',
          'title': '3.14.3',
          'date': '2026-09-22',
          'dateRaw': '发布于 2026年9月22日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 运行中的工作流可直接调整并发上限，无需停止任务。\n- 优化了工作流修改和重启时的复用逻辑。\n- 优化了大型工作流的实时状态显示。\n- 优化工作流脚本提交和修改效率，减少token消耗。\n问题修复\n- 修复了工作流在一些情况下导致界面崩溃的问题。\n- 修复了工作流卡片有时按钮会被挤出界面的问题。\n- 修复了工作流工具占用上下文过大的问题。'
        },
        {
          'version': '3.14.1',
          'title': '3.14.1',
          'date': '2026-09-22',
          'dateRaw': '发布于 2026年9月22日',
          'tags': [
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '问题修复\n- 选择插件后会正确插入草稿引用。\n- 折叠计划或压缩输入框时，草稿内容和思考文本不再丢失。\n- 选择服务提供方时，未命名的提供方不再丢失身份信息。\n- 新手引导不再对老用户自动弹出，关闭后重启也不会重复出现。\n- 修复电脑控制可能无法启动的问题。'
        },
        {
          'version': '3.14.0',
          'title': '3.14.0',
          'date': '2026-09-19',
          'dateRaw': '发布于 2026年9月19日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 新增动态工作流，用一段脚本编排多个子代理协作完成复杂任务\n- 输入框加号菜单与 /workflow 命令可快速发起工作流\n- 新增办公和编程两种模式切换\n- 新版快捷键设置，可录制自定义按键并即时生效\n- 新增三步新手引导，按身份推荐任务和插件\n- 归档任务支持批量删除\n- 优化手机远控服务\n- 帮助菜单新增关于与检查更新入口\n- 审批弹窗支持直接授予完全访问权限\n- Start Plan 支持独立使用\n- 新增邀请奖励中心\n- 优化 CUA 调用方式\n问题修复\n- 修复仓库百科异常上传的问题\n- 修复登录时偶发失败的问题\n- 修复远程内置浏览器标签页无法关闭的问题\n- Windows 上定位文件不再重复打开多个窗口\n- 闲时任务运行超限时改用友好提示\n- 修复插件更新角标显示不全的问题\n- 修复模型选择菜单宽度不适配的问题\n- 工具调用异常时正确显示错误，不再残留不完整卡片\n- 有后台工作流运行的会话不再从任务列表消失\n- 取消或恢复工作流被拒绝时，会说明具体原因\n- 修复 Start Plan 权益与余额显示不准确的问题\n- 修复升级后界面偶发黑屏的问题\n- 修复 Windows 上自定义模型配置加载失败的问题\n- 修复切换界面模式后输入框位置跳动的问题'
        },
        {
          'version': '3.12.3',
          'title': '3.12.3',
          'date': '2026-09-17',
          'dateRaw': '发布于 2026年9月17日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 优化计划模式和排队消息交互\n- 新增 OpenCode Go 服务商模板与站点映射\n- 优化服务商模板名称、图标及套餐横幅展示\n- 优化数据库初始化与升级流程\n- 支持在对话中上传、读取和预览 PDF 文件\n- 支持预览对话中的图片、视频等媒体文件\n- 插件可按工作区单独安装\n- 插件有新版本时会显示提醒，可直接更新\n- 操作被拦截时会显示具体原因，方便处理\n- 侧边栏标签支持鼠标中键关闭，并记住各会话的显示状态\n- 草稿任务也支持通过侧边栏查看\n- 内置浏览器会记住上次打开的窗口尺寸\n- 内置浏览器中的本地文件链接支持以系统默认浏览器打开\n- 优化 Weekend/Global Plan 领取提醒，状态与到期信息展示更清晰\n问题修复\n- 修复 Provider 配置读取阻塞的问题\n- 套餐获取失败时增加重新登录入口，修复登录后未触发 Key 强制刷新的问题\n- 优化未跟踪文件统计性能\n- 修复流式响应中断后的重试问题\n- 修复服务商配置读取异常的问题\n- 修复 OpenRouter 兼容性问题，优化连接测试\n- 修复恢复后的子 Agent 出现在任务列表中的问题\n- 修复计划模式菜单说明缺失的问题\n- 优化闲时任务的工具使用限制\n- 优化会话启动速度\n- 修复对话进行中模型切换和上下文丢失的问题\n- 优化上下文用量显示，支持触屏设备点击查看\n- 修复远程重连后模型配置同步异常的问题\n- 改善远程工作区和 WSL 环境的连接与部署稳定性\n- 修复 SSH 连接或发送时偶发卡住的问题\n- 修复登录态过期、授权回调失败等登录问题\n- 修复官方 MCP 连接问题，优化失败提示\n- 修复官方插件异常影响会话恢复的问题\n- 修复插件菜单显示错乱和卸载卡住的问题\n- 修复 Windows 上电脑操作偶发无响应、任务被误重启的问题\n- 修复远程工作区中待确认操作不显示的问题\n- 修复对话生成过程中内容搜索异常的问题\n- 优化长命令输出的显示性能\n- 修复文件路径和引用显示错误、无法跳转的问题\n- 修复打开会话时滚动位置不正确的问题\n- 优化用户消息的显示宽度\n- 修复空思考内容的显示问题\n- 优化不同任务之间的浏览器窗口隔离\n- 降低 Linux 大型工作区的文件监控资源占用\n- 修复 Linux 系统安装后被旧快捷方式遮挡的问题\n- 修复 Linux 自动更新的问题\n- 修复定时任务删除结果提示不准确的问题'
        },
        {
          'version': '3.11.2',
          'title': '3.11.2',
          'date': '2026-09-04',
          'dateRaw': '发布于 2026年9月4日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 支持在对话中上传、读取和预览 PDF 文件\n- 支持预览对话中的图片、视频等媒体文件\n- 插件可按工作区单独安装\n- 插件有新版本时会显示提醒，可直接更新\n- 操作被拦截时会显示具体原因，方便处理\n- 侧边栏标签支持鼠标中键关闭，并记住各会话的显示状态\n- 草稿任务也支持通过侧边栏查看\n- 内置浏览器会记住上次打开的窗口尺寸\n- 内置浏览器中的本地文件链接支持以系统默认浏览器打开\n- 优化 Weekend/Global Plan 领取提醒，状态与到期信息展示更清晰\n问题修复\n- 对话进行中不再中途更换模型或丢失上下文\n- 上下文用量显示更准确，触屏设备也可点击查看\n- 修复远程重连后模型配置同步异常的问题\n- 改善远程工作区和 WSL 环境的连接与部署稳定性\n- 修复 SSH 连接或发送时偶发卡住的问题\n- 修复登录态过期、授权回调失败等登录问题\n- 修复官方 MCP 连接问题，失败提示更清晰\n- 官方插件加载超时或数据异常不再影响会话恢复\n- 修复插件菜单显示错乱，卸载不再被卡住\n- 修复 Windows 上电脑操作偶发无响应、任务被误重启的问题\n- 修复远程工作区中待确认操作不显示的问题\n- 对话生成过程中也能正常搜索内容\n- 命令输出过长时自动截断，避免界面卡顿\n- 修复文件路径和引用显示错误、无法跳转的问题\n- 修复打开会话时滚动位置不正确的问题\n- 调整用户消息的显示宽度，长内容更易读\n- 不再显示空的思考内容\n- 不同任务的浏览器窗口相互独立，互不干扰\n- 降低 Linux 大型工作区的文件监控资源占用\n- 修复 Linux 系统安装后被旧快捷方式遮挡的问题\n- 修复定时任务删除结果提示不准确的问题'
        },
        {
          'version': '3.10.2',
          'title': '3.10.2',
          'date': '2026-08-31',
          'dateRaw': '发布于 2026年8月31日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 新增 Weekend Plan 免费提前领取，可邀请好友一起来领\n- 提示词模板引用的插件支持一键安装，进度提示更清晰\n- 输入框菜单新增技能快捷入口\n- 思考轨迹支持内容搜索，记录更完整并默认展开\n- MCP 服务器支持配置协议版本，协商失败时有引导提示\n- 编辑后的消息支持立即发送，无需排队等待\n- 对话回合结束时可查看执行摘要与耗时\n- 设置中「浏览器」菜单更名为「浏览器控制」\n问题修复\n- 优化登录授权流程，修复偶发回调失败的问题\n- 修复偶现的 mcp oauth 失败问题\n- 模型回复偶发中断或空白时，现在会自动重试\n- 修复出错后排队消息丢失、中断任务状态显示错误的问题\n- 统一工具执行状态文案，思考过程标签更简洁清晰\n- 修复任务操作提示被裁剪、触屏下任务信息错乱的问题\n- 打开任务时间线后未读标记会立即清除\n- 提高长文本粘贴转附件的阈值，减少误转换\n- 修复单个波浪线被误显示为删除线的问题\n- 切换侧边栏时输入框不再丢失焦点\n- 输入框引用与命令菜单显示更清晰，搜索不再反复重试\n- 修复工作区多个技能目录无法同时/列出的问题\n- 修复部分插件技能无法识别、名称显示不一致的问题\n- 用量统计默认展示近七天，图表与数值标注更清晰\n- 修复 Windows 下后台进程退出后残留的问题\n- 修复Computer Use在 macOS 与远程工作区下的多处异常\n- 提升浏览器控制会话稳定性，页面脚本执行更符合预期\n- 修复移动端远程界面菜单超出屏幕的问题\n- 修复套餐过期后模型状态显示异常的问题\n- 修复任务运行期间修改模型配置的报错问题'
        },
        {
          'version': '3.10.1',
          'title': '3.10.1',
          'date': '2026-08-28',
          'dateRaw': '发布于 2026年8月28日',
          'tags': [
            '新功能',
            '问题修复'
          ],
          'url': 'https://zcode.z.ai/changelog',
          'body': '新功能\n- 新增 Weekend Plan 免费提前领取，可邀请好友一起来领\n- 提示词模板引用的插件支持一键安装，进度提示更清晰\n- 输入框菜单新增技能快捷入口\n- 思考轨迹支持内容搜索，记录更完整并默认展开\n- MCP 服务器支持配置协议版本，协商失败时有引导提示\n- 编辑后的消息支持立即发送，无需排队等待\n- 对话回合结束时可查看执行摘要与耗时\n- 设置中「浏览器」菜单更名为「浏览器控制」\n问题修复\n- 优化登录授权流程，修复偶发回调失败的问题\n- 修复偶现的 mcp oauth 失败问题\n- 模型回复偶发中断或空白时，现在会自动重试\n- 修复出错后排队消息丢失、中断任务状态显示错误的问题\n- 统一工具执行状态文案，思考过程标签更简洁清晰\n- 修复任务操作提示被裁剪、触屏下任务信息错乱的问题\n- 打开任务时间线后未读标记会立即清除\n- 提高长文本粘贴转附件的阈值，减少误转换\n- 修复单个波浪线被误显示为删除线的问题\n- 切换侧边栏时输入框不再丢失焦点\n- 输入框引用与命令菜单显示更清晰，搜索不再反复重试\n- 修复工作区多个技能目录无法同时/列出的问题\n- 修复部分插件技能无法识别、名称显示不一致的问题\n- 用量统计默认展示近七天，图表与数值标注更清晰\n- 修复 Windows 下后台进程退出后残留的问题\n- 修复Computer Use在 macOS 与远程工作区下的多处异常\n- 提升浏览器控制会话稳定性，页面脚本执行更符合预期\n- 修复移动端远程界面菜单超出屏幕的问题\n- 修复套餐过期后模型状态显示异常的问题\n- 修复任务运行期间修改模型配置的报错问题'
        }
      ]
    },
    {
      'id': 'codebuddy',
      'name': 'CodeBuddy',
      'vendor': '腾讯云',
      'kind': 'codebuddy',
      'changelogUrl': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '4.12.1',
          'title': '4.12.1 (2026-09-20)',
          'date': '2026-09-20',
          'dateRaw': '2026-09-20',
          'tags': [
            '新增功能',
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-12-1-2026-09-20',
          'body': '新增功能\n- 项目记忆的存储位置与格式与命令行版本保持一致\n- 项目指引文件支持 @path 引用其他说明文件，可拆成多个文件维护\n- 长会话历史支持向上滚动加载更早的消息\n- 命令卡片的「自动运行」下拉新增「所有对话自动运行」，一次设置即可对所有对话生效\n- 企业来源的技能安装时可以选择「用户级」或「项目级」，项目级技能可随项目共享给团队成员，并支持更新与卸载\n体验优化\n- 优化 AI 每次请求携带的固定内容（系统说明、技能清单、工具定义），减少上下文占用，长对话可用空间更大\n- 优化对话切换与消息区渲染，多个会话标签来回切换更流畅，包含大量改动记录的历史会话切换不再长时间空白\n- 优化大文件与批量文件操作：打开超大文件后输入不再卡顿，批量删除大量文件明显更快，AI 批量生成或删除文件时界面不再长时间卡顿\n- 优化子代理调度，代码探索子代理的等待时间明显缩短\n- 优化远程 SSH 长会话稳定性，不再周期性整窗假死、对话停不下来\n- 优化打开 IDE 时的后台初始化，插件后台服务启动不再阻塞，打开后对话可正常使用、新建对话不再点不动\n- 优化插件市场自动更新流程，不再周期性卡住扩展宿主，更新失败改为逐步拉长重试间隔\n- 会话标题长度上限从 30 字放宽到 120 字；历史列表中的长标题鼠标悬停可查看完整内容\n- Git 提交消息生成更贴合本次改动，不再泛泛而谈\n- AI 最大步数默认上限从 100 / 500 上调到 2000，长任务可执行更多步骤\n- Cloud Studio 工具改为默认关闭，需要时可在「设置 → 集成」中启用\nBUG修复\n- 修复多个子代理会话并行时界面卡死的问题\n- 修复长时间让 AI 连续修改文件后，主窗口内存持续上涨直至被系统强制重启（白屏）的问题\n- 修复 macOS Intel 机器启动后扩展宿主反复崩溃的问题，崩溃恢复提醒不再出现在对话框里\n- 修复 AI 编辑文件后关闭再打开，新增 / 修改的绿色标记丢失、删除红块重复出现的问题\n- 修复任务清单 / 工具卡片永久显示「接收中」转圈、重开窗口也不恢复的问题\n- 修复并行运行多个任务时，一个任务的「任务清单」混入另一个任务条目、进度显示翻倍的问题\n- 修复切换对话偶发卡住的问题：10 秒内自动放弃并回退到原对话，失败时给出明确提示\n- 修复长任务结束后会话标签一直转圈、输入框按钮状态与标签不同步、消息区停在半途不再更新的问题\n- 修复 Agent 达到最大步数被强制中断时没有任何提示的问题：现在会说明中断原因并提供「继续」\n- 修复历史对话里贴过的图片无法还原、只显示为一段替代文字的问题\n- 修复多子代理长任务下点击「停止」不生效、等待确认期间「停止」按钮变成「发送」、输入框光标不恢复，以及子代理被系统停止时误显示「用户已取消」的问题\n- 修复子代理需要确认时入口不易发现、点击确认后没有反馈的问题：待确认入口常显且不会被折叠，确认按钮始终可见可点\n- 修复子代理任务卡片状态不跟随的问题：切换标签再切回后卡片与状态条消失、重启 IDE 后仍停在「运行中」\n- 修复团队成员消息偶发丢失、成员完成时逐个弹通知的问题（改为整队完成后统一提示）\n- 修复模型未返回内容时没有提示、任务静默结束的问题\n- 修复发送消息后提问未立即显示在对话里、输入框有内容却发不出去且不给出原因的问题\n- 修复命令卡片选择「当前对话自动运行」后，重启 IDE 又恢复为每次询问的问题\n- 修复窗口最小化恢复时的抖动与侧边栏宽度丢失、消息区闪烁、拖拽被中断后鼠标卡在拖拽状态的问题\n- 修复全局搜索偶发搜不到结果、@ 引用文件列表显示「暂无内容」或刚启动后首次搜索先为空，以及悬停普通文件时显示损坏图片图标的问题\n- 修复终端引用标签显示的名称不正确、引用胶囊行号错误、悬浮预览无法滚动的问题\n- 修复远程 SSH 偶发连接失败、连接通道验证失败导致中断、远端服务异常时长时间卡在「正在打开远程」、内网机器安装远端组件等不到备用下载源、远程场景代码智能检查报错的问题\n- 修复写文件类工具在参数生成期间卡片不可见、执行命令的工具卡片空白、命令工具参数写成别名时直接失败、工具卡片内图片与相对路径图片破图的问题\n- 修复文件变更列表：已删除文件的对比内容不正确、多会话共享工作区时列表互相串扰、旧会话历史文件被误判成「已删除」的问题；点击文件名恢复为直接打开真实文件；子代理或终端命令产出的文件不再漏记\n- 修复自定义 gpt-6 系列模型请求报错、kimi-k3 等模型调用失败的问题\n- 修复关闭最后一个对话标签后新建的对话不继承原模型与思考强度的问题\n- 修复高级版 / 旗舰版用户被错误显示为「体验版」的问题\n- 修复海外环境下点击「生成提交消息」直接失败的问题\n- 修复同时配置用户级与项目级 Hook 时，用户级 Hook 被项目级覆盖而不执行的问题\n- 修复 MCP 返回链接或资源类结果导致整轮对话报错的问题\n- 修复插件市场在技能页签下点击不切换、非法安装来源报错、Git 类型市场更新检测的问题\n- 修复技能数量很多时靠后的技能从 AI 视野中消失、某个技能漏写描述导致工具列表整体不可用、多根工作区里嵌套文件夹被剪掉导致项目级技能与规则消失的问题\n- 修复历史对话面板的悬浮提示互相干扰、批量操作入口未置灰说明、归档导入不兼容、思考强度未保存等问题\n- 修复多 Agent 对话后「历史提问」里出现多余条目、点击无法定位的问题\n- 修复 Mermaid ER 图注释列不可见、暗色主题下对比度不足的问题\n- 修复对话中贴过图片后，计划模式请求失败的问题\n- 修复未点开聊天面板时插件自动弹出侧边栏的问题\n- 修复定时任务被重复创建的问题：相同配置的任务会直接复用并提示已存在\n4.12.0 (2026-09-04)'
        },
        {
          'version': '4.12.0',
          'title': '4.12.0 (2026-09-04)',
          'date': '2026-09-04',
          'dateRaw': '2026-09-04',
          'tags': [
            '新增功能',
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-12-0-2026-09-04',
          'body': '新增功能\n- 新增多根工作区支持：一个窗口可以同时打开多个项目目录，AI 能同时理解每个项目的规则、技能与自定义命令，不必再反复开关窗口\n- 新增统一的插件与 Skill 市场，浏览、搜索、安装、更新与卸载都在同一入口完成\n- 新增禅模式（Zen Mode），一键隐藏编辑区与底部面板，专注与 AI 对话\n- 历史会话支持批量管理：可勾选多条一键导出为 zip 或删除，单个文件与 zip 包均可导入，常用会话支持置顶\n- 新增生图 / 生视频等高积分操作的前置确认，确认后才会执行，避免误触消耗积分\n- 自定义 Agent 支持单独配置思考强度与思考开关，不再受全局设置限制\n- 新增 PostToolUse Hook 支持，Hook 改写后的工具结果能被 AI 正确读取\n- 新增 CloudStudio 已部署环境的查看与删除，部署记录可自助清理\n- 模型选择器新增「打开配置文件」入口，一键打开并编辑本地模型配置\n- 新增 Codebase Search（代码库检索）工具的启用 / 禁用开关\n体验优化\n- 优化长对话首轮的响应速度，开启新对话时等待更短\n- 优化大项目的文件监听，避免系统监听资源被耗尽导致改动检测失效或界面长时间卡住\n- 优化打开会话的加载速度，长会话的响应更迅速\n- 优化消息列表渲染，消息较多时滚动与对话更流畅\n- 优化会话标签首次切换的卡顿\n- 优化大结果集与内存占用，降低长会话卡死和闪退的风险\n- 处理 AI 改动时，点「保留」或「撤销」后自动跳到下一处待处理的改动\n- 把终端里选中的内容添加到对话时，改为插入紧凑的引用胶囊，不再占用大段输入框\n- @ 引用文件列表把当前正在看的文件排在首位，以预览方式打开的文件也可被引用\n- @ 的 Git 上下文补齐最近提交列表，不再只有工作区改动\n- 会话列表按最近活动时间排序，定时任务会话显示最近一次执行时间\n- 子 Agent 数量较多时，底部成员栏折叠为「+N」，不再挤占对话区\n- 打开含项目级 MCP 配置的项目时，先展示待确认清单，确认后才会启动对应服务\n- 升级内置腾讯云 CloudBase 集成至 2.32.4，并支持配置工具超时时间\nBUG修复\n- 修复粘贴或恢复超长文本导致 IDE 卡死的问题\n- 修复多窗口启动时偶发闪退的问题\n- 修复 Windows 上最大化或改变窗口大小后整窗黑屏的问题\n- 修复远程环境下聊天面板白屏、长时间卡在加载中的问题\n- 修复部分会话打开后消息区空白的问题，单条消息缺失或损坏不再影响整段会话\n- 修复聊天面板资源加载失败时一直停在「正在加载」、没有重试入口的问题\n- 修复在 Agent 终端执行过构建命令后，其它 IDE 中的编译被安全删除机制拦截而失败的问题\n- 修复同时启用部分第三方插件时，文件搜索报错、集成面板加载失败的问题\n- 修复生成方案时反复弹出「扩展主机意外终止」并丢失对话的问题\n- 修复长对话触发自动总结后任务直接中断的问题\n- 修复模型把工具调用输出成纯文本时，任务静默中断并影响后续对话的问题\n- 修复点过工具确认后，本轮剩余时间无法显示「暂停」按钮的问题\n- 修复多标签页下点击「停止」需要等满数分钟才真正停止的问题\n- 修复后台会话出错后切回看不到失败原因、消息「…」菜单错位的问题\n- 修复后台会话的工具审批卡片不下发导致对话卡死、切换标签后授权弹窗不弹出的问题\n- 修复 Windows 上用 Alt+Tab 来回切换窗口后，对话输入框失焦、无法直接打字的问题\n- 修复 IDE 启动时输入框自动抢焦点、导致文件搜索内容被清空的问题\n- 修复粘贴长文本后视图跳到对话顶部的问题\n- 修复粘贴后按一次撤销会把此前输入的内容一起清空的问题\n- 修复拖动输入框调高把手后，鼠标保持拖拽状态、界面无法选中和复制文字的问题\n- 修复排队消息编辑后未修改内容时被误判为重复发送的问题\n- 修复 Plan 任务列表与回复状态区的长文本不换行、需要横向滚动的问题\n- 修复模式选择器提示气泡、Tokens 明细浮窗与模型下拉的显示异常\n- 修复对话页字号可设置范围过大导致看不清或界面被撑坏的问题\n- 修复远程开发时远端扩展宿主约每两分钟周期性卡顿的问题，重连、审批弹窗与发送状态一并恢复\n- 修复远程连接卡在「正在打开远程」、主机名解析失败导致连接不上的问题\n- 修复远程恢复会话后对话内容空白、首次启动卡在「登录中」的问题\n- 修复多窗口连接同一台远程主机时，每个窗口都要重新输入密码的问题\n- 修复远程开发且网络受限时，市场数据拉取失败反复重试、阻塞对话的问题\n- 修复团队模式下成员汇报丢失，导致主 Agent 一直等待、任务无法结束的问题\n- 修复自定义子 Agent 关闭自动执行后，点了「允许」命令仍不执行、任务一直卡住的问题\n- 修复 Agents 窗口「自动运行」只生效一次、子 Agent 关闭自动运行后命令确认卡死的问题\n- 修复连续执行多条命令时命令行一直不退出、最终报参数过长的问题\n- 修复命令执行失败时输出被丢弃、AI 看不到失败原因的问题\n- 修复 Windows 上执行含中文的命令时输出乱码的问题\n- 修复子 Agent 最终结果过长时被截断或变成空白的问题\n- 修复子 Agent 调用失败时只显示笼统错误、看不到真实错误码的问题\n- 修复子 Agent 卡片的调用方式在中文界面下显示为英文的问题\n- 修复自定义 Agent 无法创建和调度 Agent Team 的问题\n- 修复 MCP 服务描述过长时子 Agent 调用失败的问题\n- 修复写入大段内容时界面卡住、取消后留下空文件或半截文件的问题\n- 修复批量写入文件排队时误报超时、大批量写入卡住的问题\n- 修复 AI 通过终端命令删除文件时，文件变更列表不刷新的问题\n- 修复终端命令生成的文件不出现在文件变更列表、无法一键保留或撤销的问题\n- 修复已删除文件在变更列表里无法查看差异、与「查看变更」内容不一致的问题\n- 修复会话内新建又被删除的文件残留在变更列表的问题\n- 修复登录或切换账号后文件变更面板失效、需要重启 IDE 的问题\n- 修复回撤提问后旧方案仍参与后续对话、方案快照文件残留的问题\n- 修复读取空文件时提示「文件过大，无法一次读取」的问题\n- 修复部分历史会话文件因字数统计异常而无法导入的问题\n- 修复自定义 / 第三方模型思考强度不生效、部分推理模型报 400 错误的问题\n- 修复自定义模型与内置模型同名时，会话里选中的模型被反复改写的问题\n- 修复管理员已禁用的模型仍被自动选中的问题\n- 修复切换工作区后模型列表不按当前仓库的管控策略刷新的问题\n- 修复企业账号「不限量」时积分余额显示为负数、误报积分不足的问题\n- 修复积分余额显示异常、网络超时后一直显示错误余额的问题\n- 修复刷新登录凭证期间偶发被误判为已登出的问题\n- 修复网络请求、增强提示词与内联对话出错时只显示笼统提示、看不到真实原因的问题\n- 修复 Hook 拦截输入后点「重试」仍会绕过拦截的问题\n- 修复配置多个「提交提问时」触发的 Hook 时只有最后一个生效的问题\n- 修复 AI 删除文件时的确认规则自相矛盾的问题\n- 修复 Windows 上以管理员身份启动时 MCP 授权回调失败的问题\n- 修复 Skills 触发字符不支持中文标点的问题\n- 修复图像生成、语言服务开关在设置面板中修改后不生效的问题\n- 修复自动化任务窗口的模型列表未按可用范围过滤的问题\n- 修复新建自动化任务时被上一个会话的输出拉回旧界面的问题\n- 修复 Windows 上系统安全策略拦截数据库组件时，自动化任务报错无法理解且必须重启 IDE 的问题\n- 修复通过 /import 链接导入时因参数重复编码导致下载报错的问题\n- 修复有工作正在进行时更新提示弹出打断用户的问题\n4.11.3 (2026-08-28)'
        },
        {
          'version': '4.11.3',
          'title': '4.11.3 (2026-08-28)',
          'date': '2026-08-28',
          'dateRaw': '2026-08-28',
          'tags': [
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-11-3-2026-08-28',
          'body': '体验优化\n- 优化长对话的上下文压缩策略\nBUG修复\n- 修复部分不支持关闭思考的模型在首次使用时，思考强度未正确生效的问题\n- 修复 MCP 返回特定异常数据时，对话区偶发白屏的问题\n- 修复首次打开设置页时，因一次性加载全部设置项导致界面卡顿的问题\n- 修复模型响应被服务端异常中断（如请求超时）时，没有错误提示、任务静默结束的问题\n4.11.2 (2026-08-20)'
        },
        {
          'version': '4.11.2',
          'title': '4.11.2 (2026-08-20)',
          'date': '2026-08-20',
          'dateRaw': '2026-08-20',
          'tags': [
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-11-2-2026-08-20',
          'body': '体验优化\n- 对话面板字体大小支持单独配置，默认不跟随编辑器字体大小\nBUG修复\n- 修复 Agent 窗口文件删除未弹确认框问题\n- 修复 Agent 窗口命令卡片自动运行模式同步失效的问题\n- 修复 ask_followup_question 工具 questions 参数异常时展示异常问题\n- 修复 Remote-SSH 首次连接时 Chat 误弹加载失败 Retry 兜底页的问题\n- 修复停止任务后立刻发新消息误报「输入内容无效」的问题\n- 修复重新进入设计后 Figma API 未恢复的问题\n- 修复 Remote-SSH csh/tcsh 登录 shell 主机连接失败与 .cshrc 输出污染的问题\n- 修复 Windows 客户端 Remote-SSH 内联安装脚本过长导致连接失败的问题\n- 修复特定 IP 形式 Host 别名导致 Remote-SSH 主机名解析失败的问题\n- 修复慢 login shell 远端平台探测必然失败的问题\n- 修复输入框陈旧草稿反复复活的问题\n- 修复运行中团队子代理被误杀的问题\n- 修复多窗口下会话创建卡住、无目录时对话失败的问题\n- 修复 Remote-SSH 下空会话孤儿清理阻塞扩展主进程的问题\n- 修复并行读取图片时点击「停止」无响应的问题\n- 修复 Agent 删除文件确认框选择「跳过」后文件仍误显示「已删除」的问题\n- 修复 Remote-SSH 下扩展宿主停用后聊天发送永久等待、需重载窗口恢复的问题\n4.11.1 (2026-08-14)'
        },
        {
          'version': '4.11.1',
          'title': '4.11.1 (2026-08-14)',
          'date': '2026-08-14',
          'dateRaw': '2026-08-14',
          'tags': [
            '新增功能',
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-11-1-2026-08-14',
          'body': '新增功能\n- 安全删除新增全局开关，批量删除确认阈值支持自定义（默认 500）\n体验优化\n- 新对话支持继承上一个对话的模型与思考强度设置\n- Max 模式改为会话级偏好，切换模式不再自动关闭 Max\n- 优化快速切换会话 Tab 的性能，缓解 CephFS 等网络盘场景的卡顿\n- 优化 @ 提及文件搜索的检索压力，大仓库响应更流畅\n- 优化会话 diff 计算性能，避免大变更时 IDE 卡顿、聊天面板打不开\n- 优化扩展主机（EH）内存占用，大文件会话不再因内存耗尽崩溃\n- 优化 Remote-SSH 连接稳定性：断连支持重连宽限期、系统唤醒后恢复提速，修复 socks 代理假活与 Windows 多 Shell 连接失败\nBUG修复\n- 修复切换对话时模型可能异常切换的问题\n- 修复 Windows 下「查看变更」所有文件偶现取不到内容的问题\n- 修复切换登录账号后文件变更列表残留上一账号数据的问题\n- 修复 Craft + MCP 场景部分模型报 11133「请求参数无效」的问题\n- 修复搜索工具偏好未按用户显式指定优先执行的问题\n- 修复 curl 单引号参数中反引号被误判为命令注入的问题\n- 修复 Craft 启动 uvicorn/gunicorn 等 Python 服务后 tool call 卡 5 分钟超时的问题\n- 修复 MCP 插件市场接口 401 误触发自动退出登录的问题\n- 修复设置页安全删除配置写入报错的问题\n- 修复 zsh/bash rm 别名导致 Agent 删除命令语法报错、删除失败的问题\n- 修复 Windows PowerShell 终端安全删除拦截报错、中文路径乱码、多目标删除失败的问题\n- 修复 Windows PowerShell 终端删除绕过批量删除阈值确认、注入命令污染终端面板的问题\n- 修复 delete_file 删除后无变更记录、检查点回退恢复不了文件的问题\n- 修复批量删除审批失效导致模型反复重试删除的问题\n- 修复流式返回期间输入框光标回退、按键被吞的问题\n- 修复 IDE 启动时插件加载/AI Agent 窗口抢占焦点、清空搜索输入的问题\n- 修复切换模式强制压缩上下文导致对话历史截断的问题\n- 修复零参数工具调用永久卡死、结果误显示已取消的问题\n- 修复 Remote-SSH 下聊天面板卡在加载遮罩、远端宿主繁忙时白屏需重载窗口的问题\n- 修复 SSH 远程新建文件后文件变更列表不显示的问题\n4.11.0 (2026-08-06)'
        },
        {
          'version': '4.11.0',
          'title': '4.11.0 (2026-08-06)',
          'date': '2026-08-06',
          'dateRaw': '2026-08-06',
          'tags': [
            '新增功能',
            '体验优化',
            'BUG修复'
          ],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-11-0-2026-08-06',
          'body': '新增功能\n- 新增 LSP 语义工具，提升 Agent 代码理解与导航能力\n- 新增 Safe-Delete 安全删除能力，将文件删除操作自动转为移入系统回收站\n- 历史对话支持按提问内容搜索\n- 新增 Miora 素材库接入，支持将素材添加到对话\n- 历史对话支持 JSON 导入/导出\n体验优化\n- 优化多会话 Tab 切换性能\n- 优化打开文件对话框速度\n- 优化 CodeBuddy Chat 面板启动激活耗时\n- 优化模型折扣展示样式\n- 优化网络异常与错误提示\n- 右键菜单新增命令快捷键显示\n- 支持在独立窗口查看 Team 成员对话\n- 优化错误提示框样式\nBUG修复\n- 修复 chat webview 偶现灰屏、多窗口灰屏及扩展宿主崩溃后黑屏或灰屏的问题\n- 修复 Remote-SSH 周期性扩展宿主卡死、Chat 永久 Loading 及远程搜索超时的问题\n- 修复新建 Command 后指令未立即出现在命令列表的问题\n- 修复任务列表存在失败任务时点击运行无响应的问题\n- 修复 Auto Run 会话隔离、并发确认及设置项不生效的问题\n- 修复编辑已发送消息时工具栏操作未隔离的问题\n- 修复上下文压缩提示在界面层丢失的问题\n- 修复增强提示词恢复闪退的问题\n- 修复重启后停止任务失效的问题\n- 修复扩展宿主 Inspector 崩溃后无法恢复的问题\n- 修复切换会话 Tab 时成员浮层闪现的问题\n- 修复 PowerShell 危险命令安全检查失效的问题\n- 修复启动时证书故障导致代理挂死的问题\n- 修复浅色主题下附件图标不可见的问题\n- 修复自动化任务模型列表展示不全的问题\n- 修复远程会话因工作区扫描缓存缺失而反复卡顿的问题\n- 修复输入命令后插入图片导致文本被清空的问题\n- 修复 Skills 搜索高亮错位的问题\n- 修复扩展宿主因自动性能分析（CPU Profiling）崩溃的问题\n- 修复消息队列中 skill/@ 等标签展示异常的问题\n- 修复非 Plan 模式下执行计划后任务列表状态不更新的问题\n- 修复登录后首次打开模型列表时自定义模型闪烁的问题\n- 修复 replace_in_file 报错但内容已修改的问题\n- 修复 SSH 远程环境中切换 Tab 不响应的问题\n- 修复 checkpoint 回退确认弹窗与实际结果不一致的问题\n- 修复 Diff 审阅中删除行对比错位的问题\n- 修复 macOS 聊天输入框 Emacs 快捷键失效的问题\n- 修复模型选择被配置同步异常静默切换、思考强度串扰的问题\n- 修复 IDE 重启后输入框闪现其他会话草稿的问题\n- 修复慢网络或 SSH 环境下 webview 误重载导致输入丢失的问题\n- 修复知识库查询静默返回空结果的问题\n- 修复多会话并发取消或停止异常的问题\n- 修复 Agents 会话执行状态偶现消失的问题\n- 修复 Max 模式状态在会话 Tab 间串扰的问题\n- 修复会话删除后重启复现的问题\n- 修复引用文件路径过长时 hover 无法展示完整路径的问题\n- 修复编辑消息后会话跳顶且无法滚动到底的问题\n- 修复 macOS 自动更新失败的问题\n- 修复扩展缓存失效频繁弹窗的问题\n- 修复 execute_command 命令超长时执行状态未正确结束的问题\n- 修复 AskUserQuestion 偶现不弹窗的问题\n- 修复聊天面板渲染进程内存峰值过高导致的灰屏问题\n- 修复多窗口扩展缓存竞态的问题\n- 修复 Windows 下隐藏主窗口显示后任务栏图标不出现的问题\n- 修复「查看变更」按钮偶现无反应的问题\n- 修复 AI 生成 commit message 只有一行的问题\n- 修复 Dev Container 重连断开死循环的问题\n- 修复设置自动运行仍显示每次询问提示的问题\n- 修复 Team 成员取消级联问题，支持在成员对话内手动停止任务\n- 修复 MCP 重连未使用最新配置的问题\n- 修复自定义模型与内置模型同名冲突的问题\n4.10.4 (2026-07-22)'
        },
        {
          'version': '4.10.4',
          'title': '4.10.4 (2026-07-22)',
          'date': '2026-07-22',
          'dateRaw': '2026-07-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-10-4-2026-07-22',
          'body': '- 优化 Windows 下扩展启动耗时\n- 优化文件变更撤销文案，统一为 Undo\n- 优化大消息流式响应时的性能\n- 修复 Remote-SSH 消息无界膨胀导致主进程崩溃的问题\n- 修复超大会话加载导致 IDE 崩溃和灰屏的问题\n- 修复异常消息内容导致聊天面板灰屏的问题\n- 修复多窗口反复开关时内存持续上升的问题\n- 修复对话等待响应期间偶现停止按钮不生效的问题\n- 修复窗口未响应弹框过于频繁的问题\n- 修复 write_to_file 并发写入失败的问题\n- 修复 Git 仓库扫描阻塞事件循环的问题\n- 修复问答历史浮层暴露原始 XML 的问题\n- 修复额度不足引导文案未透传后端原文的问题\n- 修复文件预览状态在多工作区间串扰的问题\n- 修复 Todo 结果合并状态异常的问题\n- 修复消息中心通知被误清理及跳转参数异常的问题\n4.10.3 (2026-07-17)'
        },
        {
          'version': '4.10.3',
          'title': '4.10.3 (2026-07-17)',
          'date': '2026-07-17',
          'dateRaw': '2026-07-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-10-3-2026-07-17',
          'body': '- 新增首轮问答完成后自动生成会话标题，并支持在设置中开关\n- 新增历史会话切换时思考强度继承上次选择\n- 优化历史提问列表分段懒加载与跳转定位\n- 优化发送首条消息时的气泡出现延迟\n- 优化打开文件对话框的响应速度\n- 修复特定情况下扩展宿主主线程阻塞及 ACCESS_VIOLATION 导致崩溃的问题\n- 修复 Windows 下 SDK 重复初始化导致扩展宿主崩溃的问题\n- 修复 Agent 搜盘死循环导致远程扩展宿主无响应的问题\n- 修复 Remote-SSH 历史目录无写权限导致扩展宿主崩溃的问题\n- 修复自动打开过多 Diff 标签导致渲染器内存溢出的问题\n- 修复 Remote-SSH 下 AI 面板加载超时及远端上下文/命令执行异常的问题\n- 修复 Windows + Remote-SSH 首屏白屏及窗口拖拽后未自适应铺满的问题\n- 修复打开最近工程或 Agents 打开 IDE 时出现黑屏的问题\n- 修复部分场景下右侧 CodeBuddy Chat 面板空白的问题\n- 修复多 Tab 切换时闪现空会话欢迎页的问题\n- 修复输入框右键剪切后粘贴/退格失效的问题\n- 修复置底按钮点击无效及遮挡模型选择器的问题\n- 修复 AskUserQuestion 自定义输入框无法粘贴的问题\n- 修复编辑已发送消息时拖入文件落到主输入框的问题\n- 修复编辑消息时仍显示「历史提问」入口的问题\n- 修复会话 Tab 选中态在第三方主题下辨识度低的问题\n- 修复代码块标题点击带行号跳转的问题\n- 修复 @ 提及在文件扫描中断后列表不完整的问题\n- 修复自定义模型未指定上下文窗口导致自动压缩被跳过的问题\n- 修复静默模式下终端命令执行无输出的问题\n- 修复设置中 Max Step 配置无法写入的问题\n- 修复编辑器右键 Explain/Generate Code 报 command not found 的问题\n- 修复 Skills 选中后未正确注入模型提示词的问题\n- 修复 Figma 添加到对话异常的问题\n- 修复 Linux 桌面启动时中文输入法不可用的问题\n- 修复终端无响应后无法自动恢复的问题\n- 修复 Windows 下代码替换多加空行的问题\n4.10.2 (2026-07-14)'
        },
        {
          'version': '4.10.2',
          'title': '4.10.2 (2026-07-14)',
          'date': '2026-07-14',
          'dateRaw': '2026-07-14',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-10-2-2026-07-14',
          'body': '- 新增 Agent 步数限制设置项，支持为主 Agent 与子 Agent 分别配置最大步数（0 表示不限制）\n- 新增会话 Tab 切换时 Max 模式状态继承前一个 Tab 的设置\n- 修复 Windows 下消息队列文件重命名触发 EPERM 导致扩展宿主闪退的问题\n- 修复 Skills 目录较大时同步扫描阻塞发送路径、导致消息发不出甚至扩展宿主无响应的问题\n- 修复只读视图下打开 PLAN.md 空白不刷新的问题\n- 修复多根工作区下 @ 引用/添加文件使用相对路径导致引用错误的问题\n- 修复新建会话 Tab 未定位到当前选中 Tab 右侧的问题\n- 修复输入框拖拽区域过小导致拖动困难的问题\n- 修复顶部 Tab 浮层样式及文件展开最后一行 hover 时底角出界的问题\n- 修复 Markdown 链接解析与深层嵌套导致栈溢出、聊天面板空白的问题\n- 修复文件路径级别的工作区排除规则未生效的问题\n- 修复多标签切换后运行中会话的停止按钮消失的问题\n- 修复自定义模型接口未返回 token 用量，导致无法有效激活上下文自动压缩功能的问题\n- 修复审阅下一个文件导航时幽灵项残留与无响应的问题\n- 修复自定义模型工具调用能力配置未生效的问题\n- 修复 Agent 页面自动化提示词过长导致显示异常的问题\n- 修复 Skills 列表展开更多时筛选条件未保留的问题\n- 修复拖拽滚动条时自动滚动未暂停导致无限弹回的问题\n- 修复 Windows 更新时 install-dir 残留 NUL 文件的问题\n- 修复 write_to_file 写入大文件时流式阶段无反馈空窗期的问题\n4.10.1 (2026-07-12)'
        },
        {
          'version': '4.10.1',
          'title': '4.10.1 (2026-07-12)',
          'date': '2026-07-12',
          'dateRaw': '2026-07-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-10-1-2026-07-12',
          'body': '- 优化聊天面板首屏加载体验，消除冷启动与关闭重开时的多处闪烁，面板隐藏后再打开可即时复用\n- 修复部分用户升级后右侧聊天面板永久卡在「Loading CodeBuddy…」无法打开的问题\n- 修复 Windows 工作区路径含特殊字符导致聊天面板永久 Loading 的问题\n- 修复超大工作区或远程高延迟文件系统下，文件扫描/搜索拖慢扩展宿主、引发无响应甚至闪退的问题\n- 修复触发额度或频率限制时错误提示显示「错误码: UNKNOWN」、丢失真实错误信息的问题\n- 修复使用部分 OpenAI 兼容第三方自定义模型（如 gpt-5.5）发起对话立即报错的问题\n- 修复从 IDE 资源管理器拖拽文件到聊天输入框无反应的问题\n- 修复 Agent 搜索工具（search_file / list_dir / search_content）对显式指定的文件（如日志文件）误排除、返回空结果的问题\n- 修复多个会话 Tab 之间聊天输入框草稿未隔离、相互串扰的问题\n4.10.0 (2026-07-10)'
        },
        {
          'version': '4.10.0',
          'title': '4.10.0 (2026-07-10)',
          'date': '2026-07-10',
          'dateRaw': '2026-07-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-10-0-2026-07-10',
          'body': '- 升级上游 VS Code 基线从 1.102 至 1.106（Electron 37 / Chromium 138）\n- 新增源代码管理（SCM）支持 Git Worktree 管理功能\n- 新增模型思考强度选择与思考模式开关\n- 新增模型响应状态提示体系\n- 新增高亮内置和自定义的危险命令，并差异化危险命令确认框\n- 新增设置页滚动定位并高亮 Command Security 分组\n- 新增对话框拖拽文件添加能力\n- 新增 IDE 输入框接入 Skills 和新建自定义模型\n- 新增对话面板内联搜索功能\n- 新增切换聊天 Tab 后恢复到切走前的滚动位置\n- 新增终端命令静默执行模式\n- 新增 autoRun 配置项并支持持久化\n- 新增 MCP 云端托管 OAuth 授权，信任连接的客户端为 CodeBuddy 应用\n- 新增 SubAgents 子代理状态指示器\n- 新增支持 Remote SSH 远程连接 macOS\n- 新增 自定义模型 Token Plan 多套餐及模型配置同步\n- 新增工作区名置于窗口标题最前，优化多窗口区分体验\n- 新增 AskUserQuestion 选项支持自定义输入\n- 新增无项目时的空状态引导\n- 新增编辑后自动弹 Diff 开关\n- 新增 md/html 文件默认进入源码模式\n- 优化 Agent 消息区域渲染，提高首屏速度\n- 优化 Chat 面板预热速度，内置扩展按需激活\n- 优化历史对话列表按最后活跃时间实时置顶\n- 优化「历史提问」入口位置与图标\n- 优化子代理状态指示器交互和 UI\n- 优化 Team 模式子代理指示器展示\n- 优化 replace_in_file 工具失败错误提示和样式\n- 优化 write_to_file 工具提示词与参数错误重试指引\n- 优化斜杠命令面板默认选中项按优先级挑选\n- 优化 Remote-SSH 连接超时降级与错误提示\n- 优化会话大屏自适应宽度与表格列宽渲染\n- 移除 Agents 页面简洁模式\n- 修复 Remote SSH 场景下特定 glibc 版本会出现文件变更不会实时显示问题\n- 修复 Remote SSH 扩展宿主 CPU 100% 的问题\n- 修复 Remote SSH exec-zsh 主机上 code-server 安装失败\n- 修复 Remote SSH jumpserver 重复 OTP 的问题\n- 修复 Remote SSH socket 监听模式连接失败\n- 修复 Remote SSH mux 转发远程连接卡死\n- 修复 Remote SSH parseKey 异常时误弹 passphrase 输入框\n- 修复 WSL 连接时 server 下载地址 404\n- 修复 Remote-SSH 下 SCM 初始扫描卡住的问题\n- 修复远程连接后文件树未恢复的问题\n- 修复 SSH 远程下打开 Dev Container 失败的问题\n- 修复 exthost 关窗后 CPU 100% 卡死不退出的问题\n- 修复远程 Extension Host 长时间运行后 hang 的问题\n- 修复 Extension Host 日志压力及 checkpoint OOM 风险\n- 修复远程工作区大文件搜索导致 Extension Host 无响应\n- 修复扩展宿主崩溃后 Agent 会话状态与「打开 agent」按钮恢复\n- 修复启动期渲染进程崩溃自动恢复\n- 修复多窗口 webview 常驻及会话订阅未释放导致的大规模内存泄漏\n- 修复 Dev Container 崩溃及新建对话 RPC 未就绪的问题\n- 修复自定义模型缓存 token 显示问题\n- 修复自定义模型 gpt-5.x 请求 max_tokens 参数报错\n- 修复自定义模型 temperature 参数兼容性\n- 修复自定义模型出文前报错导致 Agents 侧界面空白\n- 修复自定义模型流式解析与 temperature 参数异常\n- 修复 models.json 的 availableModels 白名单配置在有后台配置时无效问题\n- 修复向上滚动加载历史时的闪跳\n- 修复历史对话面板特定情况下误显示「暂无历史记录」\n- 修复历史提问跳转到靠前消息定位失效/白屏\n- 修复复制按钮未排除深度思考内容\n- 修复模型提问浮层遮挡输出与文件修改列表\n- 修复模型回复结束态 footer 与 Token 闪现问题\n- 修复对话中内联 SVG 矢量图渲染\n- 修复输入框过长时底部工具栏被遮挡的问题\n- 修复输入框提示横幅位置错位问题\n- 修复对话状态卡死的问题\n- 修复消息滚动闪烁问题\n- 修复 RPC 返回异常引发的灰屏问题\n- 修复 Plan 模式任务清单进度卡在 1/n 的问题\n- 修复 Plan 模式查看计划响应异常\n- 修复会话结束后任务列表 UI 虚假显示「正在执行中」\n- 修复子 Agent 权限确认卡死及需点两次确认的问题\n- 修复重复触发的自动化任务未聚合到同一会话\n- 修复自动化删除弹窗长名称溢出问题\n- 修复自动化任务循环执行卡住的问题\n- 修复多对话 Tab 切换卡顿及尾部 Tab 被裁剪\n- 修复 Windows 下 mainCmd 大小写变体未覆盖的问题\n- 修复 macOS 只读位置运行导致的自动更新死循环\n- 修复 PowerShell 执行命令 banner 乱码问题\n- 修复 MCP 工具审批菜单缺失导致对话假死\n- 修复 MCP OAuth 未兼容手动配置的 Authorization header\n- 修复内容过滤时未清除已渲染的 assistant 消息及工具调用\n- 修复 Mermaid 渲染样式与稳定性\n- 修复 Agents 模式复制按钮文本重复两遍\n- 修复 Agents Widget 白屏/灰屏崩溃问题\n- 修复内置浏览器按钮点击无反应\n- 修复 AI 改动文件审阅状态重启后丢失的问题\n- 修复多工作区下引用代码块点击无反应的问题\n4.9.15 (2026-06-26)'
        },
        {
          'version': '4.9.15',
          'title': '4.9.15 (2026-06-26)',
          'date': '2026-06-26',
          'dateRaw': '2026-06-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-15-2026-06-26',
          'body': '- 新增会话 Tab 功能\n- 新增对话消耗显示功能\n- 新增对话历史提问功能\n- 新增历史对话搜索功能\n- 新增 Diff 并排(Side-by-Side)对比模式，支持在设置页切换偏好，文件变更列表新增「在 Diff 编辑器中打开」入口\n- 新增命令执行结果块完成后默认折叠收起，减少对话流中长输出的视觉干扰\n- 新增 Stop Hook 通过 loop_limit 配置循环次数上限，避免无限续跑\n- 新增 IDE 根据系统内存自适应调整预热池大小，优化低内存设备资源利用\n- 新增 Remote SSH 本地 Server SOCKS 数据面常驻，提升远程连接稳定性\n- 新增积分耗尽(credit_exhausted)等订阅/计费提醒类型\n- 修复 Agent 模式下多会话制品(Artifacts)跨会话串台导致显示错乱丢失的问题\n- 修复 Agent Manager 连接韧性不足导致对话灰屏、扩展完全失效需重启的问题\n- 修复反序列化异常数据导致 Chat 面板灰屏「出现了错误，请刷新页面重试」的问题\n- 修复 IDE 编辑器内点击 Keep 后文件仍在聊天文件列表中不消失的问题\n- 修复 Kimi 模型 tool_call ID 跨轮碰撞导致工具执行陷入死循环的问题\n- 修复 Windows 下 PowerShell CLI 错误输出显示误导信息的问题\n- 修复普通 Markdown 文件中 Mermaid 图表代码块不渲染的问题\n- 修复 IDE 重启后未自动恢复上次打开项目的问题\n- 修复 Figma 内置浏览器 SPA 导航后「添加到对话」按钮无响应的问题\n- 修复 Remote SSH 连接后文件修改编辑器标签不更新状态的问题\n- 修复 MCP 网络断开时扩展宿主反复崩溃的问题\n- 修复计费类通知按钮未使用系统外部浏览器导致打开异常的问题\n- 修复启动阶段资源竞争的问题\n- 修复 Windows 安装目录防护误将暂存目录视为用户内容而拦截更新的问题\n- 修复 Remote SSH「Open Recent」中主机名未按精确 authority 显示的问题\n- 修复 View Diff 功能超出面板内可见文件范围的问题\n- 修复若干内存泄露问题\n4.9.14 (2026-06-23)'
        },
        {
          'version': '4.9.14',
          'title': '4.9.14 (2026-06-23)',
          'date': '2026-06-23',
          'dateRaw': '2026-06-23',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-14-2026-06-23',
          'body': '- Agent 独立进程运行，降低 Extension Host 崩溃和内存溢出风险，提升稳定性\n- 同步上游 VSCode 版本至 1.102.3\n- 优化 Remote SSH 连接性能，默认走原生 SSH 数据面并启用连接复用\n- 新增 Diff 视图模式切换功能，支持差异模式与简单模式切换\n- Agent 子代理模型选择支持继承主 Agent 配置\n- 新增 JCEF 渲染异常检测并提示升级\n- 新增 Skill 入口文件支持识别小写 skill.md\n- 优化 @ 提及列表，同名文件夹/文件添加父目录前缀便于区分\n- 优化模型选择器展示，列表加宽并分组展示内置与自定义模型\n- 优化服务端错误信息展示，增加错误码国际化映射\n- 优化增强提示词失败时的错误提示，展示友好错误信息\n- 优化模型返回空 tool_calls 时的提示，通过 Banner 友好提示用户\n- Agents 页面模型列表显示积分倍率\n- 修复 Terminal 多行命令导致 Agent 卡在「运行中」的问题\n- 修复超大项目首次打开 @ 提及卡顿的问题\n- 修复长对话最小化恢复后白屏卡死的问题\n- 修复消息队列持久化文件损坏导致队列功能不可用的问题\n- 修复账号切换后进行中任务偶现丢失、仍展示旧会话内容的问题\n- 修复对话回退恢复后文件接受/拒绝无响应的问题\n- 修复模型选择器偶现列表变空或自动跳回 Auto 模式的问题\n- 修复 Agent 状态未回落导致队列卡死的问题\n- 修复 SSH 远程连接失败及 AI 修改后文件列表显示异常的问题\n- 修复 Remote SSH 多级跳板代理连接失败的问题\n- 修复推理模型使用自定义模型时 400 报错的问题\n- 修复 Markdown 渲染时标题层级无法区分的问题\n- 修复 Safety Rule 与模型确认同时触发时双弹窗重复确认问题\n- 修复内联对话任务快捷键未使用时也占用快捷键导致冲突的问题\n- 修复概率性历史记录丢失的问题\n- 修复插件子 Agent 无法关闭的问题\n- 修复关闭子 Agent 后偶现报错的问题\n- 修复 MCP 重连时 OAuth 认证页面不弹出的问题\n- 修复 MCP SSE 重连时异常报错的问题\n- 修复已安装插件列表不实时更新的问题\n- 修复远程慢速磁盘环境下粘贴操作卡死的问题\n- 修复 Agents 切换会话时回到底部按钮显示异常的问题\n- 修复 Agents 窗口切换模型时界面闪烁的问题\n- 修复输入框横幅按钮被装饰图片遮挡的问题\n- 修复 IDE 启动加载缓慢的问题\n- 修复设置页退出后自定义 Agent 模式被重置的问题\n- 修复标题栏命令搜索中心不显示的问题\n- 修复 Windows 检查点回退弹窗展示文件全路径的问题\n- 修复自定义 Agent 缺少团队协作工具的问题\n- 修复代码对比视图中删除内容异常显示红线的问题\n- 修复 Windows HDR 显示器下图标颜色过曝的问题\n- 修复自定义模型多轮调用可能鉴权丢失问题\n- 修复禁用 MCP 后仍发起连接和自动重连的问题\n- 修复内置 Browser 打开 Figma 后刷新导致渲染进程崩溃的问题\n- 修复总结失败时对话卡在 Summarizing 状态的问题\n- 修复添加技能市场弹窗卡在「正在解压市场...」的问题\n- 修复登录后插件市场源未刷新的问题\n- 修复插件详情页「已安装」按钮文字竖向换行的问题\n- 修复 .mdc 文件无法自动换行及配置不同步的问题\n- 修复源代码管理树 type-ahead 后偶现崩溃的问题\n- 修复消息队列条目被挤压导致样式错乱的问题\n- 修复 Windows 构建残留过期产物导致插件激活白屏的问题\n- 修复 Remote SSH 重连时未重建失活的 exec-server 连接的问题\n- 修复 OTLP 上报失败导致 Extension Host 崩溃及内存泄漏的问题\n- 修复无变化 Git decoration 重复触发窗口崩溃的问题\n- 修复 Webview Cmd+F 在标准 Electron 下不可用的问题\n- 修复 Cmd+K 未唤起内联对话框的问题\n- 修复扩展扫描超大日志、API Proposals 报错及消息队列并发 ENOENT 的问题\n- 修复 StopHook 续跑跳过 Reactive Tool 用户交互的问题\n- 修复用户子代理关闭后报错 Subagent file not found 的问题\n- 修复子 Agent 模型偶现回退到主 Agent 模型的问题\n- 修复 MCP 后台连接失败未妥善处理及 Agent 异常中止未透出的问题\n- 修复 MCP Marketplace 接口出现请求风暴的问题\n- 修复 Agents 切换会话时滚动条偶现停在顶部的问题\n4.9.13 (2026-06-10)'
        },
        {
          'version': '4.9.13',
          'title': '4.9.13 (2026-06-10)',
          'date': '2026-06-10',
          'dateRaw': '2026-06-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-13-2026-06-10',
          'body': '- 新增 PreToolUse Hook 行为对齐 Claude Code，支持更精细的工具执行权限控制\n- 新增企业自定义模型 / Skill 上传策略，满足企业合规管控需求\n- 新增自定义模型支持区分同 id 不同来源的模型\n- 新增登录时识别并展示 license 相关错误码\n- 新增支持 prompt/command/rules 三类 deeplink 导入\n- 优化聊天输入框最大可调高度至视口 75%，改善长文本编辑体验\n- 优化 Remote SSH 连接稳定性，减少偶发断连需重连问题\n- 优化 Remote SSH 安装过程流式上报进度，消除长时间静默\n- 优化 Remote SSH 远端下载失败时自动降级本地下载并推送 server 包\n- 优化 CodeBuddy 启动时 TCP 连接瞬时激增问题\n- 优化 Agent Manager 与 Chat UI 性能与内存治理\n- 优化聊天输入框输入卡顿问题\n- 优化 Extension Host 同步 IO 阻塞导致卡顿的问题\n- 修复编辑器右上角「打开更改」按钮点击无反应的问题\n- 修复 Markdown / HTML 文件 diff 查看时焦点异常跳转及预览后无法切回源码的问题\n- 修复 Hook 确认弹窗被跳过及 AutoRun 设置为「每次都询问」时确认按钮未显示的问题\n- 修复关闭系统子 Agent 后仍可被调用的问题\n- 修复 Agent 任务执行中被 ACP cancel 误中止的问题\n- 修复 ask_followup_question 工具导致对话产生 XML 的问题\n- 修复自定义模型鉴权失败导致 IDE 退出登录的问题\n- 修复配置企业模型后内置模型列表加载不出来的问题\n- 修复切换账号后对话面板空白的问题\n- 修复点击历史对话时展示主面板样式而非历史对话内容的问题\n- 修复超大 RPC 响应触发 RangeError 导致 Extension Host 崩溃的问题\n- 修复单条工具结果体积过大导致 Extension Host OOM 的问题\n- 修复 Webview 旧实例泄漏及线程安全问题\n- 修复 Windows 客户端 RCE 安全漏洞及浏览器 URL Handler XSS 漏洞\n- 修复 MCP 重连时 OAuth 认证页面不弹出的问题\n- 修复 MCP 连接授权过程中错误不可见的问题\n- 修复 MCP token 无限 refresh 的问题\n- 修复对话检查点名称为空的问题\n- 修复检查点回退标识丢失及文件列表更新异常的问题\n- 修复粘贴超长文本导致输入框卡死的问题\n- 修复粘贴/拖拽大图导致 Webview 崩溃的问题\n- 修复切回会话时工具调用轮内容消失的问题\n- 修复切换长会话后未滚动到最底部的问题\n- 修复切换会话后历史消息时序错乱的问题\n- 修复会话恢复链路导致 Extension Host OOM 的问题\n- 修复多回合老会话流式中输入进不了队列的问题\n- 修复 stopHook 未限制续跑轮次导致的无限续跑问题\n- 修复 Windows 下写工具持久化因路径含冒号导致 EINVAL 的问题\n- 修复 Markdown 预览页搜索不可用的问题\n- 修复 Markdown 预览和源文件无法切换的问题\n- 修复去掉图片重发后「当前模型不支持图片」提示不消失的问题\n- 修复产物分享链接打开后显示「系统维护中」的问题\n- 修复自动化子 Agent 写文件时卡住的问题\n- 修复历史会话中工作区文件变更后未同步的问题\n4.9.12 (2026-06-01)'
        },
        {
          'version': '4.9.12',
          'title': '4.9.12 (2026-06-01)',
          'date': '2026-06-01',
          'dateRaw': '2026-06-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-12-2026-06-01',
          'body': '- 新增 AppShot 侧边栏捕获，支持快速截取应用画面用于对话上下文\n- 新增 Markdown 和 HTML 预览，支持 Mermaid 图表渲染\n- 新增 prompt/command/rules 三类 deeplink 导入能力\n- 新增自定义模型 modelId 字段，区分同 id 不同来源的自定义模型\n- 新增复制请求 ID 时附带 conversationId，统一输出为 JSON 格式\n- 新增元宝搜索导流入口整段可点击\n- 优化 agent-craft 版本加载性能，自动裁剪 undo 栈\n- 优化 MCP SDK 升级到 1.29.0，修复协议 2025-11-25 连接失败问题\n- 修复粘贴/拖拽大图导致 webview 崩溃的问题\n- 修复聊天输入框双击单词无法选中的问题\n- 修复历史会话点入后渲染欢迎页的问题\n- 修复切换会话后历史消息时序错乱的问题\n- 修复 cache 命中时过时快照导致历史会话切回后回复消失的问题\n- 修复 Webview 路由刷新后检查点回退标识丢失的问题\n- 修复工具执行完成事件因竞态丢失导致文件列表及 Checkpoint 更新异常的问题\n- 修复 craft 模式 isAutoMode 脏数据导致模型列表死锁的问题\n- 修复版本缓存过时导致 rollback 误删文件的问题\n- 修复 PreToolUse Hook 决策需要用户确认时弹窗未弹出的问题\n- 修复 Hook deny 决策被 allow hook 覆盖的问题\n- 修复 agent-craft length 截断后无法续写的问题\n- 修复 Team 模式下主 agent 等待子 agent 关机确认死等的问题\n- 修复未打开工作区时对话历史多出空白条目的问题\n- 修复自动补全语言删除按钮无响应的问题\n- 修复点赞状态持久化、取消点赞后切换会话仍显示高亮的问题\n- 修复取消登录后状态泄漏的问题\n- 修复 search_content 工具不支持单文件路径的问题\n- 修复每次对话因获取 shell 类型阻塞 2 秒的问题\n- 修复 gradle maven 仓库配置被错误覆盖导致频繁限流的问题\n- 修复海外版 CodeBuddy IDE 无 agents 入口的问题\n- 修复 Webview 重建时旧注册残留导致的报错\n- 修复 Remote SSH 内网环境下载失败后不切换 fallback 域名的问题\n- 修复 Remote SSH 上传超时配置，跳过已失败的 native SSH 竞速并优化进度提示\n- 修复 JetBrains 偶现发送消息未显示的问题\n- 修复 Xcode 插入代码光标不移动、忽略 RN 生成目录文件事件的问题\n- 修复飞书 webhook Encrypt Key 改为必填以提升安全性\n4.9.11 (2026-05-27)'
        },
        {
          'version': '4.9.11',
          'title': '4.9.11 (2026-05-27)',
          'date': '2026-05-27',
          'dateRaw': '2026-05-27',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-11-2026-05-27',
          'body': '- 修复切换会话后历史消息时序错乱\n4.9.10 (2026-05-25)'
        },
        {
          'version': '4.9.10',
          'title': '4.9.10 (2026-05-25)',
          'date': '2026-05-25',
          'dateRaw': '2026-05-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-10-2026-05-25',
          'body': '- 新增 Remote SSH native 连接模式，支持自定义远程服务器监听端口，SFTP 不可用时自动降级 exec channel 上传\n- 新增本地记忆功能开关，可在设置中控制是否启用会话记忆\n- 新增 Agent Stop Hooks 支持，允许自定义 Agent 在停止时执行清理逻辑\n- 新增自定义模型推理数据回传兼容 MiMo 格式\n- 优化浅色/深色主题配色，更新 badge 及表面颜色\n- 修复多任务并发后切换历史记录时用户消息与模型回复顺序颠倒的问题\n- 修复 SubAgent 权限确认弹窗在切换设置页后消失导致流程永久卡住的问题\n- 修复自定义 Agent 无法调度 subagent（Task 工具未注入）的问题\n- 修复 WebFetch 频繁卡住无响应的问题\n- 修复 subagent 数量超过 20 个时 Task 工具调用报错的问题\n- 修复卸载 Skill 时文件锁导致 IDE 左下角报错弹窗的问题\n- 修复 Bash 方式产生文件变更后 file tree 未展示的问题\n- 修复按日期或状态筛选后任务列表胶囊按钮消失的问题\n- 修复 cmd+k 与 cmd+i 快捷键无效的问题\n- 修复 Windows PowerShell 5.x 下嵌套命令包装导致 rg 等工具无法执行的问题\n- 修复 Windows 软链接配置加载异常的问题\n- 修复 checkpoint 回退时误删用户原始文件的问题\n- 修复 Extension Host 写文件偶现触发崩溃的问题\n- 修复命令栏点开菜单后 UI 变模糊的问题\n4.9.9 (2026-05-12)'
        },
        {
          'version': '4.9.9',
          'title': '4.9.9 (2026-05-12)',
          'date': '2026-05-12',
          'dateRaw': '2026-05-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-9-2026-05-12',
          'body': '- 优化 Remote SSH 连接稳定性，修复升级/重连死循环、语言包超时等问题，增加连接诊断信息\n- 优化会话消息读写性能与可靠性，降低大型历史记录导致崩溃的概率\n- 优化用量达上限时的错误提示，改为透传服务端文案\n- 优化元宝搜索标识展示样式\n- 修复自定义 Agent 软链接挂载无法识别、enabledAutoRun 关闭后仍未询问用户的问题\n- 修复多窗口并发安装内置技能互相删目录、Knot Skill 安装失败的问题\n- 修复 MCP OAuth 取消授权后再次点击连接不弹出浏览器的问题\n- 修复图片校验缺失导致对话报错的问题\n- 修复切换会话后上下文占用圆环被清空的问题\n- 修复产物在 macOS 下重复展示的问题\n- 修复自动化任务被重复触发的问题\n- 修复 Figma 导入组件后闪屏、聊天框添加组件后无法输入文字的问题\n- 修复 Windows 跨盘符场景下 rules 加载路径异常的问题\n4.9.8 (2026-04-29)'
        },
        {
          'version': '4.9.8',
          'title': '4.9.8 (2026-04-29)',
          'date': '2026-04-29',
          'dateRaw': '2026-04-29',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-8-2026-04-29',
          'body': '- 新增 IDE 设置页「帮助与反馈」页面及多语言支持\n- 新增模型选择器视觉徽章\n- 优化 MCP 工具提示展示\n- 优化插件市场刷新、更新和添加流程，避免旧数据与循环加载\n- 优化大型历史记录加载，降低历史索引过大导致崩溃的概率\n- 优化 @ 文件引用搜索性能，提升文件选择响应速度\n- 修复 Reload IDE 后 MCP 列表配置偶现消失的问题\n- 修复 MCP OAuth 连接状态、Connect 按钮和配置识别异常\n- 修复 MCP 关闭后 server 进程未主动退出的问题\n- 修复 IDE 首次加载时 mcp.json 配置不展示的问题\n- 修复自定义模型 401 导致 IDE 全局退出登录、企业模型配置后内置模型加载异常的问题\n- 修复添加到 CodeBuddy 对话时页面崩溃的问题\n- 修复插件 Hook 命令解析异常导致工具调用失效的问题\n- 修复 Web Search、Skill 等工具调用异常的问题\n- 修复意见反馈上传日志过大导致提交失败的问题\n- 修复 Windows 首次启动侧边栏黑屏和安装目录校验异常的问题\n4.9.7 (2026-04-22)'
        },
        {
          'version': '4.9.7',
          'title': '4.9.7 (2026-04-22)',
          'date': '2026-04-22',
          'dateRaw': '2026-04-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-7-2026-04-22',
          'body': '- 优化技能/插件市场更新逻辑，提升更新体验\n- 优化所有工具渲染器补充 Hook ask 权限确认菜单，统一权限交互\n- 修复配置企业模型后内置模型列表加载问题\n- 修复 Remote SSH 下 AuthenticationProxy 错误序列化导致侧边栏空白的问题\n- 修复团队等待态卡住与消息重复唤醒的问题\n- 修复 Teams 消息回传和状态异常问题\n- 修复 write_to_file/replace_in_file 的 PreToolUse Hook 时序问题\n4.9.6 (2026-04-20)'
        },
        {
          'version': '4.9.6',
          'title': '4.9.6 (2026-04-20)',
          'date': '2026-04-20',
          'dateRaw': '2026-04-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-6-2026-04-20',
          'body': '- 修复 Windows 托盘隐藏窗口后从菜单栏启动无响应的问题\n- 优化字体大小调整\n- 增强稳定性\n4.9.5 (2026-04-15)'
        },
        {
          'version': '4.9.5',
          'title': '4.9.5 (2026-04-15)',
          'date': '2026-04-15',
          'dateRaw': '2026-04-15',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-5-2026-04-15',
          'body': '- 新增 Windows 安装目录防护机制，防止用户误删重要文件\n- 优化登录刷新登录状态时机\n- 修复 Windows 首次启动侧边栏黑屏的问题\n- 修复 Remote SSH 场景下侧边栏对话面板空白的问题\n- 修复切换模型后重试或发送消息仍使用旧模型的问题\n- 修复切换至升级前历史任务发送新内容无法展示的问题\n- 修复产物预览 docx/pdf 等二进制文件显示乱码及窄屏下内容截断的问题\n- 修复帮助按钮连续点击多次无响应的问题\n- 修复添加插件市场成功但不显示的问题\n- 修复技能/套件删除市场后已安装套件被连带删除的问题\n4.9.0 (2026-04-10)'
        },
        {
          'version': '4.9.0',
          'title': '4.9.0 (2026-04-10)',
          'date': '2026-04-10',
          'dateRaw': '2026-04-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-9-0-2026-04-10',
          'body': '- 新增系统托盘功能，支持后台常驻与快捷操作\n- 新增 Automation 创建时支持选择 Skills\n- 优化对话流中命令展示效果\n- 优化 Skills 页面安装交互体验\n- 优化工具调用失败时的用户展示效果\n- 优化工作空间最后一个任务删除后不再联动删除对应工作空间\n- 修复 MCP 异常断联后缺少合理恢复机制的问题\n- 修复 Windows WSL 执行命令乱码的问题\n- 修复大文件 PDF 预览导致 IDE 崩溃的问题\n- 修复 Windows 端休眠后外部通道发送消息无法响应的问题\n- 修复 MCP 加载较慢的问题\n- 修复 Claw 会话 bot 端指令生效异常的问题\n- 修复 Windows 端日志压缩包无法解压的问题\n4.8.1 (2026-04-05)'
        },
        {
          'version': '4.8.1',
          'title': '4.8.1 (2026-04-05)',
          'date': '2026-04-05',
          'dateRaw': '2026-04-05',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-8-1-2026-04-05',
          'body': '- 新增 IDE 发送消息支持队列模式，多条消息自动排队执行\n- 新增 IDE WebFetch 使用的模型自动跟随用户当前选中模型\n- 修复 Subagent 没有结果返回被 fallback 到把过程返回给主 agent 的问题\n- 修复 CodeBuddy 子代理 Hooks 未生效的问题\n- 修复新建任务慢且过程中任务状态显示为「等待回复」的问题\n- 修复产物无分享链接的问题\n- 修复 subagent 下无法自动运行的问题\n- 修复任务执行中点击历史任务未跳转到对应界面的问题\n- 修复 remote ssh 连接崩溃导致日志打满磁盘无法重连的问题\n- 修复中文模式下登出部分文案为英文的问题\n- 修复一些安全问题\n4.7.5 (2026-03-29)'
        },
        {
          'version': '4.7.5',
          'title': '4.7.5 (2026-03-29)',
          'date': '2026-03-29',
          'dateRaw': '2026-03-29',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-7-5-2026-03-29',
          'body': '- 新增文件交付工具，支持小程序产物回传\n- 新增 Skill 安全检测功能，低风险 Skill 支持自动安装\n- 新增灵感专用免费模型\n- 新增 /mr 命令支持安全工单自动指定处理人\n- 优化微信小程序首页弹框支持暗色主题\n- 优化 Claw 设置面板，小程序连接支持报错显示\n- 优化技能批量更新弹窗交互体验\n- 优化工作空间操作按钮外放展示\n- 优化产物预览新增头部操作栏\n- 优化专家勾选清除交互\n- 优化替换亮色模式 Claw 欢迎图片\n- 修复 MCP OAuth 自动弹窗和端口占用问题\n- 修复快速切换多个 MCP 开关时配置互相覆盖导致报错\n- 修复宽屏下聊天内容区域大面积空白问题\n- 修复新建任务时显示旧任务产物的问题\n- 修复删除插件市场后界面状态未正确更新\n- 修复技能管理已安装/未安装状态逻辑混乱的问题\n- 修复 ZIP 市场解压层级异常的问题\n- 修复技能目录菜单名称和插件市场弹窗样式问题\n- 修复点击任务列表 Tab 无法展开的问题\n- 修复 workspace search 遍历阻塞 webview 启动的问题\n- 修复代码输出中出现异常引号的问题\n4.7.3 (2026-03-27)'
        },
        {
          'version': '4.7.3',
          'title': '4.7.3 (2026-03-27)',
          'date': '2026-03-27',
          'dateRaw': '2026-03-27',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-7-3-2026-03-27',
          'body': '- 新增 Skill 安装后引导到输入框并提供示例提示词\n- 新增分享制品能力\n- 新增用户意见反馈提交流程，支持图文及日志上传\n- 新增微信小程序入口，支持关闭/开启连通\n- 新增 Linux ARM64 平台构建支持\n- 优化技能与插件菜单整合\n- 优化产物列表按最近更新时间倒序排序\n- 优化置顶任务样式及操作按钮交互\n- 优化 Claw 已连接状态展示弱化\n- 优化自动化任务支持自动生成工作空间目录\n- 修复兼容 http.noProxy 配置为字符串格式导致的启动崩溃\n- 修复 MCP 服务开关竞态和交互体验问题\n- 修复 MCP getServers() 初始化竞态导致返回空列表的问题\n- 修复 Windows 平台 power save blocker 类型异常\n- 修复 Windows 网络检测丢包率显示异常\n- 修复云桌面环境下日志压缩包无法打开的问题\n- 修复 preview webview 后台自动播放问题\n- 修复插件市场更新/安装/删除失败的问题\n- 修复 GitHub 插件市场下载链接缺少 .zip 后缀的问题\n- 修复归档任务筛选显示为空的问题\n- 修复置顶任务操作按钮缺失和浮窗显示异常\n- 修复 SkillHub 安装的技能在技能列表找不到的问题\n- 修复 Windows 文件上传路径错误的问题\n- 修复终端搜索框 UI 样式对齐问题\n4.7.2 (2026-03-26)'
        },
        {
          'version': '4.7.2',
          'title': '4.7.2 (2026-03-26)',
          'date': '2026-03-26',
          'dateRaw': '2026-03-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-7-2-2026-03-26',
          'body': '- 新增 Claude 1M 上下文模型并默认开启思考模式\n- 新增 Skill 一键安装支持 Deeplink\n- 新增专家召唤功能增强，支持名称召唤与快速提示词填充\n- 新增反馈弹窗支持并优化隐私声明展示\n- 优化会话中选择文件夹时支持 hover 展示完整路径\n- 优化 Skill 已安装列表按安装顺序排序\n- 优化工作空间保存文案及弹窗样式\n- 优化展开命令卡片时显示完整命令行内容\n- 优化插件安装后 rules/agents 支持递归识别子目录\n- 优化企业加量包单次购买上限至 100 个\n- 修复对话加载不到 MCP Server 的问题\n- 修复 MCP 授权时会先后打开两个授权页面需授权两次的问题\n- 修复对话中模型切换不生效的问题\n- 修复内容生成结束后工具状态仍显示\'生成中\'的问题\n- 修复分享文件路径解析导致复制失败的问题\n- 修复微信 channel 回复工具偶发找不到的问题\n- 修复技能导入拖拽文件夹不生效的问题\n- 修复 Windows 归档 toast 被标题栏遮挡无法点击的问题\n- 修复 SkillHub 中 Skill 缺少图标的问题\n- 修复归档页面导航及交互样式问题\n- 修复报错信息 RequestID 对齐问题\n- 修复 agents 退出登录后对话页未同步登出的问题\n- 修复个人账号登录时 Claw 企业微信渠道展示问题\n4.7.1 (2026-03-25)'
        },
        {
          'version': '4.7.0',
          'title': '4.7.0 (2026-03-26)',
          'date': '2026-03-26',
          'dateRaw': '2026-03-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-7-0-2026-03-26',
          'body': '- 新增网络检测功能，支持诊断网络连接状态\n- 新增对接腾讯文档 Skill，支持内置预装及微信免登换票\n- 优化安全策略，subagent agentic 条件下过滤高危终端命令\n- 修复使用 https 方式添加插件市场后更新不成功的问题\n- 修复 Windows 部分插件市场安装完成后里面的插件安装失败的问题\n- 修复自定义模型使用时掉登录的问题\n- 修复偶现所有模型报错 too many requests 的问题\n- 修复历史任务加载白屏的问题\n- 修复 Claw 上配多个 Bot 端后消息响应异常的问题\n- 修复 Agents 窗口 Memory 修改时第一次修改总会失败的问题\n- 修复复制会话时 Command/Skill 没有被识别的问题\n- 修复网页获取 Web Fetch 能力使用过程中间断性显示 Summary Web 的问题\n- 修复定时任务超时的问题\n- 修复对话框图片粘贴默认都粘贴在最后的问题\n- 修复 Windows 系统命令行执行带双引号的问题\n- 修复 CNB 市场的 Hook 插件安装到 CodeBuddy IDE 上无法生效的问题\n4.6.4 (2026-03-22)'
        },
        {
          'version': '4.7.1',
          'title': '4.7.1 (2026-03-25)',
          'date': '2026-03-25',
          'dateRaw': '2026-03-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-7-1-2026-03-25',
          'body': '- 新增专家中心排行榜功能，支持查看和召唤热门专家\n- 新增微信 Claw 支持上传文件和图片\n- 新增临时任务支持打开文件夹功能\n- 新增工作空间项目支持拖拽排序\n- 新增本地 Agents 支持归档管理\n- 新增任务保存为工作空间后自动插入到列表首位\n- 优化 Skill 列表 UI 交互，支持展示 Icon\n- 优化项目与任务操作按钮交互体验\n- 优化工作空间拖拽排序时定位指示条颜色显示\n- 优化对话窗口专家选择交互体验\n- 优化 Subagent 上下文压缩策略\n- 优化 Claw 名称显示为用户自定义名称\n- 优化界面用户可见信息文案\n- 修复 Windows 命令展示乱码且重启无效的问题\n- 修复 Windows 平台已归档任务链接无法跳转的问题\n- 修复从专家排行榜召唤专家时跳转异常的问题\n- 修复切换专家后提示词未同步更新的问题\n- 修复访问专家/插件/技能页面后点击已归档任务无反应的问题\n- 修复打开已归档任务后无法切换到新建任务界面的问题\n- 修复 Bot 发送消息默认使用 GLM 而非当前选中模型的问题\n- 修复产物打开文件夹功能异常的问题\n- 修复 Claw 产物右键进入后不在 Claw 下面的问题\n- 修复企微 Bot Skill 无法使用文档相关能力的问题\n- 修复微信 Claw 二维码过期时缺少提示交互的问题\n- 修复重新安装后钉钉/飞书 Bot 能发送但不能接收消息的问题\n- 修复 SkillHub 技能名大小写显示不一致的问题\n- 修复 Todo 任务列表 in_progress 状态被错误标记为失败的问题\n- 修复文件修改列表偶现消失的问题\n4.7.0 (2026-03-26)'
        },
        {
          'version': '4.6.4',
          'title': '4.6.4 (2026-03-22)',
          'date': '2026-03-22',
          'dateRaw': '2026-03-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-6-4-2026-03-22',
          'body': '- 新增 Skill 添加优化，支持上传、创建和查找技能\n- 新增左侧栏工作空间项支持拖拽排序\n- 新增产物预览支持 CSV/TSV 格式的表格预览\n- 新增召唤专家时自动填入默认提示词到输入框\n- 新增自动任务支持将附件链接推送小程序\n- 新增小程序消息含图时自动切换多模态模型\n- 新增渠道解绑功能\n- 优化 Skill 展示逻辑，支持 Plugin Skill 展示\n- 优化消息队列调试及 dispatch 重试逻辑\n- 优化非 Git 工作区也显示变更 Tab 和文件变更分类\n- 优化成长体系海报下载、图片比例保持及分享页体验\n- 修复进程重启后会话工作空间路由丢失导致对话跳到新空间的问题\n- 修复切换账号后 ProductFeatures 配置未实时更新的问题\n- 修复 Skillhub 安装的 Skill 在对话中无法使用的问题\n- 修复打开设置页时被异常跳转回首页的问题\n- 修复问题浮层组件数据异常导致对话页面无法打开的问题\n- 修复字体大小滑块拖动时抖动的问题\n- 修复产物预览光标闪动的问题\n- 修复帮助与反馈面板链接跳转问题\n- 修复重新登录后左侧边栏无法收缩的问题\n- 修复过滤已删除文件未从产物列表中移除的问题\n- 修复搜索后未读小红点消失的问题\n- 修复消息队列开关关闭时输入框按钮状态未联动的问题\n- 修复提示词中特殊符号被 HTML 转义的问题\n- 修复部分界面缺失中英文翻译的问题\n- 修复 Webhook 接入方式发送 BOT 消息没有回复的问题\n- 修复 Subagent 上下文压缩后恢复运行失败的问题\n- 修复缓存配置过期导致模型查找失败的问题\n- 修复用户设置中系统语言修改重启后丢失的问题\n4.6.3 (2026-03-21)'
        },
        {
          'version': '4.6.3',
          'title': '4.6.3 (2026-03-21)',
          'date': '2026-03-21',
          'dateRaw': '2026-03-21',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-6-3-2026-03-21',
          'body': '- 优化 Skill 内容展示效果\n- 修复 Mac 环境缺少 Python 和 Node.js 时启动程序未静默安装的问题\n- 修复微信 BOT 链路不通的问题\n- 修复 Plan 模式下生成的 md 卡片在浅色主题显示不清的问题\n4.6.2 (2026-03-20)'
        },
        {
          'version': '4.6.2',
          'title': '4.6.2 (2026-03-20)',
          'date': '2026-03-20',
          'dateRaw': '2026-03-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-6-2-2026-03-20',
          'body': '- 新增 Skill 接入 SkillHub，支持从 SkillHub 搜索、安装和管理 Skill\n- 新增本地 Agents 归档功能，支持对已完成的 Agents 进行归档管理\n- 新增 IDE 内 Plugin 的 Hook 能力，支持通过钩子扩展插件行为\n- 新增内网 IM 通信渠道精简，仅保留企业微信和微信两个渠道\n- 新增 Claw 新建任务页体验优化，提升任务创建交互流程\n- 新增官网下载地址增加 Windows ARM 入口\n- 新增 Connectors 能力，支持 Browser Operator 等连接器扩展\n- 新增带登录态调用 Skill 的能力\n- 新增用户一键领取专属 Credits 功能\n- 新增 HTML 格式文件支持在产物中展示，可点击跳转预览\n- 新增 Claw 输入框语音输入能力\n- 优化非 .git 目录下的工作空间，产物列表不展示 diff\n- 优化 Skill 列表描述逻辑，提升展示效果\n- 优化灵感 Prompt 效果调优\n- 优化任务执行过程中进展推送的进展流展示\n- 优化提示词优化能力\n- 优化任务队列增加开关功能，默认关闭\n- 修复 Claw Terminal 被异常要求确认的问题\n- 修复设置页帮助与反馈中「帮助文档」和「联系我们」未跳转至对应链接的问题\n- 修复 MCP 服务开关交互不友好的问题\n- 修复 .claude 、 .agents 、 .openclaw 配置的 Skill 无法被查询及调用的问题\n- 修复偶现 AGENT_INVOKABLE_CUSTOM_MODEL_NOT_FOUND 报错的问题\n- 修复上下文压缩后下次请求带上全部历史消息的问题\n- 修复非本次任务的产物出现在当前对话中的问题\n- 修复 Agents Skill 导入时上报的 ideName 字段写错的问题\n- 修复插件市场内置/外部市场字段上报值反转的问题\n- 修复插件市场已安装插件总数统计不准确的问题\n- 修复字体大小设置拖动调整时剧烈抖动的问题\n4.6.1 (2026-03-18)'
        },
        {
          'version': '4.6.1',
          'title': '4.6.1 (2026-03-18)',
          'date': '2026-03-18',
          'dateRaw': '2026-03-18',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-6-1-2026-03-18',
          'body': '- 新增根据端侧 Bot 是否支持 Markdown 自动判定系统提示词，优化 QQ 端 Markdown 格式适配\n- 新增发送图片到不支持图片的模型时，报错弹窗增加模型切换提示\n- 新增 Skill 描述的国际化（i18n）支持\n- 优化 Git 相关命令输出截断策略\n- 修复网页预览切换 Tab 后返回/前进按钮失效的问题\n- 修复 QQ 端消息格式未正确支持 Markdown 的问题\n- 修复产物信息展示了文件夹内所有产物而非本次任务产物的问题\n- 修复 Claw 多次对话重叠到最后一次对话的问题\n- 修复插件市场详情页返回按钮点击区域异常无法返回的问题\n- 修复插件搜索出现多余筛选按钮且 Tab 显示不正确的问题\n- 修复已安装插件点击更新时页面提示信息遮盖的问题\n- 修复对话过程偶现报错「Invalid request parameters」导致任务执行失败的问题\n4.6.0 (2026-03-16)'
        },
        {
          'version': '4.6.0',
          'title': '4.6.0 (2026-03-16)',
          'date': '2026-03-16',
          'dateRaw': '2026-03-16',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-6-0-2026-03-16',
          'body': '- 新增企业微信快速绑定功能，支持扫码一键绑定企业微信 AI Bot\n- 新增微信自动续费，支持通过微信便捷完成会员自动续费\n- 新增 Skill 本地优先缓存及排序优化，提升 Skill 加载速度，并支持 MCP Hub 及服务器图标展示\n- 新增 Tool 渲染 compact 模式，优化工具调用过程展示\n- 新增 DisableTlsVerification 产品功能开关，满足特殊网络环境需求\n- 优化默认字体大小并支持手动调整字体缩放\n- 优化输入框 UI 样式及任务列表展示\n- 优化专家中心 UI 样式，标签优先显示职业信息\n- 优化 MCP 连接错误提示，展示真实错误信息便于排查\n- 优化 MCP 获取环境变量时不再使用交互式命令\n- 优化上下文压缩摘要注入机制，提升长对话质量\n- 优化用户 @文件时改为在输入中以 @文件路径 形式呈现\n- 优化登录页样式和文案\n- 修复 Terminal 权限请求自动超时取消的问题，改为等待用户操作\n- 修复上下文压缩 abort 级联导致会话卡死的问题\n- 修复自动重试时子代理过早完成的竞态问题\n- 修复流式回复时输入后发送按钮状态异常的问题\n- 修复错误弹窗后消息队列停发的问题\n- 修复 Plan 卡片在浅色主题下颜色异常的问题\n- 修复 Claw 注册失败时未显示错误提示的问题\n- 修复其他目录的 Skill 无法识别的问题\n- 修复部分界面缺失翻译的问题\n- 修复反馈链接打开方式不统一的问题\n- 修复侧边栏账号加载状态判断异常的问题\n- 修复会员信息未实时更新的问题\n4.5.13 (2026-03-14)'
        },
        {
          'version': '4.5.8',
          'title': '4.5.8 (2026-03-16)',
          'date': '2026-03-16',
          'dateRaw': '2026-03-16',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-8-2026-03-16',
          'body': '- 修复微信连接的问题\n4.5.7 (2026-03-13)'
        },
        {
          'version': '4.5.13',
          'title': '4.5.13 (2026-03-14)',
          'date': '2026-03-14',
          'dateRaw': '2026-03-14',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-13-2026-03-14',
          'body': '- 新增专家板块（Inspire），提供场景运营中心，支持基于角色的提示词选择，让 AI 更专业地协助处理各类场景任务\n4.5.8 (2026-03-16)'
        },
        {
          'version': '4.5.7',
          'title': '4.5.7 (2026-03-13)',
          'date': '2026-03-13',
          'dateRaw': '2026-03-13',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-7-2026-03-13',
          'body': '- 修复重启后黑屏问题\n4.5.6 (2026-03-09)'
        },
        {
          'version': '4.5.6',
          'title': '4.5.6 (2026-03-09)',
          'date': '2026-03-09',
          'dateRaw': '2026-03-09',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-6-2026-03-09',
          'body': '- 优化制品预览，对话结束时展示可查看的制品文件、代码变更和 Web 预览，Office 文件优先展示\n- 兼容自定义模型场景 kimi-k2.5 推理协议\n4.5.5 (2026-03-09)'
        },
        {
          'version': '4.5.5',
          'title': '4.5.5 (2026-03-09)',
          'date': '2026-03-09',
          'dateRaw': '2026-03-09',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-5-2026-03-09',
          'body': '- 新增 Agents 模式，AI 自动规划执行并生成产物，涵盖代码开发、文档生成、网站搭建等多种场景，可在 IDE 侧边栏 Agents 入口体验，也可以在新窗口通过点击‘开始工作’进入\n- 支持 Claw 模式链接 IM 机器人，通过 Agents 模式右上角菜单中 Claw Settings 进行配置。\n- 支持 Agent 并行，现在 Agent 在进行任务的时候，可以同步开启新的任务，同时运行多个 Agent。\n- 全新插件市场，在设置页里面可以安装开放社区的插件，插件支持 Agent，Rule，MCP，Skill，Command，Hook。\n4.5.2 (2026-03-05)'
        },
        {
          'version': '4.5.2',
          'title': '4.5.2 (2026-03-05)',
          'date': '2026-03-05',
          'dateRaw': '2026-03-05',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-2-2026-03-05',
          'body': '- 支持 Agent 并行，现在 Agent 在进行任务的时候，可以同步开启新的任务，同时运行多个 Agent。\n- 全新插件市场，在设置页里面可以安装开放社区的插件，插件支持 Agent，Rule，MCP，Skill，Command，Hook。\n- 新增 Agents 模式，AI 自动规划执行并生成产物，涵盖代码开发、文档生成、网站搭建等多种场景，可在 IDE 侧边栏 Agents 入口体验，也可以在新窗口通过点击‘开始工作’进入\n- 修复 Agents 页面偶现登录态失效的问题\n- Agents 窗口新增快捷键支持，可通过 Cmd + W 快速关闭\n- 修复 SSH 远程环境下对话框偶现空白的问题\n4.5.1 (2026-03-03)'
        },
        {
          'version': '4.5.1',
          'title': '4.5.1 (2026-03-03)',
          'date': '2026-03-03',
          'dateRaw': '2026-03-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-1-2026-03-03',
          'body': '- 支持 Agent 并行，现在 Agent 在进行任务的时候，可以同步开启新的任务，同时运行多个 Agent。\n- 全新插件市场，在设置页里面可以安装开放社区的插件，插件支持 Agent，Rule，MCP，Skill，Command，Hook。\n- 新增 Agents 模式，AI 自动规划执行并生成产物，涵盖代码开发、文档生成、网站搭建等多种场景，可在 IDE 侧边栏 Agents 入口体验，也可以在新窗口通过点击‘开始工作’进入\n4.5.0 (2026-02-12)'
        },
        {
          'version': '4.4.3',
          'title': '4.4.3 (2026-03-03)',
          'date': '2026-03-03',
          'dateRaw': '2026-03-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-4-3-2026-03-03',
          'body': '- 新增上下文窗口用量展示及额度用尽提示，实时掌握 Token 和配额状态\n- MCP 能力增强：支持 Prompts 斜杠指令、Resource 自定义指令、图片预览，并可禁用特定工具及限制工具总量\n- 图片交互优化：支持直接发送图片对话，@图片路径展示更清晰\n- Preview 支持外部网站 DOM 元素选择，调试更便捷\n- 支持数学公式渲染展示，LaTeX 公式完美呈现\n- Remote 连接支持跳板机密码鉴权方式\n- Terminal 支持 Option + 方向键 快速移动光标\n- Mermaid 图表支持自定义下载文件名，修复清晰度问题\n- 优化 MCP 调用展示及错误提示\n- 修复 MCP Refresh Token 不生效导致频繁弹出重新授权弹窗的问题\n- 修复命令行 stderr 信息未带给模型的问题\n- 修复自定义 Agent、Subagent 及 Terminal 相关的稳定性问题\n- 修复文件操作相关的保存和符号转换问题\n- 修复对话页面滚动和布局跳动问题\n- 修复 MCP 列表展开/收起及排序显示异常\n- 修复检查点回退功能的交互问题\n- 修复输入框光标和模式选择异常\n- 修复 Mode UI 显示和选择异常\n- 优化 Credit 购买引导 Banner\n- 修复 codebase 网络报错问题\n- 修复获取不到 lint 报错的问题\n- 修复 LC_ALL=C 环境下中文/空格路径导致 spawn ENOENT 的问题\n- 修复 question 工具的限制过于严格的问题\n- 修复积分消耗异常展示的问题\n4.4.1 (2026-01-29)'
        },
        {
          'version': '4.5.0',
          'title': '4.5.0 (2026-02-12)',
          'date': '2026-02-12',
          'dateRaw': '2026-02-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-5-0-2026-02-12',
          'body': '- 支持 Agent 并行，现在 Agent 在进行任务的时候，可以同步开启新的任务，同时运行多个 Agent。\n- 全新插件市场，在设置页里面可以安装开放社区的插件，插件支持 Agent，Rule，MCP，Skill，Command，Hook。\n- 新增 Agents 模式，AI 自动规划执行并生成产物，涵盖代码开发、文档生成、网站搭建等多种场景，可在 IDE 侧边 Agents 入口体验，也可以在新窗口通过点击‘开始工作’进入\n4.4.3 (2026-03-03)'
        },
        {
          'version': '4.4.1',
          'title': '4.4.1 (2026-01-29)',
          'date': '2026-01-29',
          'dateRaw': '2026-01-29',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-4-1-2026-01-29',
          'body': '- 新增上下文窗口用量展示及额度用尽提示，实时掌握 Token 和配额状态\n- MCP 能力增强：支持 Prompts 斜杠指令、Resource 自定义指令、图片预览，并可禁用特定工具及限制工具总量\n- 图片交互优化：支持直接发送图片对话，@图片路径展示更清晰\n- Preview 支持外部网站 DOM 元素选择，调试更便捷\n- 支持数学公式渲染展示，LaTeX 公式完美呈现\n- Remote 连接支持跳板机密码鉴权方式\n- Terminal 支持 Option + 方向键 快速移动光标\n- Mermaid 图表支持自定义下载文件名，修复清晰度问题\n- 优化 MCP 调用展示及错误提示\n- 修复 MCP Refresh Token 不生效导致频繁弹出重新授权弹窗的问题\n- 修复命令行 stderr 信息未带给模型的问题\n- 修复自定义 Agent、Subagent 及 Terminal 相关的稳定性问题\n- 修复文件操作相关的保存和符号转换问题\n- 修复对话页面滚动和布局跳动问题\n- 修复 MCP 列表展开/收起及排序显示异常\n- 修复检查点回退功能的交互问题\n- 修复输入框光标和模式选择异常\n- 修复 mode UI 显示和选择异常\n4.4.0 (2026-01-28)'
        },
        {
          'version': '4.4.0',
          'title': '4.4.0 (2026-01-28)',
          'date': '2026-01-28',
          'dateRaw': '2026-01-28',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-4-0-2026-01-28',
          'body': '- 新增上下文窗口用量展示及额度用尽提示，实时掌握 Token 和配额状态\n- MCP 能力增强：支持 Prompts 斜杠指令、Resource 自定义指令、图片预览，并可禁用特定工具及限制工具总量\n- 图片交互优化：支持直接发送图片对话，@图片路径展示更清晰\n- Preview 支持外部网站 DOM 元素选择，调试更便捷\n- 支持数学公式渲染展示，LaTeX 公式完美呈现\n- Remote 连接支持跳板机密码鉴权方式\n- Terminal 支持 Option + 方向键 快速移动光标\n- Mermaid 图表支持自定义下载文件名，修复清晰度问题\n- 优化 MCP 调用展示及错误提示\n- 修复 MCP Refresh Token 不生效导致频繁弹出重新授权弹窗的问题\n- 修复命令行 stderr 信息未带给模型的问题\n- 修复自定义 Agent、Subagent 及 Terminal 相关的稳定性问题\n- 修复文件操作相关的保存和符号转换问题\n- 修复对话页面滚动和布局跳动问题\n- 修复 MCP 列表展开/收起及排序显示异常\n- 修复检查点回退功能的交互问题\n- 修复输入框光标和模式选择异常\n4.3.3 (2026-01-20)'
        },
        {
          'version': '4.3.3',
          'title': '4.3.3 (2026-01-20)',
          'date': '2026-01-20',
          'dateRaw': '2026-01-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-3-3-2026-01-20',
          'body': '- 修复 Max Mode 下强制压缩不生效的问题\n- 修复 Rule 创建时无 id 默认name 问题\n- 修复 MaxMode 下略过压缩的问题\n- 修复输入框在拉高输入后的跳动问题\n4.3.2 (2026-01-16)'
        },
        {
          'version': '4.3.2',
          'title': '4.3.2 (2026-01-16)',
          'date': '2026-01-16',
          'dateRaw': '2026-01-16',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-3-2-2026-01-16',
          'body': '- 新增 Hooks 功能，可在 Agent 执行的关键节点插入自定义脚本，实现对 Agent 行为的精细控制，支持在 .codebuddy/settings.json 中配置 [ 了解更多 ]\n- 新增 MCP Roots 和 Sampling 功能，支持 MCP 服务器访问文件系统目录及调用 LLM 生成响应\n- 新增 Max Mode 模式，对话过程中保留完整上下文信息，让 AI 更好地理解复杂任务，可在模型选择下拉列表中开启\n- 新增 Plan 模式单选/多选问题 UI，便于需求澄清\n- 新增 Plan 模式保存时支持 Design 和 Todo 部分\n- 新增 Plan 模式生成计划时的搜索功能，提升计划精确度\n- 新增 Agent 读取图片文件能力\n- 优化命令执行过程提示，避免命令执行冲突\n- 优化 Mermaid 图表展示，支持放大查看\n- 优化消息列表中 Diff 变更文件展示，点击 View File 可直接编辑\n- 修复 Continue 提示过于频繁的问题\n- 修复输入框文字过多时界面未自适应撑高的问题\n- 修复任务偶现提前结束的问题\n- 修复会话引用文件时历史记录列表标题显示异常的问题\n- 修复复制消息时丢失文件引用的问题\n- 修复 Agent 运行中拖拽文件到输入框变为纯文本的问题\n- 修复不同文件夹下同名 Rule 创建、修改、删除时报错的问题\n- 修复 MCP 异常信息偶现未展示的问题\n- 修复已停用的 MCP 点击重新连接仍提示成功的问题\n- 新增 Dev Container 端口转发和 Ports 页签支持\n- 新增 Dev Container Rebuild Container 功能\n- 修复 Dev Container 启动后配置未同步的问题\n- 新增 IDE 深色主题，可在设置 Color Theme 中选择 IDE Night 体验\n- 修复未设置默认浏览器时点击登录无提示的问题\n- 修复浅色主题下删除对话提示文字不明显的问题\n4.3.0 (2026-01-15)'
        },
        {
          'version': '4.3.0',
          'title': '4.3.0 (2026-01-15)',
          'date': '2026-01-15',
          'dateRaw': '2026-01-15',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-3-0-2026-01-15',
          'body': '- 新增 Hooks 功能，可在 Agent 执行的关键节点插入自定义脚本，实现对 Agent 行为的精细控制，支持在 .codebuddy/settings.json 中配置\n- 新增 MCP Roots 和 Sampling 功能，支持 MCP 服务器访问文件系统目录及调用 LLM 生成响应\n- 新增 Plan 模式单选/多选问题 UI，便于需求澄清\n- 新增 Plan 模式保存时支持 Design 和 Todo 部分\n- 新增 Plan 模式生成计划时的搜索功能，提升计划精确度\n- 新增 Agent 读取图片文件能力\n- 优化命令执行过程提示，避免命令执行冲突\n- 优化 Mermaid 图表展示，支持放大查看\n- 优化消息列表中 Diff 变更文件展示，点击 View File 可直接编辑\n- 修复 Continue 提示过于频繁的问题\n- 修复输入框文字过多时界面未自适应撑高的问题\n- 修复任务偶现提前结束的问题\n- 修复会话引用文件时历史记录列表标题显示异常的问题\n- 修复复制消息时丢失文件引用的问题\n- 修复 Agent 运行中拖拽文件到输入框变为纯文本的问题\n- 修复不同文件夹下同名 Rule 创建、修改、删除时报错的问题\n- 修复 MCP 异常信息偶现未展示的问题\n- 修复已停用的 MCP 点击重新连接仍提示成功的问题\n- 新增 Dev Container 端口转发和 Ports 页签支持\n- 新增 Dev Container Rebuild Container 功能\n- 修复 Dev Container 启动后配置未同步的问题\n- 新增 IDE 深色主题，可在设置 Color Theme 中选择 IDE Night 体验\n- 修复未设置默认浏览器时点击登录无提示的问题\n- 修复浅色主题下删除对话提示文字不明显的问题\n4.2.4 (2026-01-09)'
        },
        {
          'version': '4.2.4',
          'title': '4.2.4 (2026-01-09)',
          'date': '2026-01-09',
          'dateRaw': '2026-01-09',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-2-4-2026-01-09',
          'body': '- 修复对话模型偶尔自动切换为默认模型的问题\n- 修复拖拽图片到输入框后模型无法正确读取的问题\n- 修复输入框使用键盘方向键导航时光标位置异常的问题\n4.2.3 (2026-01-07)'
        },
        {
          'version': '4.2.3',
          'title': '4.2.3 (2026-01-07)',
          'date': '2026-01-07',
          'dateRaw': '2026-01-07',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-2-3-2026-01-07',
          'body': '- 修复历史对话无法滚动到顶部的问题\n- 修复偶现 CODEBUDDY.md 文件内容读取不完整的问题\n- 修复切换设置页后输入框内容消失的问题\n- 修复 Windows 下拖拽文件到输入框文件名展示错误的问题\n- 修复 SlashCommand 不支持中文搜索的问题\n- 修复偶现消息列表中代码块无法解析高亮问题\n- 修复偶现发送的图片过大时未自动压缩问题\n- 修复回滚 CheckPoint 时页面未自动定位到对应消息的问题\n4.2.2 (2025-12-27)'
        },
        {
          'version': '4.2.2',
          'title': '4.2.2 (2025-12-27)',
          'date': '2025-12-27',
          'dateRaw': '2025-12-27',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-2-2-2025-12-27',
          'body': '- 新增 MCP 自定义指令支持，通过 / 快速调用 MCP 提供的自定义指令，扩展更多功能\n- 新增 Markdown 渲染支持 LaTeX 数学表达式展示，轻松展示复杂公式\n- 优化对话过程中的内存占用，系统运行更流畅\n- 优化 MCP 配置文件中包含空格导致的加载 MCP 列表异常问题\n- 优化 MCP 内容截断问题，支持大字符场景\n- 优化 dev-container 容器使用体验\n- 优化 IDE 最大化时拖动窗口的体验\n- 修复分屏时 Diff 偶现显示异常问题\n- 修复单条对话记录过长时偶现灰屏问题\n- 修复 Windows 远端 WSL 偶现白屏/灰屏的问题\n- 修复 SSH 下 Diff 按钮偶现不显示的问题\n4.2.1 (2025-12-25)'
        },
        {
          'version': '4.2.1',
          'title': '4.2.1 (2025-12-25)',
          'date': '2025-12-25',
          'dateRaw': '2025-12-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-2-1-2025-12-25',
          'body': '- 新增 MCP 自定义指令支持，通过 / 快速调用 MCP 提供的自定义指令，扩展更多功能\n- 新增 Markdown 渲染支持 LaTeX 数学表达式展示，轻松展示复杂公式\n- 优化对话过程中的内存占用，系统运行更流畅\n- 优化 MCP 配置文件中包含空格导致的加载 MCP 列表异常问题\n- 优化 MCP 内容截断问题，支持大字符场景\n- 优化 dev-container 容器使用体验\n- 优化 IDE 最大化时拖动窗口的体验\n- 修复分屏时 Diff 偶现显示异常问题\n- 修复单条对话记录过长时偶现灰屏问题\n- 修复 Windows 远端 WSL 偶现白屏/灰屏的问题\n- 修复 SSH 下 Diff 按钮偶现不显示的问题\n4.2.0 (2025-12-18)'
        },
        {
          'version': '4.1.2',
          'title': '4.1.2 (2025-12-19)',
          'date': '2025-12-19',
          'dateRaw': '2025-12-19',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-1-2-2025-12-19',
          'body': '- 新增支持 init command 和 CODEBUDDY.md，自动生成项目摘要，让模型更好地理解您的项目结构和需求\n- Agent 使用全新的 terminal 架构，支持静默执行模式，命令执行更加稳定可靠\n- 修复 Ask 模式下模型搜索文件偶现对话卡住的问题\n- 修复执行终端命令偶现获取不到输出的问题\n- 修复 SSH 升级后偶现远程无法连接的问题\n- 修复 SSH 环境变量加载异常的问题\n4.1.1 (2025-12-12)'
        },
        {
          'version': '4.2.0',
          'title': '4.2.0 (2025-12-18)',
          'date': '2025-12-18',
          'dateRaw': '2025-12-18',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-2-0-2025-12-18',
          'body': '- 新增 MCP 自定义指令支持，通过 / 快速调用 MCP 提供的自定义指令，扩展更多功能\n- 新增 Markdown 渲染支持 LaTeX 数学表达式展示，轻松展示复杂公式\n- 优化对话过程中的内存占用，系统运行更流畅\n- 优化 MCP 配置文件中包含空格导致的加载 MCP 列表异常问题\n- 优化 MCP 内容截断问题，支持大字符场景\n- 优化 dev-container 容器使用体验\n- 优化 IDE 最大化时拖动窗口的体验\n- 修复分屏时 Diff 偶现显示异常问题\n- 修复单条对话记录过长时偶现灰屏问题\n- 修复 Windows 远端 WSL 偶现白屏/灰屏的问题\n- 修复 SSH 下 Diff 按钮偶现不显示的问题\n4.1.2 (2025-12-19)'
        },
        {
          'version': '4.1.1',
          'title': '4.1.1 (2025-12-12)',
          'date': '2025-12-12',
          'dateRaw': '2025-12-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-1-1-2025-12-12',
          'body': '- 新增计划模式（Plan Agent），用于规划用户需求，提供交互式的计划编辑器，深度集成 MCP、Skills 等能力生成完整执行方案，可在输入框选择 Plan Agent 体验\n- 自定义 Agent 列表页支持直接编辑，无需跳转即可快速调整配置\n- 优化对话过程中 Terminal 展示，支持多行 command 信息显示\n- 优化 SKILL 导入体验，格式不支持时提供友好提示\n- 优化模型调用 Terminal 时\'继续下一步\'按钮的展示\n- 修复偶现 CPU 内存占用过高的问题\n- 修复偶现模型回复卡住的问题\n- 修复模型修改文件时偶现\'无效参数\'报错的问题\n- 修复对话过程中 Mermaid 图表渲染失败的问题\n- 修复发送消息后偶现未展示模型输出的问题\n- 修复偶现代码变更行数展示不正确的问题\n- 修复对话框 @ 文件时偶现搜索不到对应文件的问题\n- 修复项目级 MCP 配置偶现未展示的问题\n- 修复执行特殊 command 时偶现失败的问题\n- 修复 Auto Run 模式下偶现自定义 Agent 仍需手动确认的问题\n- 修复设置页 Memories 在浅色主题下字体颜色错误的问题\n- 修复 IDE 设置页语言规则文字重叠的问题\n4.1.0 (2025-12-10)'
        },
        {
          'version': '4.1.0',
          'title': '4.1.0 (2025-12-10)',
          'date': '2025-12-10',
          'dateRaw': '2025-12-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-1-0-2025-12-10',
          'body': '- 新增计划模式（Plan Agent），用于规划用户需求，提供交互式的计划编辑器，深度集成 MCP、Skills 等能力生成完整执行方案，可在输入框选择 Plan Agent 体验\n- 自定义 Agent 列表页支持直接编辑，无需跳转即可快速调整配置\n- 优化对话过程中 Terminal 展示，支持多行 command 信息显示\n- 优化 SKILL 导入体验，格式不支持时提供友好提示\n- 优化模型调用 Terminal 时\'继续下一步\'按钮的展示\n- 修复模型修改文件时偶现\'无效参数\'报错的问题\n- 修复对话过程中 Mermaid 图表渲染失败的问题\n- 修复发送消息后偶现未展示模型输出的问题\n- 修复偶现代码变更行数展示不正确的问题\n- 修复对话框 @ 文件时偶现搜索不到对应文件的问题\n- 修复项目级 MCP 配置偶现未展示的问题\n- 修复执行特殊 command 时偶现失败的问题\n- 修复 Auto Run 模式下偶现自定义 Agent 仍需手动确认的问题\n- 修复设置页 Memories 在浅色主题下字体颜色错误的问题\n- 修复 IDE 设置页语言规则文字重叠的问题\n4.0.1 (2025-12-05)'
        },
        {
          'version': '4.0.1',
          'title': '4.0.1 (2025-12-05)',
          'date': '2025-12-05',
          'dateRaw': '2025-12-05',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-0-1-2025-12-05',
          'body': '- 新增支持创建自定义 Agent，包含 Agentic（对话中自动调用）和 Manual（手动选择）两种模式，可在设置页统一管理配置[ 使用指引 ]\n- 新增 Memory 功能，可自动记住你的偏好与重要信息，持续优化对话体验，可在对话设置中开启/关闭\n- 新增项目级 MCP 支持，可在项目根目录中配置 .mcp.json 文件，实现更灵活的项目级别配置管理\n- 新增模型能力提示，悬停即可查看详细能力说明，更好地选择合适的模型\n- 优化 IDE 内存占用，修复偶现页面白屏、灰屏问题，修复内存泄漏问题\n- 优化对话过程中文件名展示，悬停可查看完整路径\n- 优化模型执行终端命令的过程，支持静默执行模式\n- 修复偶现 @ 添加文件夹后，内容未正确传递给模型的问题\n- 修复终端输出信息过长时，模型获取的终端信息被截断的问题\n- 修复打开多窗口时，登录态未同步的问题\n- 修复 SSH 低版本 Linux 系统终端使用异常问题\n- 修复 SSH 多窗口同时连接可能导致产物损坏的问题\n- 修复 SSH 使用 zsh 时可能出现的连接卡死问题\n- 修复 checkpoint 回退时提示框偶现不展示文件名的问题\n- 修复偶现模型修改了文件但是不展示 Diff 的问题\n4.0.0 (2025-12-02)'
        },
        {
          'version': '4.0.0',
          'title': '4.0.0 (2025-12-02)',
          'date': '2025-12-02',
          'dateRaw': '2025-12-02',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_4-0-0-2025-12-02',
          'body': '- 新增支持创建自定义 Agent，包含 Agentic（对话中自动调用）和 Manual（手动选择）两种模式，可在设置页统一管理配置[ 使用指引 ]\n- 新增 Memory 功能，可自动记住你的偏好与重要信息，持续优化对话体验，可在对话设置中开启/关闭\n- 新增项目级 MCP 支持，可在项目根目录中配置 .mcp.json 文件，实现更灵活的项目级别配置管理\n- 新增模型能力提示，悬停即可查看详细能力说明，更好地选择合适的模型\n- 优化 IDE 内存占用，修复偶现页面白屏、灰屏问题，修复内存泄漏问题\n- 优化对话过程中文件名展示，悬停可查看完整路径\n- 优化模型执行终端命令的过程，支持静默执行模式\n- 修复偶现 @ 添加文件夹后，内容未正确传递给模型的问题\n- 修复终端输出信息过长时，模型获取的终端信息被截断的问题\n- 修复打开多窗口时，登录态未同步的问题\n- 修复 SSH 低版本 Linux 系统终端使用异常问题\n- 修复 SSH 多窗口同时连接可能导致产物损坏的问题\n- 修复 SSH 使用 zsh 时可能出现的连接卡死问题\n- 修复 checkpoint 回退时提示框偶现不展示文件名的问题\n- 修复偶现模型修改了文件但是不展示 Diff 的问题\n1.2.10 (2025-11-25)'
        },
        {
          'version': '1.2.10',
          'title': '1.2.10 (2025-11-25)',
          'date': '2025-11-25',
          'dateRaw': '2025-11-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-10-2025-11-25',
          'body': '- 新增对 git 相关高危命令执行前需用户确认，避免模型执行此类命令导致代码丢失\n- 修复修改模型文件时换行符被错误替换的问题\n- 修复 Terminal 输出中的逗号未被模型正确识别的问题\n- SSH 增强提示，针对不兼容的 glibc 版本给出提示信息\n- 修复 SSH 下拖拽将文件添加到对话框失败的问题\n- 修复 Windows WSL 插件加载时间过长的问题\n- 自定义模型适配结尾为 \'/chat/completions\' 的 URL\n- 修复新建文件夹时目录名为小写导致历史记录偶发消失的问题\n- 优化光标停留行的显示，增加显式背景色\n- 修复某些主题色下 Agent 选择框颜色问题\n1.2.9 (2025-11-20)'
        },
        {
          'version': '1.2.9',
          'title': '1.2.9 (2025-11-20)',
          'date': '2025-11-20',
          'dateRaw': '2025-11-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-9-2025-11-20',
          'body': '- Codebuddy 内置 Dev Container，支持使用容器开发\n- 支持自定义模型配置，在 .codebuddy/models.json 可以进行配置\n- 新增 /summarize 指令，支持手动压缩当前对话历史/对话上下文\n- 新增 SSH 连接时左下角显示主机名\n- 新增\'Inline Chat Shortcuts Tip\'选项，可以通过设置页关闭内联对话的提示\n- 修复模型搜索失败时对话结束但发送按钮状态不正确的问题\n- 修复打开 CodeBuddy 时偶发白屏的问题\n- 修复在同一个项目中打开多个工作区时，AI 生成 commit 信息失败的问题\n- 修复回退操作中文案显示错误的问题\n- 修复偶发 SSH 连接远程服务器失败的问题\n- 修复 MCP 连接状态不更新的问题\n- 修复执行超长命令时终端断开连接的问题\n- 修复打开新窗口时未记住上次选择的模型的问题\n- 优化对话框悬停时的提示文案\n1.2.8 (2025-11-19)'
        },
        {
          'version': '1.2.8',
          'title': '1.2.8 (2025-11-19)',
          'date': '2025-11-19',
          'dateRaw': '2025-11-19',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-8-2025-11-19',
          'body': '- Codebuddy 内置 Dev Container，支持使用容器开发\n- 支持自定义模型配置，在 .codebuddy/models.json 可以进行配置\n- 新增 /summarize 指令，支持手动压缩当前对话历史/对话上下文\n- 新增 SSH 连接时左下角显示主机名\n- 新增\'Inline Chat Shortcuts Tip\'选项，可以通过设置页关闭内联对话的提示\n- 修复模型搜索失败时对话结束但发送按钮状态不正确的问题\n- 修复打开 CodeBuddy 时偶发白屏的问题\n- 修复在同一个项目中打开多个工作区时，AI 生成 commit 信息失败的问题\n- 修复回退操作中文案显示错误的问题\n- 修复偶发 SSH 连接远程服务器失败的问题\n- 修复 MCP 连接状态不更新的问题\n- 修复执行超长命令时终端断开连接的问题\n- 修复打开新窗口时未记住上次选择的模型的问题\n- 优化对话框悬停时的提示文案\n1.2.4 (2025-11-12)'
        },
        {
          'version': '1.2.4',
          'title': '1.2.4 (2025-11-12)',
          'date': '2025-11-12',
          'dateRaw': '2025-11-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-4-2025-11-12',
          'body': '- 用户级别的 rules 跟项目 rules 一样也支持选择多种类型\n- 优化 Mermaid 图表在深色主题下的显示，让图表更清晰易读\n- 菜单栏 Help 新增 Show Release Notes，方便随时查看更新记录\n- 修复浅色主题下终端快捷键提示显示不清晰的问题\n- 修复 Agent 调用搜索工具时偶现调用失败问题\n- 修复对话框中点击 @ 文件时偶现无法打开的问题\n- 修复 SSH 浏览器预览 HTML 失败的问题\n- 修复 Windows 环境下 Agent 调用 Replace 工具偶现匹配失败的问题\n- 修复 MCP 偶发的连接失败问题\n- 修复 MCP 展示结果偶现为空的问题\n- 修复终端偶发黑屏的问题\n1.2.2 (2025-11-10)'
        },
        {
          'version': '1.2.2',
          'title': '1.2.2 (2025-11-10)',
          'date': '2025-11-10',
          'dateRaw': '2025-11-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-2-2025-11-10',
          'body': '- 新增 Skills 列表，方便查看并逐个开启/关闭 Skill，同时显示每个 Skill 的描述，可在对话设置中体验。\n- 内置 skill-creator，可与模型交互创建 Skill 并支持导入 Skill 文件夹\n- 优化 Integrations 交互体验和流程，提升使用便捷性\n- 修复对话中点击文件 diff 时跳转位置不正确的问题\n- 修复 MCP 服务器链接偶现报错的问题\n- 修复 Quiet Light 主题下底部状态栏图标颜色看不清的问题\n- 修复 Agent 在搜索时结果过多时可能导致的 OOM 问题\n- 修复偶现创建的 Slash 命令在 command 列表中未展示的问题\n- 修复 Agent 搜素结果的某些数据结构展示错乱问题\n- 修复偶现 MCP 内存泄漏问题\n- 修复历史对话记录偶现丢失的问题\n1.2.0 (2025-11-04)'
        },
        {
          'version': '1.2.0',
          'title': '1.2.0 (2025-11-04)',
          'date': '2025-11-04',
          'dateRaw': '2025-11-04',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-2-0-2025-11-04',
          'body': '- 内置浏览器新增 DOM 编辑与尺寸切换功能，支持对预览页面进行微调，并让模型实现相应改动。\n- 新增历史对话记录的一键清除功能\n- 支持展示 MCP 返回的图片\n- 支持双击 Mermaid 图像预览展示 SVG 内容\n- 修复 Windows 下 diff 视图偶现显示 No changes 的问题\n- 修复偶现终端宽度展示错误的问题\n- 修复 search content 工具偶现返回内容为空的问题\n- 优化 replace 工具逻辑，避免在修改成功状态未返回给模型时持续修改同一文件的问题\n1.1.6 (2025-10-30)'
        },
        {
          'version': '1.1.6',
          'title': '1.1.6 (2025-10-30)',
          'date': '2025-10-30',
          'dateRaw': '2025-10-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-1-6-2025-10-30',
          'body': '- 新增 Task List 功能，自动拆分复杂任务为多个步骤，并通过任务列表实时展示执行进度\n- Quick Fix 中新增 \'Add to CodeBuddy\' 与 \'Fix with CodeBuddy\' 选项\n- 修复偶现删除 rule 后重启 IDE 仍会出现的问题\n- 修改系统消息展示位置，解决消息挡住输入框的问题\n- 调用 Agent Skills 时显示的具体 Skill 名称\n- 优化 Diff 组件的展示与渲染效果\n- 优化上下文超限时的处理逻辑及提示信息\n- 修复用拖拽的方式导入 skills 文件夹时，skill 不生效的问题\n- 修复 Deepseek 模型调用工具时的偶发卡死问题\n- 修复 replace 工具偶现引号匹配错误的问题\n- 修复 Mermaid 流程图导出 PNG 时的偶发报错\n- 修复写文件时的偶发卡死问题\n- 优化 MCP 结果展示，对超长内容进行截断显示\n1.1.2 (2025-10-27)'
        },
        {
          'version': '1.1.2',
          'title': '1.1.2 (2025-10-27)',
          'date': '2025-10-27',
          'dateRaw': '2025-10-27',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-1-2-2025-10-27',
          'body': '- 新增支持 Agent Skills, 在项目 .codebuddy/skills 目录中创建 skills 可以使用\n- 修复 Create Rule 按钮点击报错创建无权限的问题\n- 修复对话过程中某些报错问题\n- 优化窗口模型展示，每个窗口选择模型允许不同\n- 修复重新打开 IDE，偶现对话窗口 loading 的问题\n- 修复两个同名但不同目录的文件无法同时添加到对话中的问题\n- 修复使用 @ 搜索时无法定位某些文件的问题\n- 修复对话中引用的文件在对话列表中点击无法打开的问题\n- 修复文件右键菜单\'Add To Chat\'功能偶现不可用的问题\n- 修复终端右键菜单未显示\'Add To Chat\'选项的问题\n- 修复删除文件后模型重写同名文件时出现的提示问题\n- 优化左侧列表图标在 hover 状态下的鼠标样式\n- 优化对话页面和设置页展示的字体\n- 修复 replace tool 偶发替换失败的问题\n1.1.1 (2025-10-23)'
        },
        {
          'version': '1.1.1',
          'title': '1.1.1 (2025-10-23)',
          'date': '2025-10-23',
          'dateRaw': '2025-10-23',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-1-1-2025-10-23',
          'body': '- 新增 Slash Command 功能，在输入框输入 \'/\' 创建和启用\n- 新增 Web Fetch 功能，可以联网获取网页内容\n- 文件标签页右键菜单新增 \'Add To CodeBuddy Chat\' 选项\n- 修复某些 MCP 调用时偶现报错问题\n- 修复写入特殊编码格式文件时出现的乱码问题\n- 修复二进制文件读取问题\n- 修复导入 cursor 配置时某些快捷键冲突的问题\n- 修复使用创建 rule 指令时偶现未创建 rule 文件的问题\n- 修复打开多个窗口时偶现某个对话页面黑屏的问题\n- 优化对话中代码块 UI 的展示\n1.1 (2025-10-22)'
        },
        {
          'version': '1.1',
          'title': '1.1 (2025-10-22)',
          'date': '2025-10-22',
          'dateRaw': '2025-10-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-1-2025-10-22',
          'body': '- 修复历史记录迁移完成，历史记录列表不展示问题\n- 修复部分 3005 的对话报错问题\n1.0.3 (2025-10-20)'
        },
        {
          'version': '1.0.3',
          'title': '1.0.3 (2025-10-20)',
          'date': '2025-10-20',
          'dateRaw': '2025-10-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-0-3-2025-10-20',
          'body': '- 修复部分 3005 的对话报错问题，并优化错误提示信息\n- 修复首次登录后历史对话记录消失的问题\n- 修复历史记录迁移失败的问题\n- 修复对话页面偶现空白的问题\n- 修复侧边栏拖动时对话记录向上偏移的问题\n- 优化加载页面时的 loading 展示\n- 修复 MCP 列表在 Windows 系统下显示乱码的问题\n1.0.2 (2025-10-18)'
        },
        {
          'version': '1.0.2',
          'title': '1.0.2 (2025-10-18)',
          'date': '2025-10-18',
          'dateRaw': '2025-10-18',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-0-2-2025-10-18',
          'body': '- 全新的视觉交互\n- 全新的代码变更展示，可以逐个接受/拒绝\n- 内置 MCP 市场\n- 全新的 @ 菜单体验优化\n- 内置 \'/\' 指令，方便代码评审，分析代码\n- 全新的 mermaid 渲染和体验\n- 大量的问题修复包括灰屏，写文件出错，对话卡住等等\n1.0.1 (2025-10-17)'
        },
        {
          'version': '1.0.1',
          'title': '1.0.1 (2025-10-17)',
          'date': '2025-10-17',
          'dateRaw': '2025-10-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-0-1-2025-10-17',
          'body': '- 修复偶现旧版本历史记录迁移失败的问题\n- 修复启动 IDE 时，聊天窗口加载慢的问题\n- 新增选中代码块后弹出 Add to Chat 提示\n- 修复 UTF-8 with BOM 文件写入错误的问题\n- 新增聊天界面的代码块引用跳转到代码原文的位置的能力\n- 修复新建文件夹在未输入名称时也创建了 ~/codebuddy 的问题\n- 修复 SSH 卡顿的问题\n- 修复选中代码块发送消息后为清空输入框的问题\n- 调整大图片处理时的错误信息\n1.0.0 (2025-10-16)'
        },
        {
          'version': '1.0.0',
          'title': '1.0.0 (2025-10-16)',
          'date': '2025-10-16',
          'dateRaw': '2025-10-16',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_1-0-0-2025-10-16',
          'body': '- 修复对话时报 3005 错误码的问题\n- 修复请求触发限频问题\n- 修复 SSH 下插件启动慢问题\n- 修复 SSH 下进程内存泄漏问题\n- 修复 mac 下快捷键冲突问题\n- 优化对话过程中的错误码显示与文案\n- 修复 rules 自动生成、删除后仍会出现的问题\n- 修复模型回复内容格式的问题\n- 修复会自动创建无效的 .codebuddy/rules 目录问题\n- 修复会话中的代码块引用未遵循语言代码样式的问题\n- 优化右键\'添加到对话\'入口展示\n- 优化 checkpoint 中文提示信息\n- 修复新建会话附带上一个会话文件的问题\n- 修复对话失败后重试时有文件变更但未回退点的问题\n- 修复 Windows 云桌面在无 Node 环境下配置 MCP 时提示编码问题\n- 修复用户规则设置不生效的问题\n0.3.2 (2025-10-11)'
        },
        {
          'version': '0.3.2',
          'title': '0.3.2 (2025-10-11)',
          'date': '2025-10-11',
          'dateRaw': '2025-10-11',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-3-2-2025-10-11',
          'body': '- 修复多个 AI API 调用出错的问题\n- 修复发送请求后模型没有回复的问题\n- 修复多个对话出现 Error Occurred 的问题\n- 修复模型写文件失败的问题\n- 修复添加 MCP 配置之后，界面不展示 MCP Server 的问题\n- 修复不能通过快捷键呼起 Terminal Chat 的问题\n- 修复内存占用太大的问题\n- 修复 MCP 调用可能错误的问题\n- 修复非 UTF-8 编码下，模型输出乱码的问题\n- 修复打开设置页再回到聊天界面的时候，文字被清空的问题\n- 修复进入 rules 页面提示 rules token 超长的问题\n- 修复历史记录页面白屏的问题\n- 修复插件市场搜索不到官方插件的问题\n- 修复大量视觉问题\n- 修复知识库为空的问题\n- 修复历史记录页面标题太长被截断的问题\n0.2.4 (2025-09-19)'
        },
        {
          'version': '0.2.4',
          'title': '0.2.4 (2025-09-19)',
          'date': '2025-09-19',
          'dateRaw': '2025-09-19',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-2-4-2025-09-19',
          'body': '- 修复部分模型对话中卡死问题\n- 修复自动补全有概率不生效的问题\n- 修复 Terminal 需要用户频繁确认的问题\n- 修复 HTML 的 UI 渲染问题\n- 补充 figma 新手引导国际化配置\n- 优化 figma 功能体验及引导\n0.2.3 (2025-09-12)'
        },
        {
          'version': '0.2.3',
          'title': '0.2.3 (2025-09-12)',
          'date': '2025-09-12',
          'dateRaw': '2025-09-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-2-3-2025-09-12',
          'body': '- 优化 IDE 的内存占用，降低灰屏概率\n- 修复点击发送按钮时，消息发送不出去的问题\n- 修复对话框 @ tips 展示问题\n- 修复对话记录中 hover 文件名 UI 闪烁问题\n- 降低对话时 replace 代码失败的概率\n- 修复 terminal 执行过程中对话卡住的问题\n- 修复偶现 rollback 不生效的问题\n- 修复在对话中不展示 mermaid 和 code 的问题\n- 历史对话记录按照 workspace 进行区分展示\n- 修复 UI 组件选中后无法使用键盘删除的问题\n- 修复 SSH rules 文件读取不到的问题\n0.2.2 (2025-09-12)'
        },
        {
          'version': '0.2.2',
          'title': '0.2.2 (2025-09-12)',
          'date': '2025-09-12',
          'dateRaw': '2025-09-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-2-2-2025-09-12',
          'body': '- 优化 IDE 的内存占用，降低灰屏概率\n- 修复点击发送按钮时，消息发送不出去的问题\n- 修复对话框 @ tips 展示问题\n- 修复对话记录中 hover 文件名 UI 闪烁问题\n- 降低对话时 replace 代码失败的概率\n- 修复 terminal 执行过程中对话卡住的问题\n- 修复偶现 rollback 不生效的问题\n- 修复在对话中不展示 mermaid 和 code 的问题\n- 历史对话记录按照 workspace 进行区分展示\n- 修复 UI 组件选中后无法使用键盘删除的问题\n- 修复 SSH rules 文件读取不到的问题\n0.2.1 (2025-09-12)'
        },
        {
          'version': '0.2.1',
          'title': '0.2.1 (2025-09-12)',
          'date': '2025-09-12',
          'dateRaw': '2025-09-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-2-1-2025-09-12',
          'body': '- 优化 IDE 的内存占用，降低灰屏概率\n- 修复点击发送按钮时，消息发送不出去的问题\n- 修复对话框 @ tips 展示问题\n- 修复对话记录中 hover 文件名 UI 闪烁问题\n- 降低对话时 replace 代码失败的概率\n- 修复 terminal 执行过程中对话卡住的问题\n- 修复偶现 rollback 不生效的问题\n- 修复在对话中不展示 mermaid 和 code 的问题\n- 历史对话记录按照 workspace 进行区分展示\n- 修复 UI 组件选中后无法使用键盘删除的问题\n- 修复 SSH rules 文件读取不到的问题\n0.1.34 (2025-09-03)'
        },
        {
          'version': '0.1.34',
          'title': '0.1.34 (2025-09-03)',
          'date': '2025-09-03',
          'dateRaw': '2025-09-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-34-2025-09-03',
          'body': '- 修复 AI 输出过程中有概率卡住的问题\n- 修复 Agent 等待 Terminal 输出的时候有可能卡住的问题\n- mermaid 支持代码和图形切换，支持放大/缩小，导出图片功能\n- 放大侧边栏图标、减小右侧边栏的最小宽度\n- 修复左侧文件树鼠标经过没有出现背景色的问题\n- 减小模型读取不到文件的概率\n0.1.33 (2025-09-03)'
        },
        {
          'version': '0.1.33',
          'title': '0.1.33 (2025-09-03)',
          'date': '2025-09-03',
          'dateRaw': '2025-09-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-33-2025-09-03',
          'body': '- 修复 AI 输出过程中有概率卡住的问题\n- 修复 Agent 等待 Terminal 输出的时候有可能卡住的问题\n- mermaid 支持代码和图形切换，支持放大/缩小，导出图片功能\n- 放大侧边栏图标、减小右侧边栏的最小宽度\n- 修复左侧文件树鼠标经过没有出现背景色的问题\n- 减小模型读取不到文件的概率\n0.1.32 (2025-09-01)'
        },
        {
          'version': '0.1.32',
          'title': '0.1.32 (2025-09-01)',
          'date': '2025-09-01',
          'dateRaw': '2025-09-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-32-2025-09-01',
          'body': '- 修复模型有概率读不到 Terminal 内容的问题\n- 现在放大 IDE 窗口的时候，侧边栏不会变大了\n- 修复 Mermaid 绘制错误的问题\n- 输入框会随着文字变多，高度变高\n- 修复模型启动本地服务器后，没有识别启动成功的问题\n- 修复历史记录有概率损坏的问题\n- ssh 适配 zsh\n0.1.31 (2025-09-01)'
        },
        {
          'version': '0.1.31',
          'title': '0.1.31 (2025-09-01)',
          'date': '2025-09-01',
          'dateRaw': '2025-09-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-31-2025-09-01',
          'body': '- 修复模型有概率读不到 Terminal 内容的问题\n- 现在放大 IDE 窗口的时候，侧边栏不会变大了\n- 修复 Mermaid 绘制错误的问题\n- 输入框会随着文字变多，高度变高\n- 修复模型启动本地服务器后，没有识别启动成功的问题\n- 修复历史记录有概率损坏的问题\n- ssh 适配 zsh\n0.1.30 (2025-08-31)'
        },
        {
          'version': '0.1.30',
          'title': '0.1.30 (2025-08-31)',
          'date': '2025-08-31',
          'dateRaw': '2025-08-31',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-30-2025-08-31',
          'body': '- 优化内存占用，修复灰屏问题\n- 支持 makedown 渲染 table\n- 支持记忆用户选择的模型\n- 修复 plan 模式下因为 md 格式导致的对话出错问题\n- 修复输入框 @ 搜索不到特定文件的问题\n- 修复亮色主题下，工具卡片颜色不对的问题\n- 修复对话中 URL 颜色渲染不对的问题\n- 修复对话记录顺序不对的问题\n- 修复对话时 replace 工具重复展示问题\n- 修复调整 IDE 布局之后，终端的滚动条滑动之后会自动归位的问题\n0.1.29 (2025-08-30)'
        },
        {
          'version': '0.1.29',
          'title': '0.1.29 (2025-08-30)',
          'date': '2025-08-30',
          'dateRaw': '2025-08-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-29-2025-08-30',
          'body': '- 优化内存占用，修复灰屏问题\n- 支持 makedown 渲染 table\n- 支持记忆用户选择的模型\n- 修复 plan 模式下因为 md 格式导致的对话出错问题\n- 修复输入框 @ 搜索不到特定文件的问题\n- 修复亮色主题下，工具卡片颜色不对的问题\n- 修复对话中 URL 颜色渲染不对的问题\n- 修复对话记录顺序不对的问题\n- 修复对话时 replace 工具重复展示问题\n- 修复调整 IDE 布局之后，终端的滚动条滑动之后会自动归位的问题\n0.1.28 (2025-08-30)'
        },
        {
          'version': '0.1.28',
          'title': '0.1.28 (2025-08-30)',
          'date': '2025-08-30',
          'dateRaw': '2025-08-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-28-2025-08-30',
          'body': '- 优化内存占用，修复灰屏问题\n- 支持 makedown 渲染 table\n- 支持记忆用户选择的模型\n- 修复 plan 模式下因为 md 格式导致的对话出错问题\n- 修复输入框 @ 搜索不到特定文件的问题\n- 修复亮色主题下，工具卡片颜色不对的问题\n- 修复对话中 URL 颜色渲染不对的问题\n- 修复对话记录顺序不对的问题\n- 修复对话时 replace 工具重复展示问题\n- 修复调整 IDE 布局之后，终端的滚动条滑动之后会自动归位的问题\n0.1.27 (2025-08-26)'
        },
        {
          'version': '0.1.27',
          'title': '0.1.27 (2025-08-26)',
          'date': '2025-08-26',
          'dateRaw': '2025-08-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-27-2025-08-26',
          'body': '- 修复删除会话时，部分文件没删除干净的问题\n- 修复输入框 @ 菜单输入文字搜索时返回按钮点击失效问题\n- 对话框支持点击 option + 向上箭头 获取历史输入的内容\n- 解决 terminal 文字重叠问题\n- 修复内联对话会删除代码的问题\n- 修复对话中文件点击跳转不了问题\n0.1.26 (2025-08-26)'
        },
        {
          'version': '0.1.26',
          'title': '0.1.26 (2025-08-26)',
          'date': '2025-08-26',
          'dateRaw': '2025-08-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-26-2025-08-26',
          'body': '- 解决了 IDE 占用太多存储空间的问题\n- 模型使用的语言会根据用户输入的语言变化\n- 修复历史记录过长时，偶现点击恢复历史记录不展示的问题\n- 现在模型会准确地回答当前使用的模型型号了\n0.1.25 (2025-08-25)'
        },
        {
          'version': '0.1.25',
          'title': '0.1.25 (2025-08-25)',
          'date': '2025-08-25',
          'dateRaw': '2025-08-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-25-2025-08-25',
          'body': '- 解决了 IDE 占用太多存储空间的问题\n- 模型使用的语言会根据用户输入的语言变化\n- 修复历史记录过长时，偶现点击恢复历史记录不展示的问题\n- 现在模型会准确地回答当前使用的模型型号了\n0.1.24 (2025-08-22)'
        },
        {
          'version': '0.1.24',
          'title': '0.1.24 (2025-08-22)',
          'date': '2025-08-22',
          'dateRaw': '2025-08-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-24-2025-08-22',
          'body': '- 修复插件市场搜索不全的问题\n- 支持一次选择多个文件添加到对话中\n- 优化了模型有时候忽略 rules 的问题\n- Boost Prompt 提示词增强功能支持撤销，视觉交互优化\n- 优化了 SSH 连接的启动速度和稳定性\n- 优化输入框逻辑，只选择文件也允许发送消息\n- 修复了本地有代理时，可能导致 SSH 鉴权失败的问题\n- 修复偶现发送消息时未携带选择的文件问题\n- 修复终端信息添加到对话框的时候，发送不生效的问题\n- 修复 MCP 工具报错时未展示报错信息的问题\n0.1.23 (2025-08-22)'
        },
        {
          'version': '0.1.23',
          'title': '0.1.23 (2025-08-22)',
          'date': '2025-08-22',
          'dateRaw': '2025-08-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/ide/release-notes/release-notes#_0-1-23-2025-08-22',
          'body': '- 修复插件市场搜索不全的问题\n- 支持一次选择多个文件添加到对话中\n- 优化了模型有时候忽略 rules 的问题\n- Boost Prompt 提示词增强功能支持撤销，视觉交互优化\n- 优化了 SSH 连接的启动速度和稳定性\n- 优化输入框逻辑，只选择文件也允许发送消息\n- 修复了本地有代理时，可能导致 SSH 鉴权失败的问题\n- 修复偶现发送消息时未携带选择的文件问题\n- 修复终端信息添加到对话框的时候，发送不生效的问题\n- 修复 MCP 工具报错时未展示报错信息的问题\n最后更新:\nPager 上一页 联系我们'
        }
      ]
    },
    {
      'id': 'workbuddy',
      'name': 'WorkBuddy',
      'vendor': '腾讯云',
      'kind': 'codebuddy',
      'changelogUrl': 'https://www.codebuddy.cn/docs/workbuddy/Changelog',
      'status': 'ok',
      'error': '',
      'lastOkAt': '2026-09-24 18:00',
      'entries': [
        {
          'version': '5.6.2',
          'title': '5.6.2 版本发布 🚀（2026-09-21）',
          'date': '2026-09-21',
          'dateRaw': '2026-09-21',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-6-2-版本发布-🚀-2026-09-21',
          'body': '- 优化文档预览窗口的打开、保存、主题与关闭，未登录也可预览 PPT\n- 优化连接器授权与开关：授权完成后才显示图标，关闭后对话中不再残留可用工具\n- 优化技能安装、更新检测与闲置提醒，不同来源的同名技能不再误标已安装，套件内技能不再被误关\n- 减少对话中反复确认专家身份的追问\n- 修复项目新建本地任务长时间停在准备中，以及删除会话后本地助理打不开的问题\n- 修复超长本地会话「查看更多」无法翻到更早记录的问题\n- 修复历史会话专家身份丢失、任务结束后仍显示处理中、问答误显示「已跳过」的问题\n- 修复新建任务后工作空间选择丢失，以及输入框模型名称空白的问题\n- 修复推荐安装卡片超时后关不掉，以及新建会话后仍停留在分享勾选状态的问题\n- 修复从分享页返回需点两次才能继续对话的问题\n- 修复企业微信 / 微信转发聊天记录识别失败、卡片一直显示「准备中」的问题\n- 修复网页产物预览无法播放内嵌音频，以及对话中搜索文件结果为空的问题\n- 修复连接器授权成功后一直显示「连接中」，以及解除授权后无法重新连接的问题\n- 修复定时任务企业微信通知延迟或漏发、没有运行记录却反复执行，以及分享链接中途变化的问题\n- 修复快捷键重设后必须重启才生效的问题\n- 修复购买积分弹窗无法打开、取消发布的应用从列表消失，以及腾讯文档创建 PPT 失败的问题\n- 修复对话没有回复或服务异常后会话卡住，以及网页端偶发退出登录的问题\n5.6.0 版本发布 🚀（2026-09-19）'
        },
        {
          'version': '5.6.0',
          'title': '5.6.0 版本发布 🚀（2026-09-19）',
          'date': '2026-09-19',
          'dateRaw': '2026-09-19',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-6-0-版本发布-🚀-2026-09-19',
          'body': '- 新增设置「应用管理」，可查看已授权的第三方应用与 Buddy 应用，并支持一键撤销授权\n- 新增会话消息引用输入，选中他人消息即可作为上下文继续追问\n- 新增巴西葡萄牙语与印尼语界面，切换后重启依旧保持\n- 恢复自定义 MCP 直接编辑 mcp.json 的能力，可整份配置维护并即时生效\n- 新增闲置能力提醒卡片，长期未使用的插件和技能可一键关闭\n- Browser Use 兼容 Edge 加载项商店和 QQ 浏览器\n- 完善微信 macOS 系统 Share Sheet 转发到 WorkBuddy 的流程，高频分享给出频控提示\n- 新增语音输入实时反馈并延长最长录音时长，语音输入过程中不再打断手动编辑\n- 提升对话历史首帧速度，长会话和复杂任务续聊更流畅\n- 优化 Markdown 预览与编辑，切换 Tab 不再丢失编辑内容，Mermaid 等图表滚动更顺畅\n- 优化连接器管理，卡片描述、图标、连接状态和市场目录更新更稳定\n- 优化 MCP 服务管理、授权面板与探活重试，网络恢复后可自动重连\n- 优化云端任务产物栏与消息顺序，产物随对话出现，多轮消息不再乱序\n- 优化跨设备会话标题、模型、置顶顺序同步\n- 优化电脑操作、浏览器操作、Bash 命令等工具在对话中的展示形态\n- 优化购买积分体验，账户与订阅入口整合，支付到账变化更直观\n- 优化专家中心分类展示、专家分享 / 导入与深链跳转\n- 优化企业腾讯文档、乐享企业版面板首次打开速度\n- 统一退出登录的二次确认弹窗、危险按钮和加载态，跨标签页登出实时同步\n- 优化流式回复中「已处理 X 秒」耗时对齐真实整秒，减少无效刷新\n- 优化窗口缩放边缘不再闪出异色底色，首页输入框悬停提示词模板时不再抖动\n- 修复企业腾讯文档首次预览停在登录页、连接器授权完成后误跳系统浏览器的问题\n- 修复冷启动短窗口内新建会话缺失插件工具的问题\n- 修复企业下发含 %USERPROFILE% 环境变量的安全路径规则不生效的问题\n- 修复切换账号后连接器目录不刷新，个人版切司内看不到内网连接器的问题\n- 修复上一轮长命令仍在执行时，新消息误中断上一轮任务的问题\n- 修复连接器已连接却调不到工具、已关闭却显示为开启导致会话无法发送的问题\n- 修复插件套件启停后当前会话不生效、状态停留在「部分完成」的问题\n- 修复流式 Markdown 标记异常、重复文本，以及慢历史加载被误判为空会话的问题\n- 修复腾讯文档 skill 拿不到票据、PPT 编辑报错的问题\n- 修复 WorkBuddy 频繁自动掉登录态的问题\n- 修复本地助理多轮回复只剩「已完成」空壳、首条消息发送失败的问题\n- 修复内置插件 MCP（微信支付、表格助理等）在桌面会话里连不上的问题\n- 修复 Windows 上表格助手、文档流水线等子代理从工具描述中随机消失的问题\n- 修复弱网对话恢复失败、同一会话消息队列被新输入越过的问题\n- 修复自动化任务卡死不触发、任务莫名结束、休眠期间调度不准的问题\n- 修复分享页助手署名异常、多产物分享缺产物、会话分享失败的问题\n- 修复海外版自动化推送标题显示中文、帮助文档跳转与订阅入口错乱的问题\n- 修复设计模式下选项浮层遮挡、深色主题适配、设计会话历史缺失的问题\n- 修复项目任务对话滚动卡顿、待办和会话切换偶发白屏的问题\n- 修复腾讯乐享企业版面板白屏、连接器授权卡在等待状态的问题\n5.5.6 版本发布 🚀（2026-09-10）'
        },
        {
          'version': '5.5.6',
          'title': '5.5.6 版本发布 🚀（2026-09-10）',
          'date': '2026-09-10',
          'dateRaw': '2026-09-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-6-版本发布-🚀-2026-09-10',
          'body': '- 优化自动化任务重试，失败后可在当前会话中继续，避免创建重复的任务会话\n- 修复自动化任务重试成功后运行历史状态不准确、切换任务后旧错误再次出现的问题\n- 优化自动化任务错误提示，不再展示无意义的内部错误码和失效操作指引\n- 提升插件推荐的主动性与准确度，可根据任务需要更恰当地推荐连接器、专家或专家团队\n5.5.5 版本发布 🚀（2026-09-10）'
        },
        {
          'version': '5.5.5',
          'title': '5.5.5 版本发布 🚀（2026-09-10）',
          'date': '2026-09-10',
          'dateRaw': '2026-09-10',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-5-版本发布-🚀-2026-09-10',
          'body': '- 新增创意设计能力，支持图片生成、视频生成和品牌设计等场景\n- 发起任务时可直接添加资料库中的文档或空间作为参考内容\n- 后台任务支持查看详情和终端输出，并可随时取消运行\n- 「数据管理—应用」支持直接发布或取消发布应用，并优化多个应用及历史应用的管理体验\n- 从企业微信转发聊天记录后，可自动读取其中的文档、微盘文件、日程、待办、会议和智能纪要\n- 优化包含复杂 Mermaid 图表的 Markdown 预览，滚动和加载更加流畅\n- 改善超长会话的流式显示，减少消息区域抖动和闪烁\n- 提升电脑休眠唤醒后的恢复能力，减少余额加载、退出登录或会话操作长期卡住的问题\n- 修复部分本地 PPT 和特殊 HTML 内容预览白屏的问题\n5.5.4 版本发布 🚀（2026-09-08）'
        },
        {
          'version': '5.5.4',
          'title': '5.5.4 版本发布 🚀（2026-09-08）',
          'date': '2026-09-08',
          'dateRaw': '2026-09-08',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-4-版本发布-🚀-2026-09-08',
          'body': '- 「允许锁屏运行」新增关闭、熄屏后继续运行、保持屏幕常亮三种模式\n- 客户端将「自动化」统一更名为更直观的「定时任务」\n- 模型的上下文窗口档位可分别记忆，新建会话或重启后继续沿用上次选择\n- 修复登录凭证过期后界面仍显示已登录、发送消息却提示服务异常的问题\n- 修复本地任务首次提问偶发卡在「正在连接 MCP 服务…」的问题\n- 修复超长本地会话点击「查看更多」无法加载更早提问的问题\n- 修复未选择工作空间新建任务时，侧栏短暂出现日期文件夹的问题\n- 修复移动端任务产物中混入过程文件的问题\n5.5.3 版本发布 🚀（2026-09-04）'
        },
        {
          'version': '5.5.3',
          'title': '5.5.3 版本发布 🚀（2026-09-04）',
          'date': '2026-09-04',
          'dateRaw': '2026-09-04',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-3-版本发布-🚀-2026-09-04',
          'body': '- 本地 Office 文件预览支持更大文件，Word 和表格最高 100MB，演示文稿最高 500MB\n- 优化桌面端与移动端的模型列表一致性，避免自定义模型与同名内置模型互相覆盖或丢失\n- 提升 Kling V3 文生视频和图生视频的参数兼容性，支持 720P、1080P 输出\n- 修复企业微信群聊中 @机器人后持续「思考中」、无法回复的问题\n- 修复消息已处理后仍无故继续运行的问题，减少重复续写和额外请求\n- 修复 Windows 盘符根目录下、工作空间外的文本和 Markdown 产物显示「暂无数据」的问题\n5.5.2 版本发布 🚀（2026-09-03）'
        },
        {
          'version': '5.5.2',
          'title': '5.5.2 版本发布 🚀（2026-09-03）',
          'date': '2026-09-03',
          'dateRaw': '2026-09-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-2-版本发布-🚀-2026-09-03',
          'body': '- 优化积分到期提醒和积分明细，按有效期分类展示，并保留尚未过期的积分包记录\n- 优化会话中的链接与文件引用，悬停时可查看完整地址或路径，展开内容时页面位置更稳定\n- 恢复 Ctrl+Enter 或 Cmd+Enter 换行习惯，同时保留自定义快捷键优先级\n- 修复会话报错后消息消失、重试重复发送，以及切换模型后错误信息不匹配的问题\n- 提升本地历史恢复能力，工作区路径发生变化或存在单条异常记录时仍可正常打开会话\n- 修复 Windows 触屏设备计划看板无法滚动或点按，以及将磁盘根目录设为默认工作区后无法新建会话的问题\n- 修复自动化任务长期显示运行中、正常执行被误判为补跑、运行记录不及时刷新及闲时触发延迟的问题\n- 减少系统睡眠唤醒或短暂无响应后误入「界面加载失败」页面的情况\n- 修复美团助手下单时未展示微信 AI 支付确认的问题\n- 修复新版对话完成元宝搜索后未显示技术支持入口的问题\n5.5.1 版本发布 🚀（2026-09-02）'
        },
        {
          'version': '5.5.1',
          'title': '5.5.1 版本发布 🚀（2026-09-02）',
          'date': '2026-09-02',
          'dateRaw': '2026-09-02',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-1-版本发布-🚀-2026-09-02',
          'body': '- 视频生成支持选择画面比例、是否带声音，并可描述不希望出现的内容\n- 桌面端侧栏新增当前客户端版本号，便于快速确认所用版本\n- 提升个人及项目云助理的建连和历史任务切换速度，减少首屏与预览区域的白屏等待\n- 优化「订阅和用量」页面，购买积分到账变化更直观，支付二维码展示更稳定，到期提醒更加明确\n- 优化敏感内容确认，同一次任务访问多个敏感内容时不再重复弹窗，并减少图片内容被误判\n- 优化自动化任务和运行记录的搜索与刷新，减少筛选卡顿和空白页，并恢复筛选工具栏\n- 修复移除专家后仍以专家口吻回答，以及首次使用专家时上下文偶尔未生效的问题\n- 修复后台命令的任务标题、运行状态和完成状态显示异常\n- 修复专家、技能、连接器图标或站内图片被误拖入输入框的问题\n- 修复首次响应前失败后重试时上下文丢失的问题\n- 修复部分模型服务异常被误报为网络失败，以及错误提示中的网页链接无法打开的问题\n5.5.0 版本发布 🚀（2026-09-01）'
        },
        {
          'version': '5.5.0',
          'title': '5.5.0 版本发布 🚀（2026-09-01）',
          'date': '2026-09-01',
          'dateRaw': '2026-09-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-5-0-版本发布-🚀-2026-09-01',
          'body': '- 新增行业 Buddy 应用，可按场景提供专属首页、专家、技能和连接器，进入应用后可直接发起更贴合行业需求的任务\n- 支持通过 macOS 和 Windows 系统分享入口，将微信聊天记录发送到 WorkBuddy，并优化转发内容预览\n- 新增图片处理能力，支持去文字或水印、图片修复、增强、美颜和透明背景抠图\n- 增强腾讯文档编辑能力，支持更多内容读取、写入和文档操作场景\n- 提升桌面端冷启动、快速问答及斜杠命令面板的响应速度，减少打开应用和开始提问时的等待\n- 优化内置浏览器多标签切换和后台资源占用，低配置设备使用更流畅\n- 隔离行业 Buddy 应用与通用版的输入框草稿，切换应用时不再互相覆盖内容\n- 修复升级后首次启动可能长时间白屏，以及 Windows 安装或卸载时弹出黑色终端窗口的问题\n- 修复企业腾讯文档首次预览停留在登录页，以及连接器授权失效后无法重新授权的问题\n- 修复编辑后重新发送时内容错位、旧回复恢复，或发送失败后输入内容丢失的问题\n5.4.7 版本发布 🚀（2026-09-01）'
        },
        {
          'version': '5.4.7',
          'title': '5.4.7 版本发布 🚀（2026-09-01）',
          'date': '2026-09-01',
          'dateRaw': '2026-09-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-7-版本发布-🚀-2026-09-01',
          'body': '- 新增「订阅和用量」设置页，可查看套餐概览、分类积分和资源包明细，并在应用内购买积分、管理自动续费\n- 优化积分展示与刷新，购买后无需刷新整页即可查看最新余额，体验版套餐的基础积分显示更准确\n- 修复快速、均衡、极致三档模型无法发送图片的问题\n- 修复 Windows 下部分会话首次发送消息后无响应或失败的问题\n5.4.5 版本发布 🚀（2026-08-30）'
        },
        {
          'version': '5.4.5',
          'title': '5.4.5 版本发布 🚀（2026-08-30）',
          'date': '2026-08-30',
          'dateRaw': '2026-08-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-5-版本发布-🚀-2026-08-30',
          'body': '- 个人面板新增「记忆与进化」快捷入口，可直接进入个性化记忆设置\n- 优化模型档位记忆，思考强度与上下文长度可按会话保存，切换任务或重启后仍保持原选择\n- 提升长对话浏览与切换流畅度，返回仍在生成的会话时可补齐离开期间的思考、正文和工具内容\n- 修复历史会话早期产物丢失，并改善云端变更文件和 HTML 产物页内标签切换的预览体验\n- 提升桌面端与移动端同步完整性，会话标题、置顶状态和顺序可正确同步，断线后可自动恢复连接\n- 修复复杂回复正文被工具状态截断，导致内容缺失或顺序异常的问题\n- 优化任务结束状态，取消任务统一显示「用户已取消」，历史任务卡在待确认时可正常停止并继续对话\n- 修复仅问答模式错误加载工具而无法正常对话的问题\n- 修复 Windows 下表格助理不可用或无法正确处理本地路径的问题\n- 提升企业代理环境下的连接稳定性，并支持钉钉跟随系统代理连接\n- 优化侧栏菜单，当专家、技能和连接器均不可用时自动隐藏空入口\n5.4.4 版本发布 🚀（2026-08-28）'
        },
        {
          'version': '5.4.4',
          'title': '5.4.4 版本发布 🚀（2026-08-28）',
          'date': '2026-08-28',
          'dateRaw': '2026-08-28',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-4-版本发布-🚀-2026-08-28',
          'body': '- 新增专家链接直达能力，可从活动链接进入指定专家并自动带入引导语\n- 提升专家和专家团启动稳定性，修复启动卡住、身份或版本错配，以及「做同款」时名称、头像异常的问题\n- 修复本地助理回复结束后只显示「已完成」、新建对话误复用旧会话的问题\n- 优化超长对话加载，减少历史内容过多导致的卡顿和加载失败\n- 优化产物区展示与分享，保留最终交付文件、隐藏中间文件，并避免按消息片段分享时遗漏产物\n- 优化自定义 MCP 配置，支持中文及大写服务名，并修复已连接服务工具列表为空的问题\n- 修复关闭技能后仍可搜索、连接器状态异常变化，以及关闭专家后自动恢复的问题\n- 提升移动端连接电脑的稳定性，改善弱网、休眠唤醒和网络切换后的同步与重连体验\n- 优化任务权限处理，拒绝单步权限时仅跳过当前步骤，执行中切换能力不再中断当前回复\n- 提升 PPT 和表格生成稳定性，修复部分设备无法生成、公式重算结果不准确等问题\n5.4.3 版本发布 🚀（2026-08-26）'
        },
        {
          'version': '5.4.3',
          'title': '5.4.3 版本发布 🚀（2026-08-26）',
          'date': '2026-08-26',
          'dateRaw': '2026-08-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-3-版本发布-🚀-2026-08-26',
          'body': '- 修复升级后已置顶的任务和会话丢失的问题\n- 提升专家团会话稳定性，修复首次发起无响应、连接超时及重开后无法继续协作的问题\n- 优化自动化任务体验，支持搜索并选择专家团，减少自定义 MCP 确认卡住及任务中断后重复补跑的问题\n- 修复超长会话压缩后无法继续发送消息，以及翻页查看历史时消息或产物不完整的问题\n- 优化产物分享体验，补齐分享入口、微信唤起和本地文件快捷操作，并改进分享开关与超时提示\n- 提升连接器和 MCP 稳定性，修复断网、取消授权、自定义授权及插件或专家能力加载异常\n- 修复 HTML 产物删除后展示原始错误页的问题，改为显示清晰的空状态\n- 修复使用中文输入法重命名资料库时，确认候选词会误提交名称的问题\n- 优化设计类会话续聊速度，减少继续追问时的消息等待\n- 修复新建会话流式回复缺失或多条消息顺序错乱的问题\n- 修复桌面端 Office 文件因系统防火墙限制而无法预览的问题\n- 修复网页端任务完成后无法继续追问，以及会话恢复后 Max 模式失效的问题\n5.4.2 版本发布 🚀（2026-08-24）'
        },
        {
          'version': '5.4.2',
          'title': '5.4.2 版本发布 🚀（2026-08-24）',
          'date': '2026-08-24',
          'dateRaw': '2026-08-24',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-2-版本发布-🚀-2026-08-24',
          'body': '- 提升桌面端长时间运行稳定性，减少后台运行引起的界面卡顿与系统资源占用\n5.4.1 版本发布 🚀（2026-08-23）'
        },
        {
          'version': '5.4.1',
          'title': '5.4.1 版本发布 🚀（2026-08-23）',
          'date': '2026-08-23',
          'dateRaw': '2026-08-23',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-1-版本发布-🚀-2026-08-23',
          'body': '- 提升多轮对话稳定性，修复取消后无法继续发送、切换模型或专家时任务中断等问题\n- 优化专家使用体验，修复专家链接无法召唤、专家改名后启动旧版本及历史署名丢失的问题\n- 提升连接器授权与开关稳定性，修复授权失败后状态卡住、反复跳转授权页或开关延迟的问题\n- 优化资料库与腾讯文档使用流程，待办中的资料库链接可展示为文档卡片，上传后可自动启用连接器\n- 优化任务列表与历史会话，归档任务可完整加载，未读状态、会话分类和链接跳转更准确\n- 优化输入框与消息展示，切换场景时保留已输入内容，复制链接不再丢失原地址\n- 优化工作区权限处理，无访问权限时提前引导授权，并减少同类权限重复弹窗\n- 提升移动端连接电脑的同步稳定性，修复附件、图片、重复消息及上传超时等问题\n- 优化自动化任务的默认权限、工作空间展示和会话定位，运行记录与任务状态更清晰\n- 提升流式对话和产物加载性能，减少长回复期间的界面卡顿\n- 修复表格新增行和图表预览异常，跨端查看结果更一致\n5.4.0 版本发布 🚀（2026-08-20）'
        },
        {
          'version': '5.4.0',
          'title': '5.4.0 版本发布 🚀（2026-08-20）',
          'date': '2026-08-20',
          'dateRaw': '2026-08-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-4-0-版本发布-🚀-2026-08-20',
          'body': '- 支持创建 Worktree 任务，在同一工作区并行处理多个开发任务，代码改动互不干扰\n- 新增代码开发模式下的 Git 分支展示与安全切换，并提供独立本地终端和后台命令运行面板\n- 新增全新系统设置页、客户端自检工具和系统通知，环境排查与待确认任务处理更便捷\n- 新增 3D 模型生成、创意设计 PPT 模板和「媒体运营」场景，并支持本地 PPT AI 编辑撤销与重做\n- 优化输入体验，支持拖拽添加文件、将粘贴的长文本收起为标签，以及通过微信聊天记录发起对话\n- 增强腾讯文档与资料库能力，支持更多内容加入会话，并可通过「一键做同款」快速复刻网页\n- 优化专家、工作空间和任务管理，支持最近使用专家搜索、工作空间重命名及任务右键操作\n- 增强模型选择，清晰展示会员权益档位，并支持为复杂任务选择更高推理强度和上下文长度\n- 新增自动化任务每月多日期执行周期，定时安排更灵活\n- 提升启动、建连、历史加载和会话切换速度，长对话浏览及多任务切换更流畅\n- 优化产物分享和长耗时 MCP 工具执行，减少分享等待及工具被提前中断\n- 修复输入草稿丢失、上下文压缩消息错序、账号或连接器切换后信息未刷新，以及部分文件无法预览的问题\n5.3.14 版本发布 🚀（2026-08-17）'
        },
        {
          'version': '5.3.14',
          'title': '5.3.14 版本发布 🚀（2026-08-17）',
          'date': '2026-08-17',
          'dateRaw': '2026-08-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-14-版本发布-🚀-2026-08-17',
          'body': '- 新增 Markdown AI 编辑快捷键提示，支持 Enter 直接发送、Cmd+Enter 换行\n- 优化长期记忆加载与本地助理变量恢复，新建和恢复对话更稳定\n- 优化自动化任务高峰期调度，减少集中触发和误判错过执行\n- 优化灵感案例访问和做同款流程，提升资源打开、分享口令和覆盖确认体验\n- 优化并行灵感任务页面性能，减少任务切换卡顿和历史任务白屏\n- 修复多个任务同时提问时回复内容串话的问题\n- 修复技能名称为纯数字时新建会话失败的问题\n- 修复粘贴腾讯文档链接后点击「去授权」无响应的问题\n- 修复文件分享持续失败的问题\n- 修复思考过程代码块重叠显示的问题\n- 修复海外版提示词增强、历史日期和关于页跳转异常的问题\n- 修复子 Agent 沙箱任务可能永久等待的问题\n- 修复 Wedata 图表卡片无法正常渲染的问题\n- 修复元宝搜索入口异常隐藏的问题\n5.3.13 版本发布 🚀（2026-08-13）'
        },
        {
          'version': '5.3.13',
          'title': '5.3.13 版本发布 🚀（2026-08-13）',
          'date': '2026-08-13',
          'dateRaw': '2026-08-13',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-13-版本发布-🚀-2026-08-13',
          'body': '- 新增灵感「一键做同款」，支持快速套版复刻网页\n- 优化同时运行多个任务时的流畅度，减少切换卡顿和白屏\n- 优化资料库上传体验，成功后可一键跳转查看，已在资料库中的文件不再重复上传\n- 修复子任务一直停在准备中、无法继续执行的问题\n- 修复对话中 WeData 图表无法展示的问题\n- 修复思考过程中代码块文字重叠的问题\n- 修复网页搜索结果出现空链接的问题\n- 修复分享文件弹窗遮罩样式异常的问题\n- 修复对话区元宝搜索入口消失的问题\n- 修复海外版提示词增强不可用的问题\n- 修复海外版历史消息日期未按语言显示的问题\n- 修复海外版关于页官网跳转错误的问题\n5.3.12 版本发布 🚀（2026-08-12）'
        },
        {
          'version': '5.3.12',
          'title': '5.3.12 版本发布 🚀（2026-08-12）',
          'date': '2026-08-12',
          'dateRaw': '2026-08-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-12-版本发布-🚀-2026-08-12',
          'body': '- 新增灵感分享口令，可复制口令给他人并直达对应灵感详情\n- 优化移动端连接电脑在弱网、休眠恢复后的同步与续聊稳定性\n- 优化输入框和模型选择菜单样式，输入区边界与浮层层级更清晰\n- 修复大体积 Markdown 附件预览导致 WorkBuddy 卡死的问题\n- 修复 Windows 非系统盘或中文路径下产物无法预览、下载或提示 Access denied 的问题\n- 修复休眠恢复或弱网启动后界面长时间白屏、转圈和创建会话超时的问题\n- 修复本地助理内存快速增长导致白屏或崩溃的问题\n- 修复本地助理重启后任务上下文丢失、无法继续执行的问题\n- 修复「允许锁屏远程」重启后状态丢失，导致远程访问失效的问题\n- 修复 IMA 连接器偶发掉线、需要重新授权的问题\n- 修复专家深链在冷启动期间无法打开专家详情的问题\n- 修复 HTML 产物分享后无法跳转资料库、微信卡片后缀显示异常的问题\n- 修复内置浏览器中地图类页面无法绘制的问题\n- 修复企业管理员调整模型白名单后，客户端仍显示旧自定义模型的问题\n5.3.11 版本发布 🚀（2026-08-07）'
        },
        {
          'version': '5.3.11',
          'title': '5.3.11 版本发布 🚀（2026-08-07）',
          'date': '2026-08-07',
          'dateRaw': '2026-08-07',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-11-版本发布-🚀-2026-08-07',
          'body': '- 新增对话出错时「检查网络」快捷入口，网络异常可一键跳转诊断\n- 新增企微助理逐字流式输出，回复过程实时可见不再等待完整回复\n- 新增企微助理支持先发文件后补文字描述，一次性发起对话\n- 新增对话流显示每轮运行时间，方便感知任务耗时\n- 新增任务列表批量删除与批量归档操作\n- 新增「我安装的」技能页面本地搜索框，快速定位已安装技能\n- 新增 Teams 项目邀请链接免审直接加入\n- 新增支持修改账户昵称\n- 新增开机自启动设置项\n- 新增个性化设置中「显示文件变更过程详情」开关\n- 新增创意设计场景「设计风格/补图方式」选项\n- 新增技能开关切换后 toast 反馈提示\n- 新增资料库支持 deeplink 直接打开指定文档\n- 新增 Python 类连接器运行时支持\n- 优化 Windows 工作空间文件目录监听，减少界面卡顿\n- 优化排队弹窗升级按钮按当前套餐升档展示\n- 优化首次启动体验，减少白屏等待时间\n- 优化主页面切换标签页流畅度\n- 优化连接器管理页面视觉样式\n- 优化侧栏与自动化面板 UI 交互\n- 修复配置 DeepSeek 自定义模型后对话 AI 回复为空的问题\n- 修复输入框无法多选文本及光标乱跳的问题\n- 修复升级后本地助理聊天记录丢失的问题\n- 修复升级后任务分享失败的问题\n- 修复上传自定义 Skill 安全检测一直转圈无法完成的问题\n- 修复升级后内置技能未更新到最新版的问题\n- 修复发送消息后任务一直卡在「思考中」无法继续的问题\n- 修复发送消息后任务异常结束无响应的问题\n- 修复点击「填写反馈」按钮反馈弹窗不弹出的问题\n- 修复 Teams 本地任务首轮对话失败无错误提示的问题\n- 修复多 HTML 产物分享到微信后同站点文件丢失的问题\n- 修复 HTML 产物分享到微信后卡片标题显示 .zip 而非 .html 的问题\n- 修复云助理重连后出现两条相同 AI 回复气泡的问题\n- 修复企业智能体弹出的问答选择框自动消失后界面卡住的问题\n- 修复企微 IM 转发文件偶发未同步到 WorkBuddy 的问题\n- 修复企微机器人连接失败的问题\n- 修复微信扫码配置助理后首条消息被顶到看不到的问题\n- 修复专享版浅色主题下检查更新弹框显示为深色的问题\n- 修复左侧栏任务「更多」菜单点击后未自动收起的问题\n- 修复输入框右键菜单选区与剪贴板异常的问题\n- 修复重启后聊天历史记录突然全部消失的问题\n- 修复对话压缩后 AI 续写内容不显示的问题\n- 修复专家团子成员显示成功但任务界面为空的问题\n- 修复锁屏后再打开电脑出现龙虾管家的问题\n- 修复深色模式下邮件详情展示异常的问题\n- 修复自动化任务配置每月定时显示格式错误的问题\n- 修复产物分享弹窗切换任务后未关闭的问题\n- 修复用户手动修改的任务标题被旧标题覆盖的问题\n- 修复 Ardot 创意设计分享产物时报错的问题\n- 修复 Windows 上 tencent-pptx 技能无法启用的问题\n- 修复用户菜单中缺少「Buddy 加油站」和「去邀约」入口的问题\n- 修复 Teams 项目下模型描述显示英文的问题\n- 修复邀请用户加入项目后新建待办处理人显示为 uid 的问题\n- 修复 Teams 消息中心没有弹出项目申请提示的问题\n- 修复图文混排场景请求生成图片时未产出图片产物的问题\n- 修复文档 AI 编辑选区写入内容未插入到选中文字下方的问题\n- 修复 txt 格式文档不支持人机双写的问题\n5.3.8 版本发布 🚀（2026-07-30）'
        },
        {
          'version': '5.3.8',
          'title': '5.3.8 版本发布 🚀（2026-07-30）',
          'date': '2026-07-30',
          'dateRaw': '2026-07-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-8-版本发布-🚀-2026-07-30',
          'body': '- 优化 macOS 文件系统，修复长期间使用下的性能问题\n- 修复产物索引膨胀导致历史任务无法恢复的问题\n- 修复依赖解压失败时命令执行环境检测异常的问题\n- 修复预热进程首轮对话人设异常及登录状态同步的问题\n- 修复历史消息中错误展示内部消息的问题\n5.3.7 版本发布 🚀（2026-07-29）'
        },
        {
          'version': '5.3.7',
          'title': '5.3.7 版本发布 🚀（2026-07-29）',
          'date': '2026-07-29',
          'dateRaw': '2026-07-29',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-7-版本发布-🚀-2026-07-29',
          'body': '- 优化小程序端消息推送性能，剥离大字段避免 socket 拥塞\n- 修复 Deeplink 跳转时工作目录未正确设置的问题\n- 修复海外版 activity 栏专家/技能名称未按语言显示的问题\n- 修复端云同步断线后未自动重连的问题\n- 修复 Windows 任务执行中反复弹终端窗口的问题\n- 修复专家团问询清单在会话切换后丢失的问题\n- 修复微信聊天记录在英文环境下展示异常的问题\n- 修复云端助理切换会话时子助理状态闪动的问题\n- 修复会话分享时网盘文件上传失败的问题\n- 修复首次发送消息无法编辑的问题\n- 修复 Windows 冷启动闪退的问题\n- 修复专家图片格式不支持时未正确提示的问题\n- 修复自动化任务弹窗底部按钮闪现即消失的问题\n- 修复首条消息编辑重发时的历史回放问题\n- 修复 SSE 流式传输中文乱码的问题\n- 修复小程序端用户消息重复推送的问题\n- 修复高风险工具审批面板闪退的问题\n- 修复后台会话切回后内容截断的问题\n- 修复账号切换后连接未自动重建的问题\n- 修复 PDF 文件预览空白的问题\n- 修复 Windows 启动期网络代理超时阻塞 UI 的问题\n- 修复我的文件/长期记忆编辑页误出现 AI 编辑按钮的问题\n- 修复本地项目任务误禁用 SDK 预览的问题\n- 修复我的文件预览 pptm/dot 等 Office 变体格式乱码的问题\n- 修复斜杠命令输入卡顿的问题\n- 修复增强提示词回流误判的问题\n- 修复切换会话后模型可能被静默兜底为 Auto 的问题\n- 优化 Windows 更新 loading 关闭时机\n5.3.6 版本发布 🚀（2026-07-28）'
        },
        {
          'version': '5.3.6',
          'title': '5.3.6 版本发布 🚀（2026-07-28）',
          'date': '2026-07-28',
          'dateRaw': '2026-07-28',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-6-版本发布-🚀-2026-07-28',
          'body': '- 新增 WorkBuddy 官网登录跳转能力，支持从 www.workbuddy.cn / staging.workbuddy.cn 无缝拉起桌面端登录\n- 优化图片模型能力提示，所选模型不支持图片时改为 Toast 引导切换模型，避免发送按钮点了没反应\n- 优化 Ardot 设计画布图片生成模式，新增真实图片与文本占位图两种模式，占位图不消耗生成额度\n- 修复流式响应中文偶现乱码的问题（SSE chunk 边界截断 UTF-8 多字节字符）\n- 修复深度思考并行子任务时思考文本相互覆盖的问题\n- 修复我的文件面板打开 PDF / 文档预览偶现空白的问题\n- 修复预览 HTML 无法加载 ECharts / Chart.js / D3 等外部图表库导致图表渲染失败的问题\n- 修复英文版微信导出的聊天记录 ZIP 被误判为不可解析的问题\n- 修复 Claw 工作空间目录权限异常时无法回退到系统默认目录的问题\n- 修复套件市场更新后插件列表与磁盘状态脱节、多进程缓存过期的问题\n- 修复对话流式返回期间打开输入框「技能」子菜单列表长时间空白的问题\n- 修复首页输入框「+」菜单中腾讯文档 / 乐享等品牌图标被裁成圆形的问题\n- 修复「允许完全访问」二次确认弹窗底部按钮颜色渲染错误的问题\n5.3.5 版本发布 🚀（2026-07-25）'
        },
        {
          'version': '5.3.5',
          'title': '5.3.5 版本发布 🚀（2026-07-25）',
          'date': '2026-07-25',
          'dateRaw': '2026-07-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-5-版本发布-🚀-2026-07-25',
          'body': '- Buddy AI 国内升配（订阅计费）\n- WorkBuddy 扩展插件 Hook\n- 代理问题修复\n5.3.3 版本发布 🚀（2026-07-21）'
        },
        {
          'version': '5.3.3',
          'title': '5.3.3 版本发布 🚀（2026-07-21）',
          'date': '2026-07-21',
          'dateRaw': '2026-07-21',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-3-3-版本发布-🚀-2026-07-21',
          'body': '- 新增项目计划板块重构升级，支持待办富文本编辑、评论图片粘贴上传与动态留言\n- 新增企业智能体能力，支持身份配置、欢迎语与推荐问题自定义\n- 新增腾讯文档深度集成，支持 AI 引擎、桌面端编辑/预览与 MCP 本地服务\n- 新增 PPT 生成内置插件，支持生成前预览步骤\n- 新增灵感模块 Ardot 画布内嵌预览，支持灵感详情 URL 分享跳转\n- 新增个性化页本地长期记忆展示与编辑\n- 新增快捷键云同步能力，支持跨设备同步配置\n- 新增强制升级能力，确保关键版本用户可及时更新\n- 新增模型夜间折扣展示，费用信息更透明\n- 新增连接器管理页关键词搜索框\n- 新增意图识别胶囊位推荐内置 Skill、Plugin 和 Connector\n- 新增乐享知识库个人版团队知识库导航和列表\n- 新增 ImageGen/VideoGen 工具描述积分消耗提示\n- 新增账户管理页「前往管理中心」入口\n- 新增企业旗舰版网盘扩容能力\n- 新增问题反馈弹框支持粘贴图片上传\n- 新增安全中心文件修改自动备份功能\n- 优化聊天输入框技能面板置顶排序与设计还原\n- 优化输入框整体交互样式与模型选择器体验\n- 优化首页欢迎态布局与 UI 走查\n- 优化视频生成默认分辨率为 720P，保留 1080P 并关闭 4K 入口\n- 优化侧边栏分组标题吸顶与专家 Tab 二级菜单\n- 优化重发按钮移至助手消息反馈工具栏\n- 优化腾讯文档引擎 prewarm 延迟到首屏完成后执行，提升启动速度\n- 优化 Host CLI 优先使用 unpacked 路径，减少启动耗时\n- 修复云端项目会话连接失败时永久骨架屏的问题\n- 修复项目计划视图多语言适配与状态选择面板显示异常的问题\n- 修复转交任务后计划栏开始日期丢失的问题\n- 修复项目任务列表会话总数突降时未给出提示的问题\n- 修复长会话 ACP 通道关闭后点发送无反馈的问题\n- 修复项目会话连接器列表未屏蔽未授权团队连接器的问题\n- 修复项目自定义专家切换后无法注入默认提示词的问题\n- 修复助理列表置顶、按钮尺寸等多项 UI 问题\n- 修复分享会话消息排序错乱的问题\n- 修复沙箱产物预览及多项 UI 问题\n- 修复助理 mention 误替换文本的问题\n- 修复会话分隔线堆叠在末尾未落到对应对话中间的问题\n- 修复 Markdown --- 被误解析为标题的问题\n- 修复微信聊天记录附件路径乱码的问题\n- 修复 Windows 升级重启后快捷栏入口消失的问题\n- 修复自定义专家头像上传后裂图的问题\n- 修复同事助理切换任务状态和消息闪动的问题\n- 修复子 Agent 编辑文件未走沙箱审批的问题\n- 修复清空分割线误报处理中导致真实消息被丢弃的问题\n- 修复登录失败时 license 类错误未展示原始文案的问题\n- 修复 content 为 null 时渲染崩溃的问题\n- 修复深色主题下腾讯文档预览反色的问题\n- 优化微信分享邀请文案，增加邀请人名称展示\n- 修复菜单栏运营位偶现接口超时导致消失，网络抖动时保留旧配置\n- 修复小程序任务分享页 Office/PDF 等产物预览报错的问题\n- 修复 Web 端误显示任务分享入口的问题\n5.2.6 版本发布 🚀（2026-07-12）'
        },
        {
          'version': '5.2.6',
          'title': '5.2.6 版本发布 🚀（2026-07-12）',
          'date': '2026-07-12',
          'dateRaw': '2026-07-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-6-版本发布-🚀-2026-07-12',
          'body': '- 新增助理配额上限六档套餐文案与端内升级弹窗，权益变更更透明\n- 新增灵感详情通过 URL cardId 分享跳转能力\n- 新增账户管理页「前往管理中心」入口\n- 新增 ImageGen/VideoGen 工具描述中的积分消耗提示\n- 优化聊天输入框技能面板置顶排序与设计还原\n- 优化模型积分用量展示，模型名称与图标平铺显示，替代 hover 展示\n- 优化 mention 面板分组标题手风琴与模型图标匹配\n- 优化专家分类展示，新增腾讯专区\n- 优化视频生成默认分辨率为 720P、保留 1080P，关闭 4K 入口\n- 优化输入框整体交互与助理简介输入体验\n- 优化 5.2.6 生态设计走查涉及的视觉细节\n- 修复本地助理对话不展示用户输入的问题\n- 修复 Claw IM 入站命中已销毁会话及重复气泡的问题\n- 修复浏览器预览输入链接后卡回首页的问题\n- 修复企业智能体编辑配置/编辑档案入口在部分场景下展示错误的问题\n- 修复个人账号误报「企业禁止使用自定义模型」toast 的问题\n- 修复模型切换分割线在部分场景下展示异常的问题\n- 修复权限确认卡片重复/不显示，以及权限审批和 AskUserQuestion 等待状态被流式帧覆盖的问题\n- 修复分享按钮背景色缺失、分享对话暗黑样式与 html 分享页锚点报错等分享相关问题\n- 修复消息右键「分享任务」入口在关闭分享功能后仍可见的问题\n- 修复历史会话被主动销毁、等待重启期间会话输入丢失的问题\n- 修复技能自动更新描述文案未跟随产品品牌名的问题\n- 修复长正文折叠、置顶助理悬停背景色缺失、暗色模式取消按钮样式等细节问题\n- 修复一级模型列表外显思考强度档位、限频错误码展示异常的问题\n- 修复工具栏 chip 宽度测量虚增及 Automation 模型弹层被遮挡的问题\n- 修复同事问答状态丢失、文件树折叠等上下文查看相关问题\n- 修复文件名含 # 时预览乱码及 tab 无法关闭的问题\n- 修复 /compact 指令显示和 @同事附件丢失的问题\n- 修复连续关闭连接器时开关闪回打开、Web 连接器开关状态不同步的问题\n- 修复 MCP 连接器工具调用超时读不到配置且不支持进度续期的问题\n- 移除连接详情页冗余的手填 Header/Env 配置入口\n- 修复搜索结果点击后搜索面板不即时关闭的问题\n- 修复本地网络失败被误报为 502 的问题，改为返回明确的客户端网络错误码\n- 修复 Windows 路径归一化与文件定位失败时的错误弹窗\n- 修复 macOS 26.x Apple Silicon 启动读 Keychain 原生崩溃的问题\n- 修复安装前旧 WorkBuddyRepair.exe 残留导致覆盖失败误报\'安装包不完整\'的问题\n- 修复企业用户加入个人项目显示与申请加入页样式问题\n- 修复企业策略 user-check 401 误触发全局登出的问题\n- 修复助理最终回复缺少正文、reasoning-only 空消息导致崩溃的问题\n- 修复 Teams 任务框 chat 服务错误缺少 ErrorBanner 提示的问题\n- 修复文件下载接口缺少安全响应头带来的潜在 XSS 风险\n- 修复小程序导流按钮，去掉下载功能\n- 屏蔽资产扩容入口，专享版禁用 Memory 个性化功能\n5.2.5 版本发布 🚀（2026-07-08）'
        },
        {
          'version': '5.2.5',
          'title': '5.2.5 版本发布 🚀（2026-07-08）',
          'date': '2026-07-08',
          'dateRaw': '2026-07-08',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-5-版本发布-🚀-2026-07-08',
          'body': '- 稳定性增加\n5.2.3 版本发布 🚀（2026-07-06）'
        },
        {
          'version': '5.2.3',
          'title': '5.2.3 版本发布 🚀（2026-07-06）',
          'date': '2026-07-06',
          'dateRaw': '2026-07-06',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-3-版本发布-🚀-2026-07-06',
          'body': '- 新增模型夜间折扣展示，费用信息更透明\n- 优化腾讯文档授权流程，减少登录和授权失败\n- 优化输入框工具栏折叠与发送后高度恢复，小窗口输入体验更稳定\n- 优化云助理工具卡头像、会话展示与创建助理时的仓库/分支选择体验\n- 修复弱网断连后下一轮对话无法恢复的问题\n- 修复 Claw 多端对话消息错发、MCP 会话丢失后无法恢复的问题\n- 修复连接器快速切换或重连时误报连接失败、重复提示的问题\n- 修复项目任务切换后工具调用展示丢失、进行中筛选任务闪烁的问题\n- 修复自定义专家/专家团成员映射、默认提示词和脏配置导致的异常\n- 修复消息流式输出重复拼接、消息归组和取消态显示异常的问题\n- 修复 Windows 产物右键打开文件失败、添加专家/技能浮层无法交互的问题\n5.2.2 版本发布 🚀（2026-07-03）'
        },
        {
          'version': '5.2.2',
          'title': '5.2.2 版本发布 🚀（2026-07-03）',
          'date': '2026-07-03',
          'dateRaw': '2026-07-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-2-版本发布-🚀-2026-07-03',
          'body': '- 新增用量提醒与到期提醒，帮助及时了解权益状态\n- 优化启动关键路径，减少 Windows 启动阶段子进程和权限检查开销\n- 修复系统休眠唤醒后通信通道不可用的问题\n- 修复会话恢复时后端重启竞态、暂停后历史消息丢失的问题\n- 修复切换模式或会话后权限选择器闪现、计划状态残留的问题\n- 修复对话完成后任务列表仍显示运行中、取消后发送卡住的问题\n- 修复 MCP 授权参数兼容性和部分模型参数导致工具不可用的问题\n- 修复企业 Skill 更新后本地内容仍为旧版的问题\n- 修复助理列表、插件安装、云助理历史恢复超时和 PDF 预览乱码问题\n- 修复 Tooltip 无限循环、AgentMail 工具名异常和文件类型识别异常导致的页面错误\n5.2.1 版本发布 🚀（2026-07-02）'
        },
        {
          'version': '5.2.1',
          'title': '5.2.1 版本发布 🚀（2026-07-02）',
          'date': '2026-07-02',
          'dateRaw': '2026-07-02',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-1-版本发布-🚀-2026-07-02',
          'body': '- 优化启动链路，减少启动阶段的等待和资源占用\n- 优化专家导航入口样式，专家与技能入口更清晰\n- 优化技能广场搜索，支持搜索企业自建 Skill\n- 修复首次安装或重装后启动白屏的问题\n- 修复切换任务、会话异常内容和工具提示导致的白屏或无限重渲染问题\n- 修复 ChatInput 输入框在部分场景下触发循环更新的问题\n- 修复腾讯文档上传进度不准确、取消上传后文件仍保留的问题\n- 修复腾讯文档本地导入类型限制和小窗口导入浮窗展示异常\n- 修复大文件预览导致客户端卡死的问题\n- 修复模型配置兜底、企业模型列表与连接器状态刷新异常\n5.2.0 版本发布 🚀（2026-06-30）'
        },
        {
          'version': '5.2.0',
          'title': '5.2.0 版本发布 🚀（2026-06-30）',
          'date': '2026-06-30',
          'dateRaw': '2026-06-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-2-0-版本发布-🚀-2026-06-30',
          'body': '- 新增视频生成模型升级，提升视频生成质量并增强长任务轮询稳定性\n- 优化输入框与模型选择器体验，修复对话流推送时光标跳位问题\n- 优化启动链路，减少重资源预热对启动速度的影响\n- 优化目录权限检查与自动修复逻辑，提升升级和启动稳定性\n- 优化安全中心审计日志搜索与总数展示，批量删除策略更稳妥\n- 修复 Windows 启动慢、RPC 队列饱和导致卡死的问题\n- 修复历史任务切换、会话碎片修复和主机重启后的恢复异常\n- 修复新安装 Skill 被误判为空闲能力、专家包解压后不可执行的问题\n- 修复内容过滤提示拼接异常、登录取消后误弹失败提示的问题\n- 修复模型配置变更未刷新、权限状态错位和自动化返回后草稿丢失的问题\n5.1.7 版本发布 🚀（2026-06-26）'
        },
        {
          'version': '5.1.7',
          'title': '5.1.7 版本发布 🚀（2026-06-26）',
          'date': '2026-06-26',
          'dateRaw': '2026-06-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-7-版本发布-🚀-2026-06-26',
          'body': '- 修复设计创意模式画布刷新按钮点了没反应的问题\n- 修复分享页面在 Mac 微信小程序里打开白屏的问题\n- 修复确认按钮被小猫挡住点不到的问题\n- 修复小猫头像点击区域过大容易误触的问题\n- 修复部分场景下技能卡片渲染导致页面崩溃的问题\n- 修复升级新版本后客户端没有自动打开的问题\n- 修复 Windows 用户名含中文时安装后无法打开的问题\n- 修复 Web 端点击\'技能\'再点击\'专家\'会跳到登录页的问题\n- 修复开启文件版本功能后历史消息丢失的问题\n- 修复首页偶现英文占位符的问题\n5.1.6 版本发布 🚀（2026-06-23）'
        },
        {
          'version': '5.1.6',
          'title': '5.1.6 版本发布 🚀（2026-06-23）',
          'date': '2026-06-23',
          'dateRaw': '2026-06-23',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-6-版本发布-🚀-2026-06-23',
          'body': '- 新增财报数据（finance-data）内置技能，原插件市场对应插件已下架并自动清理已安装条目\n- 新增 Token Plan 可选模型，提供更多按需配额选择\n- 优化项目任务切换性能，网盘 prefetch 与 ACP 连接并发执行，显著降低切换等待\n- 修复 macOS 检查更新重启后无法自动拉起新版本的问题\n- 修复读文件工具在异常入参下渲染崩溃的问题\n- 修复本地网络失败误报为 502 的问题，改为返回明确的客户端网络错误码\n- 修复推荐技能切换分类 Tab 无反应的问题\n5.1.5 版本发布 🚀（2026-06-21）'
        },
        {
          'version': '5.1.5',
          'title': '5.1.5 版本发布 🚀（2026-06-21）',
          'date': '2026-06-21',
          'dateRaw': '2026-06-21',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-5-版本发布-🚀-2026-06-21',
          'body': '- 优化产物面板展示，最多显示 6 条记录，超出部分通过「查看全部」入口访问\n- 优化目录权限检查和修复逻辑，提升启动稳定性\n- 修复页面顶部栏偶现 React 渲染崩溃的问题\n- 修复 Web 端工具异常对象导致页面白屏的问题\n- 修复命令工具脏数据导致渲染崩溃的问题\n- 修复云端项目任务恢复失败的问题\n- 修复重启后连接器无法判断授权状态导致无法连接的问题\n- 修复连接器误恢复未曾连接过的服务的问题\n- 修复续费横幅在非目标账号下误展示的问题\n- 修复腾讯文档企业版授权重复提交及开通后不跳转的问题\n- 修复配置回包慢导致品牌标识缺失的问题\n5.1.4 版本发布 🚀（2026-06-18）'
        },
        {
          'version': '5.1.4',
          'title': '5.1.4 版本发布 🚀（2026-06-18）',
          'date': '2026-06-18',
          'dateRaw': '2026-06-18',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-4-版本发布-🚀-2026-06-18',
          'body': '- 修复对话结束后加载动画不消失、左侧面板持续 spinning 卡住的问题\n- 修复粘贴内容显示不全、重试失效与表格被遮挡的问题\n- 修复打开历史任务时偶现空白页面的问题\n- 修复 macOS 检查更新后无法自动拉起新版本的问题\n- 修复 token 类连接器重配入口无法正常使用的问题\n5.1.3 版本发布 🚀（2026-06-17）'
        },
        {
          'version': '5.1.3',
          'title': '5.1.3 版本发布 🚀（2026-06-17）',
          'date': '2026-06-17',
          'dateRaw': '2026-06-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-3-版本发布-🚀-2026-06-17',
          'body': '- 修复 Windows 中文用户名环境下自修复程序兼容性问题\n5.1.2 版本发布 🚀（2026-06-17）'
        },
        {
          'version': '5.1.2',
          'title': '5.1.2 版本发布 🚀（2026-06-17）',
          'date': '2026-06-17',
          'dateRaw': '2026-06-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-2-版本发布-🚀-2026-06-17',
          'body': '- 修复权限确认弹窗在历史任务恢复时反复弹出的问题\n- 修复企业自建专家召唤后退回编辑模式且无法重新选中的问题\n- 修复专家团任务未完成时异常终止且无法继续的问题\n- 修复专家团任务异常终止后会话仍持续输出的问题\n- 修复 Mac 重新支付时跳转 404 页面的问题\n- 修复设置个性化风格后新建任务输入框不可见的问题\n5.1.1 版本发布 🚀（2026-06-14）'
        },
        {
          'version': '5.1.1',
          'title': '5.1.1 版本发布 🚀（2026-06-14）',
          'date': '2026-06-14',
          'dateRaw': '2026-06-14',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-1-版本发布-🚀-2026-06-14',
          'body': '- 新增微信支付内置插件，支持在对话中直接发起 AI 支付，完成下单全流程\n- 新增 Token Plan 模型配置选项\n- 新增对话中切换模型时显示分隔线提示，清晰标记模型切换节点\n- 新增助理对话每轮自动注入当前时间，提升时效性感知\n- 新增首页最佳实践案例关闭按钮，支持持久化记忆用户偏好\n- 新增 models.json 配置热更新，修改自定义模型配置后无需重启即可生效\n- 新增腾讯文档面板「在浏览器中打开」功能，对旗舰/专享版用户开放\n- 新增私有化飞书 OpenAPI 自定义 Host 支持\n- 新增沙箱支持在安全策略下直接打开浏览器\n- 新增 Windows 低版本系统（缺失 ConPTY API）沙箱兼容支持\n- 优化专家团任务历史批处理，减少冗余 clone，提升专家团运行性能\n- 优化桌面端启动流程，新增数据库预检与修复阶段的启动画面，提升异常恢复体验\n- 优化沙箱安全机制，对 binaries 目录加写保护，阻断潜在逃逸攻击链\n- 优化侧边栏展开逻辑，由钉住状态统一控制，交互更一致\n- 优化我的文件加载性能，修复大数据量时页面卡死问题\n- 优化数据库 WAL 轻量修复与静默丢失检测，提升启动健壮性\n- 优化连接器排序，未连接连接器自动补位排至末尾\n- 修复召唤专家未按最新更新时间加载专家包的问题\n- 修复连接器工具间歇性报 NOT CONNECTED 的问题\n- 修复完全访问权限会话仍走沙箱执行的问题\n- 修复改名操作超时后误报内容审核失败的问题\n- 修复对话模式（Chat/Craft）切换后工具栏按钮消失的问题\n- 修复复制多行文本粘贴到输入框时被拆分成多条消息的问题\n- 修复历史回放中未完成的工具调用未正确标记为已取消的问题\n- 修复技能搜索过滤失效、输入关键词后结果反而增多的问题\n- 修复技能更新后菜单红点/可更新标识不消失的问题\n- 修复专家中心来源 Tab 偶现时隐时现的问题\n- 修复插件专家提示词占位符丢失的问题\n- 修复创建技能时默认提示词重复追加的问题\n- 修复模型切换后再切换会话时模型记忆丢失的问题\n- 修复项目管理员打开任务邀请链接看不到申请页的问题\n- 修复灵感页「做同款」技能安装通道错配导致卡死的问题\n- 修复微信分享中间页被 Nginx 配置误伤导致异常的问题\n- 修复 Web 端产物下载与生成失败的问题\n- 修复会话切换时产物缓存被污染导致历史产物丢失的问题\n- 修复后台任务消息到达时强制切换会话页面的问题\n- 修复压缩续聊时重复注入 user-context 的问题\n- 修复 Teams 工作空间文件树无法加载和展开的问题\n- 修复自动化任务专家召唤链路异常的问题\n- 修复 sandbox-cli Rust panic 导致命令执行 IPC 调用卡住的问题\n- 修复 Windows 配置自定义模型找不到配置文件的问题\n- 修复 Windows 启动时因残留进程锁住数据库文件导致无法启动的问题\n- 修复切换会话后 pending 消息跨会话显示的问题\n- 修复崩溃恢复后会话卡在非终态无法操作的问题\n- 修复连接器菜单层级遮挡的问题\n- 修复连接器授权状态与开启状态展示不一致的问题\n5.1.0 版本发布 🚀(2026-06-13)'
        },
        {
          'version': '5.1.0',
          'title': '5.1.0 版本发布 🚀(2026-06-13)',
          'date': '2026-06-13',
          'dateRaw': '2026-06-13',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-1-0-版本发布-🚀-2026-06-13',
          'body': '- 新增对话消息删除能力，支持多选删除并可分享按消息粒度选择关键片段\n- 新增 present_files 工具，统一文件产物展示入口并联动右侧预览\n- 新增页面 deeplink 直达导航，支持外部链接一键打开任务/项目/待办\n- 新增个人/项目网盘扩容能力，附件容量上限大幅提升\n- 新增腾讯网盘知识库子功能开关，云端知识来源可精细管理\n- 新增 Teams 项目自建专家与子助理 @mention 联想搜索\n- 新增 Token Plan 模型配置，按需切换不同计费策略\n- 新增对话中切换模型自动插入提示分隔线，模型轨迹更清晰\n- 新增助理对话每轮注入当前时间，时间感知更准确\n- 新增 models.json 文件热更新，无需重启即可生效\n- 新增沙箱拦截卡片显示拦截原因与黑白名单可视化，安全策略更透明\n- 新增安全中心系统级工具开关、沙箱总开关审计与目录写保护\n- 新增工具循环检测黑名单，识别异常工具调用\n- 新增 Windows 实验功能开关与 ProjFS 检测\n- 新增 macOS Bundle ID 迁移更新器，老版本可平滑升级\n- 新增 QQ 机器人渠道绑定与微信支付插件随会话自动注入\n- 新增企业自建 Skill / 插件市场端到端能力，支持自定义图标与一键安装\n- 优化对话流工具样式与命令执行卡片展开滚动体验\n- 优化首页、连接器卡片与 topbar 视觉细节\n- 优化我的文件大数据量下的加载与滚动性能\n- 优化专家团历史回放与会话切换流畅度，减少长任务卡顿\n- 优化助理网盘历史预取与文件下载链路\n- 优化技能市场推荐排序，按 featured 智能排序\n- 优化数据库 WAL 写入策略，新增静默丢失检测与启动被动检查点\n- 修复历史回放中未完成的工具调用与询问被错误判定为执行中\n- 修复对话模式恢复异常导致再次进入会话错乱的问题\n- 修复改名超时被误报为内容审核失败的问题\n- 修复完全访问权限会话仍走沙箱执行的问题\n- 修复账号切换后产品开关、模型列表与乐享知识库未同步刷新\n- 修复 Web 端模型列表使用过时缓存数据的问题\n- 修复后台任务消息到达时强制切换会话页面的问题\n- 修复会话切换时产物缓存被污染导致历史会话产物丢失\n- 修复 Teams 工作空间文件树无法加载、待办处理人切换异常及任务标题创建后不更新\n- 修复 Teams 任务结束后状态卡死、协作弹窗对协作者展示邀请入口\n- 修复 Teams 任务转交后页面白屏、转交待办不展示及用户名遮挡\n- 修复项目资产选择弹窗双层闪烁与项目管理员看不到任务申请页\n- 修复连接器菜单层级遮挡、详情弹框连接异常与重启后批量失败提示\n- 修复 MCP App WebView 后台保活与 ardot 画布刷新隔离\n- 修复 Windows 配置自定义模型找不到 .model.json 的问题\n- 修复 Windows CLI 连接器 PATH 注入与 Win11 spawn ENAMETOOLONG\n- 修复 Windows 下 file:// URI 解析错误导致的腾讯文档预览空白\n- 修复模型切换后切换会话再切回模型记忆丢失\n- 修复自定义模型推理强度配置、API key 失效误触重新登录及错误 banner 常驻\n- 修复自动化任务专家召唤、沙箱权限选择、连接器跳转、工作空间搜索等多项问题\n- 修复自动化慢执行、思考层级回环与自动化面板无法打开\n- 修复专家中心召唤回原会话、最近使用专家被隐藏及官方专家误标自定义\n- 修复企业自建 Skill 安装后图标退化、卸载后残留及禁用 Skill 仍可见\n- 修复腾讯文档导入文件夹 toast 重叠、0B/超大文件后无法重试\n- 修复 Claw 飞书 WebSocket 多模态入站、微信 ClawBot 长回复截断、状态与流式不稳定\n- 修复子助理回复气泡显示、产物预览/下载与会话切换问题\n- 修复同事助理新建会话误打断与 Markdown 链接静默无响应\n- 修复云助理实例异常抛错阻断后续流程及默认 session 删除失败\n- 修复切换会话时 pending 消息跨会话显示、错误提示一闪而过\n- 修复输入框旧提示词重复追加、长文本卡顿、多行被拆分为多个消息\n- 修复输入框高度被锁死及切换页面后不复位\n- 修复增强提示词跨会话泄漏问题\n- 修复上下文压缩恢复异常与续聊重复注入用户上下文\n- 修复消息队列新项被底部输入框遮挡及末轮按钮缺失\n- 修复 Bash 工具卡片标题与外层说明重复显示\n- 修复 send_message 工具详情面板未渲染 Markdown\n- 修复 plan 模式自动进入时 UI 未同步切换及代理调用跳过审批\n- 修复重启升级后置顶任务数量减少、任务列表数量变化和老任务丢失\n- 修复删除当前任务后页面空白、崩溃恢复后会话卡在非终态\n- 修复 sidecar 重建后陈旧取消信号导致任务状态不同步\n- 修复历史记录因 isPlayground 旧值覆盖丢失\n- 修复 renderer 崩溃后导致的访问异常\n- 修复沙箱安全开关联动权限模式、安全中心系统授权切回应用后状态不刷新\n- 修复 ~/.workbuddy/binaries 写保护缺失导致的沙箱逃逸攻击链\n- 修复沙箱通配符 * 跨目录边界绕过安全规则\n- 修复 sandbox-cli Rust panic 导致 IPC 调用卡住\n- 修复签到气泡日期判断与海外版多处链接/文案适配\n5.0.5 版本发布 🚀（2026-06-12）'
        },
        {
          'version': '5.0.5',
          'title': '5.0.5 版本发布 🚀（2026-06-12）',
          'date': '2026-06-12',
          'dateRaw': '2026-06-12',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-0-5-版本发布-🚀-2026-06-12',
          'body': '- 修复模型切换后再切换会话时，模型选择与记忆状态可能丢失的问题\n5.0.4 版本发布 🚀（2026-06-11）'
        },
        {
          'version': '5.0.4',
          'title': '5.0.4 版本发布 🚀（2026-06-11）',
          'date': '2026-06-11',
          'dateRaw': '2026-06-11',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-0-4-版本发布-🚀-2026-06-11',
          'body': '- 优化本地数据库异常检测与恢复提示，提升异常恢复稳定性\n- 优化会话切换与历史加载稳定性，减少卡死、点不动和历史记录不加载的问题\n- 优化自动化过程中的连接器配置下载，减少重复下载和额外流量消耗\n- 修复首次启动偶现明显卡顿的问题\n- 修复数据库异常恢复后部分任务列表或置顶任务访问不稳定的问题\n- 修复专家团输出长内容时可能截断、错乱或工具状态异常的问题\n- 修复专家团成员配置异常导致启动黑屏的问题\n- 修复错误提示一闪而过的问题，便于完整查看错误信息\n5.0.3 版本发布 🚀（2026-06-08）'
        },
        {
          'version': '5.0.3',
          'title': '5.0.3 版本发布 🚀（2026-06-08）',
          'date': '2026-06-08',
          'dateRaw': '2026-06-08',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-0-3-版本发布-🚀-2026-06-08',
          'body': '- 新增腾讯文档个人版导入能力，支持导入后自动刷新文档列表，导入 0B/超大文件后可正常重试\n- 新增成长计划入口，用户可正常参与和查看成长计划内容\n- 新增项目列表空态引导文案，快速创建第一个项目\n- 优化专家团子 agent 查看页性能，降低页面加载耗时\n- 优化自定义模型 API key 失效后的登录提示，避免误触重新登录及错误 banner 常驻\n- 修复会话结束后输入框偶现无法输入、历史中断工具卡片卡死的问题\n- 修复会话切换时过长任务导致的卡顿问题\n- 修复长时间无工具调用场景下回答未正确保留下来的问题\n- 修复 connector 卡死 error 状态后无法被新 token 救回的问题\n- 修复腾讯文档面板企业版徽标显示规则，仅旗舰/专享版账号展示\n- 修复腾讯文档面板副标题文案，按账号版本分流展示\n- 修复腾讯文档个人版导入弹框打开瞬间白闪的问题\n- 修复 Windows 下 file:// URI 解析错误导致的腾讯文档预览空白的问题\n- 修复专家团搜索无结果时空态展示异常的问题\n5.0.2 版本发布 🚀(2026-06-05)'
        },
        {
          'version': '5.0.2',
          'title': '5.0.2 版本发布 🚀(2026-06-05)',
          'date': '2026-06-05',
          'dateRaw': '2026-06-05',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-0-2-版本发布-🚀-2026-06-05',
          'body': '- 新增沙箱安全开关设置，支持快速调整文件读写拦截策略\n- 新增会话列表空间分组展示，去除分组数字让列表更聚焦\n- 新增自动化目录展示文案优化与登录失效弹窗视觉升级\n- 优化 MCP 服务管理面板的打开性能\n- 优化专家团子 agent 查看页性能\n- 优化 transcript / replay 写入策略，提升历史回放稳定性\n- 修复 Windows 下 file:// URI 解析错误导致的腾讯文档预览空白\n- 修复腾讯文档上传文件夹超限 toast 与 0B/超大文件导入后无法重试的问题\n- 修复连接器弹层显示异常的问题\n- 修复专家团搜索空态与专家页 UI 走查相关问题\n- 修复个人会话「我的云端网盘」入口及网盘添加到任务的展示\n- 修复数字助理一期多个体验与稳定性问题\n- 修复 DetailPanel 偶现闪烁及多项 UI 走查问题\n- 修复待办详情弹窗中 handoff 来源跳转按钮异常\n- 修复微信 ClawBot 长回复被截断与状态/流式不稳定的问题\n- 修复自动化程序推送小程序缺失模型最终回复结果的问题\n- 修复自动化面板无法打开的问题\n- 修复工作队列重复入队、抢占派发以及团队队列续跑/停止态同步的问题\n- 修复重进运行中任务时对话历史丢失的问题\n- 修复 Teams 项目任务首轮模型回退/切换与消息加载相关问题\n- 修复恢复历史会话时沙箱环境状态丢失的问题\n- 修复未知工具权限请求导致会话挂起的问题\n- 修复账号切换后 loadSession 模型列表不刷新的问题\n- 修复切换任务时上一个任务错误状态未清除的问题\n- 修复个人项目入口对所有用户展示的权限收口问题\n- 修复 cb-chat-ui widget canvas 高度被覆盖的问题\n- 修复增量删除在文件锁定场景下的降级处理\n5.0.0 版本发布 🚀(2026-06-03)'
        },
        {
          'version': '5.0.0',
          'title': '5.0.0 版本发布 🚀(2026-06-03)',
          'date': '2026-06-03',
          'dateRaw': '2026-06-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_5-0-0-版本发布-🚀-2026-06-03',
          'body': '- 新增 Teams 团队协作能力，支持创建项目、邀请成员、任务协同与权限管理\n- 新增项目计划看板，支持待办创建、状态流转和批量操作\n- 新增项目资产库（网盘），支持文件上传、文件夹管理、版本历史与任务内引用\n- 新增项目外部数据源接入，支持定时导入与 Webhook 事件触发\n- 新增项目动态时间线，展示成员操作记录与待办状态变更\n- 新增项目级技能、专家、连接器和指令配置，按角色权限管控编辑能力\n- 新增任务协作对话，支持多成员实时协同、队列派发与排序\n- 新增任务流转能力，支持将任务移交给其他成员继续处理\n- 新增消息中心，支持项目邀请、审批、动态等通知聚合\n- 新增腾讯文档连接器深度集成，支持文件夹导入、搜索、上传进度管理\n- 新增 HTML / 视频 / 图片等多类型产物预览能力\n- 新增助理面板，支持创建和管理自定义助理\n- 新增锁屏远程能力，支持长时间任务在锁屏状态下保持连接\n- 优化 replay session 性能，引入分批写盘与分片让步\n- 优化上下文压缩策略，修复压缩过程中消息错误透传及动画挂起\n- 优化沙箱安全策略，修复授权超时后会话卡住无法停止的问题\n- 优化连接器授权流程，修复飞书 CLI 连接器启动后卡连接中的问题\n- 优化自动化任务体验，修复生效期清空不生效与补跑误显示问题\n- 修复队列派发与 compact 历史链相关的状态同步问题\n- 修复任务完成后误显示「用户已取消」的问题\n- 修复任务标题语言偶现英文及 replay 后无响应的问题\n- 修复切换账号登录后乐享知识库仍为上一账号的问题\n- 修复产物预览视频文件卡死及 HTML 产物源码展示异常的问题\n- 修复上传附件时二进制数据塞入 prompt 及文件 URI 未回写的问题\n- 修复沙箱拦截弹窗在切换任务时未清除的问题\n- 修复深色主题下多处弹窗与面板的样式异常\n- 修复 Windows 窗口最大化时布局不自适应的问题\n4.24.8 版本发布 🚀(2026-06-03)'
        },
        {
          'version': '4.24.8',
          'title': '4.24.8 版本发布 🚀(2026-06-03)',
          'date': '2026-06-03',
          'dateRaw': '2026-06-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-24-8-版本发布-🚀-2026-06-03',
          'body': '- 修复上下文压缩相关异常：偶现自动取消、压缩失败后加载动画一直转、回放出现重复分隔线、压缩后历史漂移或丢失\n- 修复历史会话切换或冷加载时偶现历史消息丢失、只剩最近一条的问题\n- 修复任务停止后偶现卡在等待态、无法真正中止的问题\n- 修复 Windows 沙箱 lightSandbox 写入大量日志的问题\n- 修复沙箱命令在无拦截记录场景下误弹\'重试\'弹窗的问题\n4.24.7 版本发布 🚀(2026-06-01)'
        },
        {
          'version': '4.24.7',
          'title': '4.24.7 版本发布 🚀(2026-06-01)',
          'date': '2026-06-01',
          'dateRaw': '2026-06-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-24-7-版本发布-🚀-2026-06-01',
          'body': '- 修复部分自动化定时任务跑过一次后卡在\'即将开始\'、无法再次触发的问题\n4.24.6 版本发布 🚀(2026-06-01)'
        },
        {
          'version': '4.24.6',
          'title': '4.24.6 版本发布 🚀(2026-06-01)',
          'date': '2026-06-01',
          'dateRaw': '2026-06-01',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-24-6-版本发布-🚀-2026-06-01',
          'body': '- 优化 content_filter 命中后的展示，UI 不再展示被过滤的思考与回答内容，并提供更友好的提示文案\n- 修复 ardot MCP 工具被错误注入到非创意设计模式的问题\n- 修复自动化任务弹窗内技能下拉选项不显示的问题\n- 修复国内版集成指南链接默认跳转英文文档的问题\n4.24.3 版本发布 🚀(2026-05-30)'
        },
        {
          'version': '4.24.3',
          'title': '4.24.3 版本发布 🚀(2026-05-30)',
          'date': '2026-05-30',
          'dateRaw': '2026-05-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-24-3-版本发布-🚀-2026-05-30',
          'body': '- 优化会话列表，隐藏专家团子成员与展开箭头，列表更聚焦\n- 优化 Windows 自定义菜单栏 logo 与侧边栏卡片样式，对齐设计稿\n- 优化分享文件审核失败的错误提示文案\n- 修复用户忽略新版本提示后无法再次手动检查更新的问题\n- 修复部分场景下技能偶现安装失败的问题\n- 修复自定义模型请求参数问题导致可能请求失败\n- 修复输入框工具栏与悬浮问答的层叠错乱、遮挡输出内容的问题\n- 修复界面权限模式与实际进程权限模式不同步的问题\n4.24.2 版本发布 🚀(2026-05-29)'
        },
        {
          'version': '4.24.2',
          'title': '4.24.2 版本发布 🚀(2026-05-29)',
          'date': '2026-05-29',
          'dateRaw': '2026-05-29',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-24-2-版本发布-🚀-2026-05-29',
          'body': '- 新增微信分享、项目邀请页与 OAuth 应用管理\n- 新增侧边栏折叠按钮与置顶/归档/筛选交互\n- 新增输入框成员栏折叠按钮，子 agent 视图头部更紧凑、产物入口跟随输出末尾展示\n- 新增 MITM 代理环境下 HTTPS 信任系统 CA\n- 新增工具调用循环检测黑名单，提升异常工具调用的拦截能力\n- 优化成长计划入口副标题为「领取 Buddy 赚积分」\n- 优化微信 ClawBot 消息支持 Markdown 渲染\n- 优化企业账号不限量积分的显示样式\n- 优化登录页主按钮视觉，统一为黑色\n- 优化技能描述优先级，优先采用 SKILL.md frontmatter 中的值\n- 优化产物分享流程，改为按需上传并补充加载提示\n- 优化自动化任务峰值调度，避免同一时间集中触发造成卡顿\n- 优化自动化会话跳过标题/摘要生成，避免不必要的模型调用\n- 优化启动性能，延迟加载非必要工具\n- 优化欢迎页暗色主题 Logo 与活动入口展示\n- 修复执行中会话取消后状态未收尾、无法再次中止的问题\n- 修复取消后重发消息溯源不准的问题\n- 修复自定义专家团 Lead 头像裂图的问题\n- 修复连接器菜单在视口空间不足时被裁剪的问题\n- 修复 macOS / Linux 僵尸进程清理误杀其他 Electron 应用的问题\n- 修复非 ASCII 路径下自定义模型配置读取失败的问题\n- 修复远端永久下线模型未走自愈降级的问题\n- 修复乐享 MCP 与用户自定义 MCP 冲突的问题\n- 修复 ima 选择文件时无权限文件无法勾选的问题\n- 修复切换专家时草稿丢失及误弹覆盖确认弹窗的问题\n- 修复自动压缩摘要丢失工具调用历史导致模型误判任务被打断的问题\n- 修复自动化任务结果误判与历史回放缺失的问题\n- 修复自动化失败详情与关联会话提示异常的问题\n- 修复乐享看板授权数据上报遗漏的问题\n- 修复分享任务时上传接口错误码未透传、文件名与标题展示异常的问题\n- 修复偶现团队成员停止竞态导致状态卡住的问题\n- 修复暗色主题下置顶位置、欢迎页气球与活动入口点击异常的问题\n- 修复签到弹层标题在窄屏下折行的问题\n- 修复批量创建自定义专家偶现失败及产物缺少专家信息的问题\n- 修复专家团子任务（subagent）卡片在部分场景下展示不完整、团队队列一次性推送所有任务的问题\n- 修复 /clear 后再压缩仍带入旧会话内容的问题\n- 修复 macOS 顶栏折叠态留白与技能/连接器图标布局问题\n- 修复成员栏触发的输入区上移遮挡会话内容的问题\n- 修复沙箱权限切换后被回读覆盖的竞态问题\n- 修复单次自动化沿用旧生效期的问题\n- 修复部分场景下未能扫描到全部本地专家的问题\n4.24.1 版本发布 🚀\n- 优化「我分享的任务」列表，移除分享次数列并修正入口文案\n- 优化自动化任务删除流程，减少不必要的审批确认\n- 优化专家团协作任务调度，降低多子任务并发导致响应变慢或失控的概率\n- 优化沙箱低风险路径识别，减少 Windows 应用安装和诊断目录操作被误拦截\n- 优化文件读取循环检测阈值，降低正常读取大文件时被误中断的概率\n- 修复企业微信开关关闭再开启后，消息推送可能被误拒的问题\n- 修复 macOS 图形界面启动时语言环境为空，导致部分命令或中文内容处理异常的问题\n4.24.0 版本发布 🚀\n- 新增自定义专家管理能力，支持创建、编辑和管理自定义专家，并优化专家中心加载速度\n- 新增 MCP 工具调用进度展示和 Resource 支持，工具运行过程更透明\n- 新增连接器详情页「去试试」入口，连接后可更快发起任务\n- 新增输入框权限模式入口与完全放开确认，权限切换更直观可控\n- 新增问答选择器自定义输入支持，选择和补充信息更灵活\n- 新增工作空间折叠/展开全部操作，提升多工作空间管理效率\n- 新增产物分享至微信和分享链接标题优化，分享后的预览展示更友好\n- 新增文件预览自动刷新能力，产物或网页内容更新后可及时展示\n- 优化 Windows 新建任务速度，并修复启动、黑屏、弹窗和中文乱码等问题\n- 优化连接器与资料库体验，修复资料库预览、连接状态、授权状态和重连异常\n- 优化 Skill / Marketplace 更新与安装链路，修复推荐技能不可见、更新不生效、升级后重复展示等问题\n- 优化自动化任务体验，修复模型选择、一次性任务时间、空白成功态、待回复会话恢复等问题\n- 优化沙箱安全策略，减少正常命令被误拦截，并修复沙箱断连、状态不同步和弹窗误复活问题\n- 优化专家团任务稳定性，修复子会话权限继承、无产物、卡「思考中」、异常结束和队列残留问题\n- 修复长会话、多任务场景下内存占用过高、页面黑屏或渲染进程崩溃的问题\n- 修复任务切换、会话重启和配置切换时消息丢失、状态错乱或任务卡住的问题\n- 修复自定义模型、企业模型及模型选择器相关异常，提升模型配置和切换稳定性\n- 修复自定义专家菜单遮挡、删除引用残留、专家身份不正确和切换专家加载状态异常等问题\n- 修复产物预览与分享相关问题，包括 HTML 产物源码展示、大文件错误提示、Windows 路径打开异常等\n4.22.16 版本发布 🚀\n- 修复部分场景下自定义模型可能请求失败的问题\n- 修复部分场景下内置技能加载失败导致技能不可用的问题\n4.22.15 版本发布 🚀\n- 新增专家 / 专家团可见性配置，支持按内外网环境控制展示范围\n- 新增 MCP 会话安装信任引导，安装后可前往 MCP 页面完成信任\n- 新增 MCP 连接器请求头能力，默认携带 WorkBuddy User-Agent，并支持静态请求头配置\n- 新增套件 MCP 来源标识，卸载套件或移除市场时自动清理关联 MCP 和授权\n- 新增 HTML 产物分享能力，支持将产物便捷分享至微信\n- 优化对话执行进度展示，细化工具运行阶段和加载状态文案\n- 优化插件与 Skill 加载逻辑，提升切换场景、重启后的生效稳定性\n- 优化上下文压缩和历史回放策略，减少反复压缩、摘要泄漏和会话卡住\n- 优化任务标题语言生成，降低任务名偶现英文的情况\n- 修复会话交互结束后任务状态未及时刷新为终态的问题\n- 修复长任务切换时 UI 展示错乱、历史消息错序或丢失的问题\n- 修复上下文压缩后对话无响应、400 报错和工作目录读取异常等问题\n- 修复 Claw 历史加载白屏、会话乱码和回答闪烁的问题\n- 修复任务异常停止后继续发送无响应、队列消息未正常发出的问题\n- 修复自定义模型处理图片内容时报 400 的问题\n- 修复 HTML 分享时本地路径无权限导致分享失败的问题\n- 修复 MCP 单个工具禁用状态不生效的问题\n- 修复报错弹窗缺少当前版本号的问题\n- 修复自动化任务列表排序异常的问题\n- 修复外部协议链接偶发错误唤起 WorkBuddy 的问题\n4.22.14 版本发布 🚀\n- 新增产物分享至微信能力，可在产物预览面板生成二维码，使用微信扫码即可查看分享内容\n4.22.12 版本发布 🚀\n- 新增设置面板网络诊断功能，登录失败时可快速排查网络问题\n- 新增首页连接器卡片接入腾讯会议与企业微信文档\n- 新增连接器市场版本适配能力，自动匹配客户端最低版本要求\n- 新增自动化任务列表模式及部分更新能力\n- 新增对话内容 HTML 分享能力\n- 优化专家团调度能力，支持 Auto 路由与专家身份自动注入\n- 优化专家团汇总展示子成员制品，无需逐个查看\n- 优化复制消息时自动过滤思考过程内容\n- 优化连接器快速开关时的重连稳定性\n- 优化历史会话加载速度\n- 优化召唤专家创建任务的响应速度\n- 修复对话内容整段重复输出的问题\n- 修复流式回复内容重复拼接的问题\n- 修复上下文主动压缩后对话显示异常的问题\n- 修复上下文压缩失败或偶现卡住无响应的问题\n- 修复压缩消息泄漏和指示器卡住的问题\n- 修复关闭再打开记忆开关导致记忆丢失的问题\n- 修复任务内搜索点击上下跳转不切换的问题\n- 修复对话搜索偶现报错的问题\n- 修复 ask 模式对话后自动切换为 craft 的问题\n- 修复点击大图片导致应用闪退的问题\n- 修复专家团 subagent 注册失败的问题\n- 修复历史任务中专家/专家团标签重启后丢失的问题\n- 修复专家团会话完成但待办任务未执行的问题\n- 修复终止任务后历史会话状态显示为\'已完成\'的问题\n- 修复任务停止后队列中消息无法发送的问题\n- 修复 Windows 快捷方式不兼容中文目录的问题\n- 修复 macOS Big Sur 版本无法使用的问题\n- 修复网络中断后会话无法恢复发送的问题\n- 修复会话空闲超时导致无响应的问题\n- 修复自动化任务工作空间绑定到错误目录的问题\n- 修复自动化任务向小程序推送完成时消息不全的问题\n- 修复深色模式下权限弹窗样式异常的问题\n- 修复 Windows 历史任务工作空间目录命名格式异常的问题\n- 修复任务归档后最近问答时间变为归档时间的问题\n- 修复任务状态显示不正确的问题\n- 修复 60 天前的历史任务打开后对话内容不展示的问题\n- 修复 QQ 机器人小程序回传开关状态提示异常的问题\n- 修复首页显示异常的问题\n- 修复高频流式输出偶现崩溃的问题\n- 修复大文件列表导致会话卡住不动的问题\n- 修复专家团压缩后任务收口图标闪烁与滚动回弹的问题\n- 修复内置插件市场数据不同步的问题\n- 修复上下文压缩后任务恢复被跳过的问题\n- 修复切换任务后场景胶囊插件未生效的问题\n4.22.11 版本发布 🚀\n- 修复上下文紧张时提问无响应需手动继续的问题\n- 修复上下文压缩失败后会话卡住的问题\n- 修复危险命令确认时切换 Tab 任务异常结束的问题\n- 修复模型切换不生效的问题\n- 修复企业模型列表无法正常显示的问题\n- 修复 Windows 任务权限模式导致回复中断的问题\n4.22.10 版本发布 🚀\n- 新增专家/专家团分类展示，支持按类别筛选并新增 OPC 分类\n- 新增 Windows 网络代理配置支持，解决代理环境下无法使用的问题\n- 新增默认开启操作系统代理开关\n- 新增成长计划\'去完成\'按钮可跳转到客户端对应功能界面\n- 优化腾讯元宝搜索展示区域，简化为单行灰色文字\n- 修复部分专家身份确认异常的问题\n- 修复 MCP 工具向安装目录写 logs 导致 Windows 无法更新的问题\n- 修复 Mac 上出现提问时应用无响应需重启才能查看的问题\n- 修复切换专家后 AI 未正确识别当前专家身份的问题\n- 修复用户主动取消任务后消息未正确展示的问题\n- 修复上下文压缩后历史任务记录丢失的问题\n- 修复 plugin 中 command 无法使用的问题\n4.22.7 版本发布 🚀\n- 新增系统代理自动检测并默认启用，解决代理环境下登录失败的问题\n- 修复 Windows 环境下 PowerShell 执行命令时弹出控制台窗口的问题\n- 修复 Windows 包内终端原生依赖缺失导致命令执行异常的问题\n4.22.5 版本发布 🚀\n- 修复切换专家后对话中 AI 未正确识别当前专家的问题\n- 修复等待用户确认时任务状态图标显示异常的问题\n4.22.4 版本发布 🚀\n- 新增自定义模型支持 DeepSeek V4 与 Kimi K2.6\n- 新增对话内搜索功能，快速定位历史消息内容\n- 新增系统代理配置支持，自动读取系统网络代理设置\n- 新增 macOS 错包检测与 ARM64 引导安装\n- 新增连接器内嵌二维码授权弹窗，统一授权流程\n- 新增 CLI 连接器按需托管 Node.js 运行时与首次连接进度提示\n- 新增 CBC deeplink Skill 安装支持\n- 新增实验性 computer-use 工具（仅 macOS）\n- 新增空流错误自动识别与重试机制\n- 优化工作空间/任务目录命名为日期+序号格式\n- 优化设置默认工作空间存储路径\n- 优化探索面板调整至连接器上方\n- 优化专家团标志改为 Beta，成员展示「姓名·职称」\n- 优化技能搜索结果按 tab 分组展示\n- 优化 Skill 工具描述截断策略与批量操作交互\n- 优化长对话自动压缩摘要质量，避免生成退化摘要\n- 优化新会话无历史时隐藏 /compact 和 /summarize 命令\n- 优化自动化任务调度频率面板样式\n- 优化元宝搜索引流位展示时机\n- 优化 Claw 错误消息处理和展示\n- 修复自定义模型配置加载失败及与内置模型 ID 冲突不显示的问题\n- 修复自定义模型请求残留 Anthropic 风格字段导致第三方接口报错的问题\n- 修复自定义模型不支持图片时消息格式异常的问题\n- 修复剪贴板截图发送后模型无法识别图片的问题\n- 修复 Connector OAuth 授权失败、死循环及误提示的问题\n- 修复腾讯文档免登预览、授权超时及 webview 导航相关问题\n- 修复腾讯文档添加到任务后页面空白、tab 删除失败等问题\n- 修复企微 AI Bot 不能显示 Markdown 表格的问题\n- 修复 Claw 取消长耗时工具调用后重发消息会话挂死的问题\n- 修复对话切换消息丢失和状态异常的问题\n- 修复自动压缩打断消息或失败后对话卡住的问题\n- 修复 Markdown 渲染在特定输入下触发回溯导致页面卡顿的问题\n- 修复历史迁移时偶现重复迁移覆盖已有会话的问题\n- 修复置顶任务无法点击选中/切换的问题\n- 修复探索 Tab 偶现消失的问题\n- 修复重启后新建任务工作区选项丢失的问题\n- 修复 HTML 预览页签空白的问题\n- 修复 MCP 相关问题（OAuth token 404、type 字段配错、SSE 协议不可用等）\n- 修复群消息未检查 @mention 就自动回复的问题\n- 修复 QQBot 网关接口调用限频的问题\n- 修复空心跳帧导致 SSE 流提前关闭的问题\n- 修复 DeepSeek/Kimi reasoning_content 历史回传兼容性问题\n- 修复企业模型在模型列表中显示位置异常的问题\n- 修复 Windows 旧版本启动失败及 PowerShell 弹窗的问题\n- 修复 Windows 小窗口下欢迎页 Logo 与活动卡片被裁切的问题\n- 修复 Windows sidecar 进程崩溃后控制管道未恢复的问题\n- 修复套件市场 hooks 内容无法显示的问题\n- 修复套件 skill 嵌套目录结构无法扫描的问题\n- 修复内置市场未使用最新数据源及更新逻辑异常的问题\n- 修复插件详情页数据解析与老版不一致的问题\n- 修复自动化任务历史显示内部错误信息的问题\n- 修复未安装元宝时点击\'查看更多\'不跳转下载页的问题\n- 修复专家团任务被清理 session 的问题\n- 修复升级后首次启动 splash 无谓弹出及进度条异常的问题\n- 修复小程序入口不显示的问题\n4.21.0 版本发布 🚀(2026-04-28)'
        },
        {
          'version': '4.21.0',
          'title': '4.21.0 版本发布 🚀(2026-04-28)',
          'date': '2026-04-28',
          'dateRaw': '2026-04-28',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-21-0-版本发布-🚀-2026-04-28',
          'body': '- 新增腾讯文档资料库功能，支持在WorkBuddy里直接使用腾讯文档\n- 新增一键添加“腾讯文档”到任务，发起 AI 智能对话\n- 新增产物文件一键上传到腾讯文档云端\n- 新增视频 / 图片生成自动添加水印能力\n- 新增搜索结果识别元宝 Provider 并展示品牌标识\n- 新增 PDF / CSV 文件预览能力\n- 新增 Connector 代理 DNS Rebinding 防护与 Bearer 强校验\n- 优化对话消息折叠逻辑，支持分段折叠\n- 优化新会话无历史时隐藏 /compact、/summarize 命令\n- 优化 Skill 批量操作支持点击整个卡片切换选中\n- 优化自动化任务调度频率面板样式\n- 优化活动 banner 支持点击切换模型\n- 修复重启后产物列表丢失的问题\n- 修复重启升级按钮点击不生效的问题\n- 修复检查更新已是最新提示周期性弹出的问题\n- 修复历史会话迁移时偶现重复迁移覆盖已有会话的问题\n- 修复会话切换后消息顺序错乱、消息丢失或状态异常的问题\n- 修复账号切换时 Claw 会话被永久销毁的问题\n- 修复 Claw 会话超限导致 conversation.creating.timeout 的问题\n- 修复 Claw 复用 session 时 IM 消息不自动切换 tab 的问题\n- 修复 Claw 上下文压缩摘要内容泄露到 IM 回复的问题\n- 修复企微 Claw 长轮询稳定性及客户端偶现静默退出的问题\n- 修复从 Claw 取消长耗时工具调用后重发消息会话挂死的问题\n- 修复召唤专家后 AI 不认为自己是专家的问题\n- 修复设置页文案未根据开关动态显示 Claw / 助手名称的问题\n- 修复制品网页预览串台的问题\n- 修复自定义模型相关问题（与内置模型 ID 冲突不显示、企业客户加载匹配、auth 信息透传、gzip 压缩跳过逻辑）\n- 修复云托管模式下云端下发 agents 覆盖内置及 cli agent 缺失模型的问题\n- 修复 SSE 空心跳帧导致流提前关闭的问题\n- 修复 compact 异常后会话状态未恢复的问题\n- 修复 deepseek v4+ 思考模式历史回传兼容性问题\n- 修复自定义 MCP 服务器 SSE 协议不可用的问题\n- 修复 mcp.json type 字段配错导致连接失败的问题\n- 修复套件 skill 嵌套目录结构无法扫描的问题\n- 修复内置市场未使用最新数据源的问题\n- 修复插件详情页数据解析与老版不一致的问题\n- 修复发送大图未压缩与省略提示异常的问题\n- 修复输入 / 触发 React error #31 的问题\n- 修复未安装元宝时点击\'查看更多\'不跳转下载页的问题\n- 修复自动化任务历史显示内部错误信息的问题\n- 修复生产包右键出现\'检查元素\'菜单的问题\n- 修复 Windows 小窗口下欢迎页 Logo 与活动卡片被裁切的问题\n- 修复 Windows 子进程 cmd 黑窗闪烁的问题\n4.10.4 版本发布 🚀(2026-04-24)'
        },
        {
          'version': '4.10.4',
          'title': '4.10.4 版本发布 🚀(2026-04-24)',
          'date': '2026-04-24',
          'dateRaw': '2026-04-24',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-10-4-版本发布-🚀-2026-04-24',
          'body': '- 新增签到展示优化和签到活动下线提醒\n- 新增模型选择器远端 tags 视觉徽章支持\n- 优化 Windows 更新服务安装类型检测逻辑\n- 修复 Windows 安装在 Inno→NSIS 迁移下的兼容性问题\n- 修复检查更新弹窗周期性重复弹出的问题\n- 修复会话历史索引损坏导致无法加载的问题\n4.10.3 版本发布 🚀\n- 优化长对话场景下的消息压缩策略，提升对话稳定性\n- 增加模型列表加载稳定性\n4.10.2 版本发布 🚀(2026-04-20)'
        },
        {
          'version': '4.10.2',
          'title': '4.10.2 版本发布 🚀(2026-04-20)',
          'date': '2026-04-20',
          'dateRaw': '2026-04-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-10-2-版本发布-🚀-2026-04-20',
          'body': '- 优化排队界面\n- 优化 Skill Marketplace 版本更新速度\n- 修复 Windows 屏幕闪动的问题\n- 修复飞书 webhook 签名校验误拦截及老用户无安全配置兼容的问题\n- 修复自动化任务相对时间显示异常及单次任务执行完成后被重复执行的问题\n4.10.1 版本发布 🚀(2026-04-16)'
        },
        {
          'version': '4.10.1',
          'title': '4.10.1 版本发布 🚀(2026-04-16)',
          'date': '2026-04-16',
          'dateRaw': '2026-04-16',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-10-1-版本发布-🚀-2026-04-16',
          'body': '- 新增自定义模型支持跳过 /chat/completions 协议的配置选项\n- 优化小程序二维码引导文案\n- 修复 IOA 环境小程序弹窗显示问题\n4.10.0 版本发布 🚀\n- 优化左侧导航栏样式\n- 优化 read_me 工具展示为简洁 UI\n- 优化 Widget 卡片加载体验和高度控制\n- 提升 Extension Host 崩溃恢复健壮性\n- 修复 Windows 更新重启按钮点击无响应的问题\n- 修复 Windows 检查更新状态同步及版本检测显示异常的问题\n- 修复 Windows 首次启动侧边栏黑屏的问题\n- 修复 Windows 打开日志文件夹时 zip stream 卡死及 EPERM 问题\n- 修复 Mac 检查更新进度卡 0% 的问题\n- 修复 macOS 目录新建能力异常的问题\n- 修复 macOS 路径大小写不敏感导致产物重复注册的问题\n- 修复 MCP 开关快速切换导致 JSON 解析失败的问题\n- 修复连接器功能开关抖动导致连接器 tag 闪现消失的问题\n- 修复连接器关闭 OAuth 网页后无法重新触发 OAuth 的问题\n- 修复产物预览 docx/pdf 等二进制文件显示乱码的问题\n- 修复产物预览在窄屏下内容截断和左侧空白不可滚动的问题\n- 修复产物列表重复显示及打开系统应用失败的问题\n- 修复输入框 IME 输入后 Backspace 无法删除字符的问题\n- 修复欢迎页 mode 选择切换页面后被重置的问题\n- 修复模型选择变更未同步到当前会话的问题\n- 修复专家选择后切换会话/tab 时专家信息污染的问题\n- 修复多任务场景下清除专家时影响其他 session 的问题\n- 修复点击专家 tab 导致整个页面刷新的问题\n- 修复 WebFetch 工具在反爬站点抓取失败及浏览器模式超时挂起的问题\n- 修复字体缩放不随系统分辨率调整的问题\n- 修复 PowerShell 环境下 cmd 命令路径解析异常的问题\n- 修复 widget 高度收敛与 sandbox 渲染裁切问题\n- 修复 widget 生产环境 iframe 白屏的问题\n- 修复 Trusted Types 导致 widget iframe bootstrap 脚本加载失败的问题\n- 修复新建对话创建多个临时目录的问题\n- 修复切换会话后 MetaFold stats 展示不一致的问题\n4.9.6 版本发布 🚀\n- 修复 Windows 托盘隐藏窗口后从菜单栏启动无响应\n- 字体大小调整优化\n- 增强稳定性\n4.9.3 版本发布 🚀\n- 修复 PowerShell 环境下 cmd 命令路径解析异常\n- 修复工具执行完成后权限状态残留导致消息丢失\n4.9.2 版本发布 🚀\n- 新增 Skills 推荐模块分类标签筛选功能\n- 新增任务/工作空间/已归档任务删除操作\n- 新增登录手机号透出展示\n- 优化会话区域制品排序逻辑\n- 优化全部文件功能交互\n- 优化工作空间文件 Hover 状态展示\n- 优化 Claw 对话顶栏新增设置按钮\n- 优化发送停止按钮样式\n- 优化连接器配置改为用户级别，切换账号后需重新配置\n- 优化新建任务窗口提示逻辑\n- 优化输入框交互细节\n- 优化简洁模式保证最后一条消息的展示\n- 优化对话框滚动条样式\n- 修复企业微信 Bot 长链接注册失败的问题\n- 修复套件卸载慢及反复卸载内存泄露的问题\n- 修复重新安装版本后连接器消失的问题\n- 修复添加插件市场成功但不展示的问题\n- 修复 QQ Bot 高危指令兜底回复未生效的问题\n- 修复顶部标题栏中英文混杂的问题\n- 修复 Skills 卡片描述截断后 Hover 未显示完整内容的问题\n- 修复 Skills 详情页 yaml 头展示缺失的问题\n- 修复 Skill 更新提示重复出现的问题\n- 修复 Claw 窗口顶部导航栏无法拖拽的问题\n- 修复 MCP 连接界面排查问题跳转链接错误的问题\n- 修复 execute command 工具未展示 explanation 的问题\n- 修复下载目录异常文件的问题\n4.9.1 版本发布 🚀\n- 新增系统托盘功能，最小化后常驻托盘，快速唤起 WorkBuddy\n- 新增微信小程序扫码登录功能\n- 新增 IM 文本审批功能，支持在企微/微信等渠道通过文字回复批准高危命令\n- 新增 macOS 系统权限管理面板，集中管理应用权限\n- 新增自定义模型腾讯云 Token Plan 和 Coding Plan 供应商支持\n- 新增 MCP OAuth 主动 token 刷新与连接自动重连机制\n- 新增 Skill 导入安全检查流程\n- 新增制品分享 Markdown 预览渲染能力\n- 优化菜单国际化支持，自动适配系统语言\n- 优化首页场景胶囊改为直接滚动，操作更流畅\n- 优化 Skill 安装并发控制与 loading 状态展示\n- 优化工作空间删除逻辑，删除后保留空工作空间\n- 优化模式/专家切换支持 CLI 重启续接\n- 修复多通道高危指令确认提示被覆盖及 Bot 断联的问题\n- 修复 OAuth token refresh 竞态导致 QQ 邮箱连接永久失败的问题\n- 修复企微 Bot「跳过」高危指令被作为「拒绝」处理的问题\n- 修复切换到 auto 模型时稳定报错的问题\n- 修复重启或切换会话后产物消失的问题\n- 修复 @ 文件搜索无结果的问题\n- 修复危险操作拒绝后会话卡住的问题\n- 修复微信命令 /clear 和 /summarize 失效及分割线不实时显示的问题\n- 修复 Windows 文件上传后名称展示为路径的问题\n- 修复 Connector 多窗口配置同步竞态的问题\n- 修复删除市场后已安装技能无提示被连带删除的问题\n- 修复队列消息模型同步的问题\n4.8.3 版本发布 🚀\n- 优化模型推理强度配置，支持更精细的推理参数调节\n4.8.2 版本发布 🚀\n- 新增小程序支持命令确认交互，提升任务执行体验\n- 新增技能市场和套件市场版本号机制，支持增量更新本地缓存\n- 优化 WorkBuddy 默认 Command，精简指令并新增实用命令\n- 修复套件仓库无内容或刷新报错的问题\n- 修复 Claw 问答偶现超时的问题\n- 修复接收来自小程序图片时功能异常及预览失败的问题\n- 修复 MCP 禁用单个 Tool 后仍可调用的问题\n- 修复 Windows 上缺少 MCP 添加入口的问题\n- 修复 MCP OAuth 授权不生效的问题\n- 修复场景胶囊关闭按钮难点击且会覆盖输入框内容的问题\n- 修复删除工作空间提示成功但实际未删除的问题\n- 修复自动化任务标题显示错误的问题\n- 修复模型限频时排队提醒未正确触发的问题\n- 修复连接器偶现提示已连接但无法使用的问题\n- 修复 Windows 技能安装经常失败的问题\n- 修复低版本连接器升级后需要手动重连的问题\n- 修复 Open in Folder 文案有误且偶发无法打开的问题\n- 修复 Skill 更新时消息提示与实际行为不符的问题\n4.8.1 版本发布 🚀 (2026-04-03)'
        },
        {
          'version': '4.8.1',
          'title': '4.8.1 版本发布 🚀 (2026-04-03)',
          'date': '2026-04-03',
          'dateRaw': '2026-04-03',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-8-1-版本发布-🚀-2026-04-03',
          'body': '- 新增任务/工作空间/归档任务删除功能，支持二次确认删除对应任务及文件\n- 新增任务和工作空间区域标题快速新建操作，鼠标悬浮标题区域即可快速新建任务或工作空间\n- 新增对话框 AI 生成内容标记，提示用户核实重要信息\n- 新增对话中 User Prompt 快速跳转功能，支持在长对话中快速定位历史消息\n- 新增 Agents 网页小程序二维码入口\n- 优化专家场景系统提示词，不再注入 IDENTITY.md 内容，确保专家人设不被覆盖\n- 优化保存到工作空间按钮图标\n- 优化 Claw 菜单项 hover 和 active 状态增加圆角效果\n- 优化 Skill 安装成功后「去试试」按钮交互，提升英文版文案规范性\n- 修复 macOS / Windows 新建任务启动速度过慢的问题\n- 修复消息队列发送异常及修改消息后队列位置错乱的问题\n- 修复点击任务名称跳转失败的问题\n- 修复点击「QQ 邮箱」和「腾讯乐享」连接器后提示连接失败的问题\n- 修复 hover 到回复下「...」时显示异常时间的问题\n- 修复云桌面 Windows 英文版个性化设置丢失的问题\n- 修复 Claw 模块埋点抓不到 downstream 和 upstream 指标数据的问题\n- 修复历史任务对话时间显示为系统当前时间的问题\n- 修复 Mac 下载功能异常的问题\n- 修复 WorkBuddy Claw 框架操作异常的问题\n4.8.0 版本发布 🚀(2026-03-31)'
        },
        {
          'version': '4.8.0',
          'title': '4.8.0 版本发布 🚀(2026-03-31)',
          'date': '2026-03-31',
          'dateRaw': '2026-03-31',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-8-0-版本发布-🚀-2026-03-31',
          'body': '- 新增对话消息发送时间展示\n- 新增对话框 AI 生成内容标记\n- 新增输入框支持拖拽排序路径标签位置\n- 新增输入框发送图片自动压缩\n- 新增任务及工作空间硬删除功能\n- 新增任务和工作空间区域标题支持快速新建操作\n- 新增 Claw 会话 /clear 命令与分割线功能\n- 新增 WorkBuddy 简洁模式下过程信息呈现\n- 新增 WorkBuddy 用户提示词快速跳转功能\n- 新增 WorkBuddy Desktop Skills/SkillHub/Marketplace 功能\n- 新增制品分享预览渲染能力\n- 新增元宝搜索\n- 新增斜杠命令支持被模型驱动调用\n- 新增 MCP HTTP 场景透传模型 ID\n- 新增小程序二维码入口移至侧边栏底部\n- 优化报错信息国际化\n- 优化置顶任务 hover 显示完整标题和工作空间名\n- 优化保存到工作空间换用专用保存图标\n- 优化 Skill 市场更新策略\n- 优化 Claw 会话管理样式\n- 优化 WorkBuddy 分享弹窗字号与按钮配色\n- 优化 Skills 图标动态获取\n- 修复简略模式下未计算 reasoning 消息的问题\n- 修复 Windows 终端输出乱码问题\n- 修复创建规则后无法切换设置页标签的问题\n- 修复 Claw idle timeout 计时器被频繁重置的问题\n- 修复 Claw 菜单项 hover 和 active 状态缺少圆角的问题\n- 修复 Connector 选中后未先完成连接即开始会话的问题\n- 修复 Connector Skill 文件安装失败的问题\n- 修复插件 MCP type 为 http 时 OAuth 授权无法触发的问题\n- 修复自定义黑名单误拦截路径子串的问题\n- 修复英文版场景胶囊缺少图标的问题\n- 修复产物右键打开文件夹无法定位到具体文件的问题\n- 修复预览链接无法点击跳转的问题\n- 修复确认框偶发不显示的竞态条件\n- 修复记忆系统全局开关竞态条件和文件队列卡死的问题\n- 修复中文引号导致工具调用失败的问题\n- 修复 Skill 安装成功「去试试」按钮样式问题\n4.7.5（2026-03-30）'
        },
        {
          'version': '4.7.5',
          'title': '4.7.5（2026-03-30）',
          'date': '2026-03-30',
          'dateRaw': '2026-03-30',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-7-5-2026-03-30',
          'body': '🌟 Skill 安全检测\n安装 Skill 前自动进行安全扫描，检测潜在的恶意脚本和风险行为，保障你的数据安全。\n- 🆕 产物区整体交互与展示优化\n- 🆕 新增产物回传开关，可控制是否回传产物到云端\n- 🆕 工作空间「打开文件夹」按钮外放，操作更便捷\n- 🆕 Skill 支持版本管理，有新版本时提示批量更新\n- 🆕 补充更多自动化任务模板\n- 🆕 自动化任务支持设置是否推送到 Bot 端\n- 🆕 默认开启微信小程序集成，支持定时任务通过小程序推送\n- 🆕 代码生成过程展示窗口优化\n- 🐛 修复首次安装/重启加载超 30s 窗口未响应\n- 🐛 修复 QQ 邮箱 Connector 无法使用\n- 🐛 修复产物列表错误展示其他空间内容\n4.7.3（2026-03-28）'
        },
        {
          'version': '4.7.3',
          'title': '4.7.3（2026-03-28）',
          'date': '2026-03-28',
          'dateRaw': '2026-03-28',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-7-3-2026-03-28',
          'body': '🌟 MCP OAuth 授权认证\n支持 MCP 标准 OAuth 授权认证流程，连接第三方服务更安全便捷。\n- 🆕 插件收入技能页面，连接器独立为菜单项，结构更清晰\n- 🆕 任务支持置顶/取消置顶\n- 🆕 保存任务到工作空间时支持重命名与修改存放目录\n- 🆕 已归档任务支持修改标题\n- 🆕 帮助反馈新增意见反馈与上传日志功能\n- 🆕 登录页视觉优化\n- 🆕 Claw 已连接渠道展示适配\n- 🆕 文件夹 hover 展示完整路径\n- 🆕 支持带登录态调用 Skill\n- 🐛 修复 Windows 自动化加载不出来\n- 🐛 修复 Windows 安装失败\n- 🐛 修复 MCP 授权成功但对话中未连接\n4.7.2（2026-03-27）'
        },
        {
          'version': '4.7.2',
          'title': '4.7.2（2026-03-27）',
          'date': '2026-03-27',
          'dateRaw': '2026-03-27',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-7-2-2026-03-27',
          'body': '🌟 自动化支持临时工作空间\n自动化任务不再需要绑定项目空间，系统自动创建临时工作空间执行任务，让自动化使用更灵活。\n- 🆕 默认开启 AI 图片生成工具\n- 🆕 对话流指令折叠，保持对话简洁\n- 🆕 用户消息底色更新，视觉区分更清晰\n- 🆕 新增 QQ 邮箱 Connector\n- 🆕 Claw 标签展示已连接的 IM 渠道\n- 🆕 已安装 Skill 列表按安装时间排序\n- 🐛 修复自动化触发任务未显示 user prompt\n- 🐛 修复专家模式召唤专家默认提示词丢失\n4.7.1（2026-03-26）'
        },
        {
          'version': '4.7.1',
          'title': '4.7.1（2026-03-26）',
          'date': '2026-03-26',
          'dateRaw': '2026-03-26',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-7-1-2026-03-26',
          'body': '🌟 专家中心排行榜\n专家中心新增排行榜功能，展示热门专家排行，帮助你快速发现最受欢迎的领域专家。\n- 🆕 对话窗口内支持通过选择器快速切换专家\n- 🆕 本地任务支持归档\n- 🆕 支持通过 / 命令唤起 Skill 列表\n- 🆕 Skill 列表新增图标展示与交互优化\n- 🆕 工作空间项目支持拖拽排序\n- 🆕 QQ Bot 和微信 Bot 支持上传文件和图片\n- 🆕 新增 User ID 获取入口\n- 🆕 Claw 支持名称自定义\n- 🆕 登录页优化\n- 🐛 修复已归档任务点击无响应\n- 🐛 修复工作空间拖拽排序不持久\n4.7.0（2026-03-25）'
        },
        {
          'version': '4.7.0',
          'title': '4.7.0（2026-03-25）',
          'date': '2026-03-25',
          'dateRaw': '2026-03-25',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-7-0-2026-03-25',
          'body': '🌟 自定义模型 UI 化配置\n支持在设置页通过可视化界面配置自定义模型（API Key、端点、参数等），无需手动编辑 JSON 文件。\n- 🆕 产物支持分享链接并提供在线预览渲染\n- 🆕 自动化支持单次执行任务\n- 🆕 Skill 添加流程交互改进\n- 🆕 微信 BOT 配置新增推荐标签\n- 🆕 Logo 区域展示版本号\n- 🆕 预览区支持全屏与在外部浏览器打开\n- 🆕 产物文件右键「打开文件夹」定位到文件并选中\n- 🆕 初始化工作空间自动创建 MEMORY.md\n- 🆕 报错信息友好化\n- 🆕 新增企微 Skill 集成\n- 🐛 修复专家模式切换不生效\n- 🐛 修复 too many requests 高频报错\n4.6.4（2026-03-22）'
        },
        {
          'version': '4.6.4',
          'title': '4.6.4（2026-03-22）',
          'date': '2026-03-22',
          'dateRaw': '2026-03-22',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-6-4-2026-03-22',
          'body': '🌟 微信 ClawBot 集成\n新增微信 ClawBot，用户可通过微信直接与 WorkBuddy 对话，随时随地获取 AI 帮助。\n- 🐛 修复新建任务白屏卡死\n- 🐛 修复检查更新失败\n4.6.3（2026-03-21）'
        },
        {
          'version': '4.6.3',
          'title': '4.6.3（2026-03-21）',
          'date': '2026-03-21',
          'dateRaw': '2026-03-21',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-6-3-2026-03-21',
          'body': '🌟 运行环境自动检测安装\n设置页新增运行环境检测，自动识别 Python 和 Node.js 缺失情况并一键安装，免去手动配置环境的烦恼。\n- 🆕 Skill 描述展示中文\n- 🆕「打开文件夹」定位到文件夹所在层级\n- 🆕 Skill 详情页展示信息更丰富\n- 🆕 支持图片、附件的流式传输\n- 🐛 修复 Windows 上安装 Node.js 失败\n- 🐛 修复企微集成消息收发异常\n4.6.2（2026-03-20）'
        },
        {
          'version': '4.6.2',
          'title': '4.6.2（2026-03-20）',
          'date': '2026-03-20',
          'dateRaw': '2026-03-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-6-2-2026-03-20',
          'body': '🌟 SkillHub 市场\nSkill 列表接入 SkillHub 市场，支持在线浏览、搜索和一键安装社区 Skill，扩展 WorkBuddy 的能力边界。\n- 🆕 Working Memory 改为按 workspace 独立存储\n- 🆕 HTML 产物支持点击预览\n- 🆕 新建任务流程简化\n- 🆕 输入框 Skill 胶囊可识别 Plugin 内的 Skill\n- 🆕 产物列表隐藏 .workbuddy 内部文件\n- 🆕 支持解绑已配置的 BOT\n- 🆕 官网新增 Windows ARM 下载入口\n- 🆕 召唤专家时自动生成推荐提问\n- 🐛 修复历史记录完全丢失\n- 🐛 修复微信 BOT 重启后配置丢失\n4.6.1（2026-03-20）'
        },
        {
          'version': '4.6.1',
          'title': '4.6.1（2026-03-20）',
          'date': '2026-03-20',
          'dateRaw': '2026-03-20',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-6-1-2026-03-20',
          'body': '🌟 专家中心搜索\n专家列表支持关键词搜索，快速找到所需领域的专家。\n- 🆕 新增「帮助文档」与「联系我们」入口\n- 🆕 支持调整 UI 字体大小\n- 🆕 Skill 描述国际化，根据系统语言自动切换中/英文\n- 🆕 兼容 Vercel/OpenClaw 生态安装 Skill\n- 🆕 任务完成红点提醒\n- 🆕 模型不支持图片时弹窗提示切换\n- 🆕 设置页 UI 整体优化\n- 🐛 修复对话异常终止、新建对话无反应等稳定性问题\n- 🐛 修复企微/钉钉/QQ BOT 配置链路不通\n- 🐛 修复文生图能力失效\n4.6.0（2026-03-19）'
        },
        {
          'version': '4.6.0',
          'title': '4.6.0（2026-03-19）',
          'date': '2026-03-19',
          'dateRaw': '2026-03-19',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-6-0-2026-03-19',
          'body': '🌟 专家中心与 MCP 集成\n全新专家中心上线，浏览并召唤各领域 AI 专家；同时新增 MCP 服务集成面板，支持添加和管理外部工具服务。\n- 🆕 插件市场上线，一键安装扩展能力\n- 🆕 企微/钉钉/飞书/QQ 多渠道 BOT 集成\n- 🆕 产物列表展示优化，新增文件预览功能\n- 🆕 支持自动化定时任务\n4.5.14（2026-03-17）'
        },
        {
          'version': '4.5.14',
          'title': '4.5.14（2026-03-17）',
          'date': '2026-03-17',
          'dateRaw': '2026-03-17',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-14-2026-03-17',
          'body': '🌟 体验优化与稳定性提升\n持续修复已知问题，提升产品整体稳定性和使用体验。\n- 🐛 修复输入框 Skill 菜单只展示 SkillHub 安装的 Skill，遗漏插件市场安装的\n- 🐛 修复产物列表预览图片后再预览其他产物鼠标闪动\n- 🐛 修复任务切换时偶现不展示对话消息\n4.5.12（2026-03-14）'
        },
        {
          'version': '4.5.12',
          'title': '4.5.12（2026-03-14）',
          'date': '2026-03-14',
          'dateRaw': '2026-03-14',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-12-2026-03-14',
          'body': '🌟 自动化任务模板\n自动化任务列表为空时自动创建预设任务模板，降低使用门槛。\n- 🆕 兼容 Vercel/OpenClaw 生态安装 Skill\n- 🆕 任务列表名称与图标统一\n- 🆕 模型列表 Auto 模式提示优化\n- 🆕 Claw 场景交互优化\n- 🐛 修复切换 task 时偶现历史消息不展示\n- 🐛 修复 Plan 模式深色背景文字显示不清\n4.5.10（2026-03-13）'
        },
        {
          'version': '4.5.10',
          'title': '4.5.10（2026-03-13）',
          'date': '2026-03-13',
          'dateRaw': '2026-03-13',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-10-2026-03-13',
          'body': '🌟 Skill 推荐市场\n新增 Skill 推荐列表，帮助你快速发现和安装实用技能。\n- 🆕 支持自动检查更新并提示升级\n- 🆕 WorkBuddy 对话人设优化，更加亲和自然\n- 🆕 官网下载入口引导到 WorkBuddy\n- 🐛 修复网页链接点击黑屏\n- 🐛 修复 Windows/Mac 的 Claw 工作逻辑不一致\n- 🐛 修复非本次任务产物在当前对话中展示\n4.5.8（2026-03-11）'
        },
        {
          'version': '4.5.8',
          'title': '4.5.8（2026-03-11）',
          'date': '2026-03-11',
          'dateRaw': '2026-03-11',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-8-2026-03-11',
          'body': '🌟 稳定性专项修复\n集中修复多项 BOT 链路和对话稳定性问题，提升整体可靠性。\n- 🐛 修复企微/微信/飞书/QQ BOT 消息收发链路\n- 🐛 修复任务列表工作空间操作异常\n- 🐛 修复拖拽文件到输入框后发送消息找不到文件\n- 🐛 修复点击任务列表新建任务未选中当前工作空间\n4.5.6（2026-03-09）'
        },
        {
          'version': '4.5.6',
          'title': '4.5.6（2026-03-09）',
          'date': '2026-03-09',
          'dateRaw': '2026-03-09',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-6-2026-03-09',
          'body': '🌟 飞书通知 Markdown 支持\n飞书通知消息支持发送 Markdown 格式，展示更丰富的排版效果。\n- 🐛 修复 Claw 多次会话重叠到最后一次对话\n- 🐛 修复已安装插件点击更新提示信息遮盖\n- 🐛 修复任务进度展示不统一\n4.5.2（2026-03-06）'
        },
        {
          'version': '4.5.2',
          'title': '4.5.2（2026-03-06）',
          'date': '2026-03-06',
          'dateRaw': '2026-03-06',
          'tags': [],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-2-2026-03-06',
          'body': '🌟 稳定性修复\n首批上线后集中修复用户反馈的关键问题。\n- 🐛 修复对话框输入中文后文件引用样式异常\n- 🐛 修复 Credits 积分消耗数据不一致\n4.5.0（2026-03-04）'
        },
        {
          'version': '4.5.0',
          'title': '4.5.0（2026-03-04）',
          'date': '2026-03-04',
          'dateRaw': '2026-03-04',
          'tags': [
            '核心能力'
          ],
          'url': 'https://www.codebuddy.cn/docs/workbuddy/Changelog#_4-5-0-2026-03-04',
          'body': '🎉 WorkBuddy 正式发布\nWorkBuddy — AI 桌面助手正式上线。通过自然语言对话完成日常任务，支持文件处理、内容创作、代码生成等多种场景。\n核心能力\n- 🆕 自然语言驱动的 AI 对话，支持多轮交互\n- 🆕 多模型切换（GLM、DeepSeek 等）\n- 🆕 工作空间管理，按项目组织任务与产物\n- 🆕 Claw 持续对话模式，随时接入 AI 协作\n- 🆕 Skill 扩展系统，通过技能扩展 AI 能力\n- 🆕 文件读写与终端命令执行\n- 🆕 产物管理与文件预览\n- 🆕 支持 macOS 与 Windows 双平台\n最后更新:\nPager 上一页 快速开始\n下一页 历史版本下载'
        }
      ]
    }
  ]
};
