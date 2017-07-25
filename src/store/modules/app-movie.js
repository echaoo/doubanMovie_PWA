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
        let data = await getMovieList();
        commit(types.UPDATE_MOVIE_DATA, data);
    }
};

const mutations = {
    [types.UPDATE_MOVIE_DATA](state, moveList) {
        state.movieList = moveList;
    }
};

function getMovieList() {
    if (localStorage.getItem('updateMovieListTime') !== null) {
        let time = new Date().getTime() - parseInt(localStorage.getItem('updateMovieListTime'));
        if (time < 3600000) {
            if (localStorage.getItem('movieList') !== null) {
                return Promise.resolve(JSON.parse(localStorage.getItem('movieList')));
            }
        }
    }
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
