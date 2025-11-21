import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { Colors, Spacing } from '@/constants/theme';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeOut, ZoomIn } from 'react-native-reanimated';

interface AnimatedSplashScreenProps {
    onFinish: () => void;
}

export const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({ onFinish }) => {
    useEffect(() => {
        // Prevent native splash screen from autohiding
        SplashScreen.preventAutoHideAsync();

        // Hide native splash immediately so we can show ours
        SplashScreen.hideAsync();

        // Simulate loading or wait for animation
        const timer = setTimeout(() => {
            onFinish();
        }, 2000); // Show for 2 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style={styles.container}>
            <Animated.View entering={ZoomIn.duration(1000)} exiting={FadeOut.duration(500)} style={styles.content}>
                <IconSymbol name="heart.fill" size={80} color={Colors.primary} />
                <View style={styles.textContainer}>
                    <Typography variant="h1" weight="bold" color={Colors.primary}>HealthApp</Typography>
                    <Typography variant="body" color={Colors.textSecondary}>Your Health, Our Priority</Typography>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        marginTop: Spacing.l,
        alignItems: 'center',
    },
});
