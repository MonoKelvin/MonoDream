import { BrowserWindow, dialog } from 'electron';
import { EventEmitter } from 'events';
import { IMainWindowConfig } from '../../config/Configs';
// import log from 'electron-log';

// 请求关闭窗口接口
export interface IRequireCloseWindow {
    /**
     * 是否需要关闭
     * @return {boolean} 如果返回true则会请求窗口关闭，但即使请求通过，如果还有
     * 其他请求返回false，则该请求会被忽略。
     */
    isNeedClose(): boolean;
}

export default class MainWindow extends EventEmitter {

    mBrowserWindow: BrowserWindow | null;
    mRequireCloseWindowList: IRequireCloseWindow[] = [];

    constructor(config: IMainWindowConfig) {
        super();

        this.mBrowserWindow = null;

        this._createWindow(config);
    }

    private _createWindow(config: IMainWindowConfig) {
        this.mBrowserWindow = new BrowserWindow(config.windowOptions);
        let win: BrowserWindow | null = this.mBrowserWindow;

        win.webContents.once('did-finish-load', () => {
            this.emit('md::window-ready');
        });

        win.webContents.once('did-fail-load', (event, errorCode, errorDescription) => {
            // log.error(`窗口加载失败或被用户取消: ${errorCode}; ${errorDescription}`);
        });

        win.webContents.once('crashed', async (event, killed) => {
            const msg = `渲染进程崩溃或被用户终止(${killed}).`;
            // log.error(msg);

            const { response } = await dialog.showMessageBox(win as BrowserWindow, {
                type: 'warning',
                buttons: ['关闭', '重新加载', '继续'],
                message: '渲染进程崩溃',
                detail: msg
            });

            if (win?.id) {
                switch (response) {
                    case 0:
                        return this.destroy();
                    case 1:
                        return this.reload();
                    default:
                        break;
                }
            }
        });

        win.on('focus', () => {
            this.emit('md::window-focus');
        });

        win.on('blur', () => {
            this.emit('md::window-blur');
        });

        // Before closed. We cancel the action and ask the editor further instructions.
        win.on('close', event => {
            event.preventDefault();

            let isNeedClose = true;
            for (var iter of this.mRequireCloseWindowList) {
                if (!iter.isNeedClose()) {
                    isNeedClose = false;
                    break;
                }
            };

            if (isNeedClose) {
                this.destroy();
            }
        });

        win.on('closed', () => {
            win = null;
        });

        win.loadURL(config.page);
    }

    public reload() {
        this.mBrowserWindow?.reload();
    }

    public destroy() {
        this.emit('md::window-closed');
        this.removeAllListeners();

        this.mBrowserWindow?.destroy();
        this.mBrowserWindow = null;
    }
}
