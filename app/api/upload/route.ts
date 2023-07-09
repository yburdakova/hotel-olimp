import { connectToDb, fileExists } from "@/lib/mongo";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
  const { bucket } = await connectToDb();
  const data = await req.formData();

  const descriptions: { [key: string]: string } = {};

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
        metadata: descriptions, // Добавляем метаданные в объект metadata
      });

      await stream.pipe(uploadStream);
    } else {
      descriptions[key] = value as string;
    }
  }

  return NextResponse.json({ success: true });
}

export async function GET() {
  const { client } = await connectToDb();
  const collection = client.db("hotel_olimp").collection("images.files");
  const files = await collection.find().toArray();

  return NextResponse.json({ files });
}
