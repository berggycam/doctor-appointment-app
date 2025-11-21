import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_MESSAGES = [
    { id: '1', text: 'Hello Dr. Wilson, I have a question about my prescription.', sender: 'me', time: '10:00 AM' },
    { id: '2', text: 'Hi David, sure. What would you like to know?', sender: 'doctor', time: '10:05 AM' },
    { id: '3', text: 'Should I take it before or after meals?', sender: 'me', time: '10:06 AM' },
    { id: '4', text: 'Please take the medicine after food to avoid stomach upset.', sender: 'doctor', time: '10:30 AM' },
];

export default function ChatRoomScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(MOCK_MESSAGES);

    const handleSend = () => {
        if (!message.trim()) return;
        const newMessage = {
            id: Date.now().toString(),
            text: message,
            sender: 'me',
            time: 'Now',
        };
        setMessages([...messages, newMessage]);
        setMessage('');
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <IconSymbol name="chevron.left" size={24} color={Colors.text} />
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    <Typography variant="h3" weight="bold">Dr. Sarah Wilson</Typography>
                    <Typography variant="caption" color={Colors.success}>Online</Typography>
                </View>
                <View style={styles.headerActions}>
                    <TouchableOpacity onPress={() => router.push(`/call/${id}`)} style={styles.actionButton}>
                        <IconSymbol name="phone.fill" size={24} color={Colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push(`/call/${id}?video=true`)} style={styles.actionButton}>
                        <IconSymbol name="video.fill" size={24} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messagesList}
                renderItem={({ item }) => (
                    <View style={[
                        styles.messageBubble,
                        item.sender === 'me' ? styles.myMessage : styles.theirMessage
                    ]}>
                        <Typography
                            variant="body"
                            color={item.sender === 'me' ? Colors.white : Colors.text}
                        >
                            {item.text}
                        </Typography>
                        <Typography
                            variant="caption"
                            color={item.sender === 'me' ? 'rgba(255,255,255,0.7)' : Colors.textTertiary}
                            style={styles.timeText}
                        >
                            {item.time}
                        </Typography>
                    </View>
                )}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.attachButton}>
                        <IconSymbol name="plus" size={24} color={Colors.textSecondary} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        placeholderTextColor={Colors.textTertiary}
                        value={message}
                        onChangeText={setMessage}
                        multiline
                    />
                    <TouchableOpacity
                        style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
                        onPress={handleSend}
                        disabled={!message.trim()}
                    >
                        <IconSymbol name="arrow.up" size={20} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
        padding: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    backButton: {
        padding: Spacing.xs,
    },
    headerTitle: {
        flex: 1,
        marginLeft: Spacing.m,
    },
    headerActions: {
        flexDirection: 'row',
        gap: Spacing.m,
    },
    actionButton: {
        padding: Spacing.xs,
    },
    messagesList: {
        padding: Spacing.l,
        gap: Spacing.m,
    },
    messageBubble: {
        maxWidth: '80%',
        padding: Spacing.m,
        borderRadius: BorderRadius.l,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: Colors.primary,
        borderBottomRightRadius: BorderRadius.s,
    },
    theirMessage: {
        alignSelf: 'flex-start',
        backgroundColor: Colors.backgroundSecondary,
        borderBottomLeftRadius: BorderRadius.s,
    },
    timeText: {
        alignSelf: 'flex-end',
        marginTop: 4,
        fontSize: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: Spacing.m,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        backgroundColor: Colors.white,
    },
    attachButton: {
        padding: Spacing.s,
    },
    input: {
        flex: 1,
        marginHorizontal: Spacing.m,
        paddingVertical: Spacing.s,
        paddingHorizontal: Spacing.m,
        backgroundColor: Colors.backgroundSecondary,
        borderRadius: BorderRadius.l,
        maxHeight: 100,
        fontSize: 16,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: Colors.border,
    },
});
