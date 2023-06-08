<template>
    <div class="glassbox" >
        <img :src="getimg(icon)" class="img">
        <div class="text">
            <p>Today,<br>&nbsp;&nbsp;&nbsp;&nbsp;{{ name }}</p>
            <div class="d">{{Math.round(temp)}}°</div>
            <div>{{ disc}}</div>
        </div>
    </div>
</template>

<script>
export default
{
    name:'WeatherBox',
    data(){
    return {
      coordinates:
      {
        lat:0,
        lng:0
      },
      val:{},
      name:{},
      temp:{},
      disc:{},
      icon:{},
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
      let url=`https://api.weatherapi.com/v1/forecast.json?key=62ce7928966f48269ed91923230806&q=${this.coordinates.lat},${this.coordinates.lng}&aqi=no&alerts=no`;
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
        this.temp=res.forecast.forecastday[0].day.avgtemp_c
        this.date=this.timeConverter(res.forecast.forecastday[0].date)
        this.icon=res.forecast.forecastday[0].day.condition.icon
        this.icon=("https:".concat(this.icon))
        this.disc=res.forecast.forecastday[0].day.condition.text
        this.name=res.location.name+", "+res.location.region
        console.log(this.icon)

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
.glassbox
{
    min-width: 80vw;
    max-width: fit-content;
    min-height: 50vh;
    background-color: #b9ccda6f;
    border-radius: 20px;
    margin-top: 10vh;
    padding: 5vh;
    display: flex;
    align-items: start;
    justify-content: center;
    
}
.img
{
    min-width: 15vw;
    max-width: 15vw;
    min-height: 25vh;
    margin-right: 1vw;
    /* background-color: white; */
    display: flex;
    justify-content: center;
    align-items: center;

}
.text
{
    min-width: 25vw;
    max-width: 25vw;
    min-height: 25vh;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-left: 1vw;
    flex-direction: column;
}
.lo
{
    padding-left: 2vw;
    font-size: 20px;
}
.deg
{
    display: flex;

}
.d
{
    font-size: 6rem;
    font-weight: 100;
}
.sup
{
    margin-top: 10px;
    font-size: medium;
    font-weight: 600;
}
.notation
{
    margin-left: 2vw;
    margin-top: 25px;
    font-size: 4rem;
    font-weight: 200;
}


</style>