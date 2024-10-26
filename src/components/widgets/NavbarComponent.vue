<template>
    <div>
      <nav class="navbar is-fixed-top p-1" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-start mt-2">
            <a role="button" id="menu" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <a class="navbar-item" href="https://bulma.io">
            <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M170 132.571V27.5908C170 25.5451 170.915 23.93 172.746 22.7456C174.576 21.5612 176.729 20.969 179.206 20.969H210.377C232.019 20.969 242.84 30.4441 242.84 49.3943C242.84 62.5303 238.264 71.0902 229.112 75.074C234.603 77.2275 238.748 80.2692 241.548 84.1992C244.347 88.1292 245.747 93.8627 245.747 101.4V104.791C245.747 116.743 242.84 125.437 237.026 130.875C231.211 136.312 223.351 139.031 213.445 139.031H179.206C176.514 139.031 174.307 138.385 172.584 137.093C170.861 135.801 170 134.293 170 132.571ZM190.834 120.619H209.085C219.529 120.619 224.751 114.751 224.751 103.015V100.431C224.751 94.401 223.432 90.0404 220.794 87.3486C218.156 84.6568 214.253 83.3109 209.085 83.3109H190.834V120.619ZM190.834 66.8371H208.923C213.122 66.8371 216.326 65.5989 218.533 63.1225C220.74 60.646 221.844 57.2544 221.844 52.9475C221.844 48.7483 220.686 45.4374 218.371 43.0148C216.057 40.5922 212.853 39.3809 208.762 39.3809H190.834V66.8371ZM260.283 103.015V27.4293C260.283 25.2759 261.306 23.6608 263.351 22.5841C265.397 21.5074 267.873 20.969 270.781 20.969C273.688 20.969 276.164 21.5074 278.21 22.5841C280.256 23.6608 281.279 25.2759 281.279 27.4293V103.015C281.279 115.397 287.2 121.588 299.044 121.588C310.888 121.588 316.81 115.397 316.81 103.015V27.4293C316.81 25.2759 317.833 23.6608 319.879 22.5841C321.925 21.5074 324.401 20.969 327.308 20.969C330.215 20.969 332.692 21.5074 334.738 22.5841C336.783 23.6608 337.806 25.2759 337.806 27.4293V103.015C337.806 115.72 334.28 125.061 327.227 131.036C320.175 137.012 310.781 140 299.044 140C287.308 140 277.914 137.039 270.861 131.117C263.809 125.195 260.283 115.828 260.283 103.015ZM356.703 132.409V27.4293C356.703 25.2759 357.725 23.6608 359.771 22.5841C361.817 21.5074 364.293 20.969 367.201 20.969C370.108 20.969 372.584 21.5074 374.63 22.5841C376.676 23.6608 377.699 25.2759 377.699 27.4293V120.619H417.106C419.044 120.619 420.579 121.534 421.709 123.365C422.84 125.195 423.405 127.349 423.405 129.825C423.405 132.301 422.84 134.455 421.709 136.285C420.579 138.116 419.044 139.031 417.106 139.031H365.908C363.432 139.031 361.279 138.439 359.448 137.254C357.618 136.07 356.703 134.455 356.703 132.409ZM434.872 132.409V31.467C434.872 27.9138 435.868 25.2759 437.86 23.5532C439.852 21.8304 442.355 20.969 445.37 20.969C449.354 20.969 452.423 21.6689 454.576 23.0686C456.729 24.4684 459.098 27.4832 461.682 32.1131L481.548 68.2907L501.413 32.1131C503.997 27.4832 506.393 24.4684 508.6 23.0686C510.808 21.6689 513.903 20.969 517.887 20.969C520.902 20.969 523.405 21.8304 525.397 23.5532C527.389 25.2759 528.385 27.9138 528.385 31.467V132.409C528.385 134.455 527.335 136.07 525.236 137.254C523.136 138.439 520.686 139.031 517.887 139.031C514.98 139.031 512.503 138.439 510.458 137.254C508.412 136.07 507.389 134.455 507.389 132.409ZM539.529 130.31C539.529 130.094 539.637 129.556 539.852 128.694L571.023 27.1063C571.669 24.8452 573.257 23.0956 575.787 21.8573C578.318 20.6191 581.198 20 584.428 20C587.658 20 590.565 20.6191 593.149 21.8573C595.734 23.0956 597.349 24.8452 597.995 27.1063L629.166 128.694C629.381 129.556 629.489 130.094 629.489 130.31C629.489 132.678 628.035 134.724 625.128 136.447C622.221 138.17 619.26 139.031 616.245 139.031C612.261 139.031 609.892 137.631 609.139 134.832L603.001 113.351H566.016L559.879 134.832C559.125 137.631 556.756 139.031 552.773 139.031C549.65 139.031 546.662 138.197 543.809 136.528C540.956 134.859 539.529 132.786 539.529 130.31ZM570.377 96.8775H598.479L584.428 47.2948L570.377 96.8775Z" fill="black" class="bd-svg-black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#00D1B2"/>
            </svg>
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
      isArticlesVisible: false,
      touchStartX: 0,
      touchEndX: 0,
      touchInProgress: false
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
    toggleMenu(event) {
      this.isMenuVisible = !this.isMenuVisible;
    },
    toggleAbout(event) {
      event.stopPropagation();
      this.isAboutVisible = !this.isAboutVisible;
    },
    toggleArticles(event) {
      event.stopPropagation();
      this.isArticlesVisible = !this.isArticlesVisible;
    },
  },
  mounted() {
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchmove', this.handleTouchMove);
    document.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeDestroy() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
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
  }
  
  .menu.is-active {
    transform: translateX(0);
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
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
  </style>