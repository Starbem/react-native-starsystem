import {withTheme} from '../config';
import {StarFunctionComponent} from '../helpers';
import {TabBase, TabBaseProps} from './Tab';
import {TabItem, TabItemProps} from './Tab.Item';

const ThemedTabItem = withTheme(TabItem, 'TabItem');

export type TabProps = StarFunctionComponent<TabBaseProps> & {
  Item: typeof ThemedTabItem;
};

export const Tab: TabProps = Object.assign(TabBase);

export type {TabBaseProps, TabItemProps};

export const ThemedTab = Object.assign(withTheme(Tab, 'Tab'), {
  Item: ThemedTabItem,
});

export default ThemedTab;
