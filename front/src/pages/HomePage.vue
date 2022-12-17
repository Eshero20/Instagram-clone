<script setup>
import { reactive, ref } from "vue";
import moment from "moment";
import { useAuthStore } from "../stores/auth";


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
</script>

<template>
  <q-page class="constrain q-pa-xl">
    <div class="row justify-end q-col-gutter-xs q-ml-xl">
      <div class="col-8 q-pa-xl">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="my-card q-mb-sm"
          style="width: auto"
          dense
          bordered
        >
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <q-img src="src/assets/instagram profile photo1.png" />
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
      <div class="col-4">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img
                src="src/assets/instagram profile photo1.png"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-bold">James Madison </q-item-label>
            <q-item-label caption> James Madison </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
</style>
