import {withTheme} from '../config';
import {Spinner, SpinnerProps} from './Spinner';
import {Dots, DotsProps} from './Spinner';

const ThemedDots = withTheme(Dots, 'Dots');

const ThemedSpinner = Object.assign(withTheme(Spinner, 'Spinner'), {
  Dots: ThemedDots,
});

export {Spinner, Dots};
export type {SpinnerProps, DotsProps};
export default ThemedSpinner;
