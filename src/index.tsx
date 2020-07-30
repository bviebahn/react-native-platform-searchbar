import React, { forwardRef } from 'react';
import type { SearchBarProps } from './types';
import { Platform, TextInput } from 'react-native';
import SearchBarIOS from './components/SearchBar/ios';
import SearchBarAndroid from './components/SearchBar/android';

type Props = SearchBarProps & {
    platform?: 'ios' | 'android' | 'default';
};

const SearchBar = forwardRef<TextInput, Props>(
    ({ platform = 'default', ...props }, ref) => {
        if (platform === 'default') {
            return (
                Platform.select({
                    ios: <SearchBarIOS ref={ref} {...props} />,
                    android: <SearchBarAndroid ref={ref} {...props} />,
                }) || null
            );
        }

        return platform === 'ios' ? (
            <SearchBarIOS ref={ref} {...props} />
        ) : (
            <SearchBarAndroid ref={ref} {...props} />
        );
    }
);

export default SearchBar;
