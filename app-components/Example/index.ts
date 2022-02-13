
import type { App } from 'vue'
import Example from './src/example'


Example.install = function(app:App):void{
    app.component(Example.name, Example)
}

export { Example }

export default {
    title: 'Example',
    category: '数据展示',
    status: '20%',
    install(app: App):void {
        app.use(Example as any)
    }
}