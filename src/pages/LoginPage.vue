<!--<template>
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
-->
<template>
  <div class="iNy2T">
    <a aria-label="Download on the App Store" class="instaplaybuttons" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabindex="0">
    <img alt="Download on the App Store" class="Rt8TI " src="src/assets/download on the App Store.png" height="40" width="136"></a>
    <a aria-label="Get it on Google Play" class="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D0805B945-FF48-4C78-809F-9C80BE81B570%26utm_content%3Dlo%26utm_medium%3Dbadge" tabindex="0">
    <img alt="Get it on Google Play" class="Rt8TI " src="src/assets/Get it on Google Play.png" height="40" width="136"></a></div>
  <q-page
    class="bg-white window-height window-width row justify-center items-center"
  >
    <div>
      <img
        src="~/assets/instagram-front-page-phone.png"
        style="width: 220px; height: 330px"
      />
    </div>
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-black q-my-md"></h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <div>
                <img src="~assets/instagram-front-logo.png" style="width: 250px;
                height: 50px" object fit: cover />
              </div>
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="Phone number, username, or email"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="light-blue"
              size="lg"
              class="full-width"
              label="Login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Don't have an account? Sign up</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style>
.q-card {
  width: 360px;
}
</style>

