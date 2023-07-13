import { MongoClient, GridFSBucket } from "mongodb";

declare global {
    var client: MongoClient | null;
    var bucket: GridFSBucket | null;
    var roomCardsClient: MongoClient | null; 
    var roomCardsBucket: GridFSBucket | null;
    var mainsliderClient: MongoClient | undefined;
    var mainsliderBucket: GridFSBucket | undefined;
}

const MONGODB_URI = process.env.DB_KEY;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

export async function connectToDb() {
    if (global.client) {
        return {
        client: global.client,
        bucket: global.bucket!,
        };
    }

    const client = (global.client = new MongoClient(MONGODB_URI!, {}));
    const bucket = (global.bucket = new GridFSBucket(client.db("hotel_olimp"), {
        bucketName: "images",
    }));

    await global.client.connect();
    console.log("Connected to the Database ");
    return { client, bucket: bucket! };
}

export async function connectToRoomCardsDb() {
    if (global.roomCardsClient) {
        return {
            client: global.roomCardsClient,
            bucket: global.roomCardsBucket!,
        };
    }
    
    const client = (global.roomCardsClient = new MongoClient(MONGODB_URI!, {}));
    const bucket = (global.roomCardsBucket = new GridFSBucket(client.db("room_cards"), {
    bucketName: "images",
    }));

    await global.roomCardsClient.connect();
    console.log("Connected to the Room Cards Database");
    return { client, bucket: bucket! };
}

export async function connectToMainsliderDb() {
    if (global.mainsliderClient) {
        return {
            client: global.mainsliderClient,
            bucket: global.mainsliderBucket!,
        };
    }
    
    const client = (global.mainsliderClient = new MongoClient(MONGODB_URI!, {}));
    const bucket = (global.mainsliderBucket = new GridFSBucket(client.db("main_slider"), {
    bucketName: "images",
    }));

    await global.mainsliderClient.connect();
    console.log("Connected to the Room Cards Database");
    return { client, bucket: bucket! };
}

export async function fileExists(filename: string): Promise<boolean> {
const { client } = await connectToDb();
const count = await client
    .db("hotel_olimp")
    .collection("images.files")
    .countDocuments({ filename });

return !!count;
}

export async function fileRoomcardsExists(filename: string): Promise<boolean> {
    const { client } = await connectToRoomCardsDb(); 
    const count = await client
        .db("room_cards")
        .collection("images.files")
        .countDocuments({ filename });

    return !!count;
}

export async function fileMainsliderExists(filename: string): Promise<boolean> {
    const { client } = await connectToMainsliderDb(); 
    const count = await client
        .db("main_slider")
        .collection("images.files")
        .countDocuments({ filename });

    return !!count;
}