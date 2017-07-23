/**
 * Created by yiche on 17/7/23.
 */

let express = require('express');

module.exports = function (app) {
    app.use('/mock/api/movie/in_theaters', (req, res) => {
        res.send(require('../mock/movie.json'));
    })
};
