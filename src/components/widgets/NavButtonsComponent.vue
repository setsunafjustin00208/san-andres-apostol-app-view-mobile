<template>
  <div class="buttons box pt-2 pb-2">
    <router-link to="/" class="button is-large is-responsive" active-class="is-active">
      <span class="icon is-large"><i class="fa-solid fa-house"></i></span>
    </router-link>
    <router-link to="/livestream" class="button is-large is-responsive" active-class="is-active">
      <span class="icon is-large"><i class="fa-solid fa-rss"></i></span>
    </router-link>
    <router-link to="/music" class="button is-large is-responsive" active-class="is-active">
      <span class="icon is-large"><i class="fa-solid fa-music"></i></span>
    </router-link>
    <router-link to="/about" class="button is-large is-responsive" active-class="is-active">
      <span class="icon is-large"><i class="fa-solid fa-church"></i></span>
    </router-link>
    <router-link to="/settings" class="button is-large is-responsive" active-class="is-active">
      <span class="icon is-large"><i class="fa-solid fa-gear"></i></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavButtons'
}
</script>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around; /* Changed to space the buttons equally */
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* Optional: to add a shadow effect */
}

.router-link-active {
  background-color: #00d1b2; /* Example active background color */
  color: white; /* Example active text color */
}
</style>