import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacyScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Privacy Policy</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Data Collection</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    We collect information you provide directly to us, such as when you create an account, book an appointment, or communicate with us.
                </Typography>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Data Usage</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    We use the information we collect to provide, maintain, and improve our services, such as to process transactions and send you related information.
                </Typography>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Data Security</Typography>
                <Typography variant="body" style={styles.paragraph}>
                    We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
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
