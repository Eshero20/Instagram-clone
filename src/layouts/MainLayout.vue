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

    <q-drawer show-if-above bordered v-model="rightDrawerOpen" side="right">
      <div class="q-pa-lg">
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
                
              </q-avatar>
            </RouterLink>
      </div>
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
          <q-btn
            flat
            color="black"
            icon="fas fa-bars"
            label="menu"
            align="left"
            style="width: 280px"
          >
            <q-menu fit>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>New incognito tab</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                  <q-separator />
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-footer>
      </q-list>
    </q-drawer>

<q-page-container>
<q-page bordered padding>
  <div class="col-5 q-pa-md">
    <q-card square flat bordered class="text-center" style="width: auto">
      <div class="col q-pr-xs text-left">
        <div class="row q-pa-md justify-between items-center">
          <div bordered class="col-20 self-center offset-3 overflow:auto; style=circle border">
            <div class="q-pr-xs q-gutter-md">
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </RouterLink>
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </RouterLink>
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </RouterLink>
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </RouterLink>
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
    <q-seperator />
    <div class="col-13 q-pa-md" style="width: auto">
      <q-card square flat bordered class="text-center col-5 q-pa-sm">
      <div class="q-pa-xs justify-between items-center">
        <div bordered class="col-20 self-center offset-3 overflow:auto; style=circle border">
          <div class="q-pr-xs q-gutter-md">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" style="width: 400px" />
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
          </div>
        </div>
      </div>
      </q-card>
   </div>
</q-page>
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
