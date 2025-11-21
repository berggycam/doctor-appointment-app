import { Button } from '@/components/ui/Button';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Input } from '@/components/ui/Input';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PersonalInfoScreen() {
    const router = useRouter();
    const { user } = useAuth();
    const [name, setName] = useState(user?.name || 'Kwame Osei');
    const [email, setEmail] = useState(user?.email || 'david.johnson@example.com');
    const [phone, setPhone] = useState('+1 234 567 8900');
    const [dob, setDob] = useState('1990-01-01');

    const handleSave = () => {
        // Save logic here
        router.back();
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <Typography variant="h3" weight="bold">Personal Information</Typography>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.form}>
                    <Input
                        label="Full Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        label="Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                    <Input
                        label="Date of Birth"
                        value={dob}
                        onChangeText={setDob}
                        placeholder="YYYY-MM-DD"
                    />
                </View>

                <Button
                    title="Save Changes"
                    onPress={handleSave}
                    style={styles.saveButton}
                />
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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: Spacing.l,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    backButton: {
        padding: Spacing.xs,
    },
    content: {
        padding: Spacing.l,
    },
    form: {
        gap: Spacing.m,
    },
    saveButton: {
        marginTop: Spacing.xl,
    },
});
