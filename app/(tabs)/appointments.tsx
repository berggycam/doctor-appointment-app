import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const APPOINTMENTS = [
    { id: '1', doctor: 'Dr. Ama Mensah', specialty: 'General Practitioner', date: 'Today, 10:00 AM', status: 'Confirmed', image: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', doctor: 'Dr. Kofi Asante', specialty: 'Cardiologist', date: 'Oct 28, 02:30 PM', status: 'Upcoming', image: 'https://i.pravatar.cc/150?u=2' },
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MOCK_CALENDAR_DAYS = Array.from({ length: 35 }, (_, i) => i + 1 > 31 ? null : i + 1);

export default function AppointmentsScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past' | 'calendar'>('upcoming');

    const renderAppointmentCard = ({ item }: { item: any }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/appointment/${item.id}`)}
        >
            <View style={styles.cardHeader}>
                <Image source={{ uri: item.image }} style={styles.avatar} />
                <View style={styles.doctorInfo}>
                    <Typography variant="h3" weight="semibold">{item.doctor}</Typography>
                    <Typography variant="caption" color={Colors.textSecondary}>{item.specialty}</Typography>
                </View>
                <View style={styles.statusBadge}>
                    <Typography variant="caption" color={Colors.white} weight="medium">{item.status}</Typography>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardFooter}>
                <View style={styles.timeContainer}>
                    <IconSymbol name="clock.fill" size={16} color={Colors.textSecondary} />
                    <Typography variant="body" color={Colors.text} style={{ marginLeft: 8 }}>{item.date}</Typography>
                </View>
                <TouchableOpacity style={styles.actionButton}>
                    <Typography variant="caption" color={Colors.primary} weight="semibold">Reschedule</Typography>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    const renderCalendar = () => (
        <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
                <Typography variant="h3" weight="bold">October 2025</Typography>
                <View style={styles.calendarControls}>
                    <TouchableOpacity><IconSymbol name="chevron.left" size={20} color={Colors.text} /></TouchableOpacity>
                    <TouchableOpacity><IconSymbol name="chevron.right" size={20} color={Colors.text} /></TouchableOpacity>
                </View>
            </View>

            <View style={styles.weekDays}>
                {DAYS.map(day => (
                    <Typography key={day} variant="caption" color={Colors.textSecondary} style={styles.weekDay}>{day}</Typography>
                ))}
            </View>

            <View style={styles.daysGrid}>
                {MOCK_CALENDAR_DAYS.map((day, index) => (
                    <View key={index} style={styles.dayCell}>
                        {day && (
                            <TouchableOpacity style={[styles.dayButton, day === 24 && styles.dayActive]}>
                                <Typography variant="body" color={day === 24 ? Colors.white : Colors.text}>{day}</Typography>
                                {day === 24 && <View style={styles.dot} />}
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </View>

            <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Appointments on Oct 24</Typography>
            {APPOINTMENTS.slice(0, 1).map(item => (
                <View key={item.id} style={{ marginBottom: Spacing.m }}>
                    {renderAppointmentCard({ item })}
                </View>
            ))}
        </View>
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Typography variant="h2" weight="bold">Appointments</Typography>
                <TouchableOpacity>
                    <IconSymbol name="calendar" size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <View style={styles.tabs}>
                {['upcoming', 'past', 'calendar'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tab, activeTab === tab && styles.activeTab]}
                        onPress={() => setActiveTab(tab as any)}
                    >
                        <Typography
                            variant="body"
                            weight="medium"
                            color={activeTab === tab ? Colors.primary : Colors.textSecondary}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {tab}
                        </Typography>
                    </TouchableOpacity>
                ))}
            </View>

            {activeTab === 'calendar' ? (
                <View style={styles.content}>
                    {renderCalendar()}
                </View>
            ) : (
                <FlatList
                    data={APPOINTMENTS}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    renderItem={renderAppointmentCard}
                    ListEmptyComponent={
                        <View style={styles.emptyState}>
                            <Typography variant="body" color={Colors.textSecondary}>No appointments found.</Typography>
                        </View>
                    }
                />
            )}
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
    tabs: {
        flexDirection: 'row',
        backgroundColor: Colors.background,
        paddingHorizontal: Spacing.l,
        paddingBottom: Spacing.s,
    },
    tab: {
        marginRight: Spacing.xl,
        paddingBottom: Spacing.s,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: Colors.primary,
    },
    content: {
        flex: 1,
    },
    listContent: {
        padding: Spacing.l,
        gap: Spacing.m,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        padding: Spacing.m,
        ...Shadows.small,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
    },
    doctorInfo: {
        flex: 1,
        marginLeft: Spacing.m,
    },
    statusBadge: {
        backgroundColor: Colors.success,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: BorderRadius.s,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.backgroundSecondary,
        marginVertical: Spacing.m,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        padding: Spacing.xs,
    },
    emptyState: {
        alignItems: 'center',
        marginTop: Spacing.xl,
    },
    calendarContainer: {
        padding: Spacing.l,
    },
    calendarHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.m,
    },
    calendarControls: {
        flexDirection: 'row',
        gap: Spacing.m,
    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Spacing.s,
    },
    weekDay: {
        width: 40,
        textAlign: 'center',
    },
    daysGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: Spacing.xl,
    },
    dayCell: {
        width: '14.28%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayButton: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: BorderRadius.round,
    },
    dayActive: {
        backgroundColor: Colors.primary,
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: 4,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
    },
});
