module.exports = {
  apps: [
    {
      name: 'GANGSTER-BOT',
      script: 'index.js',
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
      watch: false,  // Disabilita watch
      ignore_watch: ['node_modules'],
    },
  ],
};