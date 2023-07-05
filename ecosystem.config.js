module.exports = {
  apps: [
    {
      name: 'tools',
      script: 'pnpm',
      args: 'start',
      exec_mode: 'cluster',
      instances: 1,
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
    },
  ],
}