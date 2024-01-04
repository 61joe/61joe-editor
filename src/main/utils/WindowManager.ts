import { BrowserWindow } from 'electron';
import createMainWindow from '../window/mainWindow';
import createLoginWindow from '../window/loginWindow';
import { getAuthALive } from '../request/auth';
import { getLastLoginAuth } from '.';

type WindowObject = BrowserWindow | null;

class WindowManager {
  private _currentWindow: WindowObject = null;
  private _currentMainWindow: WindowObject = null;
  private _currentLoginWindow: WindowObject = null;

  constructor() {}

  public get currentWindow(): WindowObject {
    return this._currentWindow;
  }

  public get currentMainWindow(): WindowObject {
    return this._currentMainWindow;
  }

  public get currentLoginWindow(): WindowObject {
    return this._currentLoginWindow;
  }

  public async createMainWindow() {
    if (this._currentMainWindow) {
      return this._currentMainWindow;
    }

    const newMainWindow = await createMainWindow();
    if (newMainWindow) {
      newMainWindow.on('closed', () => {
        this._currentMainWindow = null;
        this._currentWindow = null;
      });
    }

    this._currentMainWindow = newMainWindow;
    this._currentWindow = newMainWindow;

    return newMainWindow;
  }

  public async createLoginWindow() {
    if (this._currentLoginWindow) {
      return this._currentLoginWindow;
    }

    const newLoginWindow = await createLoginWindow();
    if (newLoginWindow) {
      newLoginWindow.on('closed', () => {
        this._currentLoginWindow = null;
        this._currentWindow = null;
      });
    }

    this._currentLoginWindow = newLoginWindow;
    this._currentWindow = newLoginWindow;

    return newLoginWindow;
  }

  public async createWindow() {
    // todo: 查询本地用户auth缓存 决定是跳登录窗口还是直接进应用

    // StoreManager.set<Array<UserAuthItemType>>('auth', [
    //   {
    //     userid: 21,
    //     accessToken:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI2MWpvZSIsImVtYWlsIjoiNzA1MDc0MDY1QHFxLmNvbSIsInJvbGUiOjEsImV4cCI6MTcwNDE4MDEwOCwianRpIjoiMjEifQ.QOsfaAa_EoMazz3KyZdeaZ5mfPVBhswFSxk0fvdv-fB',
    //     refreshToken:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI2MWpvZSIsImVtYWlsIjoiNzA1MDc0MDY1QHFxLmNvbSIsInJvbGUiOjEsImV4cCI6MTcwNTM4OTcwOCwianRpIjoiMjEifQ.UBcprSzcbEuw8XecZdRSm06LhZfS6W9JxpGui-i4gaE',
    //     isLastLogin: true,
    //   },
    // ]);

    const success = await getAuthALive();

    if (success) {
      await this.createMainWindow();
    } else {
      await this.createLoginWindow();
    }

    this._currentWindow?.webContents.send(
      'main-update-auth',
      getLastLoginAuth(),
    );

    // this.createMainWindow();
  }
}

export default new WindowManager();
