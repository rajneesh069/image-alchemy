import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Since Next.js runs in a serverless environment so it connects to the database each time
//while in case of express.js it's the server itself which runs for a prolonged time
//hence no need to connect to database again and again.

// Serverless functions are stateless, i.e., they startup to handle a request and then shut down without maintaining
// a prolonged connection with the database.

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectToDatabase = async()=>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL){
        throw new Error("Missing MONGODB_URL")
    }

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName : "imageAlchemy",
        bufferCommands : false,
    })

    cached.conn = await cached.promise;
    return cached.conn;
}
