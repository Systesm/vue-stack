<template>

  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <router-link to="contact">Home</router-link>
          <h4 class="card-title">HELLO WORLD</h4>
        </div>
        <div class="card-body">
          <div class="card-block">
            <h3>Content</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
