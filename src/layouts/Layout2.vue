<q-page-container>
  <router-view />
</q-page-container>

<q-footer borderless class="bg-white text-grey">
    <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey" v-model="tab">
      <q-tab name="Meta" label="Meta" />
      <q-tab name="About" label="About" />
      <q-tab name="Blog" label="Blog" />
      <q-tab name="Jobs" label="Jobs" />
      <q-tab name="Help" label="Help" />
      <q-tab name="API" label="API" />
      <q-tab name="Privacy" label="Privacy" />
      <q-tab name="Terms" label="Terms" />
      <q-tab name="Top Accounts" label="Top Accounts" />
      <q-tab name="Hashtags" label="Hashtags" />
      <q-tab name="Locations" label="Locations" />
      <q-tab name="Instagram Lite" label="Instagram Lite" />
      <q-tab name="Contact Uploading & Non-Users" label="Contact Uploading & Non-Users" />
    </q-tabs>
    <q-tabs>
      <q-tab name="Dance" label="Dance" />
      <q-tab name="Food & Drink" label="Food & Drink" />
      <q-tab name="Home & Garden" label="Home & Garden" />
      <q-tab name="Music" label="Music" />
      <q-tab name="Visual Arts" label="Visual Arts" />
    </q-tabs>
    <q-tabs>
        <q-list>
          <q-select
              v-model="lang"
              :options="langOptions"
              label="Language"
              dense
              borderless
              emit-value
              map-options
              options-dense
         style="min-width: 150px"
/>
