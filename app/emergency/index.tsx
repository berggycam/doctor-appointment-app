import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmergencyScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold" color={Colors.error}>Emergency</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.alertBox}>
                    <IconSymbol name="exclamationmark.triangle.fill" size={48} color={Colors.white} />
                    <Typography variant="h3" weight="bold" color={Colors.white} align="center" style={{ marginTop: Spacing.m }}>
                        Are you in an emergency?
                    </Typography>
                    <Typography variant="body" color={Colors.white} align="center" style={{ marginTop: Spacing.s, opacity: 0.9 }}>
                        If you are experiencing a medical emergency, please call emergency services immediately.
                    </Typography>
                </View>

                <TouchableOpacity style={styles.sosButton}>
                    <View style={styles.sosIcon}>
                        <IconSymbol name="phone.fill" size={32} color={Colors.white} />
                    </View>
                    <View>
                        <Typography variant="h3" weight="bold" color={Colors.white}>Call Ambulance</Typography>
                        <Typography variant="body" color="rgba(255,255,255,0.8)">102</Typography>
                    </View>
                </TouchableOpacity>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Emergency Contacts</Typography>

                <View style={styles.contactCard}>
                    <View style={styles.contactInfo}>
                        <Typography variant="body" weight="bold">City Hospital Emergency</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>24/7 Support</Typography>
                    </View>
                    <TouchableOpacity style={styles.callButton}>
                        <IconSymbol name="phone.fill" size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={styles.contactCard}>
                    <View style={styles.contactInfo}>
                        <Typography variant="body" weight="bold">Dr. Sarah Wilson</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>General Practitioner</Typography>
                    </View>
                    <TouchableOpacity style={styles.callButton}>
                        <IconSymbol name="phone.fill" size={20} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    backButton: {
        padding: Spacing.xs,
    },
    content: {
        padding: Spacing.l,
    },
    alertBox: {
        backgroundColor: Colors.error,
        borderRadius: BorderRadius.l,
        padding: Spacing.xl,
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    sosButton: {
        backgroundColor: Colors.error,
        borderRadius: BorderRadius.l,
        padding: Spacing.l,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.xl,
        elevation: 4,
        shadowColor: Colors.error,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    sosIcon: {
        width: 56,
        height: 56,
        borderRadius: BorderRadius.round,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.m,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
    },
    contactCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
        marginBottom: Spacing.m,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    contactInfo: {
        gap: 4,
    },
    callButton: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
