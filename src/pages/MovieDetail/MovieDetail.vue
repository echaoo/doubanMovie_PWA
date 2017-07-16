<template>
    <div>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
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
                ],
                opacity: 0.5
            });
        },
    }
</script>

<style>

</style>
