import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function GameScreen({ level, question, onAnswer, shake, onExit }) {
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [question]);

  useEffect(() => {
    if (!shake) return;
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 12, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -12, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  }, [shake]);

  return (
    <SafeAreaView style={styles.container}>

      {/* Header com botão de sair e badge de nível */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.exitButton} onPress={onExit} activeOpacity={0.75}>
          <Text style={styles.exitText}>✕ Sair</Text>
        </TouchableOpacity>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>Nível {level}</Text>
        </View>
      </View>

      {/* Card da bandeira */}
      <Animated.View
        style={[
          styles.flagCard,
          {
            opacity: fadeAnim,
            transform: [
              { translateX: shakeAnim },
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Image
          source={{ uri: question.correct.uri }}
          style={styles.flagImage}
          resizeMode="cover"
        />
      </Animated.View>

      <Text style={styles.questionLabel}>De qual país é esta bandeira?</Text>

      {/* Alternativas */}
      <View style={styles.optionsGrid}>
        {question.options.map((opt) => (
          <TouchableOpacity
            key={opt.code}
            style={styles.optionButton}
            onPress={() => onAnswer(opt)}
            activeOpacity={0.75}
          >
            <Text style={styles.optionText}>{opt.country}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  exitButton: {
    backgroundColor: '#1e293b',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#334155',
  },
  exitText: {
    color: '#94a3b8',
    fontWeight: '700',
    fontSize: 14,
  },
  levelBadge: {
    backgroundColor: '#1e40af',
    paddingVertical: 6,
    paddingHorizontal: 22,
    borderRadius: 20,
  },
  levelText: {
    color: '#bfdbfe',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 1,
  },
  flagCard: {
    width: width - 40,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1e293b',
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  flagImage: {
    width: '100%',
    height: '100%',
  },
  questionLabel: {
    color: '#94a3b8',
    fontSize: 15,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  optionsGrid: {
    width: '100%',
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: '#334155',
    alignItems: 'center',
  },
  optionText: {
    color: '#e2e8f0',
    fontSize: 16,
    fontWeight: '600',
  },
});