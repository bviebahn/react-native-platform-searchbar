import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import ClearIcon from '../../icons/ClearIconIOS';

type Props = {
    color?: string;
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    onPress(): void;
};

const ClearButton: React.FC<Props> = ({
    color,
    style,
    accessibilityLabel = 'clear',
    onPress,
}) => {
    return (
        <Pressable
            style={({ pressed }) => [style, pressed && { opacity: 0.5 }]}
            accessibilityLabel={accessibilityLabel}
            accessibilityComponentType="button"
            accessibilityRole="button"
            accessibilityTraits="button"
            hitSlop={8}
            onPress={onPress}
        >
            <ClearIcon color={color} />
        </Pressable>
    );
};

export default ClearButton;
