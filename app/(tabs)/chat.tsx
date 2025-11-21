import { Typography } from '@/components/ui/Typography';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CHATS = [
    { id: '1', doctor: 'Dr. Ama Mensah', lastMessage: 'Please take the medicine after food.', time: '10:30 AM', unread: 2, image: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', doctor: 'Dr. Kofi Asante', lastMessage: 'Your lab results look good.', time: 'Yesterday', unread: 0, image: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', doctor: 'Dr. Emily Chen', lastMessage: 'Appointment confirmed for Tuesday.', time: 'Oct 20', unread: 0, image: 'https://i.pravatar.cc/150?u=3' },
];

export default function ChatScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.header}>
                <Typography variant="h2" weight="bold">Messages</Typography>
                <TouchableOpacity>
                    <IconSymbol name="square.and.pencil" size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={CHATS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() => router.push(`/chat/${item.id}`)}
                    >
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                        <View style={styles.chatInfo}>
                            <View style={styles.chatHeader}>
                                <Typography variant="body" weight="semibold">{item.doctor}</Typography>
                                <Typography variant="caption" color={Colors.textSecondary}>{item.time}</Typography>
                            </View>
                            <View style={styles.messageRow}>
                                <Typography
                                    variant="body"
                                    color={item.unread > 0 ? Colors.text : Colors.textSecondary}
                                    numberOfLines={1}
                                    style={{ flex: 1 }}
                                    weight={item.unread > 0 ? 'medium' : 'regular'}
                                >
                                    {item.lastMessage}
                                </Typography>
                                {item.unread > 0 && (
                                    <View style={styles.unreadBadge}>
                                        <Typography variant="caption" color={Colors.white} weight="bold" style={{ fontSize: 10 }}>
                                            {item.unread}
                                        </Typography>
                                    </View>
                                )}
                            </View>
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
    listContent: {
        padding: Spacing.l,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: Spacing.m,
        borderBottomWidth: 1,
        borderBottomColor: Colors.backgroundSecondary,
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: BorderRadius.round,
        backgroundColor: Colors.backgroundSecondary,
    },
    chatInfo: {
        flex: 1,
        marginLeft: Spacing.m,
    },
    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    messageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    unreadBadge: {
        backgroundColor: Colors.primary,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Spacing.s,
    },
});
