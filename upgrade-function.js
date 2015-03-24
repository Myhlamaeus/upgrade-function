export default function (func, argPos) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, function (err, val) {
        if (err) {
          reject(err)
        } else {
          resolve(val)
        }
      })
    })
  }
}
