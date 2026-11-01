import React, { useState } from 'react'
import styles from './WordTiles.module.css'
import { scoreGuess, isCorrectGuess } from '../lib/scoreGuess'

export default function WordTiles(props) {

const [ guess, setGuess ] = useState('')
const [ autofocus, setAutofocus ] = useState(0)


const onKeyDown = e => {
  if(e.key === 'Enter'){
    if(guess.length < 6){
      alert("Please finish guessing")
    } else {
      onSubmit()
    }
  } else if(e.key === 'Backspace'){
    let newGuess = guess.split('')
    newGuess.splice(guess.length - 1, 1)
    setGuess(newGuess.join(''))
    setAutofocus(autofocus - 1)
  }
}

const onSubmit = () => {
  props.setRowObject({...props.rowObject, [props.row]: scoreGuess(guess, props.word)})
  props.setCurrentRow(props.currentRow + 1)

  if(isCorrectGuess(guess, props.word)){
    props.changeIsCorrect()
  }
}

const onChange = e => {
  setGuess(guess + e.target.value)
  setAutofocus(autofocus + 1)
}

    const result = props.rowObject[props.row]

    return(
      <form key={'letter-tile-r'+ props.row} className={styles.row} onSubmit={e => e.preventDefault()}>
        {[0, 1, 2, 3, 4, 5].map((slot) => (
          <div key={'letter-tile-r'+ props.row + '-s' + (slot + 1)}
               className={styles.letterTile}
               style={{backgroundColor: (result ? result[slot].color : '#e1e1e1')}}>
            {props.currentRow === props.row
              ? <input name={'input-r'+ props.row + '-s' + (slot + 1)}
                       type='text'
                       maxLength='1'
                       onChange={onChange}
                       onKeyDown={onKeyDown}
                       autoFocus={autofocus === slot}/>
              : result ? result[slot].value : ''
            }
          </div>
        ))}
      </form>
    )
}
