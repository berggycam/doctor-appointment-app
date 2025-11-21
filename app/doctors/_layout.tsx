import { Stack } from 'expo-router';
import React from 'react';

export default function DoctorsLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="[id]" />
            <Stack.Screen name="book" options={{ presentation: 'modal' }} />
        </Stack>
    );
}
