export default function (func) {
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
