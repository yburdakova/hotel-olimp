import { connectToRoomCardsDb, fileRoomcardsExists } from "@/lib/mongo";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
    const { bucket } = await connectToRoomCardsDb(); // Подключение к базе данных "room_cards"

    const data = await req.formData();

    const descriptions: { [key: string]: string } = {};

    for (const entry of Array.from(data.entries())) {
        const [key, value] = entry;
        const isFile = typeof value === "object";

        if (isFile) {
        const blob = value as Blob;
        const filename = blob.name;

        const existing = await fileRoomcardsExists(filename);
        if (existing) {
            continue;
        }

        const buffer = Buffer.from(await blob.arrayBuffer());
        const stream = Readable.from(buffer);

        const uploadStream = bucket.openUploadStream(filename, {
            contentType: blob.type,
            metadata: descriptions,
        });

        await new Promise((resolve, reject) => {
            stream.pipe(uploadStream)
            .on("error", reject)
            .on("finish", resolve);
        });
        } else {
        descriptions[key] = value as string;
        }
    }

    return NextResponse.json({ success: true });
}

export async function GET() {
    const { client } = await connectToRoomCardsDb();
    const collection = client.db("room_cards").collection("images.files");
    const files = await collection.find().toArray();

    return NextResponse.json({ files });
}