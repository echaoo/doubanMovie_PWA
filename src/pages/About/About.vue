<template>
    <div class="about-container" style="background-color:#f5f5f5">
        <div class="title">
            豆瓣Echao
        </div>
        <p class="description">一个PWA版的豆瓣WebAPP</p>

        <h3 class="sub-title">访问此项目的源码</h3>
        <v-card class="list-item" v-on:click="handleClickGithub">
            <v-icon large>link</v-icon>
            <span>Github</span>
        </v-card>

        <h3 class="sub-title">其它说明</h3>
        <p class="sub-description">本项目参考了<a href="http://vdo.ralfz.com">Vdo</a>，主要借鉴了其外观和功能设计，代码实现上有一定区别，想尝试本项目但基础一般的同学可以学习上面的Vdo项目。<br>本项目主要目的是尝试使用<a href="https://lavas.baidu.com/">Lavas</a>（百度出品的一套基于Vue的PWA解决方案）进行PWA尝试开发。关于PWA，可以通过上面的Lavas进行了解。</p>

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
                'hideBottomNav'
            ]),
            handleClickGithub() {
                window.location = 'https://github.com/echaoo/doubanMovie_PWA';
            }
        },
        activated() {
            this.hideBottomNav();
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
            color #63686e
            font-size 48px
            text-align center
            margin 72px 0 10px 0

        .description
            color #424a4f
            font-size 20px
            padding-bottom 60px
            margin-bottom 0
            border-bottom solid 2px #adafad

        .sub-title
            color #63686e
            text-align left
            padding-left 15px
            font-size 16px
            line-height 48px
            margin 0

        .list-item
            text-align left
            padding-left 20px
            background-color #fff
            line-height 50px

        .sub-description
            text-align left
            padding 5px 10px
</style>
