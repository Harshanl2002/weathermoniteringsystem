<template>
    <div class="glassbox" >
        <img :src="getimg(icon)" class="img">
        <div class="text">
            <p>Today,<br>&nbsp;&nbsp;&nbsp;&nbsp;{{ val.name }}</p>
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
      let url=`https://api.openweathermap.org/data/2.5/weather?lat=${this.coordinates.lat}&lon=${this.coordinates.lng}&units=metric&appid=d63ffdc782c304f7d34d21c57518639c`
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
        this.val=res;
        this.temp=parseInt(res.main.temp);
        this.disc=res.weather[0].main;
        this.icon=res.weather[0].icon;
        console.log(res)
      },
      getimg(icon)
      {
        return new URL('https://openweathermap.org/img/wn/'+icon+'@2x.png',import.meta.url)
      }

  }

}
</script>

<style>
.glassbox
{
    min-width: 70vw;
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