import { MongoClient } from "mongodb";

const URI = process.env.DB_KEY
const options = {}

if (!URI) throw new Error ('Please add your Mongo URI to .env.local file')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
    if (!(global as any)._mongoClientPromise) {
        (global as any)._mongoClientPromise = client.connect()
    }

    clientPromise = (global as any)._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise as Promise<MongoClient>