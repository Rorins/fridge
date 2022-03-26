<template>
  <div id="app">

    <Header/>

    <main>
      <SectionOne/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SectionOne from '@/components/SectionOne'

export default {
  name: "App",
  components: {
    Header,
    SectionOne,
  },
};
</script>

<style lang="scss">
@import '@/styles/globals';
@import '@/styles/utilities';
</style>
