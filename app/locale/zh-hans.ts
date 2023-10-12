export default {
  hello: '你好',
  login: {
    title: '登录',
    next: '下一步',
    user: '用户',
    userHelp:
      '欢迎使用 AkariBot Dash。请在任意一个有小可的聊天内输入 {cmd}，复制你的 ID，然后粘贴于下。',
    token: '密钥',
    tokenHelp: '请在任意一个有小可的聊天内输入 {token} 以获取登录密钥。',
    error: {
      title: '错误',
      codeSignInvalid: '登录时出现了错误。请您重试。（{error}）',
      tokenSignInvalid: '登录时出现了错误。请您重试。（{error}）',
      codeMismatchSigned: '登录时出现了错误。请您重试。（{error}）',
      codeMismatchToken: '请确保在请求密钥时输入了正确的代码。（{error}）',
      userMismatch:
        '请确保您输入的 ID 和您请求密钥时使用的账号一致。（{error}）',
      retry: '重试',
    },
  },
  pages: {
    home: {
      title: '主页',
      whoIsThis: '我是谁',
    },
  },
} as const
