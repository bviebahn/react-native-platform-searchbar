import type {
    TextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

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
    cancelTextStyle?: StyleProp<TextStyle>;
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
    /**
     * Style of the outer container view.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Style of the TextInput component.
     */
    inputStyle?: StyleProp<TextStyle>;
    children?: React.ReactElement;
    /**
     * Callback that gets called when the cancel button is pressed.
     */
    onCancel?(): void;
    /**
     * Callback that gets called when the clear button is pressed.
     */
    onClear?(): void;
};
