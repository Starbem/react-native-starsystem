import { withTheme } from '../../config'
import { StarFunctionComponent } from '../../helpers'

import { TabViewBase, TabViewBaseProps } from './TabView'
import { TabViewItem, TabViewItemProps } from './TabView.Item'

const ThemedTabViewItem = withTheme(TabViewItem, 'TabViewItem')

export type TabViewProps = StarFunctionComponent<TabViewBaseProps> & {
	Item: typeof ThemedTabViewItem
}

export const TabView: TabViewProps = Object.assign(TabViewBase)

export type { TabViewBaseProps, TabViewItemProps }

export const ThemedTabView = Object.assign(withTheme(TabView, 'TabView'), {
	Item: ThemedTabViewItem,
})

export default ThemedTabView
