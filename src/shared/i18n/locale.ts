export const locales = ["pt-BR", "en-US"] as const;

export type Locale = (typeof locales)[number];

export type LocalizedText = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;
