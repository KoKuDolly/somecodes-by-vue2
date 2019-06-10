// 1.判断对象的数据类型
// 不推荐将这个函数用来检测可能会产生包装类型的基本数据类型上,因为 call 会将第一个参数进行装箱操作
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isArray = isType('Array')

// 2. ES5 实现数组 map 方法

const selfMap = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    mappedArr.push(fn.call(context, arr[i], i, this))
  }
  return mappedArr
}

// 3. 使用 reduce 实现数组 map 方法

const selfMap2 = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  return arr.reduce((pre, cur, index) => {
    return [...pre, fn.call(context, cur, index, this)]
  }, [])
}

// 4. ES5 实现数组 filter 方法

const selfFilter = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let filteredArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
  }
  return filteredArr
}

// 5. 使用 reduce 实现数组 filter 方法

const selfFilter2 = function(fn, context) {
  return this.reduce((pre, cur, index) => {
    return fn.call(context, cur, index, this) ? [...pre, cur] : [...pre]
  }, [])
}

// 6. ES5 实现数组的 some 方法

const selfSome = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  if (!arr.length) return false
  let flag = false
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    let res = fn.call(context, arr[i], i, this)
    if (res) {
      flag = true
      break
    }
  }
  return flag
}

// 7. ES5 实现数组的 reduce 方法

const findRealElementIndex = function(arr, initIndex) {
  let index
  for (let i = initIndex || 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue
    index = i
    break
  }
  return index
}

const selfReduce = function(fn, initialValue) {
  let arr = Array.prototype.slice.call(this)
  let res

  if (initialValue === undefined) {
    res = arr[findRealElementIndex(arr)]
    for (let i = 0; i < arr.length - 1; i++) {
      if (!arr.hasOwnProperty(i)) continue
      let realElementIndex = findRealElementIndex(arr, i + 1)
      res = fn.call(null, res, arr[realElementIndex], realElementIndex, this)
    }
  } else {
    res = initialValue
    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue
      res = fn.call(null, res, arr[i], i, this)
    }
  }
  return res
}

// 8. 使用 reduce 实现数组的 flat 方法

const selfFlat = function(depth = 1) {
  let arr = Array.prototype.slice.call(this)
  if (depth === 0) return arr
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...selfFlat.call(cur, depth - 1)]
    } else {
      return [...pre, cur]
    }
  }, [])
}

// 9. 实现 ES6 的 class 语法

function inherit (subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      enumerable: false,
      configurable: true,
      writable: true,
      value: superType.constructor
    }
  })
  // 继承函数
  Object.setPrototypeOf(subType, superType)
}

/*
ES6 的 class 内部是基于寄生组合式继承，它是目前最理想的继承方式，通过 Object.create 方法创造一个空对象，并将这个空对象继承 Object.create 方法的参数，再让子类（subType）的原型对象等于这个空对象，就可以实现子类实例的原型等于这个空对象，而这个空对象的原型又等于父类原型对象（superType.prototype）的继承关系

而 Object.create 支持第二个参数，即给生成的空对象定义属性和属性描述符/访问器描述符，我们可以给这个空对象定义一个 constructor 属性更加符合默认的继承行为，同时它是不可枚举的内部属性（enumerable:false）

而 ES6 的 class 允许子类继承父类的静态方法和静态属性，而普通的寄生组合式继承只能做到实例与实例之间的继承，对于类与类之间的继承需要额外定义方法，这里使用 Object.setPrototypeOf 将 superType 设置为 subType 的原型，从而能够从父类中继承静态方法和静态属性
*/

// 10. 函数柯里化

function curry(fn) {
  if (fn.length <= 1) return fn
  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args)
    } else {
      return (...args2) => {
        return generator(...args, ...args2)
      }
    }
  }
  return generator
}

// 使用方法

let add = (a, b, c, d) => a + b + c + d
const curriedAdd = curry(add)
curriedAdd(5)(6)(7)(8)
add(5, 6, 7, 8)

// 11. 函数柯里化（支持占位符）

const curry = (fn, placeholder = '_') => {
  curry.placeholder = placeholder
  if (fn.length <= 1) return fn
  let argsList = []
  const generator = (...args) => {
    let currentPlaceholderIndex = -1
    args.forEach(arg => {
      let placeholderIndex = argsList.findIndex(arg => arg === curry.placeholder)
      if (placeholderIndex < 0) {
        currentPlaceholderIndex = argsList.push(arg) - 1
      } else if (placeholderIndex !== currentPlaceholderIndex) {
        argsList[placeholderIndex] = arg
      } else {
        argsList.push(arg)
      }
    })
    let realArgList = argsList.filter(arg => arg !== curry.placeholder)
    if (realArgList.length === fn.length) {
      return fn(...argsList)
    } else if (realArgList.length > fn.length) {
      throw new Error('超出初始函数参数最大值')
    } else {
      return generator
    }
  }
  return generator
}

// 12. 偏函数

const partialFunc = (func, ...args) => {
  let placeholderNum = 0
  return (...args2) => {
    args2.forEach(arg => {
      let index = args.findIndex(item => item === '_')
      if (index < 0) return
      args[index] = arg
      placeholderNum++
    })
    if (placeholderNum < args2.length) {
      args2 = args2.slice(placeholderNum, args2.length)
    }
    return func.apply(this, [...args, ...args2])
  }
}

// 13. 斐波那契数列及其优化

const fibonaccil = function (n) {
  if (n < 1) throw new Error('参数错误')
  if (n === 1 || n === 2) return 1
  return fibonaccil(n - 1) + fibonaccil(n - 2)
}

// 函数记忆

const memory = function (fn) {
  let obj = {}
  return function (n) {
    if (!obj[n]) obj[n] = fn(n)
    return obj[n]
  }
}
const fibonaccil2 = memory(fibonaccil)

// 14. 实现函数 bind 方法
