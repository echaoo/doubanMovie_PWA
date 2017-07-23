<template>
  <span class='star'>
      <v-icon v-bind:style="{fontSize: starSize + 'px'}" class='orange--text' v-for="n in ratingObj.star" :key="'star'+n">star</v-icon>
      <v-icon v-bind:style="{fontSize: starSize + 'px'}" class='orange--text' v-for="n in ratingObj.half" :key="'half'+n">star_half</v-icon>
      <v-icon v-bind:style="{fontSize: starSize + 'px'}" class='orange--text' v-for="n in ratingObj.left" :key="'left'+n">star_border</v-icon>
  </span>
</template>

<script>
    export default {
        props: ['rating', 'starSize'],
        computed: {
            ratingObj() {
                const intNum = Math.round(this.rating);
                const star = Math.floor(intNum / 2);
                const half = intNum % 2;
                const left = 5 - star - half;
                return {
                    star,
                    half,
                    left,
                };
            },
        },
    };
</script>

<style lang="stylus" scoped>
    .star
        display inline-flex

        .icon
            font-size 16px
            letter-spacing -2px
</style>
