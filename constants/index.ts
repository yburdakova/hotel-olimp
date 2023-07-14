import { ter1, ter3, ter4, newter1, newter2 } from "@/public";
import { instagram, telegram, facebook, whatsapp } from '@/public';
import features from "./features";

export {
    features
}

export const sliderImages = [
    newter1,
    ter1, 
    ter3,
    newter2,
    ter4
]

export const socials = [
    {
        name: 'Instagram',
        image: instagram,
        link: 'https://www.instagram.com/olimp_shekvetili/'
    },
    {
        name: 'Telegram',
        image: telegram,
        link: 'https://tele.click/Olimphotel'
    },
    {
        name: 'Facebook',
        image: facebook,
        link: 'https://www.facebook.com/OlimpShekvetiliHotel/'
    },
    {
        name: 'WhatsAppp',
        image: whatsapp,
        link: 'https://wa.me/995595536060'
    }
]
