<template>
  <div class="banner_image bg-cover">
    <nav class="navbar navbar-expand-lg px-5 navbar_background">
    <router-link to="/" class="navbar-brand">
      <h1>
        <img src="../assets/img/Group.svg" alt="Lavik Logo">
      </h1>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item h5 mb-0">
          <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item h5 mb-0">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item h5 mb-0">
          <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Rooms</a>
        </li>
        <li class="nav-item h5 mb-0">
          <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Reservation</a>
        </li>
        <li class="nav-item h5 mb-0">
          <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Navbar',
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {
    $('.banner_image').css('height', `${window.innerHeight}px`)
    $(window).resize(function () {
      $('.banner_image').css('height', `${window.innerHeight}px`)
    })
  }
}
</script>

<style scoped lang="scss">
  .header-font {
    font-size: 45px;
  }
  .navbar_background {
    background-color: rgba(177, 158, 115, 0.7);
  }
  .banner_image {
    background-image: url(../assets/img/banner.png);
    min-height: 660px;
  }
</style>
