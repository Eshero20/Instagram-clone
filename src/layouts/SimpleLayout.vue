<template>
  <title>Instagram</title>
  <div class="q-pr-lg">
    <q-layout view="hHh LpR fff">
      <q-footer
        class="fixed bg-white text-center transparent capitalize"
        color="white"
      >
        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Meta"
          :to="{ name: '/meta' }"
        />
        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="About"
          :to="{ name: '/About' }"
        />
        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Blog"
          :to="{ name: '/Blog' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Jobs"
          :to="{ name: '/Jobs' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Help"
          :to="{ name: '/Help' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="API"
          :to="{ name: '/API' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Privacy"
          :to="{ name: '/Privacy' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Terms"
          :to="{ name: '/Terms' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Top Accounts"
          :to="{ name: '/Top Accounts' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Hashtags"
          :to="{ name: '/Hashtags' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Locations"
          :to="{ name: '/Locations' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Instagram Lite"
          :to="{ name: '/Instagram Lite' }"
        />

        <q-btn
          flat
          color="grey-6"
          size="sm"
          label="Contact Uploading & Non-Users"
          :to="{ name: '/Contact' }"
        />
      </q-footer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: "SimpleLayout",

  data() {
    return {};
  },
};
</script>
