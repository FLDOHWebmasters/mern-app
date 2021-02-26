const msal = require('@azure/msal-node');
const msalConfig = {
    auth: {
      clientId: "8b394bd2-4206-460f-886c-cb1e5d50bc00",
      authority: "https://login.microsoftonline.com/common",
      clientSecret: "x1~LUG~C2J-aGEsTnDBXjXWoNS1-~ZLf98"
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
}

module.exports = {
    msalConfig
}