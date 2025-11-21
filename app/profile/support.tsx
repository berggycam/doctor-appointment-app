import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FAQ_ITEMS = [
    { question: 'How do I book an appointment?', answer: 'Go to the Home tab and click "Find Doctor" or use the search bar.' },
    { question: 'Can I cancel my appointment?', answer: 'Yes, go to the Appointments tab, select the appointment, and click Cancel.' },
    { question: 'Where are my lab results?', answer: 'You can find them in the "Medical Records" section of your profile.' },
];

export default function SupportScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Help & Support</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Frequently Asked Questions</Typography>

                {FAQ_ITEMS.map((item, index) => (
                    <View key={index} style={styles.faqItem}>
                        <Typography variant="body" weight="bold" style={{ marginBottom: 4 }}>{item.question}</Typography>
                        <Typography variant="body" color={Colors.textSecondary}>{item.answer}</Typography>
                    </View>
                ))}

                <Typography variant="h3" weight="semibold" style={[styles.sectionTitle, { marginTop: Spacing.xl }]}>Contact Us</Typography>

                <TouchableOpacity style={styles.contactButton}>
                    <IconSymbol name="envelope.fill" size={20} color={Colors.primary} />
                    <Typography variant="body" color={Colors.primary} weight="medium" style={{ marginLeft: Spacing.m }}>Email Support</Typography>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactButton}>
                    <IconSymbol name="phone.fill" size={20} color={Colors.primary} />
                    <Typography variant="body" color={Colors.primary} weight="medium" style={{ marginLeft: Spacing.m }}>Call Customer Service</Typography>
                </TouchableOpacity>
            </ScrollView>
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
    sectionTitle: {
        marginBottom: Spacing.m,
    },
    faqItem: {
        backgroundColor: Colors.white,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
        marginBottom: Spacing.m,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    contactButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: Spacing.m,
        borderRadius: BorderRadius.m,
        marginBottom: Spacing.m,
        borderWidth: 1,
        borderColor: Colors.border,
    },
});
