import { LANGUAGE_TO_FLAG } from "../constants/constants";

export function getLanguageFlag(language) {
    if (!language) return null;
    const languageLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[languageLower];
    if (countryCode) {
        return `https://flagcdn.com/w20/${countryCode}.png`
    } else {
        return null; // or a default flag
    }
}