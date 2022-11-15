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

    <q-drawer show-if-above  v-model="rightDrawerOpen" side="right">
      <div class="q-pa-lg">
            <RouterLink class="active" to="/">
              <q-avatar size="75px">
                <img src="https://cdn.quasar.dev/img/avatar.png">

              </q-avatar>
            </RouterLink>
      </div>
    </q-drawer>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered clas="absolute-fixed">
     <q-scroll-area class="fit">
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
        <q-footer class="absolute-fixed">
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
    </q-scroll-area>
    </q-drawer>
  <q-page-container>
        <q-page>
      <q-card square flat bordered class="text-right" style="width: auto">
          <div class="row q-pa-md justify-center">
            <div class="q-pr-xs q-gutter-xs col-12" style="max-width: 550px; height: 70px">

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


      </q-card>
    <q-seperator />
    <div class="q-pa-md items-start q-gutter-md">
    <q-card
      v-for="post in posts"
      :key="post.id"
      class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="src/assets/InstaProfilePic.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">James Madison</q-item-label>
          <q-item-label caption>
            Rocky Mountains, United States
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
    <div class="q-pa-md row">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />


        <q-card-section>
        <div>Rocky Mounts</div>
        <div class="text-caption text-grey">November 10 9:05am</div>
        </q-card-section>
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
      posts:[{
          id: 1,
          caption: 'Rocky Mounts',
          date: 1591776655504,
          location: 'Rocky Mountains, United States',
          ImageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
      },
      {
          id: 2,
          caption: 'Rocky Mounts',
          date: 1591776655504,
          location: 'Rocky Mountains, United States',
          ImageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
      },
      {
          id: 3,
          caption: 'Rocky Mounts',
          date: 1591776655504,
          location: 'Rocky Mountains, United States',
          ImageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
      },
      {
          id: 4,
          caption: 'Rocky Mounts',
          date: 1591776655504,
          location: 'Rocky Mountains, United States',
          ImageUrl: 'https://cdn.quasar.dev/img/mountains.jpg'
      },

    ]
    };
  },
});
</script>
