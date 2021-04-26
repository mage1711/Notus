import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default{
    databaseURL: process.env.MONGODB_URI,
    port: process.env.PORT,
    googleOAuth:{
        clientId : process.env.CLIENT_ID,
        clientSecret : process.env.CLIENT_SECRET
    }
}