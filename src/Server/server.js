/**
 * Created by ashutosh on 23/04/16.
 */


import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';

const app = new Koa();
const router = Router();

app.use(serve(__dirname + "/../Public"));

router.get("/", async (ctx, next) => {
    serve('../Public/index.html');
});

app.listen(process.env.PORT||3000);