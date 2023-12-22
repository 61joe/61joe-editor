import Store from 'electron-store';
import fs from 'fs';
import path from 'path';
import { UserAuthItemType } from './types/auth';

type OnChangeCallBackType<T = any> = (newValue?: T, oldValue?: T) => void;

const schema: any = {};

const initialStoreSchema = () => {
  const schemaDirectory = path.join(__dirname, './schema');
  const schemaFiles = fs.readdirSync(schemaDirectory);
  schemaFiles.forEach((file) => {
    const filePath = `${schemaDirectory}/${file}`;

    if (file.endsWith('.json')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const jsonData = JSON.parse(content);
      const fileName = file.substring(0, file.length - 5);
      schema[fileName] = jsonData;
    }
  });

  console.log('schema', schema);

  return schema;
};

initialStoreSchema();

const store = new Store(schema);

class StoreManager {
  private _store: Store = store;

  public get(key: string) {
    return this._store.get(key, null);
  }

  public set<T>(key: string, value: T): boolean {
    try {
      this._store.set(key, value);
    } catch (err) {
      return false;
    }

    return true;
  }

  public clear() {
    this._store.clear();
  }

  public onChange(key: string, callback: OnChangeCallBackType) {
    this._store.onDidChange(key, callback);
  }

  public getAuths(): Array<UserAuthItemType> {
    try {
      const auths = this._store.get('auth') as Array<UserAuthItemType>;
      return auths;
    } catch (err) {
      return [];
    }
  }
}

export default new StoreManager();
