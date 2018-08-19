import {otherRouter, appRouter} from '@/router/router'
import Cookies from 'js-cookie'
import Util from '@/libs/util'
const app = {
  state: {
    menuList: [],
    routers: [
      otherRouter,
      ...appRouter
    ],
    currentPath: [],
    openedSubmenuArr: []
  },
  mutations: {
    updateMenulist (state) {
      // console.log(state)
      let accessCode = parseInt(Cookies.get('access'))
      let menuList = []
      appRouter.forEach((item, index) => {
        if (item.access !== undefined) {
          if (Util.showThisRoute(item.access, accessCode)) {
            if (item.children.length === 1) {
              menuList.push(item)
            } else {
              let len = menuList.push(item)
              let childrenArr = []
              childrenArr = item.children.filter(child => {
                if (child.access !== undefined) {
                  if (child.access === accessCode) {
                    return child
                  }
                } else {
                  return child
                }
              })
              menuList[len - 1].children = childrenArr
            }
          }
        } else {
          if (item.children.length === 1) {
            menuList.push(item)
          } else {
            let len = menuList.push(item)
            let childrenArr = []
            childrenArr = item.children.filter(child => {
              if (child.access !== undefined) {
                if (Util.showThisRoute(child.access, accessCode)) {
                  return child
                }
              } else {
                return child
              }
            })
            if (childrenArr === undefined || childrenArr.length === 0) {
              menuList.splice(len - 1, 1)
            } else {
              let handleItem = JSON.parse(JSON.stringify(menuList[len - 1]))
              handleItem.children = childrenArr
              menuList.splice(len - 1, 1, handleItem)
            }
          }
        }
      })
      state.menuList = menuList
    },
    setCurrentPath (state, pathArr) {
      state.currentPath = pathArr
    },
    addOpenSubmenu (state, name) {
      let hasThisName = false
      let isEmpty = false
      if (name.length === 0) {
        isEmpty = true
      }
      if (state.openedSubmenuArr.indexOf(name) > -1) {
        hasThisName = true
      }
      if (!hasThisName && !isEmpty) {
        state.openedSubmenuArr.push(name)
      }
    },
    setAvator (state, path) {
      // localStorage.avatorImgPath = path
      localStorage.setItem('avatorImgPath', path)
    }
  }
}

export default app
