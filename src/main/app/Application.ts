import { app, BrowserWindow } from 'electron';
import { EventEmitter } from 'events';
// import path from 'path';
import { defaultWindowOptions } from '../../config/Configs';
import MainWindow from './MainWindow';
import { isDev, isOsx, isWindows } from '../../util/Utilities';

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
                this._onQuit();
                app.quit();
            }
        });
    }

    private _onReady() {
        if (isOsx) {
            //app.dock.setMenu(dockMenu);
        } else if (isWindows) {
            app.setJumpList([
                {
                    type: 'recent'
                },
                {
                    type: 'tasks',
                    items: [{
                        type: 'task',
                        title: '新建窗口',
                        description: '打开一个新的窗口',
                        program: process.execPath,
                        args: '--new-window',
                        iconPath: process.execPath,
                        iconIndex: 0
                    }]
                }
            ]);
        }

        this.mMainWindow = new MainWindow({
            page: isDev ? `http://localhost:9080` : `file://${__dirname}/index.html`,
            windowOptions: defaultWindowOptions,
        });
    }

    public _onQuit() {
        this.mMainWindow?.destroy();
    }
}

