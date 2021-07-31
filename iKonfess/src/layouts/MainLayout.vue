<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <!-- Header Planet -->
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{$route.name}} </span>

          <!-- icon for less that medium devices -->
        <q-icon
          name="fab fa-audible"
          size="sm"
          color="primary"
          class="header-icon q-pa-sm lt-md"
        />
        </q-toolbar-title>
        
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="left"
      side="left"
      :width="283"
      bordered
    >
      <!-- insert icon here -->
      <q-icon name="fab fa-audible" size="lg" color="primary" class="q-pa-sm" />

      <!-- left Navigation -->
      <q-list>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-icon name="cottage" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about" exact>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input
        outlined
        rounded
        dense
        placeholder="Search confessions"
        class="q-ma-md"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Jobs and Careers</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Why I quit my job</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"
              >Relationships</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Should I leave him?</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Family</q-item-label>
            <q-item-label class="text-weight-bold"
              >My brother sold our house</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- //Make router view keep alive (ake the page that we just left alive in the background)
       in the back ground even after we leave that page to avoid setting up the onSnapshot hook twice -->
       <keep-alive>
         <router-view />
       </keep-alive>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // setup() {
  //   const leftDrawerOpen = ref(false);
  //   const rightDrawerOpen = ref(false);

  //   return {
  //     leftDrawerOpen,
  //     toggleLeftDrawer() {
  //       leftDrawerOpen.value = !leftDrawerOpen.value;
  //     },

  //     rightDrawerOpen,
  //     toggleRightDrawer() {
  //       rightDrawerOpen.value = !rightDrawerOpen.value;
  //     },
  //   };
  // },
   data () {
    return {
      left: false,
      right: false
    }
  }
};
</script>


<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>