import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
    const router = useRouter();
    const { signIn, isLoading } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // In a real app, we'd call a signUp function
        signIn(); // For now, just sign in
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Typography variant="h1" weight="bold" style={styles.title}>Create Account</Typography>
                        <Typography variant="body" color={Colors.textSecondary}>
                            Join us to manage your health journey.
                        </Typography>
                    </View>

                    <View style={styles.form}>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={name}
                            onChangeText={setName}
                        />
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
                            placeholder="Create a password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <Button
                            title="Sign Up"
                            onPress={handleSignup}
                            loading={isLoading}
                            style={styles.signUpButton}
                        />

                        <View style={styles.footer}>
                            <Typography variant="body" color={Colors.textSecondary}>Already have an account? </Typography>
                            <Typography
                                variant="body"
                                color={Colors.primary}
                                weight="semibold"
                                onPress={() => router.back()}
                            >
                                Sign In
                            </Typography>
                        </View>
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
    signUpButton: {
        marginTop: Spacing.m,
        marginBottom: Spacing.l,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
