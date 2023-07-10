import { connectToDb } from "./";

export class GridFSUtils {
  static async fileExists(filename: string): Promise<boolean> {
    const { client } = await connectToDb();
    const count = await client
    .db("hotel_olimp")
    .collection("images.files")
    .countDocuments({ filename });

    return !!count;
  }
}