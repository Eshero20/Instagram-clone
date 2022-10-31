<template>
  <q-card square flat bordered class="q-pa-xs q-pt-xs q-pb-xs">
    <div class="col-12 text-center">
      <q-card-section>
        <q-img width="250px" src="../assets/instagram-logo.png" />
      </q-card-section>
      <div class="text-center text-weight-bold q-pb-xs" color="grey">
        Sign up to see photos and videos from your friends.
      </div>

      <br />
      <q-separator dark inset />
      <q-btn
        class="col-12 q-py-xs"
        label="log in with Facebook"
        icon="fa-brands fa-square-facebook"
        color="blue-6"
      />

      <q-form @submit="onSubmit" @reset="onReset" class="q-pa-xs">
        <q-input
          outlined
          dense
          v-model="email"
          class="col-12 q-pa-xs"
          label="Mobile Number or email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type number or email',
          ]"
        />

        <q-input
          outlined
          dense
          type="Full Name"
          v-model="FullName"
          class="col-12 q-pa-xs"
          label="Full Name"
          lazy-rules
          :rules="[
            (val) => (val > 0 && val < 100) || 'Please type your Full Name',
          ]"
        />
        <q-input
          outlined
          dense
          v-model="username"
          class="col-12 q-pa-xs"
          label="Username"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type Username']"
        />

        <q-input
          outlined
          dense
          type="password"
          v-model="password"
          class="col-12 q-pa-xs"
          label="Password"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please type your password',
            (val) => (val > 0 && val < 100) || 'Please type your password',
          ]"
        />

        <div class="text-center q-pa-xs text-bold text-body2">
          People who use our service may have uploaded your contact information
          to Instagram.
        </div>
        <q-btn class="col-12" label="Sign up" type="submit" color="primary" />
      </q-form>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "LoginAccount",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
};
</script>

<style></style>
