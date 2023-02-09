import { withTheme } from '../config';
import { LinearProgress } from './LinearProgress';
export { LinearProgress };
export default Object.assign(withTheme(LinearProgress, 'LinearProgress'), {
    INDETERMINATE: 'indeterminate',
    DETERMINATE: 'determinate',
});
