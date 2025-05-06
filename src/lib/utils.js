import { LANGUAGE_TO_FLAG } from "../constants/constants";

export function getLanguageFlag(language) {
    if (!language) return null;
    const languageLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[languageLower];
    if (countryCode) {
        return <img src={`https://flagcdn.com/w20/${countryCode}.png`} alt={language} className="inline-block h-3 mr-1" />;
    } else {
        return null; // or a default flag
    }
}