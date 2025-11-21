import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LAB_RESULTS = [
    { id: '1', title: 'Complete Blood Count (CBC)', date: 'Oct 20, 2025', status: 'Normal', doctor: 'Dr. Sarah Wilson' },
    { id: '2', title: 'Lipid Panel', date: 'Sep 15, 2025', status: 'Attention Needed', doctor: 'Dr. James Lee' },
    { id: '3', title: 'Vitamin D Test', date: 'Aug 10, 2025', status: 'Normal', doctor: 'Dr. Sarah Wilson' },
];

export default function LabResultsScreen() {
    const router = useRouter();

    const getStatusColor = (status: string) => {
        if (status === 'Normal') return Colors.success;
        if (status === 'Attention Needed') return Colors.warning;
        return Colors.textSecondary;
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h2" weight="bold">Lab Results</Typography>
                <View style={{ width: 24 }} />
            </View>

            <FlatList
                data={LAB_RESULTS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => router.push(`/lab-results/${item.id}`)}
                    >
                        <View style={styles.iconContainer}>
                            <IconSymbol name="doc.text.fill" size={24} color={Colors.primary} />
                        </View>
                        <View style={styles.info}>
                            <Typography variant="body" weight="semibold">{item.title}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>{item.date} • {item.doctor}</Typography>
                        </View>
                        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
                            <Typography variant="caption" color={getStatusColor(item.status)} weight="medium">{item.status}</Typography>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundSecondary,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.l,
        backgroundColor: Colors.background,
    },
    backButton: {
        padding: Spacing.xs,
    },
    listContent: {
        padding: Spacing.l,
        gap: Spacing.m,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        padding: Spacing.m,
        ...Shadows.small,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: BorderRadius.m,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        marginLeft: Spacing.m,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: BorderRadius.s,
    },
});
