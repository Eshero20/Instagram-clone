<template>
  <q-layout view="lHh lpR ffr">
    <q-avatar>
      <q-img width="500px" src="../assets/instagram-logo.png" />
    </q-avatar>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-avatar>
        <q-img src="/assets/instagram-logo.png" />
      </q-avatar>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <div class="q-pa-lg">
          <q-img src="src/assets/instagram-front-logo.png" style="width: 100px">
          </q-img>
        </div>

        <div class="q-bt-sm">
          <div class="q-gutter-md">
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </div>
        </div>
        <q-footer>
          <q-btn flat color="black" label="menu" icon="fa-bars" align="left" style="width: 280px">
            <q-menu fit>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-footer>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "fas fa-home",
    link: "https://quasar.dev",
  },
  {
    title: "Search",
    caption: "",
    icon: "fas fa-search",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Explore",
    caption: "",
    icon: "fas fa-circle",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Messages",
    caption: "",
    icon: "fas fa-message",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Notifications",
    caption: "",
    icon: "fas fa-feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Create",
    caption: "",
    icon: "fas fa-square",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Profile",
    caption: "",
    icon: "fas fa-user",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
