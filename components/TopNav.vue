<template>
  <div class="wrap">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md d-flex align-items-center">
          <p class="mb-0 phone">
            <span class="mailus">Phone no:</span>
            <a :href="`tel://${phone_number}`">{{ phone_number }}</a> or
            <span class="mailus">email us:</span>
            <a :href="`mailto:${email}`">{{ email }}</a>
          </p>
        </div>
        <div class="col-12 col-md d-flex justify-content-md-end">
          <div class="social-media">
            <p class="mb-0 d-flex">
              <a target="_blank" :href="facebook_url" class="d-flex align-items-center justify-content-center">
                <span class="fa fa-facebook">
                  <i class="sr-only">Facebook</i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contacts from '../content/contacts.json'
export default {
  data () {
    return {
      email: contacts.email,
      phone_number: contacts.phone,
      facebook_url: contacts.facebook_url
    }
  }
}
</script>
<style>

</style>
