import 'element-plus/dist/index.css'
import { ElButton, ElInput } from 'element-plus'
import { App } from 'vue'
const components = [ElButton, ElInput]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
