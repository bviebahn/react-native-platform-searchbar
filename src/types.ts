import type { TextInputProps } from 'react-native';

export type SearchBarProps = TextInputProps & {
    theme?: 'light' | 'dark';
    cancelText?: string;
};
