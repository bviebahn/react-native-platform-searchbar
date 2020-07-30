import type { TextInputProps, StyleProp, ViewStyle } from 'react-native';

export type SearchBarProps = TextInputProps & {
    value: string;
    onChangeText(text: string): void;
    theme?: 'light' | 'dark';
    cancelText?: string;
    iconColor?: string;
    placeholderTextColor?: string;
    leftIcon?: React.ReactElement;
    style?: StyleProp<ViewStyle>;
};
