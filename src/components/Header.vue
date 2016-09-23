<template>
    <header>
        <v-nav>
            <router-link class='brand-logo' slot="logo" to='/'>
                <img class="responsive-img" src="public/img/cool_pic.jpg" title='logo'>
            </router-link>
        </v-nav>
    </header>
</template>
<style scoped>
    .responsive-img {
        height: 60px;
        margin: 2px;
    }
</style>
<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>
