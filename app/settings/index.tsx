import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isBiometricEnabled, setIsBiometricEnabled] = useState(true);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Settings</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Appearance</Typography>
                <View style={styles.settingItem}>
                    <View style={styles.settingLabel}>
                        <IconSymbol name="moon.fill" size={20} color={Colors.text} />
                        <Typography variant="body" style={{ marginLeft: Spacing.m }}>Dark Mode</Typography>
                    </View>
                    <Switch
                        value={isDarkMode}
                        onValueChange={setIsDarkMode}
                        trackColor={{ false: Colors.border, true: Colors.primary }}
                    />
                </View>

                <Typography variant="h3" weight="semibold" style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Security</Typography>
                <View style={styles.settingItem}>
                    <View style={styles.settingLabel}>
                        <IconSymbol name="faceid" size={20} color={Colors.text} />
                        <Typography variant="body" style={{ marginLeft: Spacing.m }}>Biometric Login</Typography>
                    </View>
                    <Switch
                        value={isBiometricEnabled}
                        onValueChange={setIsBiometricEnabled}
                        trackColor={{ false: Colors.border, true: Colors.primary }}
                    />
                </View>
                <TouchableOpacity style={styles.linkItem} onPress={() => router.push('/settings/password' as any)}>
                    <View style={styles.settingLabel}>
                        <IconSymbol name="lock.fill" size={20} color={Colors.text} />
                        <Typography variant="body" style={{ marginLeft: Spacing.m }}>Change Password</Typography>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color={Colors.textTertiary} />
                </TouchableOpacity>

                <Typography variant="h3" weight="semibold" style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>About</Typography>
                <TouchableOpacity style={styles.linkItem} onPress={() => router.push('/settings/terms' as any)}>
                    <View style={styles.settingLabel}>
                        <IconSymbol name="doc.text.fill" size={20} color={Colors.text} />
                        <Typography variant="body" style={{ marginLeft: Spacing.m }}>Terms of Service</Typography>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color={Colors.textTertiary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkItem} onPress={() => router.push('/settings/privacy' as any)}>
                    <View style={styles.settingLabel}>
                        <IconSymbol name="hand.raised.fill" size={20} color={Colors.text} />
                        <Typography variant="body" style={{ marginLeft: Spacing.m }}>Privacy Policy</Typography>
                    </View>
                    <IconSymbol name="chevron.right" size={16} color={Colors.textTertiary} />
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Typography variant="caption" color={Colors.textTertiary} align="center">
                        HealthApp v1.0.0 (Build 102)
                    </Typography>
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
    sectionTitle: {
        marginBottom: Spacing.m,
        color: Colors.primary,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    linkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    settingLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        marginTop: Spacing.xxl,
        marginBottom: Spacing.xl,
    },
});
