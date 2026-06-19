import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import {ThemeConsumer, ThemeProps} from './ThemeProvider';
import DefaultTheme, {FullTheme} from './theme';

const isClassComponent = (Component: any) =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

export interface ThemedComponent {
  displayName: string;
}

const ThemedComponent = (
  WrappedComponent: React.ComponentType<any>,
  themeKey?: string,
  displayName?: string,
) => {
  return Object.assign(
    (props: any, forwardedRef: any) => {
      const {children, ...rest} = props;

      return (
        <ThemeConsumer>
          {context => {
            // If user isn't using ThemeProvider
            if (!context) {
              const newProps = {...rest, theme: DefaultTheme, children};
              return isClassComponent(WrappedComponent) ? (
                <WrappedComponent ref={forwardedRef} {...newProps} />
              ) : (
                <WrappedComponent {...newProps} />
              );
            }
            const {theme, updateTheme, replaceTheme} = context;
            const newProps = {
              theme,
              updateTheme,
              replaceTheme,
              ...deepmerge<FullTheme>(
                (themeKey &&
                  (theme[
                    themeKey as keyof Partial<FullTheme>
                  ] as Partial<FullTheme>)) ||
                  {},
                rest,
                {
                  clone: false,
                },
              ),
              children,
            };

            if (isClassComponent(WrappedComponent)) {
              return <WrappedComponent ref={forwardedRef} {...newProps} />;
            }
            return <WrappedComponent {...newProps} />;
          }}
        </ThemeConsumer>
      );
    },
    {displayName: displayName},
  );
};

type ThemeKeys = 'theme' | 'updateTheme' | 'replaceTheme';

function withTheme<P = {}, T = {}>(
  WrappedComponent: React.ComponentType<P & Partial<ThemeProps<T>>>,
  themeKey?: string,
):
  | React.FunctionComponent<Omit<P, ThemeKeys>>
  | React.ForwardRefExoticComponent<Omit<P, ThemeKeys>> {
  const name = themeKey
    ? `Themed.${themeKey}`
    : `Themed.${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      }`;
  const Component = ThemedComponent(WrappedComponent, themeKey, name);

  if (isClassComponent(WrappedComponent)) {
    return hoistNonReactStatics(
      React.forwardRef(Component),
      WrappedComponent,
    ) as unknown as React.ForwardRefExoticComponent<Omit<P, ThemeKeys>>;
  }
  return Component as unknown as React.FunctionComponent<Omit<P, ThemeKeys>>;
}

export default withTheme;
