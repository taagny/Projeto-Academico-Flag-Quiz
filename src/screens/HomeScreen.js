import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function HomeScreen({ onStart }) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.06, duration: 900, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.globeCircle}>
        <Text style={styles.globeEmoji}>🌍</Text>
      </View>

      <Text style={styles.title}>Flag Quiz</Text>
      <Text style={styles.subtitle}>Você conhece as bandeiras do mundo?</Text>

      <Animated.View style={{ transform: [{ scale: pulse }] }}>
        <TouchableOpacity style={styles.button} onPress={onStart} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Iniciar Jogo</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  globeCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#1e3a5f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#3b82f6',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  globeEmoji: {
    fontSize: 56,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#f1f5f9',
    letterSpacing: 2,
    marginBottom: 8,
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
    paddingHorizontal: 56,
    borderRadius: 50,
    shadowColor: '#3b82f6',
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
});