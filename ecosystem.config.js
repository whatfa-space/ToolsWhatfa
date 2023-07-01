module.exports = {
  apps: [
    {
      name: 'gpt',
      script: 'pnpm',
      args: 'start',
      exec_mode: 'cluster',
      instances: 1,
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
    },
  ],
}