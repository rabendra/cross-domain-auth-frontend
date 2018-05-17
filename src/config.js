import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
debugger
const config = {
  mockApis: env.REACT_APP_MOCK_APIS === 'true',
  apiUrl: env.REACT_APP_API_URL,
  authApiUrl: env.REACT_APP_AUTH_API_URL,
  facebookAppId: env.REACT_APP_FACEBOOK_APP_ID,
  facebookFields: env.REACT_APP_FACEBOOK_FIELDS,
  facebookScope: env.REACT_APP_FACEBOOK_SCOPE,
  googleAppId: env.REACT_APP_GOOGLE_APP_ID,
  googleFields: env.REACT_APP_GOOGLE_FIELDS,
  googleScope: env.REACT_APP_GOOGLE_SCOPE,
}

export default config
