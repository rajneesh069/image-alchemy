import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const MONGODB_URL = process.env.MONGODB_URL;

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(MONGODB_URL || "", {
      dbName: "imageAlchemy",
      bufferCommands: false,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;

// Since Next.js runs in a serverless environment so it connects to the database each time
//while in case of express.js it's the server itself which runs for a prolonged time
//hence no need to connect to database again and again.

// Serverless functions are stateless, i.e., they startup to handle a request and then shut down without maintaining
// a prolonged connection with the database.
