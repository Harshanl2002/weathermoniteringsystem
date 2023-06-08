<template>
    <div class="input">
    <input type="text" placeholder="Enter the city" id="input">
    </div>
</template>

<script>

export default
{
    name:'SearchBox',
}
</script>

<style>
.input 
{
    margin-top:10vh ;
    min-width: 40vw;
    max-width: fit-content;
    min-height: 5vh;
    max-height: 5vh;
    border: none;
    border-radius: 15px;
    background-color: #b9ccda40;
    display: flex;
    justify-content: center;
    
}
#input
{
    min-width: 38vw;
    min-height: 4vh;
    border: none;
    border-radius: 15px;
    background-color: #ffffff00;
    color: #fff;
    font-weight: 800;
    font-size: 18px;

}
#input:focus
{
    outline: none;
}
#input::placeholder
{
    color: #fff;
}
</style>