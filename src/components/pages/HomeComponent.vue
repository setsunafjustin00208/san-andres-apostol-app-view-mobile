<template>
    <div class="container is-fluid pt-6">
      <JustInComponent />
      <NewslistingComponent />
    </div>
  </template>
  
  <script>
  import JustInComponent from '/src/components/widgets/JustInComponent.vue';
  import NewslistingComponent from '/src/components/widgets/NewsArticlesListingComponent.vue';
  export default {
    name: 'HomePage',
    components: {
      JustInComponent,
      NewslistingComponent
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles for HomeComponent here */
  </style>