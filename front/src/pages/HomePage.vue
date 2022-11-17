<script setup>
import { reactive, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";
import moment from "moment";

const posts = reactive([
  {
    id: 1,
    caption: "Rocky Mounts",
    date: 1591776655504,
    location: "Rocky Mountains, United States",
    ImageUrl: "https://cdn.quasar.dev/img/mountains.jpg",
  },
  {
    id: 2,
    caption: "Rocky Mounts",
    date: 1591776655504,
    location: "Rocky Mountains, United States",
    ImageUrl: "https://cdn.quasar.dev/img/mountains.jpg",
  },
  {
    id: 3,
    caption: "Rocky Mounts",
    date: 1591776655504,
    location: "Rocky Mountains, United States",
    ImageUrl: "https://cdn.quasar.dev/img/mountains.jpg",
  },
  {
    id: 4,
    caption: "Rocky Mounts",
    date: 1591776655504,
    location: "Rocky Mountains, United States",
    ImageUrl: "https://cdn.quasar.dev/img/mountains.jpg",
  },
]);
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("default", { dateStyle: "long" }).format(date);
};
</script>

<template>
  <q-page class="constrain q-pa-md">
    <div class="items-right q-gutter-md">
<!--     <q-btn round flat to="/">
        <q-avatar size="75px">
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-btn>
      <q-btn round flat to="/">
        <q-avatar size="75px">
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-btn>
      <q-btn round flat to="/">
        <q-avatar size="75px">
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-btn>
      <q-btn round flat to="/">
        <q-avatar size="75px">
          <q-img src="https://cdn.quasar.dev/img/avatar.png" />
     </q-avatar>
      </q-btn>
-->   </div>
    <q-seperator />

    <div class="row justify-end q-col-gutter-lg q-ml-xl">
      <div class="col-8 q-pa-md">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="my-card q-mb-md"
          style="width: auto"
          dense
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <q-img src="src/assets/InstaProfilePic.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-bold">James Madison</q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />
          <q-img :src="post.ImageUrl" />

          <q-card-section>
            <div>{{ post.caption }}</div>
            <div class="text-caption text-grey">
              {{ moment.unix(post.date).format("MMM Do YY") }}
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4">Mini Profile</div>
    </div>

    <div class="q-pa-sm items-start q-gutter-md">
      <q-card
        v-for="post in posts"
        :key="post.id"
        class="my-card"
        flat
        bordered
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <q-img src="src/assets/InstaProfilePic.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">James Madison</q-item-label>
            <q-item-label caption>
              {{ post.location }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />
        <q-img :src="post.ImageUrl" />

        <q-card-section>
          <div>{{ post.caption }}</div>
          <div class="text-caption text-grey">
            {{ moment.unix(post.date).format("MMM Do YY") }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.cardpost
  .q-img
    min-height: 20px
    max-weight: 20px
</style>
