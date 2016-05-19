'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerSmtpTransport = require('nodemailer-smtp-transport');

var _nodemailerSmtpTransport2 = _interopRequireDefault(_nodemailerSmtpTransport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by ashutosh on 23/04/16.
 */

var app = new _koa2.default();
var router = new _koaRouter2.default();

app.use((0, _koaCompress2.default)({ flush: _zlib2.default.Z_SYNC_FLUSH }));
app.use((0, _koaBodyparser2.default)());
app.use((0, _koaStatic2.default)(__dirname + "/../Public"));
app.use(router.middleware());

router.get("/", function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        (0, _koaStatic2.default)('../Public/index.html');

                    case 1:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
    return function (_x, _x2) {
        return ref.apply(this, arguments);
    };
}());

router.post("/message", function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
        var options, transporter, mailOptions;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        console.log(this.request.body);

                        options = {
                            service: 'gmail',
                            ssl: true,
                            port: 465,
                            auth: {
                                user: 'ashuanindian@gmail.com',
                                pass: '09101990'
                            },
                            tls: {
                                secureProtocol: "TLSv1_method"
                            }
                        };
                        // create reusable transporter object using the default SMTP transport

                        transporter = _nodemailer2.default.createTransport((0, _nodemailerSmtpTransport2.default)(options));

                        // setup e-mail data with unicode symbols

                        mailOptions = {
                            from: 'Ashutosh Sharma ✔ <ashutosh@ashu.online>', // sender address
                            to: 'ashuanindian@gmail.com, ashutosh@ashu.online', // list of receivers
                            subject: 'Hi Ashutosh you got a message from ' + this.request.body.name, // Subject line
                            text: this.request.body.message + "\n\nPlease contact him on " + this.request.body.email // plaintext body
                        };

                        // send mail with defined transport object

                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                return console.log(error);
                            }
                            console.log('Message sent: ' + info.response);
                        });
                        _context2.next = 7;
                        return (0, _koaStatic2.default)('../Public/index.html');

                    case 7:
                        this.body = _context2.sent;

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));
    return function (_x3, _x4) {
        return ref.apply(this, arguments);
    };
}());

app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
//# sourceMappingURL=server.js.map