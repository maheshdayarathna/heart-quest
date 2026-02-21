import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const RULES = [
  {
    icon: '🧮',
    title: 'Solve Math Problems',
    description: 'Answer quick arithmetic questions as fast as you can. Each correct answer earns you points!',
  },
  {
    icon: '❤️',
    title: '3 Hearts',
    description: 'You start with 3 hearts. Every wrong answer costs you one heart. Lose all 3 and the game is over!',
  },
  {
    icon: '⏱️',
    title: 'Beat the Timer',
    description: 'Each question has a time limit. If time runs out before you answer, you lose a heart.',
  },
  {
    icon: '🏆',
    title: 'Climb the Leaderboard',
    description: 'Your highest score is recorded. Compete with other players for the top spot!',
  },
];

export default function InstructionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background layers */}
      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgAccent} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>How to Play</Text>
          <Text style={styles.headerSubtitle}>Learn the rules before you begin</Text>
        </View>

        {/* Rules */}
        <View style={styles.rulesSection}>
          {RULES.map((rule, index) => (
            <View key={index} style={styles.ruleCard}>
              <View style={styles.ruleIconContainer}>
                <Text style={styles.ruleIcon}>{rule.icon}</Text>
              </View>
              <View style={styles.ruleContent}>
                <Text style={styles.ruleTitle}>{rule.title}</Text>
                <Text style={styles.ruleDescription}>{rule.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Hearts Preview */}
        <View style={styles.heartsPreview}>
          <Text style={styles.heartsLabel}>Your Lives</Text>
          <View style={styles.heartsRow}>
            <Text style={styles.heart}>❤️</Text>
            <Text style={styles.heart}>❤️</Text>
            <Text style={styles.heart}>❤️</Text>
          </View>
        </View>

        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Main', { screen: 'Game' })}
        >
          <Text style={styles.startButtonText}>Start Game</Text>
        </TouchableOpacity>

        {/* Footer hint */}
        <Text style={styles.footerHint}>Good luck, have fun! 🎯</Text>
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
  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F0C29',
  },
  bgLayer2: {
    position: 'absolute',
    top: height * 0.25,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#302B63',
    opacity: 0.6,
    borderTopLeftRadius: 140,
    borderTopRightRadius: 60,
  },
  bgAccent: {
    position: 'absolute',
    top: height * 0.1,
    right: -70,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#E91E63',
    opacity: 0.07,
  },

  scrollContent: {
    paddingHorizontal: 28,
    paddingTop: 70,
    paddingBottom: 40,
  },

  /* Header */
  headerSection: {
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.4)',
    marginTop: 8,
    letterSpacing: 0.3,
  },

  /* Rules */
  rulesSection: {
    gap: 14,
    marginBottom: 28,
  },
  ruleCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    alignItems: 'flex-start',
  },
  ruleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(233,30,99,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  ruleIcon: {
    fontSize: 22,
  },
  ruleContent: {
    flex: 1,
  },
  ruleTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  ruleDescription: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    lineHeight: 19,
  },

  /* Hearts Preview */
  heartsPreview: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    paddingVertical: 20,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
  },
  heartsLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  heartsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  heart: {
    fontSize: 32,
  },

  /* Start Button */
  startButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 16,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },

  /* Footer */
  footerHint: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.3)',
    fontSize: 14,
  },
});
