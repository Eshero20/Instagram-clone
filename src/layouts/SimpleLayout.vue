<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 400px"
      class="shadow-2 rounded-borders"
    >
      <q-header bordered class="bg-white text-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <img src="~assets/instagram-front-logo.png" style="height: 50px" />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>
      <q-footer bordered class="bg-white text-primary">
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey"
          v-model="tab"
        >
          <q-tab name="Meta" label="Meta" />
          <q-tab name="About" label="About" />
          <q-tab name="Blog" label="Blog" />
          <q-tab name="Jobs" label="Jobs" />
          <q-tab name="Help" label="Videos" />
          <q-tab name="API" label="API" />
          <q-tab name="Privacy" label="Privacy" />
          <q-tab name="Terms" label="Terms" />
          <q-tab name="Top Accounts" label="Top Accounts" />
          <q-tab name="Hashtags" label="Hashtags" />
          <q-tab name="Locations" label="Locations" />
          <q-tab name="Instagram Lite" label="Instagram Lite" />
        </q-tabs>
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey"
          v-model="tab"
        >
          <q-tab
            name="Contact Uploading & Non-Users"
            label="Contact Uploading & Non-Users"
          />
        </q-tabs>
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey"
          v-model="tab"
        >
          <q-tab name="Dance" label="Dance" />
          <q-tab name="Food & Drink" label="Food & Drink" />
          <q-tab name="Home & Garden" label="Home & Garden" />
          <q-tab name="Music" label="Music" />
          <q-tab name="Visual Arts" label="Viusal Arts" />
        </q-tabs>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <div>
            <img
              src="~/assets/instagram-front-page-phone.png"
              style="height: 300px; max-width: 1060px"
            />
          </div>

        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
