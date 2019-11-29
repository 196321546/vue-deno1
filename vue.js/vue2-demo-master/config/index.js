module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: 'localhost', //ip地址
        user: 'root', //帐号
        pass: '88888888', //密码
        port: 8080 //端口
    },
    devDist: { //部署正式服务器上
        remotePath: '/app/', //部署到服务器的路径
        host: 'localhost', //ip地址
        user: 'root', //帐号
        pass: '88888888', //密码
        port: 8080 //端口
    },
    publicPath: '/app/', //程序在网站根路径地址
    target: 'https://cnodejs.org/' //连接的服务器地址
}
