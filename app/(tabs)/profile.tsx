import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU_ITEMS = [
    { icon: 'person.fill', label: 'Personal Information', route: '/profile/personal' },
    { icon: 'doc.text.fill', label: 'Medical Records', route: '/lab-results' },
    { icon: 'creditcard.fill', label: 'Payment Methods', route: '/profile/payments' },
    { icon: 'bell.fill', label: 'Notifications', route: '/profile/notifications' },
    { icon: 'questionmark.circle.fill', label: 'Help & Support', route: '/profile/support' },
];

export default function ProfileScreen() {
    const router = useRouter();
    const { signOut, user } = useAuth();

    const handleLogout = () => {
        signOut();
        router.replace('/auth/login');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <Typography variant="h2" weight="bold">Profile</Typography>
                    <TouchableOpacity onPress={() => router.push('/settings' as any)}>
                        <IconSymbol name="gear" size={24} color={Colors.text} />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileCard}>
                    <Image source={{ uri: 'https://i.pravatar.cc/150?u=8' }} style={styles.avatar} />
                    <Typography variant="h3" weight="bold" style={styles.name}>{user?.name || 'David Johnson'}</Typography>
                    <Typography variant="body" color={Colors.textSecondary}>{user?.email || 'david.johnson@example.com'}</Typography>
                    <View style={styles.editButton}>
                        <Typography variant="caption" color={Colors.primary} weight="semibold">Edit Profile</Typography>
                    </View>
                </View>

                <View style={styles.menuContainer}>
                    {MENU_ITEMS.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.menuItem, index !== MENU_ITEMS.length - 1 && styles.menuBorder]}
                            onPress={() => {
                                router.push(item.route as any);
                            }}
                        >
                            <View style={styles.menuIcon}>
                                <IconSymbol name={item.icon as any} size={20} color={Colors.primary} />
                            </View>
                            <Typography variant="body" style={styles.menuLabel}>{item.label}</Typography>
                            <IconSymbol name="chevron.right" size={16} color={Colors.textTertiary} />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <IconSymbol name="arrow.right.square.fill" size={20} color={Colors.error} />
                    <Typography variant="body" color={Colors.error} weight="semibold" style={{ marginLeft: Spacing.m }}>Log Out</Typography>
                </TouchableOpacity>

                <Typography variant="caption" color={Colors.textTertiary} align="center" style={styles.version}>
                    Version 1.0.0
                </Typography>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundSecondary,
    },
    content: {
        padding: Spacing.l,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    profileCard: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        padding: Spacing.xl,
        ...Shadows.small,
        marginBottom: Spacing.xl,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: BorderRadius.round,
        marginBottom: Spacing.m,
        backgroundColor: Colors.backgroundSecondary,
    },
    name: {
        marginBottom: 4,
    },
    editButton: {
        marginTop: Spacing.m,
        paddingVertical: Spacing.xs,
        paddingHorizontal: Spacing.m,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
    },
    menuContainer: {
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        ...Shadows.small,
        marginBottom: Spacing.xl,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.m,
    },
    menuBorder: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    menuIcon: {
        width: 36,
        height: 36,
        borderRadius: BorderRadius.m,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.m,
    },
    menuLabel: {
        flex: 1,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.m,
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        ...Shadows.small,
        marginBottom: Spacing.xl,
    },
    version: {
        marginBottom: Spacing.xl,
    },
});
