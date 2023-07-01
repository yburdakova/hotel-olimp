'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import styles from './LocaleSwitcher.module.css';
import { LocaleSwitcherProps } from '@/constants/interfaces';

export default function LocaleSwitcher({ lang, row }: LocaleSwitcherProps) {

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
        <div className={`flex justify-between first:pl-0 last:pr-0  ${row? "lg:flex-row": "lg:flex-col"} flex-col` }>
          {languageLinks.map(link =>
            <Link key={link} href={redirectedPathName(link)} className={styles.lang_item}>
              {link == 'en' ? "ENG" : link == 'ka' ? "GEO" : "РУС"}
            </Link>
          )}
        </div>
    }
    </div>
  )
}

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