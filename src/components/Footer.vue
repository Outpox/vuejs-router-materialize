<template>
    <v-footer>
        <div class="container" slot="content">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Footer Content</h5>
                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                        <li><router-link to='#' class="grey-text text-lighten-3">Link 1</router-link></li>
                        <li><router-link to='#' class="grey-text text-lighten-3">Link 2</router-link></li>
                        <li><router-link to='#' class="grey-text text-lighten-3">Link 3</router-link></li>
                        <li><router-link to='#' class="grey-text text-lighten-3">Link 4</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container" slot="copyright">&copy; Copyright 2016</div>
    </v-footer>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                
            }
        }
    }

</script>
