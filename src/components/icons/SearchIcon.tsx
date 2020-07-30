import React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { StyleProp, ViewStyle } from 'react-native';

type Props = {
    color?: string;
    style?: StyleProp<ViewStyle>;
};

const SearchIcon: React.FC<Props> = ({ color, style }) => {
    return (
        <Svg viewBox="0 0 16 16" style={style}>
            <Path
                fill={color || 'currentColor'}
                fillRule="evenodd"
                d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
            />
        </Svg>
    );
};

export default SearchIcon;
