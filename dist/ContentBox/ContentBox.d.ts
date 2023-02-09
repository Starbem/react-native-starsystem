import React from 'react';
import { ViewProps } from 'react-native';
import { StarFunctionComponent } from '../helpers';
export declare type ContentBoxBaseProps = ViewProps & {
    topContent?: React.ReactElement;
    centerContent?: React.ReactElement;
    bottomContent?: React.ReactElement;
    style?: Object;
};
export declare const ContentBoxBase: StarFunctionComponent<ContentBoxBaseProps>;
