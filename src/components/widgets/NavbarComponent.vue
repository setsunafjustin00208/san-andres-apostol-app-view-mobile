<template>
  <div>
    <nav class="navbar is-fixed-top p-1 has-shadow " role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-start mt-1">
          <a role="button" id="menu" class="navbar-burger" :class="{ 'is-active': isMenuVisible }" aria-label="menu" aria-expanded="false" @click="toggleMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <a class="navbar-item logo" href="/">
          <figure class="image is-32x32">
            <img class="is-rounded" src="/public/saap-logo.png" alt="SAAP Logo" />
          </figure>
          <span>
            <p class="pb-1">
              Parokya ning San Andres Apostol
            </p>
          </span>
        </a>
      </div>
    </nav>
    <aside class="menu p-4 box" :class="{ 'is-active': isMenuVisible }" @click.stop>
      <button class="delete is-pulled-right" aria-label="close" @click="toggleMenu"></button>
      <ul class="menu-list mt-2">
        <li><a>Home</a></li>
        <li>
          <a @click="toggleAbout">About <span class="icon"><i :class="aboutIconClass" aria-hidden="true"></i></span></a>
          <ul v-show="isAboutVisible">
            <li><a>Chapel Directory</a></li>
            <li><a>Contact</a></li>
            <li><a>Organizations</a></li>
            <li><a>Parish Priest</a></li>
          </ul>
        </li>
        <li>
          <a @click="toggleArticles">Articles <span class="icon"><i :class="articlesIconClass" aria-hidden="true"></i></span></a>
          <ul v-show="isArticlesVisible">
            <li><a>Sunday Reflections</a></li>
            <li><a>Church News</a></li>
          </ul>
        </li>
        <li><a>Calendar</a></li>
        <li>
          <div class="buttons">
            <button class="button is-material-rounded-yellow">
              <span class="icon is-small">
                <i class="fa-solid fa-mask-ventilator"></i>
              </span>
              <span>Sample Event</span>
            </button>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
      isAboutVisible: false,
      isArticlesVisible: false
    };
  },
  computed: {
    aboutIconClass() {
      return this.isAboutVisible ? 'fa fa-caret-down' : 'fa fa-caret-right';
    },
    articlesIconClass() {
      return this.isArticlesVisible ? 'fa fa-caret-down' : 'fa fa-caret-right';
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    toggleAbout(event) {
      event.stopPropagation();
      this.isAboutVisible = !this.isAboutVisible;
    },
    toggleArticles(event) {
      event.stopPropagation();
      this.isArticlesVisible = !this.isArticlesVisible;
    }
  }
};
</script>

<style scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  border-radius: 0% !important;
  position: fixed;
  overflow-y: auto;
}

.menu.is-active {
  transform: translateX(0);
}

.logo {
  margin-left: -1rem;
}

.navbar {
  z-index: 999;
}

li {
  margin-bottom: 1rem;
}

.button.is-material-rounded-yellow {
  background-color: #FFEB3B;
  color: #000;
  border-radius: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button.is-material-rounded-yellow:hover {
  background-color: #FDD835;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

.button.is-material-rounded-yellow:active {
  background-color: #FBC02D;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14);
}
</style>