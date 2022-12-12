<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";


const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "o_home",
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
    icon: "o_explore",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Messages",
    caption: "",
    icon: "fa-regular fa-envelope",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Notifications",
    caption: "",
    icon: "o_favorite_border",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Create",
    caption: "",
    icon: "circle_add_o",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Profile",
    caption: "",
    icon: "o_account_circle",
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
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("default", { dateStyle: "long" }).format(
        date
      );
    },
  },
});


</script>

<template>
  <q-layout view="lHh LpR Ffr">
    <q-avatar>
      <q-img width="500px" src="../assets/instagram-logo.png" />
    </q-avatar>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-avatar>
        <q-img src="/assets/instagram-logo.png" />
      </q-avatar>
    </q-drawer>

    <!--  <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <div class="q-pa-lg">
        <RouterLink class="active" to="/">
          <q-avatar size="75px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </RouterLink>
      </div>
    </q-drawer>
  -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      clas="absolute-fixed"
    >
      <q-scroll-area class="fit">
        <q-list>
          <div class="q-pa-lg">
            <q-img
              src="src/assets/instagram-front-logo.png"
              style="width: 100px"
            >
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
          <q-footer class="bg-white text-primary">
            <q-btn
              flat
              class="absolute-fixed text-capitalize text-weight-bolder"
              color="white"
              text-color="black"
              size="16px"
              icon="fas fa-bars"
              label="More"
              align="left"
              style="width: 280px size:200px"
            >
              <q-menu fit>
                <q-list style="max-width: 400px">
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>

                    <q-item-section avatar>
                      <q-icon name="o_settings" />
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Saved</q-item-section>

                    <q-item-section avatar>
                      <q-icon name="bookmark_border" />
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Report a problem</q-item-section>

                    <q-item-section avatar>
                      <q-icon name="o_live_help" />
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Switch accounts</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable @click="onLogoutClicked">
                    <q-item-section side>
                      <q-icon v-if="!loading" name="logout" />
                      <q-spinner v-else size="sm" color="primary" />
                    </q-item-section>
                    <q-item-section> Logout </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-footer>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
