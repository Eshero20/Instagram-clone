<template>
  <title>Instagram</title>
<q-layout view="lHh Lpr lFf">
    <q-footer class="bg-white small-screen-only text-center text-h6" >

      <q-btn unelevated flat color="grey"   size="sm" label="Meta" :to="{ name: '/meta' }" />
      <q-btn flat color="grey" size="sm" label="About" :to="{ name: '/About' }" />
      <q-btn flat color="grey" size="sm" label="Blog" :to="{ name: '/Blog' }" />

      <q-btn flat color="grey" size="sm" label="Jobs" :to="{ name: '/Jobs' }" />

      <q-btn flat color="grey" size="sm" label="Help" :to="{ name: '/Help' }" />

      <q-btn flat color="grey" size="sm" label="API" :to="{ name: '/API' }" />

      <q-btn flat color="grey" size="sm" label="Privacy" :to="{ name: '/Privacy' }" />

      <q-btn flat color="grey" size="sm" label="Terms" :to="{ name: '/Terms' }" />

      <q-btn flat color="grey" size="sm" label="Top Accounts" :to="{ name: '/Top Accounts' }" />

      <q-btn flat color="grey" size="sm" label="Hashtags" :to="{ name: '/Hashtags' }" />

      <q-btn flat color="grey" size="sm" label="Locations" :to="{ name: '/Locations' }" />

      <q-btn flat color="grey" size="sm" label="Instagram Lite" :to="{ name: '/Instagram Lite' }" />

      <q-btn flat color="grey" size="sm" label="Contact Uploading & Non-Users" :to="{ name: '/Contact' }" />

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
