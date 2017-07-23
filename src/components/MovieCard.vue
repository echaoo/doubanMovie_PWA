<template>
    <v-card class="card-container">
        <div class='card-img' :style="'background-image: url('+subject.images.large+')'"></div>
        <p class="movie-title">{{subject.title}}</p>
        <p class="star-box" v-if="subject.rating.average > 0">
            <span class="paper-star">
                <Star class="star" :rating='subject.rating.average'></Star>
            </span>
            <span class='paper-rating'>{{subject.rating.average}}</span>
        </p>
        <p class="star-box" v-else>
            <span class="empty">暂无评价</span>
        </p>
    </v-card>
</template>

<script>
    import Star from './Star.vue';

    export default {
        props: ['subject'],
        components: {
            Star,
        },
        methods: {
            ratingStar(item) {
                const intNum = Math.round(item);
                const star = Math.floor(intNum / 2);
                const half = intNum % 2;
                const left = 5 - star - half;
                return {
                    star,
                    half,
                    left,
                };
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .card-container

        .card-img
            width 100%
            height 161px
            background-size cover
            margin-bottom 4px

        .movie-title
            width 100%
            font-size 14px
            text-overflow ellipsis
            margin: 0
            padding: 0 6px
            height: 18px
            line-height: 16px
            overflow: hidden
            white-space: nowrap

        .star-box
            color orange
            margin-bottom 10px

            .paper-star
                vertical-align sub
            .empty
                height: 26px
                display: inline-block
</style>
