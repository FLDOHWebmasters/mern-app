var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
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

// Create msal application object
const cca = new msal.ConfidentialClientApplication(msalConfig);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 5000);
console.log("+++++++++++++++" + app.get('port'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());





app.get('/', (req, res) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:5000/redirect",
    };

    // get url to sign user in and consent to scopes needed for application
    cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});

app.get('/redirect', (req, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:5000/redirect",
    };

    cca.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});