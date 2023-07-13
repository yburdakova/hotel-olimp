import { connectToMainsliderDb } from "./";

export class GridFSUtils {
    static async fileExists(filename: string): Promise<boolean> {
        const { client } = await connectToMainsliderDb();
        const count = await client
        .db("main_slider")
        .collection("images.files")
        .countDocuments({ filename });

        return !!count;
    }
}