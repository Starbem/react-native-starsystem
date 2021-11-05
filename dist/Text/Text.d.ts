import { TextProps as TextProperties, TextStyle, StyleProp } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type TextProps = TextProperties & {
    color?: 'primary' | 'primaryLight' | 'secondary' | 'secondaryLight' | 'white' | 'black' | 'grey0' | 'grey1' | 'grey2' | 'grey3' | 'grey4' | 'grey5' | 'success' | 'warning' | 'error';
    style?: StyleProp<TextStyle>;
    /**  Text with Font size 36. */
    h1?: boolean;
    /**  Text with Font size 30. */
    h2?: boolean;
    /**  Text with Font size 24. */
    h3?: boolean;
    /**  Text with Font size 18. */
    h4?: boolean;
    /**  Text with Font size 16. */
    h5?: boolean;
    /**  Text with Font size 14. */
    h6?: boolean;
    /**  Text with Font size 12. */
    caption?: boolean;
    /**  Text with Font size 10. */
    overline?: boolean;
    h1Style?: StyleProp<TextStyle>;
    h2Style?: StyleProp<TextStyle>;
    h3Style?: StyleProp<TextStyle>;
    h4Style?: StyleProp<TextStyle>;
    h5Style?: StyleProp<TextStyle>;
    h6Style?: StyleProp<TextStyle>;
    captionStyle?: StyleProp<TextStyle>;
    overlineStyle?: StyleProp<TextStyle>;
};
export declare const Text: StarFunctionComponent<TextProps>;
