import clientPromise from "../../lib/mongo";
import { ObjectId } from "mongodb";

let client
let db: any 
let hotelcards: any

async function init() {
    if (db) return
    try{
        const client = await clientPromise
        const db = client.db("hotel_olimp")
        hotelcards = db.collection("hotelcards")
    } catch (error) {
        throw new Error('Failed to stabilish connection to database')
    }
}

(async()=>{
    await init()
})()

//GET HOTEL CARDS

export async function getHotelCards() {
    try {
        if (!hotelcards) await init()
        const result = await hotelcards
            .find({})
            .limit(10)
            .map((user: { _id: ObjectId }) => ({ ...user, _id: user._id.toString() }))
            .toArray();

        return {hotelcards: result}
    } catch (error) {
        console.error(error)
        return { error: 'Falied to fetch hotelcards!'}
    }
};

// ADD NEW CARD

export async function insertHotelCard(cardData:any) {
    try {
        if (!hotelcards) await init();
        const result = await hotelcards.insertOne(cardData);
        return result;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to insert hotel card");
}
}