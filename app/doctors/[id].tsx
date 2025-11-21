import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_DOCTOR = {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'General Practitioner',
    rating: 4.8,
    reviews: 120,
    image: 'https://i.pravatar.cc/150?u=1',
    about: 'Dr. Sarah Wilson is a highly experienced General Practitioner with over 10 years of experience in family medicine. She is dedicated to providing comprehensive care to patients of all ages.',
    experience: '10+ Years',
    patients: '1.5k+',
};

export default function DoctorProfileScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    // In a real app, fetch doctor details by ID
    const doctor = MOCK_DOCTOR;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header with Image */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                    </TouchableOpacity>
                    <Typography variant="h3" weight="bold">Doctor Details</Typography>
                    <TouchableOpacity>
                        <IconSymbol name="heart" size={24} color={Colors.text} />
                    </TouchableOpacity>
                </View>

                <View style={styles.profileSection}>
                    <Image source={{ uri: doctor.image }} style={styles.image} />
                    <Typography variant="h2" weight="bold" style={styles.name}>{doctor.name}</Typography>
                    <Typography variant="body" color={Colors.textSecondary} style={styles.specialty}>{doctor.specialty}</Typography>

                    <View style={styles.statsRow}>
                        <View style={styles.statItem}>
                            <View style={styles.iconContainer}>
                                <IconSymbol name="star.fill" size={20} color={Colors.warning} />
                            </View>
                            <Typography variant="h3" weight="bold" color={Colors.primary}>{doctor.rating}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>Rating</Typography>
                        </View>
                        <View style={styles.statItem}>
                            <View style={styles.iconContainer}>
                                <IconSymbol name="person.2.fill" size={20} color={Colors.primary} />
                            </View>
                            <Typography variant="h3" weight="bold" color={Colors.primary}>{doctor.patients}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>Patients</Typography>
                        </View>
                        <View style={styles.statItem}>
                            <View style={styles.iconContainer}>
                                <IconSymbol name="clock.fill" size={20} color={Colors.success} />
                            </View>
                            <Typography variant="h3" weight="bold" color={Colors.primary}>{doctor.experience}</Typography>
                            <Typography variant="caption" color={Colors.textSecondary}>Experience</Typography>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>About Doctor</Typography>
                    <Typography variant="body" color={Colors.textSecondary} style={styles.aboutText}>
                        {doctor.about}
                    </Typography>
                </View>

                <View style={styles.section}>
                    <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Working Hours</Typography>
                    <Typography variant="body" color={Colors.textSecondary}>Mon - Fri: 09:00 AM - 05:00 PM</Typography>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Book Appointment"
                    size="large"
                    onPress={() => router.push('/doctors/book')}
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
    scrollContent: {
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.l,
    },
    backButton: {
        padding: Spacing.xs,
    },
    profileSection: {
        alignItems: 'center',
        padding: Spacing.l,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: BorderRadius.round,
        marginBottom: Spacing.m,
    },
    name: {
        marginBottom: Spacing.xs,
    },
    specialty: {
        marginBottom: Spacing.l,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: Spacing.m,
    },
    statItem: {
        alignItems: 'center',
        backgroundColor: Colors.backgroundSecondary,
        padding: Spacing.m,
        borderRadius: BorderRadius.l,
        width: '30%',
    },
    iconContainer: {
        marginBottom: Spacing.s,
        backgroundColor: Colors.white,
        padding: 8,
        borderRadius: BorderRadius.round,
    },
    section: {
        padding: Spacing.l,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    sectionTitle: {
        marginBottom: Spacing.m,
    },
    aboutText: {
        lineHeight: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: Spacing.l,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
});
