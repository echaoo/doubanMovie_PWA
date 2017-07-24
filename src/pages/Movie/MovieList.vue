<template>
    <div class="movie-wrap">
        <v-container>
            <v-layout row wrap>
                <v-flex xs4 sm4 md3 lg2 v-for="(subject, index) in movieList" :key="index">
                    <div v-on:click="handleClickMovie(subject.id)">
                        <movie-card :subject="subject"></movie-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import API from '../../config/request';
    import {mapActions, mapState} from 'vuex';
    import axios from 'axios';
    import MovieCard from '../../components/MovieCard.vue';
    export default {
        computed: {
            ...mapState('appMovie', [
                'movieList'
            ])
        },
        methods: {
            ...mapActions('appMovie', [
                'updateMovieList'
            ]),
            handleClickMovie(movieId) {
                this.$router.push({name: 'detail', params: {id: movieId}})
            }
        },
        created() {
            this.updateMovieList();
        },
        components: {
            MovieCard
        }
    }
</script>

<style lang="stylus">
    .layout
        .flex
            padding-right 4px
            padding-left 4px
            overflow hidden
</style>
