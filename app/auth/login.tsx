import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const router = useRouter();
    const { signIn, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signIn();
        // In a real app, we'd wait for signIn to complete and check success
        // For now, the root layout will handle the redirect based on user state
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Typography variant="h1" weight="bold" style={styles.title}>Welcome Back</Typography>
                        <Typography variant="body" color={Colors.textSecondary}>
                            Sign in to access your medical records and appointments.
                        </Typography>
                    </View>

                    <View style={styles.form}>
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <Typography
                            variant="caption"
                            color={Colors.primary}
                            align="right"
                            style={styles.forgotPassword}
                            onPress={() => { }}
                        >
                            Forgot Password?
                        </Typography>

                        <Button
                            title="Sign In"
                            onPress={handleLogin}
                            loading={isLoading}
                            style={styles.signInButton}
                        />

                        <View style={styles.divider}>
                            <View style={styles.line} />
                            <Typography variant="caption" color={Colors.textTertiary}>OR</Typography>
                            <View style={styles.line} />
                        </View>

                        <Button
                            title="Sign Up"
                            variant="outline"
                            onPress={() => router.push('/auth/signup')}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        padding: Spacing.xl,
        justifyContent: 'center',
    },
    header: {
        marginBottom: Spacing.xxl,
    },
    title: {
        marginBottom: Spacing.s,
    },
    form: {
        gap: Spacing.m,
    },
    forgotPassword: {
        marginBottom: Spacing.m,
    },
    signInButton: {
        marginBottom: Spacing.l,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.l,
        gap: Spacing.m,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.border,
    },
});
