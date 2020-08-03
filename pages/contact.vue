<template>
  <div>
    <Hero2 title="Contact Us" background="freepik_100.jpg" />

    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper px-md-4">
              <div class="row mb-5">
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker" />
                    </div>
                    <div class="text">
                      <p><span>Address:</span> {{ address }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone" />
                    </div>
                    <div class="text">
                      <p><span>Phone:</span> <a :href="`tel://${phone_number}`">{{ phone_number }}</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane" />
                    </div>
                    <div class="text">
                      <p><span>Email:</span> <a :href="`mailto:${email}`">{{ email }}</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-md-12">
                  <iframe
                    :src="map_url"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import contacts from '../content/contacts.json'
export default {
  data () {
    return {
      email: contacts.email,
      phone_number: contacts.phone,
      address: contacts.address,
      map_url: contacts.map_url
    }
  }
}
</script>

<style>

</style>
