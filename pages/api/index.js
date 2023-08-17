import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
const dbConnect =require("../../server/utils/dbConnect")
const next =require("next")

const Router = express.Router();
const SigninRouter = require("./signin/index");
const RegisterRouter = require("./register/index");
const LogoutRouter = require("./logout/index");

const app = express();

dbConnect();


const sessionMiddleware = session({
  secret: 'your_secret_key', 
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://chandran:rraavvii@cluster0.0zcd2.mongodb.net/Builder?retryWrites=true&w=majority' }),
  cookie: {
    maxAge: 3600000, 
    secure: false,
    httpOnly: true,
    path: '/',
  },
});

app.use(sessionMiddleware);
app.use("/api/signin",require("./signin/index"))
app.use("/api/register",require("./register/index"))
app.use("/api/logout",require("./server/index"))




export default app;


