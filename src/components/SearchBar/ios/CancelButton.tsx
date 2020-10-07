import React, { useState, useRef, useLayoutEffect } from 'react';
import {
    Text,
    StyleSheet,
    Animated,
    Easing,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { iosBlue } from '../../../constants/colors';
import Button from '../../Button';

type Props = {
    text: string;
    visible: boolean;
    onPress(): void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const CancelButton: React.FC<Props> = ({
    text,
    visible,
    style,
    textStyle,
    onPress,
}) => {
    const [width, setWidth] = useState<number>();
    const animationValue = useRef(new Animated.Value(visible ? 1 : 0));

    useLayoutEffect(() => {
        const animation = Animated.timing(animationValue.current, {
            toValue: visible ? 1 : 0,
            useNativeDriver: true,
            duration: visible ? 250 : 200,
            delay: visible ? 50 : 0,
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
            <Button onPress={onPress}>
                <Text style={[styles.cancelButtonText, textStyle]}>{text}</Text>
            </Button>
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
