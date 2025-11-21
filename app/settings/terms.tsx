import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Terms of Service</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>1. Introduction</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    Welcome to HealthApp. By using our app, you agree to these terms. Please read them carefully.
                </Typography>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>2. Use of Service</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    You agree to use this app only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the app.
                </Typography>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>3. Medical Advice</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    Content on this app is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                </Typography>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>4. Privacy</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    Your use of the app is also governed by our Privacy Policy.
                </Typography>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.l,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    backButton: {
        padding: Spacing.xs,
    },
    content: {
        padding: Spacing.l,
    },
    sectionTitle: {
        marginTop: Spacing.m,
        marginBottom: Spacing.s,
    },
    paragraph: {
        marginBottom: Spacing.m,
        lineHeight: 24,
        color: Colors.textSecondary,
    },
});
