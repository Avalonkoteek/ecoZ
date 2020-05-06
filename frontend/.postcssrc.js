module.exports = {
    plugins: {
       'postcss-import': {},
       'postcss-cssnext': {},
       'postcss-url': {},
       'postcss-normalize': {},
       'postcss-nested': {},

       'postcss-preset-env': {
            features: {
                'custom-properties': {
                    importFrom: 'src/assets/styles/customProperties.css',
                    preserve: false,
                },
            }
       }
    }
}
