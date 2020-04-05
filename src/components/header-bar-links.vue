<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a>
            <router-link :to="{ name: 'feedback' }"
              ><i class="fas fa-comments fa-2x" aria-hidden="true"></i
            ></router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'https://github.com/johnpapa/vue-getting-started',
    };
  },
};
</script>

<style scoped>
.fa-comments {
  color: white;
}
</style>
