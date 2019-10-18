import {createConnection} from "typeorm";
import User from '../../Domain/Entity/User';
import { Role } from "../../Domain/Entity/Role";
import Post from "../../Domain/Entity/Post";


export async function createConnectionDB(){

    await createConnection({
        type: "mysql",
        host: process.env.DATABASE_HOST,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB,
        synchronize: true,
        logging: true,
        entities: [User, Role, Post]
    });
};
