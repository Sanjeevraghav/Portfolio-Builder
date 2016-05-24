/**
 * Created by ashutosh on 23/04/16.
 */


import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import compress from 'koa-compress';
import zlib from 'zlib';
import qs from 'koa-qs';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import koaBunyanLogger from 'koa-bunyan-logger';

const app = new Koa();
app.use(koaBunyanLogger());
app.use(koaBunyanLogger.requestLogger());
const router = new Router();
app.use(compress({flush:zlib.Z_SYNC_FLUSH}));
app.use(serve(__dirname + "/../Public"));
app.use(router.middleware());
qs(app);
router.get("/", async (ctx, next) => {
    serve('../Public/index.html');
});

router.post("/message", async function(ctx, next){
    console.log(this.query);
    let options = {
        service: 'Gmail',
        port : 587,
        auth: {
            user: 'ashuanindian@gmail.com',
            pass: 'lwslrnvimfvbvgdz'
        },
        debug : true
    };
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(smtpTransport(options));

// setup e-mail data with unicode symbols
    let mailOptions = {
        from: 'Ashutosh Sharma ✔ <ashutosh@ashu.online>', // sender address
        to: 'ashuanindian@gmail.com, ashutosh@ashu.online', // list of receivers
        subject: 'Hi Ashutosh you got a message from '+ this.query.name, // Subject line
        text: this.query.message + "\n\nPlease contact s/he on "+ this.query.email // plaintext body
    };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    this.body = "Success";
});
app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');