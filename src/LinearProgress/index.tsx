import {withTheme} from '../config';
import {LinearProgress, LinearProgressProps} from './LinearProgress';

export {LinearProgress};
export type {LinearProgressProps};

export default Object.assign(withTheme(LinearProgress, 'LinearProgress'), {
  INDETERMINATE: 'indeterminate' as LinearProgressProps['variant'],
  DETERMINATE: 'determinate' as LinearProgressProps['variant'],
});
