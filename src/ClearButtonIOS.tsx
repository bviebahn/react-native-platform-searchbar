import React from 'react';
import { Pressable, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import ClearIcon from './icons/ClearIcon';

type Props = {
    color?: string;
    style?: StyleProp<ViewStyle>;
    visible: boolean;
    onPress(): void;
};

const ClearButton: React.FC<Props> = ({ color, style, visible, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                style,
                pressed && { opacity: 0.5 },
                !visible && styles.invisible,
            ]}
            disabled={!visible}
            onPress={onPress}
        >
            <ClearIcon color={color} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    invisible: { opacity: 0 },
});

export default ClearButton;
