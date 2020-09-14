<template>
  <div>
    <div class="header header-between">
      <h1 class="page-title">
        Named galaxies
      </h1>
      <label>
        <input
          :value="search"
          placeholder="Search"
          type="search"
          class="search"
          @input="handleSearch"
        >
      </label>
    </div>
    <Table/>
  </div>
</template>

<script>
import Table from "~/components/common/Table";

export default {
  components: {
    Table
  },
  computed: {
    search () {
      return this.$store.state.search
    }
  },
  methods: {
    setSearch (e) {
      this.$store.commit('setSearch', e.data)
    },
    handleSearch (e) {
      this.$store.commit('setSearch', e.target.value)
    }
  }
}
</script>
