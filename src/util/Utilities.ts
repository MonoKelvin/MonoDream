export const isOsx = process.platform === 'darwin';
export const isWindows = process.platform === 'win32';
export const isLinux = process.platform === 'linux';
export const isDev = process.env.NODE_ENV === 'development';

/**
 * 删除数组中元素。如果元素未找到，则什么也不做
 * @param array 数组
 * @param value 要删除的值
 */
export const removeArray = <T>(array: Array<T>, value: T) => {
    const index = array.indexOf(value);
    if (index > -1) {
        array.splice(index, 1);
    }
}
