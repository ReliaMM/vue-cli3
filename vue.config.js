module.exports = {
    lintOnSave: true,
    devServer:{
        port:8080,
        open: true,
        proxy: {
            '/mock': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                  '^/mock': '/'
                }
              }
        }
    },
   
}