/**
 * Created by ashutosh on 23/04/16.
 */


import Koa from 'koa';
import serve from 'koa-static';
import Router from 'koa-router';
import compress from 'koa-compress';
import zlib from 'zlib';
import bodyparser from 'koa-bodyparser';
import nodemailer from 'nodemailer';

const app = new Koa();
const router = new Router();

app.use(compress({flush:zlib.Z_SYNC_FLUSH}));
app.use(bodyparser());
app.use(serve(__dirname + "/../Public"));
app.use(router.middleware());

router.get("/", async function(ctx, next){
    serve('../Public/index.html');
});

router.post("/message", async function(ctx, next) {
    console.log(this.request.body);
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://ashuanindian%40gmail.com:09101990@smtp.gmail.com');

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Ashutosh Sharma ✔ <ashutosh@ashu.online>', // sender address
        to: 'ashuanindian@gmail.com, ashutosh@ashu.online', // list of receivers
        subject: 'Hi Ashutosh you got a message from '+ this.request.body.name, // Subject line
        text: this.request.body.message + "\n\nPlease contact him on "+ this.request.body.email, // plaintext body
    };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
    this.body = await serve('../Public/index.html');
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');