<template>
  <section class="ftco-section bg-light ftco-faqs">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 order-md-last">
          <div class="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" :style="'background-image:url('+image1+');'" />
          <div class="d-flex mt-3">
            <div class="img img-2 mr-md-2 w-100" :style="'background-image:url('+image2+');'" />
            <div class="img img-2 ml-md-2 w-100" :style="'background-image:url('+image3+');'" />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="heading-section mb-5 mt-5 mt-lg-0">
            <h2 class="mb-3">
              Frequently Asks Questions
            </h2>
          </div>
          <div id="accordion" class="myaccordion w-100" aria-multiselectable="true">
            <div class="card">
              <div id="headingOne" class="card-header p-0">
                <h2 class="mb-0">
                  <button
                    href="#collapseOne"
                    class="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <p class="mb-0">
                      How can we help your business?
                    </p>
                    <i class="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>When she reached the first hills of the Italic Mountains</li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="card">
              <div id="headingTwo" class="card-header p-0" role="tab">
                <h2 class="mb-0">
                  <button
                    href="#collapseTwo"
                    class="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p class="mb-0">
                      How long does it take to build a website?
                    </p>
                    <i class="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>When she reached the first hills of the Italic Mountains</li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="card">
              <div id="headingThree" class="card-header p-0" role="tab">
                <h2 class="mb-0">
                  <button
                    href="#collapseThree"
                    class="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p class="mb-0">
                      Can I help your IT Solution for business?
                    </p>
                    <i class="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="card-body py-3 px-0">
                  <ol>
                    <li>Far far away, behind the word mountains</li>
                    <li>Consonantia, there live the blind texts</li>
                    <li>When she reached the first hills of the Italic Mountains</li>
                    <li>Bookmarksgrove, the headline of Alphabet Village</li>
                    <li>Separated they live in Bookmarksgrove right</li>
                  </ol>
                </div>
              </div>
            </div>

            <div class="card">
              <div id="headingFour" class="card-header p-0" role="tab">
                <h2 class="mb-0">
                  <button
                    href="#collapseFour"
                    class="d-flex py-3 px-4 align-items-center justify-content-between btn btn-link"
                    data-parent="#accordion"
                    data-toggle="collapse"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <p class="mb-0">
                      What are those requirements for ITSolutions?
                    </p>
                    <i class="fa" aria-hidden="true" />
                  </button>
                </h2>
              </div>
              <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="card-body py-3 px-0">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      image1: require('~/assets/images/about.jpg'),
      image2: require('~/assets/images/about-1.jpg'),
      image3: require('~/assets/images/about-2.jpg')
    }
  }
}
</script>

<style>

</style>
