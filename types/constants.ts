export const LOCALE = {
    English: "en",
    Indonesian: "id"
} as const;

export type Locale = (typeof LOCALE)[keyof typeof LOCALE];

export const ISO_LOCALE = {
    [LOCALE.English]: "en-US",
    [LOCALE.Indonesian]: "id-ID"
} as const;

export type IsoLocale = (typeof ISO_LOCALE)[keyof typeof ISO_LOCALE];
