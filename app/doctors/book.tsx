import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATES = [
    { day: 'Mon', date: '21' },
    { day: 'Tue', date: '22' },
    { day: 'Wed', date: '23' },
    { day: 'Thu', date: '24' },
    { day: 'Fri', date: '25' },
    { day: 'Sat', date: '26' },
];

const TIME_SLOTS = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
];

export default function BookingScreen() {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState('21');
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleConfirm = () => {
        // Show success modal or navigate to success screen
        // For now, go back to appointments tab
        router.dismiss();
        router.replace('/(tabs)/appointments');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
                    <IconSymbol name="xmark" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Book Appointment</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Select Date</Typography>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.datesScroll}>
                    {DATES.map((item) => (
                        <TouchableOpacity
                            key={item.date}
                            style={[
                                styles.dateCard,
                                selectedDate === item.date && styles.dateCardActive
                            ]}
                            onPress={() => setSelectedDate(item.date)}
                        >
                            <Typography
                                variant="caption"
                                color={selectedDate === item.date ? Colors.white : Colors.textSecondary}
                            >
                                {item.day}
                            </Typography>
                            <Typography
                                variant="h3"
                                weight="bold"
                                color={selectedDate === item.date ? Colors.white : Colors.text}
                            >
                                {item.date}
                            </Typography>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Available Time</Typography>
                <View style={styles.slotsGrid}>
                    {TIME_SLOTS.map((time) => (
                        <TouchableOpacity
                            key={time}
                            style={[
                                styles.timeSlot,
                                selectedTime === time && styles.timeSlotActive
                            ]}
                            onPress={() => setSelectedTime(time)}
                        >
                            <Typography
                                variant="body"
                                color={selectedTime === time ? Colors.white : Colors.text}
                                weight={selectedTime === time ? 'semibold' : 'regular'}
                            >
                                {time}
                            </Typography>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Confirm Appointment"
                    size="large"
                    disabled={!selectedTime}
                    onPress={handleConfirm}
                />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.l,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    closeButton: {
        padding: Spacing.xs,
    },
    content: {
        padding: Spacing.l,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
        marginTop: Spacing.m,
    },
    datesScroll: {
        gap: Spacing.m,
        marginBottom: Spacing.l,
    },
    dateCard: {
        width: 60,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BorderRadius.l,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
    },
    dateCardActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    slotsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.m,
    },
    timeSlot: {
        width: '30%',
        paddingVertical: Spacing.m,
        alignItems: 'center',
        borderRadius: BorderRadius.m,
        borderWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
    },
    timeSlotActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    footer: {
        padding: Spacing.l,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
});
