<template>
    <v-card>
        <v-card-media :src="subject.images.large">
        </v-card-media>
        <v-card-title>
            <div>
                <h3>{{subject.title}}</h3>
            </div>
            <p class="star-box">
                <span class="paper-star" v-if="subject.rating.average > 0">
                  <Star class="star" :rating='subject.rating.average'></Star>
                </span>
                <span class='paper-rating'>{{subject.rating.average | fixNum}} </span>
            </p>
        </v-card-title>
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

<style scoped>

</style>
