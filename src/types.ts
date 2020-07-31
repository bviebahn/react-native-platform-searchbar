import type { TextInputProps, StyleProp, ViewStyle } from 'react-native';

export type SearchBarProps = TextInputProps & {
    value: string;
    onChangeText(text: string): void;
    /**
     * SearchBar theme.
     * Defaults to "light"
     */
    theme?: 'light' | 'dark';
    /**
     * Text of the cancel button in the ios SearchBar.
     * Defaults to "Cancel"
     */
    cancelText?: string;
    /**
     * Color of icons (search, clear...).
     * Inherits from placeholderTextColor
     */
    iconColor?: string;
    placeholderTextColor?: string;
    /**
     * Custom icon to show on the left.
     * Defaults to search icon
     */
    leftIcon?: React.ReactElement;
    style?: StyleProp<ViewStyle>;

    /**
     * Callback that gets called when the cancel button is pressed.
     */
    onCancel(): void;
};
