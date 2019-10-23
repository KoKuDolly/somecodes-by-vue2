export const isWindowReload = {
  quitFn: null,
  windowsunload: function (e) {
    // if (isWindowReload.quitFn) {
    //   isWindowReload.quitFn()
    // }
    // e.preventDefault()
  },
  windowonbeforeunload: function (e) {
    if (isWindowReload.quitFn) {
      isWindowReload.quitFn()
    }
    return e // 不 return 就不会弹框，直接就unload，没有 onunloadcancle事件了
  },
  addWindowReload: function (options) {
    if (options.quit) {
      isWindowReload.quitFn = options.quit
    } else {
      isWindowReload.quitFn = null
    }

    if (!window.onbeforeunload) {
      window.onbeforeunload = isWindowReload.windowonbeforeunload
    }
    if (!window.onunload) {
      window.onunload = isWindowReload.windowsunload
    }
  },
  removeWindowReload: function () {
    if (window.onbeforeunload) {
      window.onbeforeunload = null
    }
    if (window.onunload) {
      window.onunload = null
    }
  }
}
