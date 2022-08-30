import 'element-plus/dist/index.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElTable,
  ElTabPane
} from 'element-plus'
import { UserFilled, Iphone } from '@element-plus/icons-vue'
import { App } from 'vue'
const components = [
  ElButton,
  ElInput,
  ElTable,
  ElTabPane,
  ElIcon,
  UserFilled,
  Iphone,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
