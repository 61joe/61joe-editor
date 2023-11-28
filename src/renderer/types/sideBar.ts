import { IItem } from './common';

// 侧边栏 菜单第一级
export type SideBarItemParentKey = 'controlpanel' | 'create' | 'view' | 'bin';

// 侧边栏 菜单第二级
export type ViewItemKey = 'folder' | 'documention' | 'note';
export type CreateItemKey = 'documention' | 'note' | 'canvas' | 'table';

export type SiderBarItemKey =
  | SideBarItemParentKey
  | ViewItemKey
  | CreateItemKey;

export interface ISideBarItem<T extends SiderBarItemKey = SiderBarItemKey>
  extends IItem<T> {
  icon: string;
  title?: string;
  showPrompt?: boolean;
  children?: Array<ISideBarItem>;
}
