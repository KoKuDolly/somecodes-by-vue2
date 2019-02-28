const rule = {
  namespaced: true,
  state: {
    dataOne: {
      name: 'xx'
    }
  },
  actions: {
    myTestSearchKey: {
      // root: true,
      handler (namespacedContext, payload) {
        console.log(namespacedContext, payload)
      }
    }
  },
  mutations: {
    // myTestMutations: {
    //   // root: true,
    //   handler (namespacedContext, payload) {
    //     console.log(namespacedContext, payload)
    //   }
    // }
    myTestMutations (namespacedState, payload) {
      console.log(namespacedState, payload)
    }
  }
}

export default rule
