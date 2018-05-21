export default {
    user: {
        user_id: null,
        user_avatar: null
      },
      messageBox: {
        show: false,
        title: 'Message',
        contents: '',
      },
      profileBox: {
        show: false,
        contributorIdx: null
      },
      registBox: {
        show: false
      },
      env: {
        loading: true,
        dimmer: false,
        consoleMenu: 'terminal',
      },
      ide: {
        terminalLogs: [],
        code: '',
        codeState: 'basic',
        options: {
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'base16-dark',
          lineNumbers: true,
          line: true
        },
        file: {
          files: [],
          contributorFiles: [],
          currentIdx: null,
          currentMaster: null
        },
      },
      contributors: [],
}