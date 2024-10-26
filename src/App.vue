<script>
import NavbarComponent from './components/widgets/NavbarComponent.vue';
import NavbarButtons from './components/widgets/NavButtonsComponent.vue';

export default {
    name: 'App',
    components: {
        NavbarComponent,
        NavbarButtons
    }
}
</script>

<template>
    <navbarComponent />
    <router-view></router-view>
    <navbarButtons />
</template>

<style scoped>
</style>