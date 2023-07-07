import { NextApiRequest, NextApiResponse } from 'next';
import { insertHotelCard } from '../../../lib/mongo/hotelcards';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
        const { img, rus_description, eng_description, geo_description } = req.body;

        console.log('img:', img);

        await insertHotelCard({
            image: img,
            rus_description,
            eng_description,
            geo_description
        });

        return res.status(200).json({ message: 'Hotel card added successfully' });
        } catch (error: any) {
        return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} is not allowed`);
    };

export default handler;