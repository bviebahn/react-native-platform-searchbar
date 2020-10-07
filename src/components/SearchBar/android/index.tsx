import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import type { SearchBarProps } from '../../../types';
import SearchIcon from '../../icons/SearchIcon';
import {
    androidLightPlaceholderGray,
    androidDarkPlaceholderGray,
} from '../../../constants/colors';
import ClearIcon from '../../icons/ClearIconAndroid';
import Button from '../../Button';

const SearchBar = forwardRef<TextInput, SearchBarProps>(
    (
        {
            value,
            theme = 'light',
            placeholderTextColor = theme === 'light'
                ? androidLightPlaceholderGray
                : androidDarkPlaceholderGray,
            iconColor = placeholderTextColor,
            selectionColor = theme === 'light'
                ? androidLightPlaceholderGray
                : androidDarkPlaceholderGray,
            leftIcon,
            style,
            inputStyle,
            children,
            onChangeText,
            onClear,
            ...props
        },
        ref
    ) => {
        const styles = theme === 'light' ? defaultStyles : darkStyles;

        const inputRef = useRef<TextInput>(null);
        useImperativeHandle(ref, () => inputRef.current!);

        const handleClear = () => {
            if (onClear) {
                onClear();
            }
            onChangeText('');
        };

        return (
            <View style={[styles.wrapper, style]}>
                <TextInput
                    ref={inputRef}
                    value={value}
                    selectionColor={selectionColor}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                    clearButtonMode="never"
                    autoCorrect={false}
                    {...props}
                    style={[styles.input, inputStyle]}
                />
                <View pointerEvents="box-none" style={styles.children}>
                    {leftIcon ? (
                        <View style={styles.leftIcon}>{leftIcon}</View>
                    ) : (
                        <SearchIcon color={iconColor} style={styles.leftIcon} />
                    )}
                    {children}
                    {value ? (
                        <Button
                            onPress={handleClear}
                            style={styles.clearButton}
                        >
                            <ClearIcon
                                color={iconColor}
                                style={styles.clearIcon}
                            />
                        </Button>
                    ) : undefined}
                </View>
            </View>
        );
    }
);

const defaultStyles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#FFF',
        height: 50,
        flex: 1,
        paddingHorizontal: 40,
        borderRadius: 4,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    children: {
        position: 'absolute',
        flexDirection: 'row',
        height: 40,
        width: '100%',
        alignItems: 'center',
        elevation: 3,
    },
    leftIcon: {
        width: 16,
        height: 16,
        marginLeft: 10,
        marginRight: 'auto',
    },
    clearButton: {
        marginRight: 10,
    },
    clearIcon: {
        width: 24,
        height: 24,
    },
});

const darkStyles = StyleSheet.create({
    ...defaultStyles,
    input: {
        ...defaultStyles.input,
        backgroundColor: '#28282d',
        color: '#FFF',
    },
});

export default SearchBar;
