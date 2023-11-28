import { ISideBarItem, SideBarItemParentKey, ViewItemKey } from '../types/sideBar';

export const DEFAULT_SIDE_BAR_OPTIONS: Array<
  Readonly<ISideBarItem<SideBarItemParentKey>>
> = [
  {
    key: 'create',
    value: 'create',
    title: 'create',
    icon: 'create',
  },
  {
    key: 'view',
    value: 'view',
    title: 'view',
    icon: 'view',
  },
  {
    key: 'bin',
    value: 'bin',
    title: 'bin',
    icon: 'bin',
  },
];

export const DEFAULT_VIEW_OPTIONS: Array<
  Readonly<ISideBarItem<ViewItemKey>>
> = [
  {
    key: 'documention',
    value: 'documention',
    icon: 'documention',
  }
];
