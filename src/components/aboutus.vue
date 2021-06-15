<template>
  <div>
    <boxHeaders></boxHeaders>
    <v-container>
      <h1>About us</h1>
    </v-container>
    <boxFooters></boxFooters>
  </div>
</template>
<script>
import boxHeaders from './layout/boxHeader'
import boxFooters from './layout/boxFooter'
export default {
  name: 'aboutus',
  components: {
    boxHeaders,
    boxFooters
  }
}
</script>
<style scoped>
</style>
