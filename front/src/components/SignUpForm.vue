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

<template>
  <q-card
    constrain
    square
    flat
    bordered
    class="row q-px-y-sm"
    style="max-width:500px"
  >
    <div class="row q-pt-md text-center card1">
      <q-card-section class="q-pt-xs">
        <q-img width="180px" src="../assets/instagram-logo.png" />
        <div class="text-center text-bold q-px-sm q-pt-xs text-accent Banner">
          <h7>Sign up to see photos and videos from your friends.</h7>
        </div>
        <br />

        <q-btn
          class="col-12 text-capitalize text-bold"
          size="13px"
          padding="5px 50px 5px 50px "
          label="log in with Facebook"
          icon="fa-brands fa-square-facebook"
          color="blue-6"
        />
        <br />
        <div class="RegisterForm1">
          <q-form
            :key="FormInput"
            @submit="onSubmit"
            @reset="onReset"
            class="q-pa-sm"
            style="max-width: fit-content"
          >
            <q-input
              square
              bg-color="grey-2"
              outlined
              dense
              v-model="email"
              class="col-12 q-mt-md q-px-lg q-pb-xs q-pb-xs"
              label="Mobile Number or email"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please type number or email',
              ]"
            />

            <q-input
              square
              bg-color="grey-2"
              outlined
              dense
              type="Full Name"
              v-model="FullName"
              class="col-12 q-px-lg q-pb-xs"
              label="Full Name"
              lazy-rules
              :rules="[
                (val) => (val > 0 && val < 100) || 'Please type your Full Name',
              ]"
            />
            <q-input
              square
              bg-color="grey-2"
              outlined
              dense
              v-model="Username"
              class="col-12 q-px-lg q-pb-xs"
              label="Username"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type Username',
              ]"
            />

            <q-input
              square
              bg-color="grey-2"
              outlined
              dense
              type="password"
              v-model="password"
              class="col-12 q-px-lg q-px-xs"
              label="Password"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') || 'Please type your password',
                (val) => (val > 0 && val < 100) || 'Please type your password',
              ]"
            />

            <div
              class="text-center text-secondary text-caption q-pt-xs q-gutter-y-sm text-weight-regular text-body2"
            >
              People who use our service may have uploaded your contact
              information to Instagram.
              <RouterLink class="active" text-secondary to="/"
                >Learn More</RouterLink
              >
              <br />
            </div>
            <div
              class="text-center text-secondary on-right text-caption q-pb-sm q-gutter-y-sm"
            >
              <br />
              By signing up, you agree to our
              <RouterLink class="active" text-secondary to="/">Terms</RouterLink
              >,
              <RouterLink class="active" text-secondary to="/"
                >Privacy Policy
              </RouterLink>
              and
              <RouterLink class="active" text-secondary to="/"
                >Cookied Policy.</RouterLink
              >
            </div>
            <q-btn
              class="text-capitalize q-mt-md"
              v-model="SubmitButton"
              size="15px"
              :disabled="!isComplete"
              label="Sign up"
              type="submit"
              padding="0px 100px 0px 100px"
              color="primary"
            />
          </q-form>
        </div>
      </q-card-section>
    </div>
  </q-card>
</template>

<style scoped>
.Banner {
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.card1 {
  align-items: center;
  border: 14in;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: 100%;
  margin: -30px;
  padding: 40px 20px 20px 20px;


}


.RegisterForm1 {
  flex: content;
  margin: 0px;
  padding: 6px 10px 10px 10px;
  text-overflow: ellipsis;
}
</style>
