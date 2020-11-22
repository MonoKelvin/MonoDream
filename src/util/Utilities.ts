export const isOsx = process.platform === 'darwin';
export const isWindows = process.platform === 'win32';
export const isLinux = process.platform === 'linux';
export const isDev = process.env.NODE_ENV === 'development';
