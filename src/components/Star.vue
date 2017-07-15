<template>
  <span class='star'>
    <v-icon class='star-rate' value="star" v-for="n in ratingObj.star" :key="'star'+n"/>
    <v-icon class='star-rate' value="star_half" v-for="n in ratingObj.half" :key="'half'+n"/>
    <v-icon class='star-rate' value="star_border" v-for="n in ratingObj.left" :key="'left'+n"/>
  </span>
</template>

<script>
    export default {
        props: ['rating'],
        computed: {
            ratingObj() {
                const intNum = Math.round(this.rating);
                const star = Math.floor(intNum / 2);
                const half = intNum % 2;
                const left = 5 - star - half;
                console.log(this.rating, star, half, left);
                return {
                    star,
                    half,
                    left,
                };
            },
        },
    };
</script>

<style lang="css" scoped>
    .star {
        display: flex;
    }

    .star-rate {
        font-size: inherit;
        letter-spacing: inherit;
    }
</style>
