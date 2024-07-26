import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));