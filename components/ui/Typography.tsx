import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { Colors, FontSize } from '../../constants/theme';

interface TypographyProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
    color?: string;
    align?: 'left' | 'center' | 'right';
    weight?: 'regular' | 'medium' | 'bold' | 'semibold';
}

export const Typography: React.FC<TypographyProps> = ({
    children,
    variant = 'body',
    color = Colors.text,
    align = 'left',
    weight = 'regular',
    style,
    ...props
}) => {
    const getStyle = (): TextStyle => {
        switch (variant) {
            case 'h1': return styles.h1;
            case 'h2': return styles.h2;
            case 'h3': return styles.h3;
            case 'body': return styles.body;
            case 'caption': return styles.caption;
            case 'label': return styles.label;
            default: return styles.body;
        }
    };

    const getWeight = (): TextStyle['fontWeight'] => {
        switch (weight) {
            case 'regular': return '400';
            case 'medium': return '500';
            case 'semibold': return '600';
            case 'bold': return '700';
            default: return '400';
        }
    };

    return (
        <Text
            style={[
                getStyle(),
                { color, textAlign: align, fontWeight: getWeight() },
                style,
            ]}
            {...props}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: FontSize.xxl,
        lineHeight: 40,
    },
    h2: {
        fontSize: FontSize.xl,
        lineHeight: 32,
    },
    h3: {
        fontSize: FontSize.l,
        lineHeight: 28,
    },
    body: {
        fontSize: FontSize.m,
        lineHeight: 24,
    },
    caption: {
        fontSize: FontSize.xs,
        lineHeight: 16,
    },
    label: {
        fontSize: FontSize.s,
        lineHeight: 20,
    },
});
