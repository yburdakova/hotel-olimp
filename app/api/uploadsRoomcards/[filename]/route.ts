import { connectToRoomCardsDb } from "@/lib/mongo";
import { NextResponse } from "next/server";

type Params = {
  params: { filename: string };
};

export async function GET(req: Request, { params }: Params) {
  const { bucket } = await connectToRoomCardsDb();

  const filename = params.filename as string;
  if (!filename) {
    return new NextResponse(null, { status: 400, statusText: "Bad Request" });
  }

  const files = await bucket.find({ filename }).toArray();
  if (!files.length) {
    return new NextResponse(null, { status: 404, statusText: "Not found" });
  }

  const file = files.at(0)!;
  const stream = bucket.openDownloadStreamByName(
    filename
  ) as unknown as ReadableStream;

  return new NextResponse(stream, {
    headers: {
      "Content-Type": file.contentType!,
    },
  });
}



export async function DELETE(req: Request, { params }: Params) {
  const { bucket, client } = await connectToRoomCardsDb();

  const filename = params.filename as string;
  if (!filename) {
    return new NextResponse(null, { status: 400, statusText: "Bad Request" });
  }

  const files = await bucket.find({ filename }).toArray();
  if (!files.length) {
    return new NextResponse(null, { status: 404, statusText: "Not found" });
  }

  const file = files[0];
  await bucket.delete(file._id);
  await client
    .db("room_cards")
    .collection("images.files")
    .deleteOne({ _id: file._id }); 

  return NextResponse.json({ success: true });
}