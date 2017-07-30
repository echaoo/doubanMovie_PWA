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
    movieList: []
};

const actions = {
    async updateMovieList({commit}) {
        let data;
        if (localStorage.getItem('updateMovieListTime') !== null) {
            let time = new Date().getTime() - parseInt(localStorage.getItem('updateMovieListTime'));
            if (time < 3600000) {
                if (localStorage.getItem('movieList') !== null) {
                    data = JSON.parse(localStorage.getItem('movieList'));
                    commit(types.UPDATE_MOVIE_DATA, data);
                }
            }
            data = await getMovieList();
        } else {
            data = await getMovieList();
        }
        // 如果请求不失败，把数据更新，否则不更新，有缓存就用缓存，没有缓存就为空
        if (data.length !== 0) {
            commit(types.UPDATE_MOVIE_DATA, data);
        }
    }
};

const mutations = {
    [types.UPDATE_MOVIE_DATA](state, moveList) {
        state.movieList = moveList;
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

export default {
    namespaced: true,
    /* eslint-disable */
    actions,
    mutations,
    state
}
