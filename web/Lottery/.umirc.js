// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'Lottery',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:9500',
      changeOrigin: true,
    },
  },
};
