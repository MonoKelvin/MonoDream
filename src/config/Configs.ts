import { BrowserWindowConstructorOptions } from "electron";

export interface INavItemOption {
    text: string;
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
    minWidth: 640,
    minHeight: 480,
    webPreferences: {
        nodeIntegration: true,
        webSecurity: false
    },
    useContentSize: true,
    show: true,
    frame: false,
    titleBarStyle: 'hiddenInset',
};
