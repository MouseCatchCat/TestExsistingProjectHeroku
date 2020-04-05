<template>
  <div>
    <VueFeedbackReaction v-model="feedback" />
  </div>
</template>

<script>
import { VueFeedbackReaction } from 'vue-feedback-reaction';
export default {
  components: {
    VueFeedbackReaction,
  },
  data() {
    return {
      feedback: '',
    };
  },
};
</script>
