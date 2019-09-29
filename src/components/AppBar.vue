<template>
<v-card>
  <v-app-bar
    color="deep-purple accent-4"
    dark
    prominent
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

  <div class="flex-grow-1"></div>

  </v-app-bar>
  <v-navigation-drawer height="100vh"
    v-model="drawer"
    absolute
    temporary
  >
    <v-list
      nav
      dense
    >
    <v-list-item-group 
      dense
      v-model="group"
      active-class="deep-purple--text text--accent-4"
    >
      <v-list-item
          v-for="item in items"
          :key="item.title"
        >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</v-card>
    
</template>


<script>
  export default {
    name: "AppBar",
    data: () => ({
      drawer: false,
      group: null,
      items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Summary', icon: 'mdi-account' },
          { title: 'Movers', icon: 'mdi-account-group-outline' },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
