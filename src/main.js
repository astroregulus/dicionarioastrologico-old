import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import About from './components/About.vue'
import ListLetter from './components/ListLetter.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/about': {
    component: About
  },
  '/:letter': {
    component: ListLetter
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': ''
})

router.start(App, '#app')
