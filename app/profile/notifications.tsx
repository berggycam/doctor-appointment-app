import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotificationsScreen() {
    const router = useRouter();
    const [settings, setSettings] = useState({
        appointments: true,
        reminders: true,
        updates: false,
    });

    const toggleSwitch = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Notifications</Typography>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.settingItem}>
                    <View>
                        <Typography variant="body" weight="bold">Appointment Alerts</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>Get notified about upcoming visits</Typography>
                    </View>
                    <Switch
                        value={settings.appointments}
                        onValueChange={() => toggleSwitch('appointments')}
                        trackColor={{ false: Colors.border, true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingItem}>
                    <View>
                        <Typography variant="body" weight="bold">Medication Reminders</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>Receive alerts to take your medicine</Typography>
                    </View>
                    <Switch
                        value={settings.reminders}
                        onValueChange={() => toggleSwitch('reminders')}
                        trackColor={{ false: Colors.border, true: Colors.primary }}
                    />
                </View>

                <View style={styles.settingItem}>
                    <View>
                        <Typography variant="body" weight="bold">App Updates</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>New features and improvements</Typography>
                    </View>
                    <Switch
                        value={settings.updates}
                        onValueChange={() => toggleSwitch('updates')}
                        trackColor={{ false: Colors.border, true: Colors.primary }}
                    />
                </View>
            </View>
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
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
});
