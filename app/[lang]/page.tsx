import Image from 'next/image';
import Link from 'next/link';

import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { Header, Resort, Hero, Hotel, Rooms, Restaurant, Socials, OlimpMap, Footer} from './components'
import { trLogo } from '@/public';
import './globals.css';


export default async function Home({ params: { lang }, }: { params: { lang: Locale }}) {
  
  const dictionary = await getDictionary(lang)

  return (
    <div className='relative'>
      <Hero 
        title={dictionary.heroComponent.hotelName} 
        subtitle={dictionary.heroComponent.resortName}
        menu={dictionary.menu}
        lang={lang}
        buttonTitle={dictionary.button}
      />
      <Resort 
        title={dictionary.resortComponent.title} 
        text={dictionary.resortComponent.text}
        cards={dictionary.resortComponent.sights}
      />
        <Hotel
          title={dictionary.hotelComponent.title} 
          text={dictionary.hotelComponent.text}
          servisesTitle={dictionary.hotelComponent.servisesTitle}
          servises={dictionary.hotelComponent.servises}
          buttonTitle={dictionary.button}
        />
        <Rooms
          title={dictionary.roomsComponent.title} 
          text={dictionary.roomsComponent.text} 
          roomsTitles={dictionary.roomsComponent.roomsTitles}
          currencyLiteral={dictionary.currency}
          time={dictionary.bookingTime}
          roomDictionary={dictionary.roomsComponent.room}
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
          title={dictionary.heroComponent.hotelName} 
          subtitle={dictionary.heroComponent.resortName}
          menu={dictionary.menu}
          lang={lang}
        />
        <Link href="#top">
          <div className="anchor">
            <Image src={trLogo} alt="logo" className='w-[100%]'/>
          </div>
        </Link>
        
    </div>
  )
}