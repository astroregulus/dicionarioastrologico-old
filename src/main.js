import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import About from './components/About.vue'
import ListLetter from './components/ListLetter.vue'
import Dictionary from './components/Dictionary.vue'
import DictionaryItem from './components/DictionaryItem.vue'
import { filterByLetter } from './filters'

// install router
Vue.use(Router)

Vue.filter('filterByLetter', filterByLetter)

// routing
var router = new Router()

router.map({
  '/about': {
    component: About
  },
  '/dicionario': {
    component: Dictionary
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/dicionario'
})

router.start(App, '#app')
