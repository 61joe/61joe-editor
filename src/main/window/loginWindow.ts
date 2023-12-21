import { BrowserWindow, app, shell } from 'electron';
import path from 'path';
import { resolveHtmlPath } from '../util';
import MenuBuilder from '../menu';
import { rootDir } from '../../../config';

const createLoginWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(process.cwd(), './assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  const loginWindow = new BrowserWindow({
    show: false,
    width: 256,
    height: 512,
    resizable: false,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, '../preload.js')
        : path.join(rootDir, '.erb/dll/preload.js'),
    },
  });

  loginWindow.loadURL(resolveHtmlPath('index.html#/login'));

  loginWindow.on('ready-to-show', () => {
    if (!loginWindow) {
      throw new Error('"loginWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      loginWindow.minimize();
    } else {
      loginWindow.show();
    }
  });

  const menuBuilder = new MenuBuilder(loginWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  loginWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  // new AppUpdater();

  return loginWindow;
};

export default createLoginWindow;
