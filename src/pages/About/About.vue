<template>
    <div class="about-container">
        <div class="title">
            <div>豆瓣Echao</div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions('appShell/appHeader', [
                'setAppHeader'
            ])
        },
        activated() {
            this.setAppHeader({
                show: true,
                title: '关于',
                showMenu: false,
                showBack: true,
                showLogo: true
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .about-container
        .title
            color: #474a4f;
            font-size: 48px;
            text-align: center;
            margin: 72px 0;

</style>
