export const i18n = {
    defaultLocale: 'ka',
    locales: ['en', 'ka', 'ru'],
} as const


export type Locale = (typeof i18n)['locales'][number];