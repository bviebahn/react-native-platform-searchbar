import React, {
    useRef,
    useState,
    forwardRef,
    useImperativeHandle,
} from 'react';
import {
    LayoutAnimation,
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    View,
} from 'react-native';

import {
    iosBlue,
    iosDarkPlaceholderGray,
    iosLightPlaceholderGray,
} from '../../../constants/colors';
import SearchIcon from '../../icons/SearchIcon';
import CancelButton from './CancelButton';
import ClearButton from './ClearButton';

import type { SearchBarProps } from '../../../types';

const SearchBar = forwardRef<TextInput | null, SearchBarProps>(
    (
        {
            value,
            theme = 'light',
            cancelText = 'Cancel',
            returnKeyType = 'search',
            selectionColor = iosBlue,
            placeholderTextColor = theme === 'light'
                ? iosLightPlaceholderGray
                : iosDarkPlaceholderGray,
            iconColor = placeholderTextColor,
            leftIcon,
            style,
            onFocus,
            onChangeText,
            onCancel,
            ...props
        },
        ref
    ) => {
        const styles = theme === 'light' ? defaultStyles : darkStyles;
        const [cancelButtonVisible, setCancelButtonVisible] = useState(false);
        const inputRef = useRef<TextInput>(null);
        useImperativeHandle(ref, () => inputRef.current!);

        const handleFocus = (
            e: NativeSyntheticEvent<TextInputFocusEventData>
        ) => {
            LayoutAnimation.configureNext({
                ...LayoutAnimation.Presets.easeInEaseOut,
                duration: 300,
            });
            setCancelButtonVisible(true);
            if (onFocus) {
                onFocus(e);
            }
        };

        const handleClear = () => {
            // somehow using inputRef.current.clear() doesn't work
            onChangeText('');
        };

        const handleCancel = () => {
            if (onCancel) {
                onCancel();
            }
            if (inputRef.current) {
                handleClear();
                inputRef.current.blur();
            }
            LayoutAnimation.configureNext({
                ...LayoutAnimation.Presets.easeInEaseOut,
                duration: 300,
            });
            setCancelButtonVisible(false);
        };

        return (
            <View style={[styles.wrapper, style]}>
                <TextInput
                    ref={inputRef}
                    value={value}
                    clearButtonMode="never"
                    autoCorrect={false}
                    onChangeText={onChangeText}
                    onFocus={handleFocus}
                    returnKeyType={returnKeyType}
                    placeholderTextColor={placeholderTextColor}
                    selectionColor={selectionColor}
                    {...props}
                    style={styles.input}
                />
                {leftIcon ? (
                    <View style={styles.leftIcon}>{leftIcon}</View>
                ) : (
                    <SearchIcon color={iconColor} style={styles.leftIcon} />
                )}
                <View>
                    <ClearButton
                        color={iconColor}
                        visible={!!value}
                        onPress={handleClear}
                        style={styles.clearButton}
                    />
                </View>
                <CancelButton
                    text={cancelText}
                    visible={cancelButtonVisible}
                    onPress={handleCancel}
                    style={styles.cancelButton}
                />
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
        height: 40,
        flex: 1,
        backgroundColor: '#EEEEEE',
        borderRadius: 12,
        paddingHorizontal: 35,
    },
    cancelButton: {
        marginLeft: 10,
    },
    clearButton: {
        marginLeft: -25,
        width: 14,
        height: 14,
    },
    leftIcon: {
        position: 'absolute',
        left: 10,
        width: 18,
        height: 18,
    },
});

const darkStyles = StyleSheet.create({
    ...defaultStyles,
    input: {
        ...defaultStyles.input,
        backgroundColor: '#1c1c1f',
        color: '#FFF',
    },
});

export default SearchBar;
