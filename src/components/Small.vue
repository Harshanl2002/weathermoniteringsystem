<template>
<div class="sbox">
    <img class="simg" :src="icon">
    <div class="stext">
        <h3>{{ Math.round(temp) }}°</h3>
    </div>
    <div class="stext">
        <h3>{{ date }}</h3>
    </div>
</div>

</template>
<script>

export default
{
    name:'SmallBox',
    props:{
        cnt:Number,
    },
    data()
    {
        return {
        coordinates:
      {
        lat:0,
        lng:0
      },
      val:{},
      temp:{},
      date:{},
      icon:{},
    }
  },
  created() {
    this.$getLocation()
    .then((coordinates) => {
        this.coordinates=coordinates;
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
      let url=`https://api.weatherapi.com/v1/forecast.json?key=62ce7928966f48269ed91923230806&q=${this.coordinates.lat},${this.coordinates.lng}&days=8&aqi=no&alerts=no`;
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
        this.temp=res.forecast.forecastday[this.cnt].day.avgtemp_c
        this.date=this.timeConverter(res.forecast.forecastday[this.cnt].date)
        this.icon=res.forecast.forecastday[this.cnt].day.condition.icon
        this.icon=("https:".concat(this.icon))
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
.sbox
{
    min-width: 10vw;
    max-width: 10vw;
    min-height: 30vh;
    background-color: #b9ccda6f;
    border-radius: 20px;
    margin-top: -13vh;
    margin-left: 1vw;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    color: #081a33;
}
.simg
{
    min-width: 7vw;
    max-width: 7vw;
    min-height: 13vh;
    margin-top: 2vh;
    /* background-color: white; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.stext
{
    margin-top: 1rem;
}
</style>