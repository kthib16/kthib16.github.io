export const GREEN = '#B1D8B7'
export const YELLOW = '#FFFF8A'
export const GREY = '#e1e1e1'

const normalize = (text) => String(text).trim().toLowerCase()

/**
 * Scores a guess against the answer using standard word-game rules:
 * green = right letter, right spot; yellow = right letter, wrong spot (only as many
 * times as the letter still appears in the answer); grey = not in the word.
 *
 * Returns an array of { value, color }, one entry per letter of the guess.
 */
export function scoreGuess(guess, answer) {
  const guessLetters = normalize(guess).split('')
  const answerLetters = normalize(answer).split('')

  const result = guessLetters.map((value) => ({ value, color: GREY }))
  const remaining = {}

  // First pass: exact matches. Track the answer letters left over for yellows.
  guessLetters.forEach((letter, i) => {
    if (letter === answerLetters[i]) {
      result[i].color = GREEN
    } else if (answerLetters[i] !== undefined) {
      remaining[answerLetters[i]] = (remaining[answerLetters[i]] || 0) + 1
    }
  })

  // Second pass: misplaced letters, limited by how many are left in the answer.
  guessLetters.forEach((letter, i) => {
    if (result[i].color !== GREEN && remaining[letter] > 0) {
      result[i].color = YELLOW
      remaining[letter] -= 1
    }
  })

  return result
}

export function isCorrectGuess(guess, answer) {
  return normalize(guess) === normalize(answer)
}
