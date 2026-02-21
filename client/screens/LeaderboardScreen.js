import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const MOCK_DATA = [
  { id: '1', rank: 1, username: 'MathWizard', score: 2850 },
  { id: '2', rank: 2, username: 'BrainStorm', score: 2610 },
  { id: '3', rank: 3, username: 'QuickCalc', score: 2475 },
  { id: '4', rank: 4, username: 'NumberNinja', score: 2200 },
  { id: '5', rank: 5, username: 'PuzzlePro', score: 1980 },
  { id: '6', rank: 6, username: 'SpeedSolver', score: 1755 },
  { id: '7', rank: 7, username: 'DigitKing', score: 1600 },
  { id: '8', rank: 8, username: 'HeartChamp', score: 1420 },
  { id: '9', rank: 9, username: 'MathRunner', score: 1250 },
  { id: '10', rank: 10, username: 'CalcMaster', score: 1100 },
];

const getMedalEmoji = (rank) => {
  if (rank === 1) return '🥇';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return null;
};

const getRankStyle = (rank) => {
  if (rank === 1) return styles.rankGold;
  if (rank === 2) return styles.rankSilver;
  if (rank === 3) return styles.rankBronze;
  return null;
};

const renderItem = ({ item }) => {
  const medal = getMedalEmoji(item.rank);
  const isTopThree = item.rank <= 3;

  return (
    <View style={[styles.card, isTopThree && styles.cardHighlight]}>
      {/* Rank */}
      <View style={[styles.rankBadge, getRankStyle(item.rank)]}>
        {medal ? (
          <Text style={styles.medalEmoji}>{medal}</Text>
        ) : (
          <Text style={styles.rankNumber}>{item.rank}</Text>
        )}
      </View>

      {/* User Info */}
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.userLabel}>Player</Text>
      </View>

      {/* Score */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreValue}>{item.score.toLocaleString()}</Text>
        <Text style={styles.scoreLabel}>pts</Text>
      </View>
    </View>
  );
};

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <View style={styles.bgBase} />
      <View style={styles.bgLayer} />
      <View style={styles.bgAccent} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <Text style={styles.headerSubtitle}>Top players this week</Text>
      </View>

      {/* List */}
      <FlatList
        data={MOCK_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
    top: height * 0.2,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#302B63',
    opacity: 0.5,
    borderTopLeftRadius: 160,
    borderTopRightRadius: 60,
  },
  bgAccent: {
    position: 'absolute',
    top: 30,
    right: -60,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E91E63',
    opacity: 0.06,
  },

  /* Header */
  header: {
    paddingTop: 64,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.4)',
    marginTop: 6,
    letterSpacing: 0.3,
  },

  /* List */
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  separator: {
    height: 10,
  },

  /* Card */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  cardHighlight: {
    backgroundColor: 'rgba(233,30,99,0.08)',
    borderColor: 'rgba(233,30,99,0.15)',
  },

  /* Rank Badge */
  rankBadge: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  rankGold: {
    backgroundColor: 'rgba(255,215,0,0.15)',
  },
  rankSilver: {
    backgroundColor: 'rgba(192,192,192,0.15)',
  },
  rankBronze: {
    backgroundColor: 'rgba(205,127,50,0.15)',
  },
  medalEmoji: {
    fontSize: 20,
  },
  rankNumber: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    fontWeight: '700',
  },

  /* User Info */
  userInfo: {
    flex: 1,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  userLabel: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 12,
    marginTop: 2,
  },

  /* Score */
  scoreContainer: {
    alignItems: 'flex-end',
  },
  scoreValue: {
    color: '#E91E63',
    fontSize: 18,
    fontWeight: '800',
  },
  scoreLabel: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
