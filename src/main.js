import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import About from './components/About.vue'
import ListLetter from './components/ListLetter.vue'
import Dictionary from './components/Dictionary.vue'
import WordDefinition from './components/WordDefinition.vue'

import DictionaryList from './components/DictionaryList.vue'
import SpecificWord from './components/SpecificWord.vue'
import { filterByLetter } from './filters'

// install router
Vue.use(Router)

Vue.filter('filterByLetter', filterByLetter)

// routing
var router = new Router()

router.map({
  '/about': {
    name: "about",
    component: About
  },
  '/dicionario': {
    name: "dicionario",
    component: Dictionary,
     subRoutes: {
      '/' : {
        component: DictionaryList
      },
      '/letra/:letra':{
        name : 'letra',
        component: DictionaryList
      },
      '/palavra/:id': {
        name: "palavra",
        component: WordDefinition
     }
    }
  },
  '/palavra/:id' : {
    component : SpecificWord
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/dicionario/letra/todas'
})

router.start(App, '#app')
