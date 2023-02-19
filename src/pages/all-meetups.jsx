import { useEffect } from 'react';
import { useState } from 'react';
import classes from './all-meetups.module.css'

export default function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://my-react-one-default-rtdb.firebaseio.com/meetups.json'
    ).then((res) => {
      return res.json()
    }).then((data) => {

      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      console.log(meetups);
      setLoadedMeetups(meetups)
    })
  }, [])

  if (isLoading) {
    return <section>
      <p>loading....</p>
    </section>
  }




  return (
    <div>
      <h2 className={classes.title} >AllMeetupsPage</h2>
      <h3>{loadedMeetups.map(item => <div key={item.id}>{item.username}</div>)}</h3>
    </div>
  )
}
