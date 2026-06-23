export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateQuestion(flags, usedIndexes) {
  const available = flags.filter((_, i) => !usedIndexes.includes(i));
  const pool = available.length >= 4 ? available : flags;
  const shuffledPool = shuffle(pool);
  const correct = shuffledPool[0];
  const wrongOptions = shuffle(flags.filter(f => f.code !== correct.code)).slice(0, 3);
  const options = shuffle([correct, ...wrongOptions]);
  return { correct, options };
}