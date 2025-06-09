// "use server"
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URL, {
  timeoutMS: 50000,
  socketTimeoutMS: 50000000,
  connectTimeoutMS: 5050000,
});
await client.connect();
export default client;