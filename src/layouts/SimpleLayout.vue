<template>
  <title>Instagram</title>
<q-layout view="lHh Lpr lFf">
    <q-footer bordereless class="bg-white small-screen-only">

      <q-btn flat color="grey" label="Meta" :to="{ name: '/meta' }" />
      <q-btn flat color="grey" label="About" :to="{ name: '/About' }" />
      <q-btn flat color="grey" label="Blog" :to="{ name: '/Blog' }" />

      <q-btn flat color="grey" label="Jobs" :to="{ name: '/Jobs' }" />

      <q-btn flat color="grey" label="Help" :to="{ name: '/Help' }" />

      <q-btn flat color="grey" label="API" :to="{ name: '/API' }" />

      <q-btn flat color="grey" label="Privacy" :to="{ name: '/Privacy' }" />

      <q-btn flat color="grey" label="Terms" :to="{ name: '/Terms' }" />

      <q-btn flat color="grey" label="Top Accounts" :to="{ name: '/Top Accounts' }" />

      <q-btn flat color="grey" label="Hashtags" :to="{ name: '/Hashtags' }" />

      <q-btn flat color="grey" label="Locations" :to="{ name: '/Locations' }" />

      <q-btn flat color="grey" label="Instagram Lite" :to="{ name: '/Instagram Lite' }" />

      <q-btn flat color="grey" label="Contact Uploading & Non-Users" :to="{ name: '/Contact' }" />
      
      <q-btn flat color="grey" label="Dance" :to="{ name: '/Dance' }" />

      <q-btn flat color="grey" label="Food & Drink" :to="{ name: '/Food&Drink' }" />

      <q-btn flat color="grey" label="Home & Garden" :to="{ name: '/Home&Garden' }" />

      <q-btn flat color="grey" label="Music" :to="{ name: '/Music' }" />

      <q-btn flat color="grey" label="Visual Arts" :to="{ name: '/Visual Arts' }" />
    </q-footer>
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "SimpleLayout",

  data() {
    return {};
  },
};
</script>
