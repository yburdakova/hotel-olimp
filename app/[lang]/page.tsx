
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import { Resort, LocaleSwitcher, Hero, Booking} from './components'
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
      
      {/* <Booking/> */}
      <Resort 
        title={dictionary["resort-component"].title} 
        text={dictionary["resort-component"].text}
        cards={dictionary["resort-component"].sights}
      />
    
    </div>
  )
}