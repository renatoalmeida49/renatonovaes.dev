import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ptBR from './ptBR'
import en from './en'

Vue.use(VueI18n)

const messages = {
  ptBR,
  en
}

const locale = localStorage.getItem('locale') || 'ptBR'

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n;