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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default(); /**
                                * Created by ashutosh on 23/04/16.
                                */

var router = (0, _koaRouter2.default)();

app.use((0, _koaStatic2.default)(__dirname + "/../Public"));

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
    }, _callee, undefined);
  }));
  return function (_x, _x2) {
    return ref.apply(this, arguments);
  };
}());

app.listen(3000);
//# sourceMappingURL=server.js.map