import { IconSymbol } from '@/components/ui/icon-symbol';
import { Typography } from '@/components/ui/Typography';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Typography variant="body" color={Colors.textSecondary}>Good Morning,</Typography>
            <Typography variant="h2" weight="bold">Kwame</Typography>
          </View>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=kwame' }} style={styles.avatarPlaceholder} />
        </View>

        {/* Next Appointment Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Typography variant="h3" color={Colors.white} weight="semibold">Next Appointment</Typography>
            <IconSymbol name="calendar" size={24} color={Colors.white} />
          </View>
          <View style={styles.appointmentInfo}>
            <Typography variant="body" color={Colors.white} weight="medium">Dr. Ama Mensah</Typography>
            <Typography variant="caption" color="rgba(255,255,255,0.8)">General Practitioner</Typography>
            <View style={styles.timeContainer}>
              <IconSymbol name="clock.fill" size={16} color={Colors.white} />
              <Typography variant="body" color={Colors.white} style={{ marginLeft: Spacing.xs }}>Today, 10:00 AM</Typography>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Quick Actions</Typography>
        <View style={styles.actionsGrid}>
          <ActionButton icon="magnifyingglass" label="Find Doctor" onPress={() => router.push('/doctors')} />
          <ActionButton icon="doc.text.fill" label="Lab Results" onPress={() => router.push('/lab-results')} />
          <ActionButton icon="pills.fill" label="Medicines" onPress={() => router.push('/medicines' as any)} />
          <ActionButton icon="phone.fill" label="Emergency" color={Colors.error} onPress={() => router.push('/emergency' as any)} />
        </View>

        {/* Recent Activity / Doctors */}
        <Typography variant="h3" weight="semibold" style={styles.sectionTitle}>Recent Doctors</Typography>
        {/* Placeholder for horizontal scroll of doctors */}
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=kofi' }} style={styles.doctorAvatar} />
          <View style={{ marginLeft: Spacing.m }}>
            <Typography variant="body" weight="medium">Dr. Kofi Asante</Typography>
            <Typography variant="caption" color={Colors.textSecondary}>Cardiologist</Typography>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const ActionButton = ({ icon, label, color = Colors.primary, onPress }: { icon: string, label: string, color?: string, onPress?: () => void }) => (
  <TouchableOpacity style={styles.actionItem} onPress={onPress}>
    <View style={[styles.actionIcon, { backgroundColor: color + '15' }]}>
      <IconSymbol name={icon as any} size={24} color={color} />
    </View>
    <Typography variant="caption" weight="medium" style={{ marginTop: Spacing.s }}>{label}</Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  content: {
    padding: Spacing.l,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.border,
  },
  card: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.l,
    padding: Spacing.l,
    marginBottom: Spacing.xl,
    ...Shadows.medium,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.m,
  },
  appointmentInfo: {
    gap: Spacing.xs,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.s,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: BorderRadius.s,
  },
  sectionTitle: {
    marginBottom: Spacing.m,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
  },
  actionItem: {
    alignItems: 'center',
    width: '22%',
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.m,
    borderRadius: BorderRadius.m,
    ...Shadows.small,
  },
  doctorAvatar: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.round,
    backgroundColor: Colors.backgroundSecondary,
  },
});
