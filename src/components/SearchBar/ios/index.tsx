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
    useWindowDimensions,
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
            cancelTextStyle,
            cancelAccessibilityLabel,
            clearAccessibilityLabel,
            returnKeyType = 'search',
            selectionColor = iosBlue,
            placeholderTextColor = theme === 'light'
                ? iosLightPlaceholderGray
                : iosDarkPlaceholderGray,
            iconColor = placeholderTextColor,
            leftIcon,
            style,
            inputStyle,
            children,
            onFocus,
            onChangeText,
            onCancel,
            onClear,
            ...props
        },
        ref
    ) => {
        const { fontScale } = useWindowDimensions();

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
            if (onClear) {
                onClear();
            }
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
                <View style={styles.inputWrapper}>
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
                        accessibilityRole="search"
                        accessibilityTraits="search"
                        {...props}
                        style={[
                            styles.input,
                            { paddingHorizontal: 25 + 10 * fontScale },
                            inputStyle,
                        ]}
                    />
                    <View pointerEvents="box-none" style={styles.children}>
                        {leftIcon ? (
                            <View style={styles.leftIcon}>{leftIcon}</View>
                        ) : (
                            <SearchIcon
                                color={iconColor}
                                style={styles.leftIcon}
                            />
                        )}
                        {children}
                        {value ? (
                            <ClearButton
                                color={iconColor}
                                onPress={handleClear}
                                accessibilityLabel={clearAccessibilityLabel}
                                style={styles.clearButton}
                            />
                        ) : undefined}
                    </View>
                </View>
                <CancelButton
                    text={cancelText}
                    visible={cancelButtonVisible}
                    onPress={handleCancel}
                    style={styles.cancelButton}
                    textStyle={cancelTextStyle}
                    accessibilityLabel={cancelAccessibilityLabel}
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
    inputWrapper: {
        flex: 1,
    },
    input: {
        backgroundColor: '#E3E3E9',
        borderRadius: 12,
        paddingVertical: 10,
    },
    children: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    cancelButton: {
        marginLeft: 10,
    },
    clearButton: {
        height: '40%',
        aspectRatio: 1,
        marginRight: 10,
    },
    leftIcon: {
        marginLeft: 10,
        marginRight: 'auto',
        height: '50%',
        aspectRatio: 1,
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
