/**
 * Created by lhy95 on 2017/7/16.
 */

import * as types from '../mutation-types';
import axios from 'axios';
import API from '../../config/request';

let state = {
    /**
     * 电影数据列表
     *
     * @type {Array}
     */
    movieList: [],

    /**
     * 电影详情数据集合, 电影id为key， 详情数据为value
     *
     * @type {Object}
     */
    movieDetailMap: {}
};

const actions = {
    async updateMovieList({commit}) {
        let data = [];
        if (localStorage.getItem('updateMovieListTime') !== null) {
            if (localStorage.getItem('movieList') !== null) {
                data = JSON.parse(localStorage.getItem('movieList'));
                commit(types.UPDATE_MOVIE_DATA, data);
            }
            let time = new Date().getTime() - parseInt(localStorage.getItem('updateMovieListTime'));
            if (time > 3600000) {
                data = await getMovieList();
            }
        } else {
            data = await getMovieList();
        }
        // 如果请求不失败，把数据更新，否则不更新，有缓存就用缓存，没有缓存就为空
        if (data.length !== 0) {
            commit(types.UPDATE_MOVIE_DATA, data);
        }
    },
    async getMovieDetail({commit}, movieId) {
        // 如果state里的movieDetailMap为空，说明没初始化，需要从localstorage中取出来进行初始化
        if (JSON.stringify(state.movieDetailMap) === '{}') {
            if (localStorage.getItem('movieDetailMap') !== null) {
                let movieDetailMap = JSON.parse(localStorage.getItem('movieDetailMap'));
                commit(types.UPDATE_MOVIE_DETAIL_MAP, movieDetailMap);
            } else {
                localStorage.setItem('movieDetailMap', JSON.stringify(state.movieDetailMap));
            }
        }

        if (state.movieDetailMap[movieId] === undefined) {
            let data = await getMovieDetailInRemoteByMovieid(movieId);
            let movieDetailMap = state.movieDetailMap;
            movieDetailMap[movieId] = data;
            commit(types.UPDATE_MOVIE_DETAIL_MAP, movieDetailMap);
            localStorage.setItem('movieDetailMap', JSON.stringify(movieDetailMap));
            return Promise.resolve(data);
        } else {
            return Promise.resolve(state.movieDetailMap[movieId]);
        }
    }
};

const mutations = {
    [types.UPDATE_MOVIE_DATA](state, movieList) {
        state.movieList = movieList;
    },
    [types.UPDATE_MOVIE_DETAIL_MAP](state, movieDetailMap) {
        state.movieDetailMap = movieDetailMap;
    }
};

function getMovieList() {
    return axios.get(API.allMovie).then(
        res => {
            localStorage.setItem('movieList', JSON.stringify(res.data.subjects));
            localStorage.setItem('updateMovieListTime', new Date().getTime());
            return Promise.resolve(res.data.subjects);
        },
        () => {
            return Promise.reject([]);
        }
    )
}

function getMovieDetailInRemoteByMovieid(movieId) {
    return axios.get(API.subject + '/' + movieId).then(
        res => {
            return Promise.resolve(res.data);
        },
        () => {
            return Promise.reject(null);
        }
    )
}

export default {
    namespaced: true,
    /* eslint-disable */
    actions,
    mutations,
    state
}
