<template>
  <v-app>
    <AppBar />
    <v-content class="mt-12">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'App',
  components: {
      AppBar
  },
  data: () => ({
    
  }),
};
</script>
