import { connectToDb, fileExists } from "@/lib/mongo";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
    const { bucket } = await connectToDb();
    const data = await req.formData();

    const descriptions: { [key: string]: string } = {};

    // Проходимся по всем данным формы
    for (const entry of Array.from(data.entries())) {
        const [key, value] = entry;
        const isFile = typeof value === "object";

        if (isFile) {
            const blob = value as Blob;
            const filename = blob.name;

            const existing = await fileExists(filename);
            if (existing) {
                continue;
            }

            const buffer = Buffer.from(await blob.arrayBuffer());
            const stream = Readable.from(buffer);

            const uploadStream = bucket.openUploadStream(filename, {
                contentType: blob.type,
                metadata: {},
            });

            await stream.pipe(uploadStream);
        } else {
            // Сохраняем описания фотографий
            descriptions[key] = value as string;
        }
    }

    // Здесь можно обработать описания фотографий, сохранить их в базе данных или выполнить другие действия
    // Например, сохранить описания в отдельной коллекции "imageDescriptions"
    const { client } = await connectToDb();
    const collection = client.db("hotel_olimp").collection("imageDescriptions");
    await collection.insertOne(descriptions);

    return NextResponse.json({ success: true });
}
