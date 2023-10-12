export default {
  hello: 'Hello',
  home: 'Home',
  login: {
    title: 'Login',
    next: 'Next',
    user: 'User',
    userHelp:
      'Welcome to AkariBot Dash. Please send {cmd} in a chat with AkariBot, copy your ID and paste it below.',
    token: 'Token',
    tokenHelp:
      'Please send {token} in a chat with AkariBot to obtain login token.',
    error: {
      title: 'Error',
      codeSignInvalid:
        'An error occurred during login. Please try again. ({error})',
      tokenSignInvalid:
        'An error occurred during login. Please try again. ({error})',
      codeMismatchSigned:
        'An error occurred during login. Please try again. ({error})',
      codeMismatchToken:
        'Please make sure you entered the code correctly when requesting token. ({error})',
      userMismatch:
        'Please make sure you are using the same account when you first entered your user ID and when you requested the token. ({error})',
      retry: 'Retry',
    },
  },
  pages: {
    home: {
      title: 'Home',
      whoIsThis: 'Who is this?',
    },
  },
} as const
