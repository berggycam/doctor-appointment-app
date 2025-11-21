import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SPECIALTIES = ['All', 'General', 'Cardiology', 'Dentist', 'Neurology', 'Orthopedic'];

const MOCK_DOCTORS = [
    { id: '1', name: 'Dr. Sarah Wilson', specialty: 'General Practitioner', rating: 4.8, reviews: 120, image: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', name: 'Dr. James Lee', specialty: 'Cardiologist', rating: 4.9, reviews: 85, image: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', name: 'Dr. Emily Chen', specialty: 'Dentist', rating: 4.7, reviews: 200, image: 'https://i.pravatar.cc/150?u=3' },
    { id: '4', name: 'Dr. Michael Brown', specialty: 'Neurologist', rating: 4.9, reviews: 50, image: 'https://i.pravatar.cc/150?u=4' },
];

export default function DoctorsScreen() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All');

    const filteredDoctors = MOCK_DOCTORS.filter(doc =>
        (selectedSpecialty === 'All' || doc.specialty.includes(selectedSpecialty)) &&
        doc.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h2" weight="bold">Find a Doctor</Typography>
            </View>

            <View style={styles.searchContainer}>
                <Input
                    placeholder="Search doctors, specialties..."
                    value={search}
                    onChangeText={setSearch}
                    leftIcon={<IconSymbol name="magnifyingglass" size={20} color={Colors.textTertiary} />}
                    containerStyle={{ marginBottom: 0 }}
                />
            </View>

            <View style={styles.filterContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                    {SPECIALTIES.map((spec) => (
                        <TouchableOpacity
                            key={spec}
                            style={[
                                styles.filterChip,
                                selectedSpecialty === spec && styles.filterChipActive
                            ]}
                            onPress={() => setSelectedSpecialty(spec)}
                        >
                            <Typography
                                variant="caption"
                                color={selectedSpecialty === spec ? Colors.white : Colors.textSecondary}
                                weight="medium"
                            >
                                {spec}
                            </Typography>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={filteredDoctors}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.doctorCard}
                        onPress={() => router.push(`/doctors/${item.id}`)}
                    >
                        <Image source={{ uri: item.image }} style={styles.doctorImage} />
                        <View style={styles.doctorInfo}>
                            <View style={styles.doctorHeader}>
                                <Typography variant="body" weight="semibold">{item.name}</Typography>
                                <View style={styles.ratingContainer}>
                                    <IconSymbol name="star.fill" size={12} color={Colors.warning} />
                                    <Typography variant="caption" weight="medium" style={{ marginLeft: 4 }}>{item.rating}</Typography>
                                </View>
                            </View>
                            <Typography variant="caption" color={Colors.textSecondary}>{item.specialty}</Typography>
                            <Typography variant="caption" color={Colors.textTertiary} style={{ marginTop: 4 }}>{item.reviews} Reviews</Typography>
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
        alignItems: 'center',
        padding: Spacing.l,
        backgroundColor: Colors.background,
    },
    backButton: {
        marginRight: Spacing.m,
    },
    searchContainer: {
        padding: Spacing.l,
        backgroundColor: Colors.background,
        paddingBottom: Spacing.m,
    },
    filterContainer: {
        backgroundColor: Colors.background,
        paddingBottom: Spacing.m,
    },
    filterScroll: {
        paddingHorizontal: Spacing.l,
        gap: Spacing.s,
    },
    filterChip: {
        paddingVertical: Spacing.s,
        paddingHorizontal: Spacing.l,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    filterChipActive: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
    },
    listContent: {
        padding: Spacing.l,
        gap: Spacing.m,
    },
    doctorCard: {
        flexDirection: 'row',
        padding: Spacing.m,
        backgroundColor: Colors.white,
        borderRadius: BorderRadius.l,
        ...Shadows.small,
    },
    doctorImage: {
        width: 60,
        height: 60,
        borderRadius: BorderRadius.m,
        backgroundColor: Colors.backgroundSecondary,
    },
    doctorInfo: {
        flex: 1,
        marginLeft: Spacing.m,
        justifyContent: 'center',
    },
    doctorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.backgroundSecondary,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: BorderRadius.s,
    },
});
