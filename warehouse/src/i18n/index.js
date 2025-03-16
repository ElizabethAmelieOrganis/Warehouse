import { createI18n } from "vue-i18n";
import zh from "./langs/zh";
import en from "./langs/en";
const messages = {
  en,
  zh,
};
const i18n = createI18n({
  legacy: false,
  locale: zh,
  messages,
});
