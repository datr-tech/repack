const Configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   */
  extends: ['@commitlint/config-conventional'],

  /*
   * Resolve and load @commitlint/format from node_modules.
   */
  formatter: '@commitlint/format',

  ignores: [(commit) => commit === ''],

  /*
   * Whether commitlint uses the default ignore rules, see the description above.
   */
  defaultIgnores: true,

  /*
   * Custom URL to show upon failure
   */
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',

  /*
   * Custom prompt configs
   */
  prompt: {
    messages: {},
    questions: {
      type: {
        description: 'please input type:',
      },
    },
  },
};

export default Configuration;
