import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing } from '@/constants/theme';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CallScreen() {
    const { id, video } = useLocalSearchParams();
    const router = useRouter();
    const isVideo = video === 'true';

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            {/* Background / Video Placeholder */}
            <View style={styles.background}>
                {isVideo ? (
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/300?u=1' }}
                        style={styles.videoPlaceholder}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{ uri: 'https://i.pravatar.cc/150?u=1' }}
                            style={styles.avatar}
                        />
                    </View>
                )}
            </View>

            {/* Overlay Controls */}
            <SafeAreaView style={styles.overlay} edges={['top', 'bottom']}>
                <View style={styles.header}>
                    <Typography variant="h2" weight="bold" color={Colors.white} align="center">Dr. Ama Mensah</Typography>
                    <Typography variant="body" color="rgba(255,255,255,0.8)" align="center">00:45</Typography>
                </View>

                <View style={styles.controls}>
                    <TouchableOpacity style={styles.controlButton}>
                        <IconSymbol name="mic.fill" size={28} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.controlButton}>
                        <IconSymbol name="video.fill" size={28} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.controlButton, styles.endCallButton]}
                        onPress={() => router.back()}
                    >
                        <IconSymbol name="phone.down.fill" size={32} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoPlaceholder: {
        width: '100%',
        height: '100%',
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 4,
        borderColor: 'rgba(255,255,255,0.2)',
    },
    overlay: {
        flex: 1,
        justifyContent: 'space-between',
        padding: Spacing.xl,
    },
    header: {
        marginTop: Spacing.xl,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    controlButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    endCallButton: {
        backgroundColor: Colors.error,
        width: 72,
        height: 72,
        borderRadius: 36,
    },
});
