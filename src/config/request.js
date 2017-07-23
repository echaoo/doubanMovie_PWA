/**
 * Created by yiche on 17/7/15.
 */

let baseUrl = '/api/';

if (process.env.NODE_ENV === 'development'){
    baseUrl = 'http://localhost:8082/mock/api/';
}

const request = {
    allMovie: baseUrl + 'movie/in_theaters?city=北京',
    subject: baseUrl + 'movie/subject'
};

module.exports = request;
