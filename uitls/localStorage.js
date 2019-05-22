/**
 * 从缓存中读取
 *
 * @param key
 * @return {*}
 */
export function localStorageGet (key) {
  let data = null
  try {
    data = window.localStorage.getItem(key)
    if (data) {
      data = JSON.parse(data)
    }
  } catch (e) {
    console.error(`localStorageGet:${new Error(e)}`)
  }
  return data
}

/**
 * 保存到缓存
 *
 * @param key
 * @param data
 */
export function localStorageSet (key, data) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error(`localStorageSet:${new Error(e)}`)
  }
}

/**
 * 删除本地缓存
 *
 * @param key
 */
export function localStorageClear (key) {
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    console.error(`localStorageClear:${new Error(e)}`)
  }
}
