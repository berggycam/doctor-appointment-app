import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_RESULT = {
    id: '1',
    title: 'Complete Blood Count (CBC)',
    date: 'Oct 20, 2025',
    status: 'Normal',
    doctor: 'Dr. Ama Mensah',
    summary: 'All values are within normal range. No signs of infection or anemia.',
    details: [
        { name: 'Hemoglobin', value: '14.5 g/dL', range: '13.5 - 17.5', status: 'Normal' },
        { name: 'WBC', value: '6.5 K/uL', range: '4.5 - 11.0', status: 'Normal' },
        { name: 'Platelets', value: '250 K/uL', range: '150 - 450', status: 'Normal' },
    ],
};

export default function LabResultDetailsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const result = MOCK_RESULT;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Result Details</Typography>
                <TouchableOpacity>
                    <IconSymbol name="square.and.arrow.up" size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View style={styles.iconContainer}>
                            <IconSymbol name="doc.text.fill" size={32} color={Colors.primary} />
                        </View>
                        <View style={{ flex: 1, marginLeft: Spacing.m }}>
                            <Typography variant="h3" weight="semibold">{result.title}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>{result.date}</Typography>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <Typography variant="body" color={Colors.textSecondary} style={{ marginBottom: Spacing.m }}>
                        Ordered by <Typography variant="body" weight="medium" color={Colors.text}>{result.doctor}</Typography>
                    </Typography>

                    <View style={styles.summaryBox}>
                        <Typography variant="body" weight="medium" color={Colors.success}>Summary: {result.status}</Typography>
                        <Typography variant="caption" color={Colors.textSecondary} style={{ marginTop: 4 }}>{result.summary}</Typography>
                    </View>
                </View>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Detailed Analysis</Typography>
                <View style={styles.detailsCard}>
                    {result.details.map((item, index) => (
                        <View key={index} style={[styles.detailRow, index !== result.details.length - 1 && styles.detailBorder]}>
                            <View style={{ flex: 1 }}>
                                <Typography variant="body" weight="medium">{item.name}</Typography>
                                <Typography variant="caption" color={Colors.textSecondary}>Range: {item.range}</Typography>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Typography variant="body" weight="bold">{item.value}</Typography>
                                <Typography variant="caption" color={Colors.success}>{item.status}</Typography>
                            </View>
                        </View>
                    ))}
                </View>

                <Button
                    title="Download PDF Report"
                    variant="outline"
                    icon={<IconSymbol name="arrow.down.doc.fill" size={20} color={Colors.primary} />}
                    style={{ marginTop: Spacing.xl }}
                    onPress={() => { }}
                />
            </ScrollView>
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
    content: {
        padding: Spacing.l,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        padding: Spacing.l,
        ...Shadows.small,
        marginBottom: Spacing.xl,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.m,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: BorderRadius.m,
        backgroundColor: Colors.backgroundSecondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginBottom: Spacing.m,
    },
    summaryBox: {
        backgroundColor: Colors.backgroundSecondary,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
    },
    detailsCard: {
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        padding: Spacing.m,
        ...Shadows.small,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: Spacing.m,
    },
    detailBorder: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
});
