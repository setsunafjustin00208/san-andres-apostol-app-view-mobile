<template>
    <div class="music-page mt-4 pb-6 container is-fluid">
      <div class="album-thumbnail p-2">
        <img :src="currentCover" alt="Album Thumbnail" />
      </div>
      <div class="song-list">
        <h3 class="title is-3">450 Years Of Faith Song Album</h3>
        <ul>
          <li
            v-for="(song, index) in musicList"
            :key="index"
            @click="playSong(index)"
            class="columns is-mobile is-vcentered is-clickable song-item"
          >
            <div class="column is-narrow">
              <img :src="song.cover" alt="Song Thumbnail" class="song-thumbnail" />
            </div>
            <div class="column">
              <span class="song-title">{{ song.title }}</span>
              <br />
              <span class="song-artist">{{ song.artist }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="music-control-panel">
        <button @click="previous"><i class="fas fa-backward"></i></button>
        <button @click="togglePlayPause">
          <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
        </button>
        <button @click="next"><i class="fas fa-forward"></i></button>
      </div>
      <div class="audio-controls pb-6">
        <input type="range" min="0" :max="duration" v-model="currentTime" @input="seek" />
        <button ref="volumeButton" @click="toggleVolumeControl" class="volume-button">
          <i class="fas fa-volume-up"></i>
        </button>
        <div ref="volumePopper" class="volume-popper" v-show="showVolumeControl">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            v-model="volume"
            @input="setVolume"
            class="horizontal-range"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Howl, Howler } from 'howler';
  import { createPopper } from '@popperjs/core';
  
  export default {
    name: 'MusicPage',
    data() {
      return {
        currentCover: 'https://saapcandaba.org/wp-content/uploads/2024/09/441928097_844784354340109_6716099744947699904_n-1024x1024.jpg',
        musicList: [
          {
            title: '450 Years of Faith Official Theme Song',
            artist: 'Andrew Sanctus Chorus',
            src: 'https://saapcandaba.org/wp-content/uploads/2024/09/450-Years-of-Faith-Official-Theme-Song.mp3',
            cover: 'https://saapcandaba.org/wp-content/uploads/2024/09/441928097_844784354340109_6716099744947699904_n-1024x1024.jpg'
          },
          {
            title: '450 years of Faith Official Theme Song Solo',
            artist: 'Andrew Sanctus Chorus',
            src: 'https://saapcandaba.org/wp-content/uploads/2024/09/450-years-of-Faith-Official-Theme-Song-Solo.mp3',
            cover: 'https://saapcandaba.org/wp-content/uploads/2024/09/441928097_844784354340109_6716099744947699904_n-1024x1024.jpg'
          },
          {
            title: 'Gandang Sinauna at Sariwa',
            artist: 'Jewel Gem Cunanan',
            src: 'https://saapcandaba.org/wp-content/uploads/2024/09/Gandang-Sinauna-at-Sariwa.mp3',
            cover: 'https://saapcandaba.org/wp-content/uploads/2024/09/455021041_887982143353663_2137900662900575162_n-1024x1024.jpg'
          },
          {
            title: 'Aku Ing Ginu',
            artist: 'Dave David',
            src: 'https://saapcandaba.org/wp-content/uploads/2024/09/Aku-ing-Ginu.mp3',
            cover: 'https://saapcandaba.org/wp-content/uploads/2024/09/457734622_901750741976803_5322593626573004315_n-1024x1024.jpg'
          },
          {
            title: 'Maging Akin Muli',
            artist: '',
            src: 'https://saapcandaba.org/wp-content/uploads/2024/09/462112661_1067391547715770_432676619440158460_n.mp3',
            cover: 'https://saapcandaba.org/wp-content/uploads/2024/09/461516969_921117013373509_2628260238907131120_n-1024x1024.jpg'
          }
        ],
        currentSong: null,
        sound: null,
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        volume: 1,
        showVolumeControl: false
      };
    },
    methods: {
      playSong(index) {
        if (this.sound) {
          this.sound.stop();
        }
        this.currentSong = this.musicList[index];
        this.currentCover = this.currentSong.cover;
        this.sound = new Howl({
          src: [this.currentSong.src],
          html5: true,
          onplay: () => {
            this.isPlaying = true;
            this.duration = this.sound.duration();
            requestAnimationFrame(this.updateProgress);
          },
          onend: () => {
            this.isPlaying = false;
          }
        });
        this.sound.play();
      },
      togglePlayPause() {
        if (this.sound) {
          if (this.isPlaying) {
            this.sound.pause();
          } else {
            this.sound.play();
          }
          this.isPlaying = !this.isPlaying;
        }
      },
      previous() {
        const currentIndex = this.musicList.indexOf(this.currentSong);
        const previousIndex = (currentIndex - 1 + this.musicList.length) % this.musicList.length;
        this.playSong(previousIndex);
      },
      next() {
        const currentIndex = this.musicList.indexOf(this.currentSong);
        const nextIndex = (currentIndex + 1) % this.musicList.length;
        this.playSong(nextIndex);
      },
      seek() {
        if (this.sound) {
          this.sound.seek(this.currentTime);
        }
      },
      setVolume() {
        Howler.volume(this.volume);
      },
      updateProgress() {
        if (this.sound && this.isPlaying) {
          this.currentTime = this.sound.seek();
          requestAnimationFrame(this.updateProgress);
        }
      },
      toggleVolumeControl() {
        this.showVolumeControl = !this.showVolumeControl;
        if (this.showVolumeControl) {
          createPopper(this.$refs.volumeButton, this.$refs.volumePopper, {
            placement: 'top',
          });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .music-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .album-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  .song-list {
    margin-bottom: 2rem;
  }
  
  .song-item {
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }
  
  .song-item:hover {
    background-color: #f0f0f0;
  }
  
  .song-thumbnail {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .song-title {
    font-weight: bold;
  }
  
  .song-artist {
    font-size: 0.9rem;
    color: #666;
  }
  
  .music-control-panel {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 600px;
  }
  
  .music-control-panel button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    flex: 1;
  }
  
  .music-control-panel button:hover {
    color: #007bff;
  }
  
  .audio-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 600px;
  }
  
  .audio-controls input[type="range"] {
    flex: 1;
  }
  
  .volume-button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .volume-popper {
    background: #333;
    border: 1px solid #ccc;
    padding: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .horizontal-range {
    width: 100px;
  }
  </style>
  