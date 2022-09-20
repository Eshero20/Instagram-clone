<template>
  <q-layout view="hHh LpR fFf" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <img src="~assets/instagram-front-logo.png" style="height: 50px" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-white text-grey">
      <q-item bordered separator>
        <q-item clickable v-ripple>
          <q-item-section> Meta </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> About </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Blog </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Jobs </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Help </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> API </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Privacy </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Terms </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Top Accounts</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Hashtags</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Locations</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Instagram Lite</q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Contact Uploading & Non-Users </q-item-section>
        </q-item>
      </q-item>
      <q-list dense borderless padding class="borderless"></q-list>
      <q-item clickable v-ripple>
        <q-item-section> Hashtags</q-item-section>
      </q-item>
    </q-footer>

    <q-page-container>
      <q-page class="text-center">
        <div>
            <img
            src="~/assets/instagram-front-page-phone.png"
            style="height: 500px; max-width: 1060px ,;"
            class="text-center"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SimpleLayout",
  setup() {
    const linksList = [
      {
        title: "Docs",
        caption: "quasar.dev",
        icon: "school",
        link: "https://quasar.dev",
      },
      {
        title: "Github",
        caption: "github.com/quasarframework",
        icon: "code",
        link: "https://github.com/quasarframework",
      },
      {
        title: "Discord Chat Channel",
        caption: "chat.quasar.dev",
        icon: "chat",
        link: "https://chat.quasar.dev",
      },
      {
        title: "Forum",
        caption: "forum.quasar.dev",
        icon: "record_voice_over",
        link: "https://forum.quasar.dev",
      },
      {
        title: "Twitter",
        caption: "@quasarframework",
        icon: "rss_feed",
        link: "https://twitter.quasar.dev",
      },
      {
        title: "Facebook",
        caption: "@QuasarFramework",
        icon: "public",
        link: "https://facebook.quasar.dev",
      },
      {
        title: "Quasar Awesome",
        caption: "Community Quasar projects",
        icon: "favorite",
        link: "https://awesome.quasar.dev",
      },
    ];
    const tab = ref();
    return { linksList };
  },
});
</script>
