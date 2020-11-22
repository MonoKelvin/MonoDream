import { app, BrowserWindow } from 'electron';
import { EventEmitter } from 'events';
// import path from 'path';
import { defaultWindowOptions } from '../../config/Configs';
import MainWindow from './MainWindow';
import { isDev, isOsx } from '../../util/Utilities';

export default class Application extends EventEmitter {
    mMainWindow: MainWindow | null;

    constructor() {
        super();

        this.mMainWindow = null;

        this._init();
    }

    private _init() {
        // ConfigManager.init();
        // PageManager.init();
        // EventManager.init();
        app.on('ready', this._onReady);

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                this._onReady();
            }
        });

        app.on('window-all-closed', () => {
            if (!isOsx) {
                app.quit();
            }
        });
    }

    private _onReady() {
        this.mMainWindow = new MainWindow({
            page: isDev ? `http://localhost:9080` : `file://${__dirname}/index.html`,
            windowOptions: defaultWindowOptions,
        });

        // TODO: 可能有多个窗口需要判断是否关闭
        this.mMainWindow.on('md::window-closed', app.quit);
    }
}

