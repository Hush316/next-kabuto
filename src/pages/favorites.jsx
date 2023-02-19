import classes from './favorites.module.css'
import { useRef } from 'react'

export default function FavoritesPage() {
  const nameInputRef = useRef()
  console.log(nameInputRef.current?.value);
  function keyDownEnter(e) {
    if (e.key === 'Enter') {
      console.log(nameInputRef.current?.value);
    }
  }
  return (
    <div>
      <h2 className={classes.title}>FavoritesPage</h2>
      <input type="text" required id='username' ref={nameInputRef} onKeyDown={keyDownEnter} />
    </div>
  )
}
