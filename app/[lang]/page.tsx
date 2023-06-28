
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { Resort, Hero, Hotel, Rooms, Restaurant, Socials, OlimpMap} from './components'
import './globals.css';

export default async function Home({ params: { lang }, }: { params: { lang: Locale }}) {
  
  const dictionary = await getDictionary(lang)

  return (
    <div>
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
    </div>
    
  )
}