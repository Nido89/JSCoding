<template>
    <section id="profile">
        <img :src="user.image" alt="" />
        <h3>{{user.name}}</h3>
    </section>
</template>


<script>
export default {
    name:"Profile",
    props:{
        user:Object


    }
}
</script>
<style scoped>
    #profile{
        display: flex;
        padding: 15px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #profile img{
        width: 50%;

    }

</style>