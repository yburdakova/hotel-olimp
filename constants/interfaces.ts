import { StaticImageData } from "next/image";
import {  MouseEventHandler } from "react";

export interface DictionaryProps {
    language: string;
    code: string;
    button: string;
    currency: string;
    bookingTime: string;
    socialsTitle: string;
    contactsTitle: string;
    guests: {
      title: string;
      one: string;
      several: string;
      many: string;
    };
    heroComponent: {
      hotelName: string;
      resortName: string;
    };
    menu: {
      resort: string;
      hotel: string;
      rooms: string;
      restaurant: string;
      contacts: string;
      socials: string;
    };
    resortComponent: {
      title: string;
      text: string;
      sights: {
        [key: string]: {
          title: string;
          description: string;
        };
      };
    };
    hotelComponent: {
      title: string;
      info: {
        [key: string]: string;
      };
      servisesTitle: string;
      servises: {
        [key: string]: string;
      };
    };
    roomsComponent: {
      title: string;
      text: string;
      rooms: {
        [key: string]: {
          name: string;
          description: string;
        };
      };
    };
    restaurant: {
      title: string;
      beverages: string;
      starters: string;
      khachapuri: string;
      sides: string;
      maindish: string;
      salads: string;
      soups: string;
      pizza: string;
    };
    socials: {
      follow: string;
      button: string;
    };
  }
  

export interface OlimpMapProps {
  lang: string;
  title: string;
}

export interface HeaderProps {
  title: string;
  subtitle: string;
  menu: DictionaryProps["menu"];
  lang: string;
  ModalBooking?: boolean;
  buttonTitle?: DictionaryProps["button"];
  bookingDictionary?: DictionaryProps["guests"]
}

export interface ResortProps {
  title: DictionaryProps["resortComponent"]["title"];
  text: DictionaryProps["resortComponent"]["text"]; 
  cards: DictionaryProps["resortComponent"]["sights"]
}

export interface LocaleSwitcherProps {
  lang: string;
  row: boolean;
  flag?: boolean;
  word?: boolean;
}

export interface SightCardprops {
  id: number;
  title: string; 
  description: string, 
  image: StaticImageData, 
  active: number, 
  handleClick: (arg0: number)=> void,
  link: string
}

export interface ButtonProps {
  text: DictionaryProps["button"];
  openModal?: MouseEventHandler<HTMLDivElement>;
  width?: number;
  height?: number;
  textsize?: string;
}

export interface HotelProps {
  data?:any
  title: DictionaryProps["hotelComponent"]['title'];
  info: DictionaryProps["hotelComponent"]['info'];
  servisesTitle: DictionaryProps["hotelComponent"]["servisesTitle"];
  servises: DictionaryProps["hotelComponent"]["servises"];
  buttonTitle: DictionaryProps["button"];
  lang?: string;
}

export interface RestaurantProps {
  dictionary: DictionaryProps["restaurant"];
  lang: string
}

export interface SocialsProps {
  title: DictionaryProps["menu"]["socials"];
  button_text: DictionaryProps["socials"]["button"];
  follow_text: DictionaryProps["socials"]["follow"]
}

export interface InstagramData {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp: string;
  permalink: string;
  thumbnail_url?:  string
}


export interface FooterProps {
  title: string;
  subtitle: string;
  menu: DictionaryProps["menu"];
  lang: string;
}

export interface RoomsProps {
  title: DictionaryProps["roomsComponent"]["title"];
  text: DictionaryProps["roomsComponent"]["text"];
  roomsInfo: DictionaryProps["roomsComponent"]["rooms"];
  buttonTitle: DictionaryProps["button"];
}

export interface RoomItemProps {
  name: string;
  image: StaticImageData;
  numberBedx2: number;
  numberBedx1: number;
  numberSofa: number;
  description: string;
  buttonTitle: DictionaryProps["button"]
}

export interface JsonProps {

}


export interface CurrencyDataProps {
  0: CurrencyDataItemProps[];
}

export interface CurrencyDataItemProps {
  date: string;
  currencies: CurrencyInfoProps[];
  [index: number]: CurrencyDataItemProps;
}
export interface CurrencyInfoProps {
  code: string;
  date?: string;
  diff?: number;
  diffFormated?:string;
  name: string;
  quantity?: number;
  rate?: number;
  rateFormated?: string;
  validFromDate?: string;
  image?: StaticImageData,
  filter?: CurrencyInfoProps | ((prevState: CurrencyInfoProps | null) => CurrencyInfoProps | null)
}

export interface MenuItem {
  name: string;
  image?: StaticImageData,
  url: StaticImageData,
}

export interface FileMetadata {
  ru: string;
  en: string;
  ge: string;
  runame?:string,
  enname?:string;
  gename?:string;
  bedx2?: number,
  bedx1?: number, 
  sofa?: number
}


export interface FileData {
  _id?: string;
  filename: string;
  metadata: FileMetadata;
}