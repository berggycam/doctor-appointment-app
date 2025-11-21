import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentsScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Payment Methods</Typography>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <IconSymbol name="creditcard.fill" size={24} color={Colors.primary} />
                    </View>
                    <View style={styles.cardInfo}>
                        <Typography variant="body" weight="bold">Visa ending in 4242</Typography>
                        <Typography variant="caption" color={Colors.textSecondary}>Expires 12/25</Typography>
                    </View>
                    <TouchableOpacity>
                        <Typography variant="caption" color={Colors.error} weight="medium">Remove</Typography>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <IconSymbol name="plus" size={20} color={Colors.white} />
                    <Typography variant="body" color={Colors.white} weight="semibold" style={{ marginLeft: Spacing.s }}>Add New Card</Typography>
                </TouchableOpacity>
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
        borderWidth: 1,
        borderColor: Colors.border,
        marginBottom: Spacing.l,
    },
    cardIcon: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.s,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.m,
    },
    cardInfo: {
        flex: 1,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        padding: Spacing.m,
        borderRadius: BorderRadius.l,
    },
});
