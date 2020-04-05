<template>
  <div id="accordion">
    <Loadings
      :active.sync="isLoading"
      is-full-page="true"
      loader="bars"
      background-color="#343A40"
      color="#42B883"
    ></Loadings>
    <div class="card" v-for="(faq, index) in filteredfaqs" :key="faq.body">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">
          <button
            class="btn btn-outline-primary"
            data-toggle="collapse"
            :href="'#collapse' + index"
            aria-expanded="true"
            :aria-controls="'collapse' + index"
          >
            {{ faq.title }}
          </button>
        </h5>
      </div>

      <div
        :id="'collapse' + index"
        class="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="card-body">{{ faq.body }}</div>
      </div>
    </div>
    <div>
      <button class="fas fa-sync" @click="load()">Reload</button>
    </div>
    <loading :show="show" :label="label"> </loading>
    <VueFeedbackReaction v-model="feedback" />
  </div>
</template>

<script>
import loading from 'vue-full-loading';
// Import component
import Loadings from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

//feedback components
import { VueFeedbackReaction } from 'vue-feedback-reaction';

export default {
  components: {
    loading,
    Loadings,
    VueFeedbackReaction,
  },
  data() {
    return {
      filteredfaqs: [
        { title: 'one', body: '1' },
        { title: 'two', body: '2' },
        { title: 'tree', body: '3' },
      ],
      show: false,
      label: 'Sync projects...',
      isLoading: false,
      feedback: '',
    };
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    load() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
    }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
