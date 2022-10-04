<template>
  <q-page
    class="bg-white window-height= window-width row justify-center items-center"
    squared
  >
    <div class="q-pa-md">
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 100px
      margin:fit-content;
       width: 350px;
       height: 570px;
       border-radius: 2px;"
        class="shadow-2 squared-borders"
      >
        <div class="log-in-container">
          <div class="log-in">
            <!-- Instagram Logo-->
            <img
              src="src/assets/instagram-logo.png"
              style="height: 150px; width: 250px"
            />
            <!-- Log in form -->
            <div class="log-in-"></div>
            <q-input
              row
              input-class="10"
              square
              filled
              v-model="email"
              type="email"
              label="Phone number, username, or email"
              height="36"
              weight="213"
              padding= 9px,0,7px,8px;
            />
            <q-input
              square
              filled
              v-model="password"
              type="password"
              label="Password"
            />
            <q-card-actions class="q-px-md">
              <q-btn
                unelevated
                color="light-blue"
                size="lg"
                class="full-width"
                label="Login"
                margin="0"
              />
            </q-card-actions>
            <!--Divider for Facebook -->
            <q-separator color="grey" spaced="" inset="" />
            <!-- Log in Facebook Command-->
            <div class="fb-login-screen">
              <a href="#">
                <img
                  src="src/assets/facebook-icon.png"
                  class="icon"
                  width="16"
                  height="16"
                />
                <div>Log in with Facebook</div>
              </a>
            </div>
            <!-- Forgot Instagram Password -->
            <div>Forgot Password?</div>

            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">Don't have an account? Sign up</p>
              <q-card-section class="text-cente q-pa-none">
                <div>
                  <a
                    aria-label="Download on the App Store"
                    class="instaplaybuttons"
                    href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                    tabindex="0"
                  >
                    <img
                      alt="Download on the App Store"
                      class="Rt8TI"
                      src="src/assets/download on the App Store.png"
                      height="40"
                      width="136"
                  /></a>
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
              </q-card-section>
            </q-card-section>
          </div>
        </div>
      </q-layout>
    </div>
  </q-page>
</template>

<!--<style>
  .q-page{
    width: 600px;
    border-radius: 1px;
  }

.log-in-container {
  margin: 0 auto;
  width: 268px;
  height: 38px;
  border-radius: 1px;

}
.fb-login-screen{
    display: inline-block;
    width: 144.85px;
    height: 17px;
}
.icon {
     display:inline-block;
     margin: 30px;
}
  </style>
-->
