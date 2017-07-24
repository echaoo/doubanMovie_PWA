<template>
    <div>
        <movie-list></movie-list>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import MovieList from './MovieList.vue';

    export default {
        name: 'home',
        props: {},
        data() {
            return {
                moveList: []
            };
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
        async asyncData() {
            await new Promise((resolve, reject) => {
                console.log(123);
                setTimeout(resolve, 500);
            });
        },
        activated() {
            this.setAppHeader({
                show: true,
                title: '豆瓣电影',
                showMenu: true,
                showBack: false,
                showLogo: true,
                actions: [
                    {
                        icon: 'search',
                        route: '/search'
                    }
                ]
            });
            this.activateBottomNav('home');
            this.showBottomNav();
        },
        components: {
            MovieList
        }
    };
</script>

<style lang="stylus" scoped>
    $text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)

    .content
        width 100%
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)

        h2
            font-size 46px
            font-weight 500

        h2, h4
            color $text-color

</style>
