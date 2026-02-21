import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

const { height } = Dimensions.get('window');

const DUMMY_USER = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  highestScore: 2850,
  gamesPlayed: 47,
  joinedDate: 'Feb 2026',
};

export default function ProfileScreen() {
  const handleEdit = () => {
    Alert.alert('Edit Profile', 'Edit functionality coming soon.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {} },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => {} },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <View style={styles.bgBase} />
      <View style={styles.bgLayer} />
      <View style={styles.bgAccent} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Avatar + Name */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {DUMMY_USER.name.split(' ').map((n) => n[0]).join('')}
            </Text>
          </View>
          <Text style={styles.userName}>{DUMMY_USER.name}</Text>
          <Text style={styles.userEmail}>{DUMMY_USER.email}</Text>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🏆</Text>
            <Text style={styles.statValue}>{DUMMY_USER.highestScore.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Highest Score</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>🎮</Text>
            <Text style={styles.statValue}>{DUMMY_USER.gamesPlayed}</Text>
            <Text style={styles.statLabel}>Games Played</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statEmoji}>📅</Text>
            <Text style={styles.statValue}>{DUMMY_USER.joinedDate}</Text>
            <Text style={styles.statLabel}>Joined</Text>
          </View>
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>{DUMMY_USER.name}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{DUMMY_USER.email}</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Best Score</Text>
            <Text style={[styles.infoValue, styles.infoHighlight]}>
              {DUMMY_USER.highestScore.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.85}
            onPress={handleEdit}
          >
            <Text style={styles.editButtonText}>✏️  Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.85}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>🚪  Logout</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            activeOpacity={0.85}
            onPress={handleDeleteAccount}
          >
            <Text style={styles.deleteButtonText}>🗑️  Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0C29',
  },

  /* Background */
  bgBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F0C29',
  },
  bgLayer: {
    position: 'absolute',
    top: height * 0.28,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#302B63',
    opacity: 0.5,
    borderTopLeftRadius: 140,
    borderTopRightRadius: 70,
  },
  bgAccent: {
    position: 'absolute',
    top: 50,
    left: -60,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#9C27B0',
    opacity: 0.06,
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 40,
  },

  /* Header */
  header: {
    marginBottom: 28,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  /* Avatar */
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(233,30,99,0.2)',
    borderWidth: 2,
    borderColor: 'rgba(233,30,99,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#E91E63',
    fontSize: 28,
    fontWeight: '800',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  userEmail: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    marginTop: 4,
  },

  /* Stats */
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  statEmoji: {
    fontSize: 20,
    marginBottom: 6,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  statLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  /* Info Card */
  infoCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  infoLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    fontWeight: '600',
  },
  infoValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  infoHighlight: {
    color: '#E91E63',
    fontWeight: '800',
  },
  infoDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginVertical: 10,
  },

  /* Actions */
  actions: {
    gap: 12,
  },
  editButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  logoutButton: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  logoutButtonText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  deleteButton: {
    backgroundColor: 'rgba(244,67,54,0.1)',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(244,67,54,0.2)',
  },
  deleteButtonText: {
    color: '#F44336',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
