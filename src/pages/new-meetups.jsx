import { useNavigate } from 'react-router-dom'

export default function NewMeetupPage() {
  const navigate = useNavigate();
  const meetupData = {
    username: 'kabuto',
    password: '123456'
  }
  function getData() {
    fetch(
      'https://my-react-one-default-rtdb.firebaseio.com/meetups.json',
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/', { state: 'alien' })
    })
  }

  return (
    <div>
      <h2>NewMeetupPage</h2>
      <button onClick={getData}>发送请求</button>
    </div>
  )
}
