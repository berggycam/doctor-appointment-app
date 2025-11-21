import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { BorderRadius, Colors, FontSize, Spacing } from '../../constants/theme';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    style,
    textStyle,
    icon,
}) => {
    const getBackgroundColor = () => {
        if (disabled) return Colors.border;
        switch (variant) {
            case 'primary': return Colors.primary;
            case 'secondary': return Colors.backgroundSecondary;
            case 'outline': return 'transparent';
            case 'ghost': return 'transparent';
            default: return Colors.primary;
        }
    };

    const getTextColor = () => {
        if (disabled) return Colors.textTertiary;
        switch (variant) {
            case 'primary': return Colors.white;
            case 'secondary': return Colors.text;
            case 'outline': return Colors.primary;
            case 'ghost': return Colors.primary;
            default: return Colors.white;
        }
    };

    const getBorder = () => {
        if (variant === 'outline' && !disabled) {
            return { borderWidth: 1, borderColor: Colors.primary };
        }
        return {};
    };

    const getPadding = () => {
        switch (size) {
            case 'small': return { paddingVertical: Spacing.xs, paddingHorizontal: Spacing.m };
            case 'medium': return { paddingVertical: Spacing.m, paddingHorizontal: Spacing.l };
            case 'large': return { paddingVertical: Spacing.l, paddingHorizontal: Spacing.xl };
            default: return { paddingVertical: Spacing.m, paddingHorizontal: Spacing.l };
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor() },
                getBorder(),
                getPadding(),
                style,
            ]}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <>
                    {icon}
                    <Text style={[
                        styles.text,
                        { color: getTextColor(), fontSize: size === 'small' ? FontSize.s : FontSize.m },
                        icon ? { marginLeft: Spacing.s } : {},
                        textStyle
                    ]}>
                        {title}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: BorderRadius.m,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '600',
        textAlign: 'center',
    },
});
