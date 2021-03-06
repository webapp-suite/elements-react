const path = require('path');
const { merge } = require('webpack-merge');

const maxAssetSize = 1024 * 1024;

const includedStories = process.env.STORYBOOK_ENV === 'docs' ? '(stories)' : '(stories|visual)';

module.exports = {
    stories: ["../src/**/*.stories.mdx", `../src/**/*.@${includedStories}.tsx`],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-toolbars",
        "@storybook/addon-docs",
        "@storybook/addon-controls",
        "@storybook/addon-actions",
    ],
    webpackFinal: async(config) => {
      // config.entry = ['core-js', ...config.entry];
      config.module.rules.push({
          test: /\.stories\.tsx/,
          use: [{ loader: "story-description-loader", options: { isTSX: true } }],
      });

      config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(__dirname, '../'),
        });

      config.module.rules
          .find(rule => rule.test.toString() === /\.css$/.toString())
          .exclude = [/node_modules\/fundamental-styles/];

      config.module.rules.push({
          test: /.css$/,
          include: [
              /node_modules\/fundamental-styles/
          ],
          use: [
              {
                  loader: 'style-loader'
              },
              {
                  loader: 'css-loader',
                  options: {
                      modules: {
                          localIdentName: '[local]-[sha1:hash:hex:6]'
                      }
                  }
              }
          ]
      });

      return merge(config, {
          optimization: {
              splitChunks: {
                  chunks: 'all',
                  minSize: 30 * 1024,
                  maxSize: maxAssetSize,
              },
              runtimeChunk: true,
            },
            performance: {
              hints: 'warning',
              maxAssetSize: maxAssetSize
            }
      });
  }
};
