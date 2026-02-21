import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function AuthScreen({ navigation, route }) {
  const initialMode = route?.params?.mode === 'signup' ? 'signup' : 'signin';

  const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleMode = () => {
    setIsSignUp((prev) => !prev);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }

    if (isSignUp && !confirmPassword.trim()) {
      Alert.alert('Missing Fields', 'Please confirm your password.');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match.');
      return;
    }

    /*
    ---------------------------------------------------------
    Temporary UI Demonstration Bypass
    ---------------------------------------------------------
    This navigation is only for presentation purposes.

    Remove this line after implementing backend authentication
    and JWT verification.

    Purpose:
    Allows direct access to the game page without login validation.
    ---------------------------------------------------------
    */

    navigation.replace('(tabs)/game');

    Alert.alert('Success', isSignUp ? 'Account created!' : 'Signed in!');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.bgLayer1} />
      <View style={styles.bgLayer2} />
      <View style={styles.bgAccent} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.headerSection}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </Text>

          <Text style={styles.headerSubtitle}>
            {isSignUp
              ? 'Sign up to start your quest'
              : 'Sign in to continue your quest'}
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>✉️</Text>

              <TextInput
                style={styles.textInput}
                placeholder="you@example.com"
                placeholderTextColor="rgba(255,255,255,0.3)"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>🔒</Text>

              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="rgba(255,255,255,0.3)"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {isSignUp && (
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Confirm Password</Text>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>🔒</Text>

                <TextInput
                  style={styles.textInput}
                  placeholder="Confirm your password"
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.85}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <View style={styles.toggleRow}>
            <Text style={styles.toggleText}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </Text>

            <TouchableOpacity onPress={toggleMode}>
              <Text style={styles.toggleLink}>
                {isSignUp ? ' Sign In' : ' Sign Up'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

/* Styles */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0C29',
  },

  bgLayer1: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F0C29',
  },

  bgLayer2: {
    position: 'absolute',
    top: height * 0.35,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#302B63',
    opacity: 0.7,
    borderTopLeftRadius: 120,
    borderTopRightRadius: 60,
  },

  bgAccent: {
    position: 'absolute',
    top: height * 0.06,
    left: -80,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E91E63',
    opacity: 0.06,
  },

  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  headerSection: {
    marginBottom: 32,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  backArrow: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 8,
  },

  formCard: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  inputGroup: {
    marginBottom: 18,
  },

  inputLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 12,
    paddingHorizontal: 14,
  },

  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  textInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 15,
    paddingVertical: 14,
  },

  submitButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },

  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  toggleText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
  },

  toggleLink: {
    color: '#E91E63',
    fontSize: 14,
    fontWeight: '700',
  },
});