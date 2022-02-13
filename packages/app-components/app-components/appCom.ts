// 入口文件

import type { App } from 'vue'
import ExampleInstall, { Example } from './Example'
// 通过读取 当前目录下所有插件，然后配置
const installs = [ExampleInstall]

export { Example }

export default {
    version: '0.0.1',
    // 实现 vue3 插件 ，需要实现一个 install 方法
    //  将来接收一个 App 示例， createApp()
    install(app: App){
        installs.forEach(com => app.use(com as any));
    }
}