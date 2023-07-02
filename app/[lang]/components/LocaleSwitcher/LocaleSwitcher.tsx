'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import styles from './LocaleSwitcher.module.css';
import { LocaleSwitcherProps } from '@/constants/interfaces';

export default function LocaleSwitcher({ lang, row, flag }: LocaleSwitcherProps) {

  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const [languageLinks, setLanguageLinks] = useState(['ka', 'en', 'ru'])
  
  const [isLang, setIsLang] = useState (false)

  useEffect(() => {
    setLanguageLinks(languageLinks.filter(link => link !== lang));
    setIsLang(true);
  }, [lang])

  return (
    <div>
      { isLang &&
        <div className={`flex justify-around first:pl-0 last:pr-0  ${row? "lg:flex-row": "lg:flex-col"} flex-col w-[120px]` }>
          {languageLinks.map(link =>
          flag ?
            <Link key={link} href={redirectedPathName(link)} className={styles.lang_item_falg}>
              {link == 'en' ? 
                <span className={`${styles.flag}  fi fi-gb`}></span> 
              : link == 'ka' ? 
                <span className={`${styles.flag} text-3xl border fi fi-ge`}></span> 
              : <span className={`${styles.flag} text-3xl border fi fi-ru`}></span>}
            </Link>
          : <Link key={link} href={redirectedPathName(link)} className={styles.lang_item}>
              {link == 'en' ? 
                "English"
              : link == 'ka' ? 
                "ქართული"
              : "Русский"}
          </Link> 
          )}
        </div>
    }
    </div>
  )
}

{/* <Link key={link} href={redirectedPathName(link)} className={styles.lang_item}>
{link == 'en' ? 
  <span className="text-3xl border fi fi-gb"></span> 
: link == 'ka' ? 
  <span className="text-3xl border fi fi-ge"></span> 
: <span className="text-3xl border fi fi-ru"></span>}
</Link> */}
// Variant 2 - custom selection 

  // import { i18n } from '../../../../i18n-config';
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);
  // const toggling = () => setIsOpen(!isOpen);

  
      {/* <div>
        <div onClick={toggling}>
          {selectedOption || "Select language..."}
        </div>
          {isOpen && (
            <div>
              {i18n.locales.map((locale) => (
                  <li key={locale}>
                    <Link href={redirectedPathName(locale)}>{locale == 'en' ? "English language" : locale == 'ka' ? "ქართული ენა" :  "Русский язык"}</Link>
                  </li>
              ))}
            </div>
          )}
      </div> */}