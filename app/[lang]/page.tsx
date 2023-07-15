import { getDictionary } from '../../get-dictionary';
import { Locale } from '../../i18n-config';
import { Resort, Hero, Hotel, Rooms, Restaurant, Socials, OlimpMap, Footer, Anchor } from './components';
import '../../styles/global.css';

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = getDictionary(lang);

  if (!dictionary) {
    return <div>Loading...</div>;
  }


  return (
    <div className='relative'>
      {dictionary && (
        <>
          <Hero
            title={dictionary.heroComponent?.hotelName}
            subtitle={dictionary.heroComponent?.resortName}
            menu={dictionary.menu}
            lang={lang}
            buttonTitle={dictionary.button}
            bookingDictionary={dictionary.guests}
          />
          <Resort
            title={dictionary.resortComponent?.title}
            text={dictionary.resortComponent?.text}
            cards={dictionary.resortComponent?.sights}
          />
          <Hotel
            lang={lang}
            title={dictionary.hotelComponent?.title}
            info={dictionary.hotelComponent?.info}
            servisesTitle={dictionary.hotelComponent?.servisesTitle}
            servises={dictionary.hotelComponent?.servises}
            buttonTitle={dictionary.button}
          />
          <Rooms
            lang={lang}
            title={dictionary.roomsComponent?.title}
            text={dictionary.roomsComponent?.text}
            roomsInfo={dictionary.roomsComponent?.rooms}
            buttonTitle={dictionary.button}
          />
          <Restaurant dictionary={dictionary.restaurant} lang={lang} />
          <Socials
            title={dictionary.socialsTitle}
            follow_text={dictionary?.socials?.follow}
            button_text={dictionary?.socials?.button}
          />
          <OlimpMap lang={lang} title={dictionary.contactsTitle} />
          <Footer
            title={dictionary.heroComponent?.hotelName}
            subtitle={dictionary.heroComponent?.resortName}
            menu={dictionary.menu}
            lang={lang}
          />
          <Anchor />
        </>
      )}
    </div>
  );
}
