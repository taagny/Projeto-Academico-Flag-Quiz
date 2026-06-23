import React, { useState, useRef } from 'react';
import FLAGS from './data/flags';
import { generateQuestion } from './utils/shuffle';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';

export default function App() {
  const [screen, setScreen] = useState('home'); // 'home' | 'game' | 'result'
  const [level, setLevel] = useState(1);
  const [question, setQuestion] = useState(null);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [shake, setShake] = useState(false);
  const usedIndexes = useRef([]);

  function startGame() {
    usedIndexes.current = [];
    setLevel(1);
    loadQuestion();
    setScreen('game');
  }

  function loadQuestion() {
    const q = generateQuestion(FLAGS, usedIndexes.current);
    const idx = FLAGS.findIndex(f => f.code === q.correct.code);
    usedIndexes.current.push(idx);
    setQuestion(q);
    setShake(false);
  }

  function handleAnswer(option) {
    const correct = option.code === question.correct.code;
    setLastCorrect(correct);
    if (!correct) {
      setShake(true);
      setTimeout(() => setScreen('result'), 500);
    } else {
      setScreen('result');
    }
  }

  function handleNext() {
    if (lastCorrect) {
      setLevel(l => l + 1);
    } else {
      setLevel(1);
      usedIndexes.current = [];
    }
    loadQuestion();
    setScreen('game');
  }

  function handleExit() {
    setLevel(1);
    usedIndexes.current = [];
    setScreen('home');
  }

  if (screen === 'home') return <HomeScreen onStart={startGame} />;
  if (screen === 'game' && question)
    return <GameScreen level={level} question={question} onAnswer={handleAnswer} shake={shake} onExit={handleExit} />;
  if (screen === 'result')
    return <ResultScreen correct={lastCorrect} level={level} onNext={handleNext} onExit={handleExit} />;

  return null;
}