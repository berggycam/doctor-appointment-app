import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const SLIDES = [
    {
        id: '1',
        title: 'Find Trusted Doctors',
        description: 'Search and filter specialists near you. Read reviews and book appointments instantly.',
        image: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=826&t=st=1709250000~exp=1709250600~hmac=mock', // Placeholder
    },
    {
        id: '2',
        title: 'Easy Scheduling',
        description: 'Book appointments at your convenience. Get reminders and manage your calendar.',
        image: 'https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?w=826&t=st=1709250000~exp=1709250600~hmac=mock', // Placeholder
    },
    {
        id: '3',
        title: 'Secure Results',
        description: 'Access your lab reports and prescriptions securely from anywhere, anytime.',
        image: 'https://img.freepik.com/free-vector/medical-report-concept-illustration_114360-2230.jpg?w=826&t=st=1709250000~exp=1709250600~hmac=mock', // Placeholder
    },
];

export default function OnboardingScreen() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    const handleNext = async () => {
        if (currentIndex < SLIDES.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            await completeOnboarding();
        }
    };

    const handleSkip = async () => {
        await completeOnboarding();
    };

    const completeOnboarding = async () => {
        try {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            router.replace('/auth/login');
        } catch (error) {
            console.error('Error saving onboarding status:', error);
        }
    };

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={handleSkip}>
                    <Typography variant="body" color={Colors.textSecondary}>Skip</Typography>
                </TouchableOpacity>
            </View>

            <FlatList
                ref={flatListRef}
                data={SLIDES}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
                        <View style={styles.textContainer}>
                            <Typography variant="h1" align="center" style={styles.title}>{item.title}</Typography>
                            <Typography variant="body" align="center" color={Colors.textSecondary}>{item.description}</Typography>
                        </View>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <View style={styles.pagination}>
                    {SLIDES.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                currentIndex === index && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>

                <Button
                    title={currentIndex === SLIDES.length - 1 ? "Get Started" : "Next"}
                    onPress={handleNext}
                    style={styles.button}
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
        alignItems: 'flex-end',
        padding: Spacing.l,
    },
    slide: {
        width,
        alignItems: 'center',
        padding: Spacing.xl,
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: Spacing.xl,
    },
    textContainer: {
        gap: Spacing.m,
    },
    title: {
        marginBottom: Spacing.s,
    },
    footer: {
        padding: Spacing.xl,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: Spacing.xl,
        gap: Spacing.s,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: Colors.border,
    },
    activeDot: {
        backgroundColor: Colors.primary,
        width: 24,
    },
    button: {
        width: '100%',
    },
});
