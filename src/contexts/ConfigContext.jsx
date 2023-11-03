import { createContext } from "solid-js";

// config imports
import Navigation from "../config/navigation.json";
import Translations from "../config/translations.json";

// Create individual config contexts
export const NavigationContext = createContext(Navigation);
export const TranslationContext = createContext(Translations);
