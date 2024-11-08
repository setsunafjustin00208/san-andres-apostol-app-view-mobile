<script>
import NavbarComponent from './components/widgets/NavbarComponent.vue';
import NavbarButtons from './components/widgets/NavButtonsComponent.vue';

export default {
    name: 'App',
    components: {
        NavbarComponent,
        NavbarButtons
    },
    data() {
        return {
            darkMode: false
        };
    },
    mounted() {
        this.initializeDarkMode();
        this.showPageLoader();
    },
    methods: {
        initializeDarkMode() {
            this.darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
            const theme = this.darkMode ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
        },
        showPageLoader() {
            const loader = document.createElement('div');
            loader.className = 'pageloader';
            loader.innerHTML = '<span class="title">Pageloader</span>';
            document.body.appendChild(loader);
            console.log('Page loader is shown');
        },
        hidePageLoader() {
            const loader = document.querySelector('.pageloader');
            if (loader) {
                document.body.removeChild(loader);
            }
        }
    }
}
</script>

<template>
    <navbarComponent />
    <router-view></router-view>
    <navbarButtons />
</template>

<style scoped>
.pageloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: white;
}
</style>