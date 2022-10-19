<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const onReset = () => {
  name.value = null;
  age.value = null;
  accept.value = false;
};
</script>

<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="row">
      <div class="col-6 q-pr-xs">
        <q-img height="500px" width="300px" src="../assets/phones.png" />
      </div>
      <div class="col-6 q-pl-xs" style="width: 50%; ">
        <div class="q-pa-md">
          <q-img src="../assets/instagram-logo.png" />
          <q-form @submit="onSubmit" @reset="onReset" class="row">
            <q-input
              outlined
              dense
              v-model="name"
              class="col-12"
              label="Phone number, username, or email"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />

            <q-input
              outlined
              dense
              type="password"
              v-model="password"
              class="col-12"
              label="Password"
              lazy-rules
              :rules="[
                (val) => (val !== null && val !== '') || 'Please type your age',
                (val) => (val > 0 && val < 100) || 'Please type a real age',
              ]"
            />

            <q-btn
              class="col-12"
              label="Log In"
              type="submit"
              color="primary"
            />
          </q-form>
          <q-btn flat src="src/assets/facebook-icon.png" >
            <q-avatar square size="16px">
              <img src="src/assets/facebook-icon.png" label="Log in with facebook">
            </q-avatar>
            <div>log in with facebook </div>
          </q-btn>
          <!-- Forgot Instagram Password -->
          <a href="#"></a>
          <div>Forgot Password?</div>
          <q-card-section class="text-center q-md-md">
            <div class="q-pa-md q-gutter-sm" style="width: 100%; ">
              <q-page
                id="parent"
                class="fit row wrap justify-center items-start content-start"
                style="overflow: hidden"
              >
                <div class="col-gutter- bg-white-6">
                  <div class="row justify-center">
                    <q-card>Don't have an account? Sign up</q-card>

                    <div>
                      <div class="col-4">
                        <div>Get App?</div>
                        <a
                          aria-label="Download on the App Store"
                          class="instaplaybuttons"
                          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                          tabindex="0"
                        >
                          <img
                            alt="Download on the App Store"
                            class="App Button"
                            src="src/assets/download on the App Store.png"
                            height="40"
                            width="136"
                        /></a>
                      </div>
                      <div class="col-5">
                        <a
                          aria-label="Get it on Google Play"
                          class="z1VUo"
                          href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D0805B945-FF48-4C78-809F-9C80BE81B570%26utm_content%3Dlo%26utm_medium%3Dbadge"
                          tabindex="0"
                        >
                          <img
                            alt="Get it on Google Play"
                            class="Rt8TI"
                            src="src/assets/Get it on Google Play.png"
                            height="40"
                            width="136"
                        /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </q-page>
            </div>
          </q-card-section>
        </div>
      </div>
    </div>
  </q-page>
</template>
