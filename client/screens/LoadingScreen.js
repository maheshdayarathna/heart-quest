import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoadingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Layered background to simulate gradient */}
      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgLayer3} />
      <View style={styles.bgAccentCircle} />
      <View style={styles.bgAccentCircle2} />

      {/* Content */}
      <View style={styles.content}>
        {/* Top spacer */}
        <View style={styles.topSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconEmoji}>❤️</Text>
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Heart</Text>
          <Text style={styles.titleAccent}>Quest</Text>
          <Text style={styles.subtitle}>Test your math skills</Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Auth', { mode: 'signin' })}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Auth', { mode: 'signup' })}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Challenge yourself. Climb the leaderboard.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0C29',
  },

  /* Layered backgrounds to simulate a gradient effect */
  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F0C29',
  },
  bgLayer2: {
    position: 'absolute',
    top: height * 0.3,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#302B63',
    opacity: 0.8,
    borderTopLeftRadius: 200,
    borderTopRightRadius: 80,
  },
  bgLayer3: {
    position: 'absolute',
    top: height * 0.55,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#24243E',
    opacity: 0.9,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 200,
  },
  bgAccentCircle: {
    position: 'absolute',
    top: height * 0.08,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E91E63',
    opacity: 0.08,
  },
  bgAccentCircle2: {
    position: 'absolute',
    bottom: height * 0.15,
    left: -80,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#9C27B0',
    opacity: 0.06,
  },

  /* Content */
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 40,
  },

  /* Top section with icon */
  topSection: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(233, 30, 99, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(233, 30, 99, 0.3)',
  },
  iconEmoji: {
    fontSize: 36,
  },

  /* Title */
  titleSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 52,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  titleAccent: {
    fontSize: 52,
    fontWeight: '800',
    color: '#E91E63',
    letterSpacing: 2,
    marginTop: -8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 12,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },

  /* Buttons */
  buttonSection: {
    gap: 14,
  },
  signInButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#E91E63',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(233, 30, 99, 0.5)',
  },
  signUpButtonText: {
    color: '#E91E63',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
  },

  /* Footer */
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 13,
    letterSpacing: 0.5,
  },
});
