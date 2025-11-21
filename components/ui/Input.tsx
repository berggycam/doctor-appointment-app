import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { BorderRadius, Colors, FontSize, Spacing } from '../../constants/theme';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    containerStyle,
    leftIcon,
    rightIcon,
    style,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[
                styles.inputContainer,
                error ? styles.inputError : null,
                props.editable === false ? styles.inputDisabled : null
            ]}>
                {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor={Colors.textTertiary}
                    selectionColor={Colors.primary}
                    {...props}
                />
                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.m,
    },
    label: {
        fontSize: FontSize.s,
        color: Colors.textSecondary,
        marginBottom: Spacing.xs,
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: BorderRadius.m,
        backgroundColor: Colors.background,
        minHeight: 48,
    },
    input: {
        flex: 1,
        paddingHorizontal: Spacing.m,
        paddingVertical: Spacing.s,
        color: Colors.text,
        fontSize: FontSize.m,
    },
    inputError: {
        borderColor: Colors.error,
    },
    inputDisabled: {
        backgroundColor: Colors.backgroundSecondary,
        borderColor: Colors.border,
    },
    errorText: {
        color: Colors.error,
        fontSize: FontSize.xs,
        marginTop: Spacing.xs,
    },
    leftIcon: {
        paddingLeft: Spacing.m,
    },
    rightIcon: {
        paddingRight: Spacing.m,
    },
});
