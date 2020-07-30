import type { TextInputProps } from 'react-native';

export type SearchBarProps = TextInputProps & {
    value: string;
    onChangeText(text: string): void;
    theme?: 'light' | 'dark';
    cancelText?: string;
    iconColor?: string;
    placeholderTextColor?: string;
};
