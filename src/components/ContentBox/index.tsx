import { withTheme } from '../../config'
import { StarFunctionComponent } from '../../helpers'

import { ContentBoxBase, ContentBoxBaseProps } from './ContentBox'
import { AnimatedProps } from '../..'

export type ContentBoxProps = StarFunctionComponent<
	ContentBoxBaseProps & AnimatedProps
>

export const ContentBox: ContentBoxProps = Object.assign(ContentBoxBase)

export type { ContentBoxBaseProps }

export const ThemedContentBox = Object.assign(
	withTheme(ContentBox, 'ContentBox'),
	{}
)

export default ThemedContentBox
