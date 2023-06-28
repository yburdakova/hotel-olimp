import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { Resort, Hero, Hotel, Rooms, Restaurant, Socials, OlimpMap, Footer} from './components'
import { trLogo } from '@/public';
import './globals.css';


export default async function Home({ params: { lang }, }: { params: { lang: Locale }}) {
  
  const dictionary = await getDictionary(lang)

  return (
    <div className='relative'>
      <Hero 
        title={dictionary["hero-component"].hotelName} 
        subtitle={dictionary["hero-component"].resortName}
        menu={dictionary["menu"]}
        lang={lang}
      />
      <Resort 
        title={dictionary["resort-component"].title} 
        text={dictionary["resort-component"].text}
        cards={dictionary["resort-component"].sights}
      />
        <Hotel
          title={dictionary["hotel-component"].title} 
          text={dictionary["hotel-component"].text}
          servisesTitle={dictionary["hotel-component"].servises_title}
          servises={dictionary["hotel-component"].servises}
          buttonTitle={dictionary.button}
        />
        <Rooms
          title={dictionary["rooms-component"].title} 
          text={dictionary["rooms-component"].text} 
          roomsTitles={dictionary["rooms-component"]['rooms-titles']}
          currencyLiteral={dictionary.currency}
          time={dictionary['booking-time']}
          roomDictionary={dictionary["rooms-component"].room}
          buttonTitle={dictionary.button}
        />
        <Restaurant
          dictionary={dictionary.restaurant}
        />
        <Socials 
          title={dictionary.socialsTitle}
        />
        <OlimpMap
          lang={lang}
          title={dictionary.contactsTitle}
        />
        <Footer
          title={dictionary["hero-component"].hotelName} 
          subtitle={dictionary["hero-component"].resortName}
          menu={dictionary["menu"]}
          lang={lang}
        />
        <Link href="/">
          <div className="anchor flex fixed w-28 h-28 bottom-10 right-20 z-[100002] overflow-hidden">
            <Image src={trLogo} alt="logo" className='w-[100%]'/>
          </div>
        </Link>
        <Script id="map" src="https://api-maps.yandex.ru/2.1/?apikey=d48460db-1da4-45ae-b185-6a995ea048cd&lang=ru_RU" type="text/javascript"></Script>
    </div>
  )
}