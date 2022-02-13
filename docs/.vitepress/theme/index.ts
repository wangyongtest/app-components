import Theme from 'vitepress/dist/client/theme-default'
import Example from '../../../app-components/example'

import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(Example)
    registerComponents(app)
  }
}
