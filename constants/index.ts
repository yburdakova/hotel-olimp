import { slide1, slide2, slide3, slide4, slide5, slide6 } from "@/public";

import { instagram, telegram, facebook, whatsapp } from '@/public';
import features from "./features";

export {
    features
}

export const sliderImages = [
    slide1, slide2, slide3, slide4, slide5, slide6
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
