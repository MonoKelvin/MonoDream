import { app } from 'electron';
import path from 'path';

export default class AppPath {

    // readonly mUser?: AppUser;

    //debug
    static mUserName: string;

    //TODO: class AppUser
    constructor(user?: any) {
        AppPath.mUserName = 'admin';
    }

    static GetAppPath() {
        return path.dirname(app.getPath('exe')) + '/';
    }

    static GetUserDataPath() {
        return AppPath.GetAppPath() + 'data/';
    }

    static GetUserPath() {
        return AppPath.GetUserDataPath() + AppPath.mUserName + '/';
    }

    static GetUserLogPath() {
        return AppPath.GetUserPath() + 'log/';
    }

    static GetUserLogFile() {
        const currentDate = new Date();
        return AppPath.GetUserLogPath() + `${currentDate.getFullYear()}${currentDate.getMonth() + 1}` + '.log';
    }
}
