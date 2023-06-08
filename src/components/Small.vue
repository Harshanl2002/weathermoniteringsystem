<template>
<div class="sbox">
    <div class="simg">
    </div>
    <div class="stext">
        <h3>{{ degree }}<sup>o</sup></h3>
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
        degree:String,
        date:String,

    },
}
</script>

<style>
.sbox
{
    min-width: 10vw;
    max-width: fit-content;
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
    max-width: 17vw;
    min-height: 13vh;
    margin-top: 2vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.stext
{
    margin-top: 1rem;
}
</style>