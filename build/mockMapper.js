/**
 * @file 描述mock数据路由的文件
 * @author echaoo(1299529160@qq.com)
 */

/**
 * 为express实例app挂载上各种mock路由
 * @param{Object} app express实例
 */
function mockMapper(app) {
    app.use('/mock/api/movie/in_theaters', (req, res) => {
        res.send(require('../mock/movie.json'));
    });
    app.use('/mock/api/movie/subject/*', (req, res) => {res.send(require('../mock/movieDetail.json'))})
}

module.exports = mockMapper;
