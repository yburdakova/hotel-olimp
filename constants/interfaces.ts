import { StaticImageData } from "next/image";

export interface DictionaryProps {
  language: string;
  code:  string;
  button: string;
  currency : string;
  bookingTime : string;
  socialsTitle : string;
  contactsTitle :  string;
  heroComponent : {
    hotelName :  string;
    resortName :  string;
  },
  menu : {
    resort :  string;
    hotel :  string;
    rooms : string;
    restaurant :  string;
    contacts :  string;
    socials :  string;
  },
  resortComponent : {
    title :  string;
    text :  string;
    sights : {
      card1 :{
        title :  string;
        description :  string;
      },
      card2 :{
        title :  string;
        description :  string;
      },
      card3 :{
        title : string;
        description :  string;
      },
      card4 :{
        title :  string;
        description :  string;
      },
      card5 :{
        title :  string;
        description :  string;
      }
    }
  },
  hotelComponent :{
    title :  string;
    text :  string;
    servisesTitle : string;
    servises : {
      servise1 : string;
      servise2 :  string;
      servise3 :  string;
      servise4 : string;
      servise5 :  string;
      servise6 :  string;
      servise7 :  string;
    }
  },
  roomsComponent :{
      title : string;
      text :  string;
      roomsTitles : {
        room1Title : string;
        room2Title :  string;
        room3Title :  string;
      },
      room :{
        numbersOfbeds :  string;
        facilities : string;
        facilitiesList : {
          ac :  string;
          tv :  string;
          fridge :  string;
          pot :  string;
          bathroom :  string;
          hairdryer :  string;
          shower :  string;
          bath :  string;
          closet :  string;
        }       
    }
  },
  restaurant :{
    title :  string;
    alcohol :  string;
    coffe :  string;
    desert :  string;
    garnish :  string;
    maindish :  string;
    salads : string;
    pasta :  string;
    fromoven :  string;
  }
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
}

export interface ResortProps {
  title: DictionaryProps["resortComponent"]["title"];
  text: DictionaryProps["resortComponent"]["text"]; 
  cards: DictionaryProps["resortComponent"]["sights"]
}

export interface LocaleSwitcherProps {
  lang: string;
  row: boolean;
}

export interface SightCardprops {
  id: number;
  title: string; 
  description: string, 
  image: StaticImageData, 
  active: number, 
  handleClick: (arg0: number)=> void
}

export interface ButtonProps {
  text: DictionaryProps["button"]
}

export interface HotelProps {
  title: DictionaryProps["hotelComponent"]['title'];
  text: DictionaryProps["hotelComponent"]['text'];
  servisesTitle: DictionaryProps["hotelComponent"]["servisesTitle"];
  servises: DictionaryProps["hotelComponent"]["servises"];
  buttonTitle: DictionaryProps["button"]
}

export interface RestaurantProps {
  dictionary: DictionaryProps["restaurant"]
}

export interface SocialsProps {
  title: DictionaryProps["menu"]["socials"]
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
  roomsTitles: DictionaryProps["roomsComponent"]["roomsTitles"];
  currencyLiteral: DictionaryProps["currency"];
  time: DictionaryProps["bookingTime"];
  buttonTitle: DictionaryProps["button"];
  roomDictionary: DictionaryProps["roomsComponent"]["room"]
}

export interface RoomItemProps {
  title: DictionaryProps["roomsComponent"]["title"];
  image: StaticImageData;
  price: string;
  beds: string;
  facilities: string;
  facilitiesList: string[];
  buttonTitle: DictionaryProps["button"]
}