<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useRouter } from "vue-router";
import SignUpForm from "src/components/SignUpForm.vue";

const $q = useQuasar();
const router = useRouter();
const signUp = ref(false);
const username = ref(null);
const password = ref(null);
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
  username.value = null;
  password.value = null;
  accept.value = false;
};
</script>

<template>
  <q-page class="row justify-center items-center q-pb-xs">

    <div class="row q-pb-sm">
      <div class="col-6 text-right">
        <q-img height="650px" width="450px" src="../assets/phones.png" />
      </div>
      <div class="col-5 q-pa-xl  text-left" style="max-width:500px">
        <q-card v-if="!signUp" square flat bordered class="text-center">
          <q-card-section>
            <q-img width="180px" src="../assets/instagram-logo.png" />
          </q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="row q-px-lg">
            <q-input
              outlined
              dense
              v-model="username"
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
                  (val !== null && val !== '') || 'Please type your password',
                (val) => (val > 0 && val < 100) || 'Please type your password',
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
          <div class="text-center">
            <q-btn
              label="log in with Facebook"
              flat
              icon="fa-brands fa-square-facebook"
              color="blue-10"
            />
            <br /><q-btn
              flat
              class="text-body2 text-weight-light text-capitalize"
              label="Forgot password?"
              color="blue-10"
            />
          </div>
        </q-card>
        <SignUpForm v-else />
        <div class="col-6 q-pt-md">
          <q-card square flat bordered class="text-center q-pa-md">
            <div>
              Don't have an account?<q-btn
                flat
                @click="signUp = !signUp"
                color="primary"
                label="Sign up"
                class="text-capitalize q-px-xs"
              />
            </div>
          </q-card>

          <div class="text-center q-pa-lg">Get the app.</div>

          <div class="row justify-center">
            <div class="col-6 text-right q-pr-sm">
            <RouterLink class="active" to="/">
              <img
                @click="router.push('/')"
                alt="Download on the App Store"
                src="src/assets/download on the App Store.png"
                width="150"
              />
            </RouterLink>
            </div>
            <div class="col-6 text-left q-pl-sm">
            <RouterLink class="active" to="/">
              <img
                src="src/assets/Get it on Google Play.png"
                alt="Get it on Google Play"
                width="150"
              />
            </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </q-page>
</template>

<style lang="sass" scoped>


</style>
