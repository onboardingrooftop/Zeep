import {createConnection} from "typeorm";
import User from '../Entity/User';


export async function createConnectionDB(){
    
    await createConnection({
        type: "mysql",
        host: process.env.host_DB,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.database_DB,
        synchronize: true,
        logging: false,
        entities: [User]
    });
};