import { BrowserWindow, dialog } from 'electron';
import { EventEmitter } from 'events';
import { IMainWindowConfig } from '../../config/Configs';
// import log from 'electron-log';

export default class MainWindow extends EventEmitter {

    mBrowserWindow: BrowserWindow | null;

    constructor(config: IMainWindowConfig) {
        super();

        this.mBrowserWindow = null;

        this._createWindow(config);
    }

    private _createWindow(config: IMainWindowConfig) {
        this.mBrowserWindow = new BrowserWindow(config.windowOptions);
        let win: BrowserWindow | null = this.mBrowserWindow;

        win.webContents.once('did-finish-load', () => {
            this.emit('window-ready');
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
            this.emit('window-focus');
        });

        // Lost focus
        win.on('blur', () => {
            this.emit('window-blur');
        });

        // ['maximize', 'unmaximize', 'enter-full-screen', 'leave-full-screen'].forEach(channel => {
        //     win?.on(channel, () => {
        //         this.emit(`win::window-${channel}`);
        //         win?.webContents.send(`win::window-${channel}`);
        //     });
        // });

        // Before closed. We cancel the action and ask the editor further instructions.
        win.on('close', event => {
            this.emit('window-close');
            event.preventDefault();
        });

        win.on('closed', () => {
            this.emit('window-closed');
            win = null;
        });

        win.loadURL(config.page);
    }

    public reload() {
        this.mBrowserWindow?.reload();
    }

    public destroy() {
        this.emit('window-closed');
        this.removeAllListeners();

        this.mBrowserWindow?.destroy();
        this.mBrowserWindow = null;
    }
}
