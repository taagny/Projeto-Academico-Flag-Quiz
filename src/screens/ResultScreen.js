import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';

export default function ResultScreen({ correct, level, onNext }) {
  const scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      tension: 80,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={correct ? styles.successContainer : styles.failContainer}>
      {/* Ícone animado */}
      <Animated.View style={{ transform: [{ scale }] }}>
        <Text style={styles.emoji}>{correct ? '🏆' : '❌'}</Text>
      </Animated.View>

      <Text style={styles.title}>
        {correct ? 'Nível Concluído!' : 'Que pena!'}
      </Text>

      <Text style={styles.subtitle}>
        {correct
          ? `Você completou o nível ${level}!`
          : 'Você errou. Vamos tentar novamente?'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onNext} activeOpacity={0.85}>
        <Text style={styles.buttonText}>
          {correct ? `Ir para o Nível ${level + 1}` : 'Nova Rodada'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  successContainer: {
    flex: 1,
    backgroundColor: '#052e16',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  failContainer: {
    flex: 1,
    backgroundColor: '#1c0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#f1f5f9',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 50,
    shadowColor: '#3b82f6',
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});