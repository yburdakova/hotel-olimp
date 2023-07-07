
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { Header, Resort, Hero, Hotel, Rooms, Restaurant, Socials, OlimpMap, Footer, Anchor} from './components'
import Hotel2 from './components/Hotel2/Hotel2'
import './globals.css';
import { getHotelCards } from '@/lib/mongo/hotelcards';



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
        bookingDictionary={dictionary.guests}
      />
      <Resort 
        title={dictionary.resortComponent.title} 
        text={dictionary.resortComponent.text}
        cards={dictionary.resortComponent.sights}
      />
        <Hotel
          title={dictionary.hotelComponent.title} 
          info={dictionary.hotelComponent.info}
          servisesTitle={dictionary.hotelComponent.servisesTitle}
          servises={dictionary.hotelComponent.servises}
          buttonTitle={dictionary.button}
        />
        <Hotel2
          lang={lang}
          title={dictionary.hotelComponent.title} 
          info={dictionary.hotelComponent.info}
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
          lang={lang}
        />
        <Socials 
          title={dictionary.socialsTitle}
          follow_text={dictionary["socials"].follow}
          button_text={dictionary["socials"].button}
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
        <Anchor/>
        
    </div>
  )
}