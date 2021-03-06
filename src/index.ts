import express, {Express} from 'express';
import Router from './Infrastructure/Router/Router'
import "reflect-metadata";
import {createConnectionDB} from './Infrastructure/DataBase/Configuration'
import * as dotenv from 'dotenv';
import container from "./inversify.config";
import {AuthController} from "./Infrastructure/Controllers/AuthController";
import {AuthenticateMiddleware} from "./Infrastructure/Middlewares/AuthenticateMiddleware";
import { UserController } from './Infrastructure/Controllers/UserController';
import PostController from './Infrastructure/Controllers/PostController';

class App {

    private express :Express;
    private router: Router;

    constructor(){
        dotenv.config();
        this.express = express();
        createConnectionDB();
        this.router = new Router(
            this.express, 
            container.get(AuthController), 
            container.get(AuthenticateMiddleware), 
            container.get(UserController), 
            container.get(PostController),
        );
    }

    public run(){
      process
            .on('unhandledRejection', (reason, p) => {
                console.error(reason, 'Unhandled Rejection at Promise', p);
            })
            .on('uncaughtException', err => {
                console.error(err, 'Uncaught Exception thrown');
                process.exit(1);
            });
        this.upServer();
        this.router.up();
    }

    private upServer(){
        this.express.listen(3000, function(){
            console.log('Server is run in port 3000');
        });
    }

}

const app = new App()
app.run()
