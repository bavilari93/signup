export const configVars:{[key: string]: string}={
    ENABLE_BY_LOCATION: `${process.env.REACT_APP_ENABLE_BY_LOCATION}`,
    GOOGLE_MAP_ID     : `${process.env.REACT_APP_GOOGLE_MAP_ID}`,
    GOOGLE_API_KEY    : `${process.env.REACT_APP_GOOGLE_API_KEY}`,
    AUTH0_DOMAIN      : `${process.env.REACT_APP_AUTH0_DOMAIN}`,
    AUTH0_CLIENT_ID   : `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
    AUTH0_AUDIENCE    : `${process.env.REACT_APP_AUTH0_AUDIENCE}`,
    AUTH0_AUDIENCE_MFA: `${process.env.REACT_APP_AUTH0_AUDIENCE_MFA}`,
    AUTH0_CALLBACK_URL: `${process.env.REACT_APP_AUTH0_CALLBACK_URL}`,
    AUTH0_TENANT      : `${process.env.REACT_APP_AUTH0_TENANT}`,
    SITE_URL          : `${process.env.REACT_APP_SITE_URL}`,
}