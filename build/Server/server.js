'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _asyncBusboy = require('async-busboy');

var _asyncBusboy2 = _interopRequireDefault(_asyncBusboy);

var _zlib = require('zlib');

var _zlib2 = _interopRequireDefault(_zlib);

var _koaQs = require('koa-qs');

var _koaQs2 = _interopRequireDefault(_koaQs);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _nodemailerSmtpTransport = require('nodemailer-smtp-transport');

var _nodemailerSmtpTransport2 = _interopRequireDefault(_nodemailerSmtpTransport);

var _koaBunyanLogger = require('koa-bunyan-logger');

var _koaBunyanLogger2 = _interopRequireDefault(_koaBunyanLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default(); /**
                                * Created by ashutosh on 23/04/16.
                                */

app.use((0, _koaBunyanLogger2.default)());
app.use(_koaBunyanLogger2.default.requestLogger());
var router = new _koaRouter2.default();
app.use((0, _koaCompress2.default)({ flush: _zlib2.default.Z_SYNC_FLUSH }));
app.use((0, _koaStatic2.default)(__dirname + "/../Public"));
app.use(router.routes());
app.use(router.allowedMethods());
(0, _koaQs2.default)(app);
router.get("/", function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx, next) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _koaSend2.default)(ctx, '../Public/index.html');

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));
    return function (_x, _x2) {
        return ref.apply(this, arguments);
    };
}());

router.get("/resume", function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(ctx, next) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return (0, _koaSend2.default)(ctx, 'Ashutosh-Resume.pdf', { root: __dirname + '/../Public/' });

                    case 2:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));
    return function (_x3, _x4) {
        return ref.apply(this, arguments);
    };
}());

router.post("/message", function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(ctx, next) {
        var _ref, fields, options, transporter, mailOptions;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return (0, _asyncBusboy2.default)(ctx.req);

                    case 2:
                        _ref = _context3.sent;
                        fields = _ref.fields;
                        options = {
                            service: 'Gmail',
                            port: 587,
                            auth: {
                                user: 'ashuanindian@gmail.com',
                                pass: '*********'
                            },
                            debug: true
                        };
                        // create reusable transporter object using the default SMTP transport

                        transporter = _nodemailer2.default.createTransport((0, _nodemailerSmtpTransport2.default)(options));

                        // setup e-mail data with unicode symbols

                        mailOptions = {
                            from: 'Ashutosh Sharma ✔ <ashutosh@ashu.online>', // sender address
                            to: 'ashuanindian@gmail.com, ashutosh@ashu.online', // list of receivers
                            subject: 'Hi Ashutosh you got a message from ' + fields.name, // Subject line
                            text: fields.message + "\n\nPlease contact s/he on " + fields.email // plaintext body
                        };

                        // send mail with defined transport object

                        _context3.next = 9;
                        return new _promise2.default(function (resolve, reject) {
                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    reject("error");
                                }
                                console.log('Message sent: ' + info.response);
                                resolve("Success");
                            });
                        });

                    case 9:
                        ctx.body = _context3.sent;

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));
    return function (_x5, _x6) {
        return ref.apply(this, arguments);
    };
}());
app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
//# sourceMappingURL=server.js.map