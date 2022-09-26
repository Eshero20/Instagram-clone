<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-grey-10">
      <q-toolbar class="constrain">
        <q-separator class="large-screen-only" spaced="12px" vertical />
        <q-toolbar-title class="text-center">
          <img src="~assets/instagram-front-logo.png" style="height: 50px" />
        </q-toolbar-title>
        <q-btn
          to="/"
          class="large-screen-only"
          flat
          round
          icon="none"
          size="18px"
        />
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-white small-screen-only">
      <q-btn flat color="grey" label="Meta" :to="{ name: '/meta' }" />
      <q-btn flat color="grey" label="About" :to="{ name: '/About' }" />
      <q-btn flat color="grey" label="Blog" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Jobs" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Help" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="API" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Privacy" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Terms" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Top Accounts" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Hashtags" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Locations" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Instagram Lite" :to="{ name: '/meta' }" />

      <q-btn
        flat
        color="grey"
        label="Contact Uploading & Non-Users"
        :to="{ name: '/meta' }"
      />
      <q-btn flat color="grey" label="Dance" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Food & Drink" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Home & Garden" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Music" :to="{ name: '/meta' }" />

      <q-btn flat color="grey" label="Visual Arts" :to="{ name: '/meta' }" />
    </q-footer>
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
    <q-page-container>
      <q-page class="row justify-center">
        <div class="q-pa-md doc-container">
          <div>
            <img
              src="~/assets/instagram-front-page-phone.png"
              style="height: 500px; max-width: 1060px"
              class="center"
            />
            <div class="row justify-center">
              <div class="col-2"></div>
            </div>
          </div>
        </div>
      </q-page>
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

<style lang="sass">
.q-toolbar__title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
.q-footer
  .q-tab__icon
    font-size: 30px

.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 65px
</style>
