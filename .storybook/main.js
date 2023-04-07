const { resolve } = require('eslint-import-resolver-typescript');
const { loadConfigFromFile, mergeConfig } = require('vite');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../vite.config.js'),
    );
    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
  docs: {
    autodocs: true,
  },
};
