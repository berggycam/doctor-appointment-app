import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_MEDICINES = [
    { id: '1', name: 'Amoxicillin', dosage: '500mg', frequency: '3 times a day', remaining: '5 days', icon: 'pills.fill' },
    { id: '2', name: 'Paracetamol', dosage: '500mg', frequency: 'As needed', remaining: '10 tablets', icon: 'pills.fill' },
    { id: '3', name: 'Vitamin D', dosage: '1000IU', frequency: 'Once a day', remaining: '20 days', icon: 'sun.max.fill' },
];

export default function MedicinesScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">My Medicines</Typography>
                <View style={{ width: 24 }} />
            </View>

            <FlatList
                data={MOCK_MEDICINES}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.iconContainer}>
                            <IconSymbol name={item.icon as any} size={24} color={Colors.primary} />
                        </View>
                        <View style={styles.info}>
                            <Typography variant="body" weight="bold">{item.name}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>{item.dosage} • {item.frequency}</Typography>
                            <View style={styles.badge}>
                                <Typography variant="caption" color={Colors.primary} weight="medium">{item.remaining} left</Typography>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.refillButton}>
                            <Typography variant="caption" color={Colors.white} weight="bold">Refill</Typography>
                        </TouchableOpacity>
                    </View>
                )}
            />
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
    listContent: {
        padding: Spacing.m,
        gap: Spacing.m,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.m,
    },
    info: {
        flex: 1,
        gap: 4,
    },
    badge: {
        backgroundColor: Colors.backgroundSecondary,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: BorderRadius.s,
        alignSelf: 'flex-start',
    },
    refillButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: Spacing.m,
        paddingVertical: Spacing.s,
        borderRadius: BorderRadius.round,
    },
});
