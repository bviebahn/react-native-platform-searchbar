import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    NativeSyntheticEvent,
    TextInputFocusEventData,
} from 'react-native';

import CancelButton from './CancelButton.ios';

import type { SearchBarProps } from './types';
const SearchBar: React.FC<SearchBarProps> = ({
    value,
    theme = 'light',
    cancelText = 'Cancel',
    onFocus,
    ...props
}) => {
    const styles = theme === 'light' ? defaultStyles : darkStyles;
    const [cancelButtonVisible, setCancelButtonVisible] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setCancelButtonVisible(true);
        if (onFocus) {
            onFocus(e);
        }
    };

    const handleCancel = () => {
        if (inputRef.current) {
            inputRef.current.clear();
            inputRef.current.blur();
        }
        setCancelButtonVisible(false);
    };

    return (
        <View style={styles.wrapper}>
            <TextInput
                ref={inputRef}
                value={value}
                clearButtonMode="while-editing"
                onFocus={handleFocus}
                {...props}
                style={styles.input}
            />
            <CancelButton
                text={cancelText}
                visible={cancelButtonVisible}
                onPress={handleCancel}
                style={styles.cancelButton}
            />
        </View>
    );
};

const defaultStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        height: 36,
        flexGrow: 1,
        backgroundColor: '#EEEEEE',
        borderRadius: 12,
        paddingHorizontal: 20,
    },
    cancelButton: {
        marginLeft: 10,
    },
});

const darkStyles = StyleSheet.create({
    ...defaultStyles,
});

export default SearchBar;
