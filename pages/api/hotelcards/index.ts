import { NextApiRequest, NextApiResponse } from 'next'
import { getHotelCards } from '../../../lib/mongo/hotelcards'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try{
            const {hotelcards, error} = await getHotelCards()
            if (error) throw new Error(error)

            return res.status(200).json({ hotelcards })
        } catch (error: any) {
            return res.status(500).json({ error: error.message })
        }
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed`)
}

export default handler