import 'element-plus/dist/index.css'

import {
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElTable,
  ElTabPane
} from 'element-plus'
// import {
//   UserFilled,
//   Iphone,
//   Monitor,
//   Setting,
//   Goods,
//   ChatLineRound,
//   Expand,
//   Fold
// } from '@element-plus/icons-vue'
import { App } from 'vue'
const components = [
  ElButton,
  ElInput,
  ElTable,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
