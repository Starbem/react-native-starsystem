import { Animated } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type TabViewBaseProps = {
    /** Child position index value. */
    value?: number;
    /** On Index Change Callback. */
    onChange?: (value: number) => any;
    /** Choose the animation type among `spring` and `timing`. This is visible when there is tab change. */
    animationType?: 'spring' | 'timing';
    /** Define the animation configurations. */
    animationConfig?: Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig, 'toValue'>;
};
export declare const TabViewBase: StarFunctionComponent<TabViewBaseProps>;
