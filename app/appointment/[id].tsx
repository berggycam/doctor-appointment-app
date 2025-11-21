import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_APPOINTMENT = {
    id: '1',
    doctor: {
        name: 'Dr. Ama Mensah',
        specialty: 'General Practitioner',
        image: 'https://i.pravatar.cc/150?u=1',
    },
    date: 'Mon, Oct 24',
    time: '10:00 AM',
    status: 'Confirmed',
    type: 'In-person Visit',
    location: 'Medical Center, Room 302',
    notes: 'Regular checkup for blood pressure.',
};

export default function AppointmentDetailsScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const appointment = MOCK_APPOINTMENT;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Appointment Details</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    <View style={styles.doctorRow}>
                        <Image source={{ uri: appointment.doctor.image }} style={styles.doctorImage} />
                        <View style={styles.doctorInfo}>
                            <Typography variant="h3" weight="semibold">{appointment.doctor.name}</Typography>
                            <Typography variant="body" color={Colors.textSecondary}>{appointment.doctor.specialty}</Typography>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.infoRow}>
                        <IconSymbol name="calendar" size={20} color={Colors.primary} />
                        <Typography variant="body" style={styles.infoText}>{appointment.date} at {appointment.time}</Typography>
                    </View>
                    <View style={styles.infoRow}>
                        <IconSymbol name="mappin.and.ellipse" size={20} color={Colors.primary} />
                        <Typography variant="body" style={styles.infoText}>{appointment.location}</Typography>
                    </View>
                    <View style={styles.infoRow}>
                        <IconSymbol name="stethoscope" size={20} color={Colors.primary} />
                        <Typography variant="body" style={styles.infoText}>{appointment.type}</Typography>
                    </View>
                </View>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Notes</Typography>
                <View style={styles.noteCard}>
                    <Typography variant="body" color={Colors.textSecondary}>{appointment.notes}</Typography>
                </View>

                <View style={styles.actions}>
                    <Button
                        title="Reschedule"
                        variant="outline"
                        style={styles.actionButton}
                        onPress={() => { }}
                    />
                    <Button
                        title="Cancel Appointment"
                        variant="ghost"
                        textStyle={{ color: Colors.error }}
                        onPress={() => { }}
                    />
                </View>
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
    doctorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.m,
    },
    doctorImage: {
        width: 60,
        height: 60,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
    },
    doctorInfo: {
        marginLeft: Spacing.m,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginVertical: Spacing.m,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Spacing.m,
    },
    infoText: {
        marginLeft: Spacing.m,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
    },
    noteCard: {
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.m,
        padding: Spacing.l,
        marginBottom: Spacing.xl,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    actions: {
        gap: Spacing.m,
    },
    actionButton: {
        backgroundColor: Colors.white,
    },
});
