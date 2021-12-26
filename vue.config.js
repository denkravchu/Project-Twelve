module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/styles/global.scss";`
            },
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Project-Twelve/'
    : '/'
}
