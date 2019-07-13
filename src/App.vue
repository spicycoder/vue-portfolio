<template>
  <v-app :dark="darkMode">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Naveen</span>
        <span class="font-weight-light">Kumar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat to="/">Skills</v-btn>
      <v-btn flat to="/experience">Experience</v-btn>
      <v-btn flat to="/about">About</v-btn>
    </v-toolbar-items>
      <v-btn
        fab
        large
        @click="toggleDarkMode"
      >
        <v-icon>invert_colors</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      darkMode: true
    }
  },
  methods: {
    toggleDarkMode: function () {
      this.darkMode = !this.darkMode;
    }
  }
}
</script>
