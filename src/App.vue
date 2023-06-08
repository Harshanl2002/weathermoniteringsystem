<template >
  <!-- <Search class="card"/> -->
  <WeatherBox class="card" :val=val v-cloak/>
  <div class="small">
    <SmallBox :val="val" cnt="1" />
    <SmallBox :val="val" cnt="2" />
    <SmallBox :val="val" cnt="3" />
    <SmallBox :val="val" cnt="4" />
    <SmallBox :val="val" cnt="5" />
    <SmallBox :val="val" cnt="6" />
    <SmallBox :val="val" cnt="7" />
  </div>
</template>

<script>
// import Search from './components/Search.vue';
import WeatherBox from'./components/wether.vue';
import SmallBox from './components/Small.vue';
export default {
  name: 'App',
  components: {
    // Search,
    WeatherBox,SmallBox
  },
  data(){
    return {
      coordinates:
      {
        lat:0,
        lng:0
      },
      val:{},
    }
  },
  created() {
    this.$getLocation()
    .then((coordinates) => {
        this.coordinates=coordinates;
        // console.log(this.coordinates);
        this.fetchweather();
      })
    .catch((error) => {
        console.log(error);
      });
      
    },
  methods:
  {
    fetchweather(){
    //   console.log(this.coordinates)
      let url=`https://api.weatherapi.com/v1/forecast.json?key=62ce7928966f48269ed91923230806&q=${this.coordinates.lat},${this.coordinates.lng}&days=8`;
      fetch(url)
      .then((resp)=>{
        if(!resp.ok) throw new Error(resp.statusText);
        return resp.json();
        })
      .then(this.seeres)
      .catch(console.error);
      },
      seeres(res)
      {
        console.log(res)
        this.val=res
      },
      timeConverter(date){
        var c=date.split("-")
        var nd= c[2]+"-"+c[1]+"-"+c[0]
        return nd;
    },
      getimg()
      {
        return new URL(this.icon,import.meta.url)
      }

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
