import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";





mongoose.connect("mongodb+srv://vahermihkel:**************@materials.z5dhxc9.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})




const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});  
//
