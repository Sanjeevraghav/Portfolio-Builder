/**
 * Created by ashutosh on 23/04/16.
 */


import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import compress from 'koa-compress';
import zlib from 'zlib';

const app = new Koa();
const router = Router();

app.use(compress({flush:zlib.Z_SYNC_FLUSH}));
app.use(serve(__dirname + "/../Public"));

router.get("/", async (ctx, next) => {
    serve('../Public/index.html');
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');