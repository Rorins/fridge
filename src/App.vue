<template>
  <div id="app">

    <Header/>

    <main>
      <SectionOne/>
      <SectionTwo/>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SectionOne from '@/components/SectionOne'
import SectionTwo from '@/components/SectionTwo'

export default {
  name: "App",
  components: {
    Header,
    SectionOne,
    SectionTwo,
  },
};
</script>

<style lang="scss">
@import '@/styles/globals';
@import '@/styles/utilities';
</style>
