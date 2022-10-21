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
      <div class="col-5 q-py-xl">
        <q-img height="500px" width="300px" src="../assets/phones.png" />
      </div>
      <div class="col-6 q-pr-sm" style="width: 55%">
        <q-page class="q-pa-md">
          <q-card
            square
            flat
            bordered
            class="shadow-10; text-center; q-pa-xl"
            style="width:360px;height:460px; fit;"
          >
            <div class="loginbox">
              <q-img
                width="250px"
                class="q-pr-xl"
                position="5px 0px "
                src="../assets/instagram-logo.png"
              />
              <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="row"
                style="max-width: 250px"
              >
                <q-input
                  outlined
                  dense
                  v-model="name"
                  class="col-12"
                  label="Phone number, username, or email"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type log in',
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
                    (val) =>
                      (val !== null && val !== '') ||
                      'Please type your password',
                    (val) =>
                      (val > 0 && val < 100) || 'Please type your password',
                  ]"
                />

                <q-btn
                  class="col-12"
                  label="Log In"
                  type="submit"
                  color="primary"
                />
              </q-form>
              <div class="q-pa-md">
                <q-separator color="black" inset />
              </div>
            </div>
            <div class="text-center">
              <q-btn flat src="src/assets/facebook-icon.png">
                <q-avatar square size="16px">
                  <img
                    src="src/assets/facebook-icon.png"
                    label="Log in with Facebook"
                    style=""
                  />
                </q-avatar>
                <div class="text-lowercase">log in with Facebook</div>
              </q-btn>
            </div>

            <!-- Forgot Instagram Password -->
            <a href="#"></a>
            <div class="text-center">
              <q-btn
                flat
                class="q-pl"
                label="Forgot password?"
                color="blue-2"
              />
            </div>
          </q-card>
          <div class="col-6 q-pr-ms" style="width: 55%">
            <q-card
              square
              flat
              bordered
              class="shadow-10; text-center; q-pa-lg"
              style="width:360px;height:100px; fit;"
            >
              <div class="q-pa-md q-gutter-sm text-center" style="width: 100%">
                <div class="col-gutter-sm">
                  <div class="justify-center">
                    <div class="col-12">
                      <div>
                        Don't have an account?<q-btn
                          flat
                          color="primary"
                          label="Sign up"
                          class="text-capitalize text-no-wrap"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </q-card>
            <div class="text-right">Get App.</div>
            <q-page class="q-xy-md">

                <div class="row justify-center">
                  <div class="col-12 col-md">
                    <a
                      href="https://apps.apple.com/us/app/instagram/id389801252?itsct=apps_box_badge&amp;itscg=30200"
                      ><img
                        alt="Download on the App Store"
                        src="src/assets/download on the App Store.png"
                        width="150"

                    /></a>
                  </div>
                  <div class="col-12 col-md-2">
                    <a
                      href="ttps://play.google.com/store/apps/details?id=com.instagram.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      ><img
                        src="src/assets/Get it on Google Play.png"
                        alt="Get it on Google Play"
                        width="150"
                    /></a>
                  </div>

                </div>

            </q-page>
          </div>
        </q-page>
      </div>
    </div>
  </q-page>
</template>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 700px 100px;
}
</style>
