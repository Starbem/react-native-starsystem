import { withTheme } from '../config';
import { ContentBoxBase } from './ContentBox';
export const ContentBox = Object.assign(ContentBoxBase);
export const ThemedContentBox = Object.assign(withTheme(ContentBox, 'ContentBox'), {});
export default ThemedContentBox;
