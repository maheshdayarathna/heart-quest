import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

import HeartDisplay from '../components/HeartDisplay';
import Timer from '../components/Timer';
import NumberPad from '../components/NumberPad';

const { width } = Dimensions.get('window');

export default function GameScreen() {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleNumberPadPress = (label) => {
    if (label === 'C') {
      setCurrentAnswer('');
    } else if (label === '⌫') {
      setCurrentAnswer((prev) => prev.slice(0, -1));
    } else {
      setCurrentAnswer((prev) => prev + label);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <View style={styles.bgBase} />
      <View style={styles.bgMid} />

      <View style={styles.content}>
        {/* Top Bar: Score + Hearts */}
        <View style={styles.topBar}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>SCORE</Text>
            <Text style={styles.scoreValue}>{score}</Text>
          </View>
          <HeartDisplay hearts={hearts} maxHearts={3} />
        </View>

        {/* Timer */}
        <View style={styles.timerSection}>
          <Timer timeLeft={timeLeft} totalTime={30} />
        </View>

        {/* Question Info */}
        <View style={styles.questionInfo}>
          <Text style={styles.questionNumber}>Question {questionNumber}</Text>
        </View>

        {/* Puzzle Image Placeholder */}
        <View style={styles.puzzleBox}>
          <View style={styles.puzzlePlaceholder}>
            <Text style={styles.puzzleIcon}>🧩</Text>
            <Text style={styles.puzzleText}>Puzzle Image</Text>
            <Text style={styles.puzzleHint}>Image will load from API</Text>
          </View>
        </View>

        {/* Answer Display */}
        <View style={styles.answerSection}>
          <Text style={styles.answerLabel}>YOUR ANSWER</Text>
          <View style={styles.answerBox}>
            <Text style={styles.answerText}>
              {currentAnswer || '—'}
            </Text>
          </View>
        </View>

        {/* Number Pad */}
        <View style={styles.numberPadSection}>
          <NumberPad onPress={handleNumberPadPress} />
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

  /* Background */
  bgBase: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F0C29',
  },
  bgMid: {
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1A1740',
    opacity: 0.8,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 50,
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
  },

  /* Top Bar */
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  scoreLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  scoreValue: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },

  /* Timer */
  timerSection: {
    marginBottom: 16,
  },

  /* Question info */
  questionInfo: {
    alignItems: 'center',
    marginBottom: 12,
  },
  questionNumber: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  /* Puzzle placeholder */
  puzzleBox: {
    alignItems: 'center',
    marginBottom: 16,
  },
  puzzlePlaceholder: {
    width: width - 80,
    height: 140,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.08)',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  puzzleIcon: {
    fontSize: 32,
    marginBottom: 4,
  },
  puzzleText: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 15,
    fontWeight: '600',
  },
  puzzleHint: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 11,
  },

  /* Answer */
  answerSection: {
    alignItems: 'center',
    marginBottom: 18,
  },
  answerLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  answerBox: {
    minWidth: 120,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(233,30,99,0.3)',
    alignItems: 'center',
  },
  answerText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },

  /* Number Pad */
  numberPadSection: {
    alignItems: 'center',
    marginTop: 'auto',
  },
});
