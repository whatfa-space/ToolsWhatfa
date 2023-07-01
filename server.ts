import loadConfig from "next/dist/server/config";
import * as constants from "next/dist/shared/lib/constants";

import { createServer, Server } from "http";
import { parse } from "url";

import next from "next";

/** 进程处理 */
function handleProcess(server:Server) {
  // 等所有链接都结束后，再结束进程
  process.on('SIGINT', () => {
    server.close(() => {
      process.exit(0)
    })
  })
}

async function startServer() {
  // 获取命令执行目录
  const dir = process.cwd();
  // 环境获取
  const dev = process.env.NODE_ENV !== "production";

  // 使用 next 的内部方法，读取配置文件。不要尝试直接 require 配置文件，官方提供的 loadConfig 函数可以获取到默认配置，这样保证读取到的内容和next启动时内部读取的内容一致。
  const nextConfig = await loadConfig(
    dev ? constants.PHASE_DEVELOPMENT_SERVER : constants.PHASE_PRODUCTION_SERVER,
    dir,
  );

  // serverRuntimeConfig 是 nextConfig自定义的属性
  const { serverRuntimeConfig, basePath, port: configPort } = nextConfig;

  const hostname = "0.0.0.0";
  const port = serverRuntimeConfig?.port || configPort || 3000;

  const app = next({ dev, hostname, port });

  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = createServer(async (req, res) => {
      const parsedUrl = parse(req.url || '', true);
      await handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}${basePath}`);
    });

    handleProcess(server)
  });
}

startServer();
