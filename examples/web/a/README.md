# 操作步骤

note: 迁移 blog

- 记得命令行 cd 到当前项目
- 本地项目中，使用 npx 执行项目的包命令

项目配置：

1. pnpm init -y
2. pnpm i -D typescript 当前项目添加 tsc 命令
3. npx tsc 当前项目通过 npx 执行 tsc
4. npx tsc --init 添加 tsconfig.json 配置文件，配置文件包含了 node 执行所需要的配置详情。
5. pnpm i -D ts-node 添加 node 中执行 ts 的库来代替 tsc，执行 npx ts-node
6. npx ts-node ./server/index.ts 测试 ts-node 执行，如果不添加 tsconfig.json 文件执行会报错。
7. 测试 demo，直接使用 ts-node 执行代码。不用考虑编译成 js 来执行。

使用 express 服务：

1. pnpm add express
2. pnpm add -D @types/express 安装 @types/express 声明包，因为 'express' 包时编译好的 js 代码。
3. npx ts-node ./server/index.ts 执行命令，启动 express 服务
