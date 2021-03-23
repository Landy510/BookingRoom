<template>
  <div>
    <div class="container-fluid px-0 bg-cusdark pt-4">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-cusdark">
            <li class="breadcrumb-item rounded-0"><a href="#" class="text-white">Home</a></li>
            <li class="breadcrumb-item active rounded-0 text-white" aria-current="page">Rooms</li>
          </ol>
        </nav>
        <h2 class="text-cusgold">ROOMS</h2>
        <div class="row">
          <div class="col-md-6 mb-3" v-for = "(item) in RoomData" :key="item.id">
            <div class="Home-bg-cover" :style="{ backgroundImage: `url(${ item.imageUrl })`}" style="height: 390px;"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    loadData () {
      this.$store.dispatch('getAllRoom')
    }
  },
  created () {
    this.loadData()
  },
  computed: {
    RoomData: function () {
      return this.$store.state.Roomdata
    }
  }
}
</script>
<style scroped lang="scss">
.Home-bg-cover {
  background-position: bottom center;
  background-size: cover;
}
</style>
