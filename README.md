<p align="center">
  <a href="https://starbem.app/">
    <img alt="Star System" src="https://starbem-site-cms.s3.amazonaws.com/images/Starbem_logo_b001241faf.png" width="260" />
  </a>
</p>

<h1 align="center">@starbemtech/react-native-starsystem</h1>

<p align="center">
  Cross-platform <a href="https://reactnative.dev">React Native</a> UI toolkit — Starbem's design system for mobile apps.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@starbemtech/react-native-starsystem">
    <img src="https://img.shields.io/npm/v/%40starbemtech%2Freact-native-starsystem?color=%23FF6B19&label=npm" alt="npm version" />
  </a>
  <a href="https://github.com/StarBem/react-native-starsystem/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/%40starbemtech%2Freact-native-starsystem?color=%23FF6B19" alt="MIT License" />
  </a>
  <a href="https://reactnative.dev">
    <img src="https://img.shields.io/badge/React%20Native-%3E%3D0.64-blue?color=%23FF6B19" alt="React Native >= 0.64" />
  </a>
  <img src="https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey?color=%23FF6B19" alt="iOS | Android" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue?color=%23FF6B19" alt="TypeScript" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Peer Dependencies](#peer-dependencies)
- [Quick Start](#quick-start)
- [Theming](#theming)
- [Components](#components)
- [Utilities](#utilities)
- [TypeScript](#typescript)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

**@starbemtech/react-native-starsystem** is the official React Native UI library for the [Starbem](https://starbem.app) design system (**Star System**). It provides a set of themeable, accessible components ready for iOS and Android, built on top of React Native's core primitives.

- Full TypeScript support with exported prop types
- Theming via `ThemeProvider` — override any token globally
- Consistent design language aligned with the Star System Figma DS
- Compatible with React Native >= 0.64 and React >= 17

---

## Requirements

| Dependency              | Minimum version |
|-------------------------|-----------------|
| Node.js                 | `>= 18`         |
| React Native            | `>= 0.64`       |
| React                   | `>= 17`         |
| TypeScript *(optional)* | `>= 5.0`        |

---

## Installation

```sh
# pnpm (recommended)
pnpm add @starbemtech/react-native-starsystem

# npm
npm install @starbemtech/react-native-starsystem

# yarn
yarn add @starbemtech/react-native-starsystem
```

---

## Peer Dependencies

Install the required peer dependencies in your project:

```sh
pnpm add react-native-vector-icons react-native-safe-area-context
```

### react-native-vector-icons

Follow the [official linking guide](https://github.com/oblador/react-native-vector-icons#installation) for iOS and Android.

### react-native-safe-area-context

Wrap your app root with `SafeAreaProvider`:

```tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* your app */}
    </SafeAreaProvider>
  );
}
```

### Font — Funnel Display

Star System uses **Funnel Display** as the brand typeface. Add the font files to your project:

**Android** — copy the `.ttf` files to `android/app/src/main/assets/fonts/`:

```
FunnelDisplay-Regular.ttf
FunnelDisplay-Medium.ttf
FunnelDisplay-SemiBold.ttf
FunnelDisplay-Bold.ttf
```

**iOS** — add the files to your Xcode project and register them in `Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
  <string>FunnelDisplay-Regular.ttf</string>
  <string>FunnelDisplay-Medium.ttf</string>
  <string>FunnelDisplay-SemiBold.ttf</string>
  <string>FunnelDisplay-Bold.ttf</string>
</array>
```

**Auto-link via `react-native.config.js`:**

```js
module.exports = {
  assets: ['./assets/fonts/'],
};
```

Then run `npx react-native-asset` to copy the files automatically.

> If the font is not linked, React Native falls back to the system default font silently.

---

## Quick Start

```tsx
import React from 'react';
import { View } from 'react-native';
import { Button, Text, ThemeProvider } from '@starbemtech/react-native-starsystem';

export default function App() {
  return (
    <ThemeProvider>
      <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
        <Text h3>Hello, Star System</Text>
        <Button
          title="Get Started"
          onPress={() => console.log('pressed')}
        />
      </View>
    </ThemeProvider>
  );
}
```

---

## Theming

Wrap your app with `ThemeProvider` to apply a custom theme. Every component reads from the theme context, so a single override propagates to all components.

```tsx
import { ThemeProvider } from '@starbemtech/react-native-starsystem';

const theme = {
  colors: {
    primary: '#FF6B19',
    secondary: '#FF3F72',
  },
  Button: {
    raised: true,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* children */}
    </ThemeProvider>
  );
}
```

### useTheme hook

```tsx
import { useTheme } from '@starbemtech/react-native-starsystem';

function MyComponent() {
  const { theme, updateTheme } = useTheme();
  return <View style={{ backgroundColor: theme.colors.primary }} />;
}
```

### makeStyles

```tsx
import { makeStyles } from '@starbemtech/react-native-starsystem';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
}));

function MyComponent() {
  const styles = useStyles();
  return <View style={styles.container} />;
}
```

---

## Components

| Component        | Description                                                   |
|------------------|---------------------------------------------------------------|
| `AnimatedImage`  | Image with entrance animation via `react-native-animatable`   |
| `AnimatedText`   | Text with entrance animation                                  |
| `AnimatedView`   | View with entrance animation                                  |
| `Avatar`         | User avatar with image, icon, or initials fallback            |
| `Badge`          | Numeric or status badge, composable with `Avatar`             |
| `BottomSheet`    | Modal bottom sheet overlay                                    |
| `Button`         | Solid, outline, and clear variants with loading state         |
| `Card`           | Surface container with optional image, title, and divider     |
| `CheckBox`       | Accessible checkbox with custom icon support                  |
| `ContentBox`     | Padded content container                                      |
| `Divider`        | Horizontal line separator                                     |
| `Header`         | App navigation header with left/center/right slots            |
| `Icon`           | Icon from any `react-native-vector-icons` pack                |
| `Image`          | Image with placeholder and fade-in transition                 |
| `Input`          | Text input with label, error state, and left/right icons      |
| `LinearProgress` | Determinate and indeterminate progress bar                    |
| `ListItem`       | Row item with accordion and swipeable variants                |
| `Switch`         | Toggle switch                                                 |
| `Tab`            | Tab bar with active indicator                                 |
| `TabView`        | Swipeable tab view container                                  |
| `Text`           | Typography component with `h1`–`h4` and paragraph variants    |

---

## Utilities

```tsx
import {
  colors,                 // default color palette
  fonts,                  // default font definitions
  normalize,              // scale text size across screen densities
  getStatusBarHeight,     // safe status bar height (iPhoneX-aware)
  getBottomSpace,         // safe bottom space (iPhoneX-aware)
  isIphoneX,              // boolean device check
  ifIphoneX,              // conditional value helper
  getIconType,            // resolve icon set by name
  registerCustomIconType, // register a custom icon set
  withBadge,              // HOC to wrap any component with a Badge
  withTheme,              // HOC to inject theme into any component
} from '@starbemtech/react-native-starsystem';
```

---

## TypeScript

All components export their prop types. Import them directly:

```tsx
import type {
  AnimatedProps,
  AvatarProps,
  BadgeProps,
  BottomSheetProps,
  ButtonProps,
  CardProps,
  CheckBoxProps,
  Colors,
  ContentBoxProps,
  DividerProps,
  FullTheme,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ListItemAccordionProps,
  ListItemProps,
  ListItemSwipeableProps,
  ReplaceTheme,
  SwitchProps,
  TabItemProps,
  TabProps,
  TabViewProps,
  TextProps,
  Theme,
  ThemeProps,
  UpdateTheme,
} from '@starbemtech/react-native-starsystem';
```

---

## Contributing

Contributions are welcome — bug reports, documentation improvements, and pull requests.

### Reporting a bug

Open an issue on [GitHub Issues](https://github.com/StarBem/react-native-starsystem/issues) and include:

- `@starbemtech/react-native-starsystem` version
- React Native and React versions
- Platform (iOS / Android) and OS version
- Minimal code to reproduce the issue
- Expected vs. actual behavior

### Submitting a pull request

1. Fork the repository and create a branch:
   ```sh
   git checkout -b feat/your-feature-name
   ```
2. Install dependencies (requires Node >= 18 and pnpm >= 9):
   ```sh
   pnpm install
   ```
3. Make your changes, then verify:
   ```sh
   pnpm build   # must produce zero TypeScript errors
   pnpm test    # all tests must pass
   pnpm lint    # no lint errors
   ```
4. Open a PR against `main` describing **what** changed and **why**.

### Guidelines

- All new components must be written in TypeScript and export their prop types from `src/index.ts`.
- Do not introduce new runtime dependencies without prior discussion.
- `any` casts are only acceptable for documented third-party type conflicts — add an inline comment explaining the reason.
- Keep PRs focused. One concern per PR is easier to review and revert if needed.

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the full release history.

---

## License

[MIT](./LICENSE) © [Starbem](https://starbem.app)
