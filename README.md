# react-native-platform-searchbar

[![npm version](https://badge.fury.io/js/react-native-platform-searchbar.svg)](https://badge.fury.io/js/react-native-platform-searchbar)

A customizable SearchBar component for React Native. Includes platform specific designs for iOS and Android. Written in Typescript.

<img src="https://github.com/benediktviebahn/react-native-platform-searchbar/raw/master/media/demo.gif" width="414" />

## Installation

1. install react-native-platform-searchbar
   `npm install react-native-platform-searchbar --save` or `yarn add react-native-platform-searchbar`
2. if not already installed, add [react-native-svg](https://github.com/react-native-community/react-native-svg)

## Usage

### Basic

```js
import SearchBar from 'react-native-platform-searchbar';

const Example = () => {
    const [value, setValue] = useState('');
    <SearchBar
        value={value}
        onChangeText={setValue}
        style={styles.searchBar}
    />;
};
```

### With children

![ActivityIndicator Example](https://github.com/benediktviebahn/react-native-platform-searchbar/raw/master/media/activityIndicator.png)

```js
import SearchBar from 'react-native-platform-searchbar';

const Example = () => {
    const [value, setValue] = useState('');
    <SearchBar
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        theme="light"
        platform="ios"
        style={styles.searchBar}
    >
        {loading ? (
            <ActivityIndicator style={{ marginRight: 10 }} />
        ) : undefined}
    </SearchBar>;
};
```

## Props

| Name                 | Type                            | Default                                                  | Description                                                     |
| -------------------- | ------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| value                | string                          | **REQUIRED**                                             | SearchBar value                                                 |
| onChangeText         | (string) => void                | **REQUIRED**                                             | called when SearchBar value changes                             |
| theme                | "light" \| "dark"               | "light"                                                  | SearchBar theme                                                 |
| platform             | "default" \| "ios" \| "android" | "default"                                                | which SearchBar version to use. "default" uses current platform |
| cancelText           | string                          | "Cancel"                                                 | cancel button text. Only visible in iOS SearchBar               |
| placeholderTextColor | string                          | different shades of gray depending on theme and platform | Color of placeholderText                                        |
| iconColor            | string                          | same as placeholderTextColor                             | color of icons (Search, Clear...)                               |
| leftIcon             | ReactElement                    | search icon                                              | custom icon to show on the left                                 |
| style                | object (ViewStyle)              | undefined                                                | custom style for the outer container view                       |
| inputStyle           | object (TextStyle)              | undefined                                                | custom style for the TextInput component                        |
| onCancel             | () => void                      | undefined                                                | callback that gets called when cancel button is pressed         |
| onClear              | () => void                      | undefined                                                | callback that gets called when clear button is pressed          |

All [TextInput](https://reactnative.dev/docs/textinput) Props are also supported.
