<template>
  <div class="wrapper-block">
    <Aside/>
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import Aside from "~/components/common/Aside";

export default {
  components: {
    Aside
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-block {
    display: flex;
    padding-left: 19.32%;
    align-items: flex-start;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 17px;
    }
  }
  .main-content{
    width: 100%;
    max-width: 100%;
    padding: 70px 60px;
    min-height: 100vh;

    @media (max-width: 640px) {
      padding: 0;
      padding-top: 60px;
    }
  }
</style>
