import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //首先默认添加所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/) //true是深度遍历
  routeFiles.keys().forEach((key) => {
    // console.log(key)
    const route = require('../router/main' + key.split('.')[1]) //分割字符串，去掉前面的.
    allRoutes.push(route.default)
  })

  //根据菜单递归获取routes
  const recurseGetRoutes = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        //二级菜单
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        recurseGetRoutes(menu.children)
      }
    }
  }

  recurseGetRoutes(userMenu)

  return routes
}
