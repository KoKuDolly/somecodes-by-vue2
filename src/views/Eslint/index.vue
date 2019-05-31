<template>
  <div>
    eslint:
    <p>"off" or 0 - turn the rule off</p>
    <p>"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)</p>
    <p>"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)</p>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  computed: {},
  watch: {},
  mounted () {
    this.bfs()
  },
  data () {
    return {}
  },
  methods: {
    bfs () {
      let graph = {
        'A': ['B', 'C'],
        'B': ['A', 'C', 'D'],
        'C': ['A', 'D', 'E'],
        'D': ['B', 'C', 'E'],
        'E': ['C', 'D', 'F'],
        'F': ['E']
      }

      function bfs(graph, startPoint) {
        let queue = []
        let result = []

        queue.push(startPoint)
        result.push(startPoint)

        while (queue.length > 0) {
          let point = queue.shift()
          let nodes = graph[point]
          for (let node of nodes) {
            if (result.includes(node)) continue
            result.push(node)
            queue.push(node)
          }
        }
        return result
      }

      function dfs(graph, startPoint) {
        let stack = []
        let result = []

        stack.push(startPoint)
        result.push(startPoint)

        while (stack.length > 0) {
          let point = stack.pop()
          let nodes = graph[point]
          for (let node of nodes) {
            if (result.includes(node)) continue
            result.push(node)
            stack.push(node)
          }
        }
        return result
      }

      let resultBfs = bfs(graph, 'A')
      let resultDfs = dfs(graph, 'A')
      console.log(resultBfs, resultDfs)
    }
  }
}
</script>
<style lang="less">

</style>
