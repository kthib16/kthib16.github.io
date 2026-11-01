import { GREEN, GREY, YELLOW, isCorrectGuess, scoreGuess } from './scoreGuess'

const colors = (guess, answer) => scoreGuess(guess, answer).map((tile) => tile.color)

describe('scoreGuess', () => {
  it('marks an exact match all green', () => {
    expect(colors('action', 'action')).toEqual(Array(6).fill(GREEN))
  })

  it('marks letters that are not in the word grey', () => {
    expect(colors('xxxxxx', 'action')).toEqual(Array(6).fill(GREY))
  })

  it('marks misplaced letters yellow', () => {
    // "abroad" vs "broadx": every letter exists but none is in place
    expect(colors('abroad', 'broada')).toEqual([YELLOW, YELLOW, YELLOW, YELLOW, YELLOW, YELLOW])
  })

  it('does not mark a repeated letter yellow more times than it appears in the answer', () => {
    // The answer has one "e": the green "e" uses it up, so the other "e"s stay grey.
    expect(colors('eexxxx', 'xexxxx')).toEqual([GREY, GREEN, GREEN, GREEN, GREEN, GREEN])
  })

  it('gives the yellow to the first misplaced copy when the letter is not matched exactly', () => {
    // One "a" in the answer; the guess has two "a"s, neither in place.
    expect(colors('xaaxxx', 'abcdef')).toEqual([GREY, YELLOW, GREY, GREY, GREY, GREY])
  })

  it('ignores case and surrounding whitespace', () => {
    expect(colors(' ACTION ', 'action')).toEqual(Array(6).fill(GREEN))
  })

  it('returns the letter alongside each colour', () => {
    expect(scoreGuess('abc', 'abd').map((tile) => tile.value)).toEqual(['a', 'b', 'c'])
  })
})

describe('isCorrectGuess', () => {
  it('compares case-insensitively', () => {
    expect(isCorrectGuess('Action', 'action')).toBe(true)
    expect(isCorrectGuess('active', 'action')).toBe(false)
  })
})
