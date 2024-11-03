<template>
    <div class="container is-fluid pt-6 pb-6">
      <JustInComponent />
      <NewslistingComponent />
      <EventComponent />
    </div>
  </template>
  
  <script>
  import JustInComponent from '/src/components/widgets/JustInComponent.vue';
  import NewslistingComponent from '/src/components/widgets/NewsArticlesListingComponent.vue';
  import EventComponent from '/src/components/widgets/EventComponent.vue';

  export default {
    name: 'HomePage',
    components: {
      JustInComponent,
      NewslistingComponent,
      EventComponent
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles for HomeComponent here */
  </style>