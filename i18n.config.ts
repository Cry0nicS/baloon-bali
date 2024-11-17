import en from "./shared/i18n/messages.en";
import id from "./shared/i18n/messages.id";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages: {id, en}
}));
