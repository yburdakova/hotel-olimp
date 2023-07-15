import 'server-only';
import type { Locale } from './i18n-config';

import enDictionary from './dictionaries/en.json';
import kaDictionary from './dictionaries/ka.json';
import ruDictionary from './dictionaries/ru.json';

const dictionaries = {
    en: enDictionary,
    ka: kaDictionary,
    ru: ruDictionary,
};

export const getDictionary = (locale: Locale) => dictionaries[locale];