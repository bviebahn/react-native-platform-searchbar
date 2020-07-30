import React, { useState, useRef, useLayoutEffect } from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
    Animated,
    Easing,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { iosBlue } from './constants/colors';

type Props = {
    text: string;
    visible: boolean;
    onPress(): void;
    style?: StyleProp<ViewStyle>;
};

const CancelButton: React.FC<Props> = ({ text, visible, style, onPress }) => {
    const [width, setWidth] = useState<number>();
    const animationValue = useRef(new Animated.Value(visible ? 1 : 0));

    useLayoutEffect(() => {
        if (visible) {
            const animation = Animated.timing(animationValue.current, {
                toValue: 1,
                useNativeDriver: true,
                duration: 250,
                delay: 50,
                easing: Easing.inOut(Easing.ease),
            });
            animation.start();
            return animation.stop;
        }

        const animation = Animated.timing(animationValue.current, {
            toValue: 0,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.inOut(Easing.ease),
        });
        animation.start();
        return animation.stop;
    }, [visible]);

    return (
        <Animated.View
            style={[
                {
                    opacity: animationValue.current,
                    transform: [
                        {
                            translateX: animationValue.current.interpolate({
                                inputRange: [0, 1],
                                outputRange: [width || 1, 0],
                            }),
                        },
                    ],
                },
                !visible && styles.notVisible,
                style,
            ]}
            onLayout={e => {
                setWidth(e.nativeEvent.layout.width);
            }}
        >
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    pressed ? { opacity: 0.5 } : undefined
                }
            >
                <Text style={styles.cancelButtonText}>{text}</Text>
            </Pressable>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    cancelButtonText: {
        color: iosBlue,
        fontSize: 16,
    },
    notVisible: { position: 'absolute', right: 0 },
});

export default CancelButton;
