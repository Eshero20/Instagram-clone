<template>
  <q-page class="flex flex-center">
    <img
      alt="Instagram logo"
      src="~assets/instagram-front-page-phone.png"
      style="width: 250px; height: 500px"
    />
    <q-badge>
      <q-input
        outlined
        v-model="text"
        label="Phone number, username or email"
      />
      <q-input outlined v-model="text" label="Password" item-aligned:right />
      <div class="row justify-center"></div>
      <div class="col-3"></div>
    </q-badge>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "IndexPage",
});
</script>
