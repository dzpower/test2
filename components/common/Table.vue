<template>
  <div class="table-side">
    <div class="table">
      <div class="thead">
        <div :class="sortState.asc ? 'th active' : sortState.desc ? 'th active active-reverse' : 'th'" @click="sort">Galaxy Name <img src="/arrow.svg" alt=""></div>
        <div class="th">Constellation</div>
        <div class="th">Origin of name</div>
      </div>
      <div class="tbody">
      <div class="tr" :key="index" v-for="(item, index) in dataTable">
        <div data-table="Galaxy Name" class="td td-figure">
          <img v-if="item.img" :src="item.img" alt="">
          {{ item.name }}
        </div>
        <div data-table="Constellation" class="td">
          {{ item.constellation }}
        </div>
        <div data-table="Origin of name" class="td">
          {{ item.originOfName }}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  created() {
    this.$store.dispatch('getDataTable')
  },
  computed: {
    getSeatch () {
      return this.$store.getters.GET_SEARCH
    },
    sortState () {
      return this.$store.getters.GET_SORT
    },
    dataTable () {
      if (!this.$store.state.search) {
        return this.$store.getters.GET_DATA_TABLE
      }  else {
        return this.$store.getters.GET_DATA_TABLE.filter(item => item.name.toUpperCase().indexOf(this.getSeatch.toUpperCase()) !== -1)
      }
    }
  },
  methods: {
    sort () {
      this.$store.commit('toggleSort')
      this.$store.commit('sortData')
    }
  }
}
</script>

<style scoped>

</style>
