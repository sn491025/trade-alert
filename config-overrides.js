// const webpack = require('webpack');
// require('dotenv').config();

// module.exports = function override(config, env) {

//     config.resolve.fallback = {
//         path: require.resolve('path-browserify'),
//         os: require.resolve('os-browserify/browser'),
//         crypto: require.resolve('crypto-browserify'),
//         buffer: require.resolve('buffer/'),
//         stream: require.resolve("stream-browserify"),
//         vm: require.resolve("vm-browserify"),
//         process: require.resolve("process/browser"),
//     }

//     config.plugins = (config.plugins || []).concat([
//         new webpack.ProvidePlugin({
//             process: 'process/browser.js',
//             Buffer: ['buffer', 'Buffer'],
//         }),
//         new webpack.DefinePlugin({
//             'process.env.REACT_APP_LIVE_URL': JSON.stringify(process.env.REACT_APP_LIVE_URL),
//         }),
//     ]);

//     return config;
// } 