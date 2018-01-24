<template>
  <div class="2-columns">

    <div class="wrapper nav-collapsed menu-collapsed">
      <side-bar/>
      <div class="main-panel">
          <nav-bar/>
          <div class="main-content">
              <div class="content-wrapper">
                <router-view/>
              </div>
          </div>
          <footer class="footer footer-static footer-light">
              <p class="clearfix text-muted text-sm-center px-2"><span>Copyright  &copy; 2018 <a href="https://viettechcorp.vn" id="pixinventLink" target="_blank" class="text-bold-800 primary darken-2">VIETTECH SOLUTIONS </a>, All rights reserved. </span></p>
          </footer>
      </div>
    </div>

  </div>
</template>

<script>
import '@/scripts/importStyle.js'
import '@/scripts/importLibrary.js'

import SideBar from './components/SideBar'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    'side-bar': SideBar,
    'nav-bar': NavBar
  }
}
</script>
