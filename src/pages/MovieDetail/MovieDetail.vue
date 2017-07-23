<template>
    <div class="movie-detail">

        <div style="overflow:hidden">
            <div class="image-wrap" :style="'background-image: url('+movie.images.large+')'">
            </div>
            <div class="title-border">
                <div class="title-info">
                    <div class="title-image">
                        <img :src='movie.images.large'/>
                    </div>
                    <div class="title-text">
                        <p>{{movie.title}}</p>
                        <p>评分：{{movie.rating.average}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="star">
            <Star :rating="movie.rating.average" :star-size="24"></Star>
        </div>
        <div class="info">
            <p class="info-content"><span class="info-title">原名</span><span
                class="info-text">{{movie.original_title}}</span></p>
            <p class="info-content"><span class="info-title">类型</span><span
                class="info-text">{{movie.genres | arr2string}}</span></p>
            <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span>
            </p>
            <p class="info-content"><span class="info-title">地区</span><span
                class="info-text">{{movie.countries | arr2string}}</span></p>
            <p class="info-content"><span class="info-title">又名</span><span
                class="info-text">{{movie.aka | arr2string}}</span></p>
            <p class="info-content"><span class="info-title">想看人数</span><span
                class="info-text">{{movie.wish_count}}</span></p>
            <p class="info-content"><span class="info-title">看过人数</span><span
                class="info-text">{{movie.collect_count}}</span></p>
            <p class="info-content"><span class="info-title">评分人数</span><span
                class="info-text">{{movie.ratings_count}}</span></p>
            <p class="info-content"><span class="info-title">短评数量</span><span
                class="info-text">{{movie.comments_count}}</span></p>
            <p class="info-content"><span class="info-title">影评数量</span><span
                class="info-text">{{movie.reviews_count}}</span></p>
        </div>
        <div class="summary">{{movie.summary}}</div>
        <div class="author">
            <p class="author-type">导演</p>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 class='author-elem' v-for="subject in movie.directors" :key="subject.id">
                        <!--<v-flex xs12 class='author-elem' width="50" tablet="33" desktop="25" v-for="subject in movie.directors"-->
                        <v-card class='author-wrap'>
                            <div class="author-image">
                                <div class='author-padding'
                                     :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
                            </div>
                            <div class="author-name">{{subject.name}}</div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="author">
            <p class="author-type">主演</p>
            <v-layout row wrap>
                <v-flex xs6 sm4 md3 class='author-elem' v-for="subject in movie.casts"
                        :key="subject.id">
                    <v-card class='author-wrap'>
                        <div class="author-image">
                            <div class='author-padding'
                                 :style="'background-image: url('+(subject.avatars && subject.avatars.large || '')+')'"></div>
                        </div>
                        <div class="author-name">{{subject.name}}</div>
                    </v-card>
                </v-flex>

            </v-layout>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import API from '../../config/request';
    import axios from 'axios';
    import Star from '../../components/Star.vue';
    export default {
        data() {
            return {
                movie: {
                    title: '',
                    rating: {
                        average: 0,
                    },
                    images: {},
                    countries: [],
                    genres: [],
                    casts: [],
                    directors: [],
                    aka: [],
                },
            };
        },
        filters: {
            arr2string(value) {
                return value.join(' / ')
            }
        },
        components: {
            Star
        },
        methods: {
            ...mapActions('appShell/appHeader', [
                'setAppHeader'
            ]),
            ...mapActions('appShell/appBottomNavigator', [
                'showBottomNav',
                'activateBottomNav'
            ])
        },
        created() {
            this.setAppHeader({
                show: true,
                title: '',
                showMenu: false,
                showBack: true,
                showLogo: false,
                actions: [
                    {
                        icon: 'search',
                        route: '/search'
                    }
                ]
            });
            axios.get(API.subject + '/' + this.$route.params.id).then(
                res => {
                    this.movie = res.data
                }
            )
        },
    }
</script>

<style lang="stylus" scoped>
    .movie-detail
        .image-wrap
            width 100%
            padding-top 80%
            background: #fff
            background-repeat no-repeat
            background-size cover
            -moz-background-size cover
            overflow hidden

        .title-border
            padding 20px
            box-shadow 0 0px 15px 5px #ccc
            .title-info
                position relative
                text-align left

                .title-image
                    width 30%
                    position absolute
                    bottom 0

                    img
                        width 100%
                        display block

                .title-text
                    overflow hidden
                    position relative
                    font-size 16px
                    font-weight 600
                    padding 4px 0 4px 30%

                    p
                        padding-left 15px
                        margin 0

        .star
            display flex
            justify-content center
            background #eee
            color #ff6f00
            font-size 42px
            padding 8px 0

        .info
            margin 30px
            text-align left
            background-color #fff !important

            .info-content
                span
                    display block

            .info-text
                color #888

    .summary {
        padding: 30px 20px;
        background: #eee;
        color: #212121
    }

    .author {
        margin: 25px;
    }

    .author-type {
        padding: 0px 5px;
        margin: 0;
        text-align left
    }

    .author-elem {
        padding 5px
    }

    .author-wrap {
        position: relative;
        display: block;
        overflow: hidden;
    }

    .author-image {
        float: left;
        width: 50%;
        border-radius: 2px 0 0 2px;
        overflow: hidden;
    }

    .author-padding {
        width: 100%;
        padding-top: 141%;
        background-size: cover;
        -moz-background-size: cover;
    }

    .author-name {
        float: left;
        width: 50%;
        padding: 10px 6px;
    }
</style>
