module.exports = {
  apps: [
    {
      name: 'tools',
      script: 'pnpm',
      args: 'start',
      interpreter: 'node',
      interpreter_args: '--experimental-modules',
      max_memory_restart: '1024M',
    },
  ],
}