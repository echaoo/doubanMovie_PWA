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
    return axios.get(API.allMovie).then(
        res => {
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
