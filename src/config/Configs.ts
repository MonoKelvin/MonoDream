import { BrowserWindowConstructorOptions } from "electron";

export interface INavItemOption {
    text: string;
    pageName: string;
    icon?: string;   // TODO: use class Icon
    enabled?: boolean;
}

export interface INavTrackBarOption {
    enable?: boolean,
    stretch?: boolean;
}

export interface INavigationOption {
    oriention?: 'horizontal' | 'vertical',
    items?: INavItemOption[],
    trackBarOption?: INavTrackBarOption,
}

export interface IMainWindowConfig {
    page: string;
    windowOptions: BrowserWindowConstructorOptions;
}

export const defaultWindowOptions: BrowserWindowConstructorOptions = {
    width: 800,
    height: 600,
    minWidth: 480,
    minHeight: 360,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        webSecurity: false
    },
    useContentSize: true,
    show: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
};
