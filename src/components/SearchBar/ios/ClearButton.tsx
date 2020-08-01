import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import ClearIcon from '../../icons/ClearIconIOS';

type Props = {
    color?: string;
    style?: StyleProp<ViewStyle>;
    onPress(): void;
};

const ClearButton: React.FC<Props> = ({ color, style, onPress }) => {
    return (
        <Pressable
            style={({ pressed }) => [style, pressed && { opacity: 0.5 }]}
            onPress={onPress}
        >
            <ClearIcon color={color} />
        </Pressable>
    );
};

export default ClearButton;
