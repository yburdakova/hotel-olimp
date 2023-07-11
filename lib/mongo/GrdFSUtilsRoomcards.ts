import { connectToRoomCardsDb } from "./";

export class GridFSUtils {
    static async fileExists(filename: string): Promise<boolean> {
        const { client } = await connectToRoomCardsDb();
        const count = await client
        .db("room_cards")
        .collection("images.files")
        .countDocuments({ filename });

        return !!count;
    }
}