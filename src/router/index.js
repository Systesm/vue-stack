import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Async get components
function view (name) {
  return function (resolve) {
    // eslint-disable-next-line
    System.import(`@/container/${name}.vue`).then(mod => {
      resolve(mod)
    })
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: view('HelloWorld')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: view('Contact')
    }
  ]
})
