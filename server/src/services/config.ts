import dotenv from 'dotenv';


const envFound = dotenv.config();
if (envFound.error) {

  throw new Error("Couldn't find .env file");
}

export default{
    DATABASE_URL: process.env.MONGODB_URI,
    PORT: process.env.PORT,
}