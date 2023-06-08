<template >
  <Search class="card"/>
  <WeatherBox class="card"/>
  <div class="small">
    <SmallBox/>
    <SmallBox/>
    <SmallBox/>
    <SmallBox/>
    <SmallBox/>
    <SmallBox/>

  </div>
</template>

<script>
import Search from './components/Search.vue';
import WeatherBox from'./components/wether.vue';
import SmallBox from './components/Small.vue';
export default {
  name: 'App',
  components: {
    Search,WeatherBox,SmallBox
  }
}
</script>

<style>
*
    {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    #app{
      min-width: 100vw;
      min-height: 100vh;
      box-sizing: border-box;
      background: url(./assets/background.jpg);
      background-attachment: fixed;
      display:flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
  }
  .card { box-shadow: rgba(0, 0, 0, 0.409) 0px 28px 50px 0px; }
  .small
  {
    min-width: 60vw;
    display: flex;
    justify-content: space-evenly;
  }
  </style>
