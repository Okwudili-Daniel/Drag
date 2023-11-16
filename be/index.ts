import express,{Application,Response} from 'express';
import cors from 'cors';
import dbConnection from './utils/dbConfig';
import mainApp from './mainApp';

const app: Application= express();
const port: number = 3333

app.use(express.json())
app.use(cors())

mainApp(app);

const server = app.listen(port, () =>{
    console.clear()
    dbConnection()
});

process.on("uncaughtException", (err: Error) =>{
    console.log("uncaughtException", err)
    process.exit(1);
})

process.on("unhandledRejection", (reason: any) =>{
    console.log("unhandledRejection", reason)

    server.close(() =>{
        process.exit(1);
    })
})