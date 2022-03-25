import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:4000/api/getdata')

      setData(res.data)
    }
    getData()
  }, [])

  console.log(data)
  return (
    <div>
      <button className='button' onClick={() => setClicked(!clicked)}>
        Get Result
      </button>
      <div className={`${clicked ? 'table' : 'hidden'}`}>
        <div className='content'>
          <h4 className='fullName'>Full name</h4>
          <h4 className='email'>Email</h4>
          <h4 className='number'>Number</h4>
          <h4 className='city'>City</h4>
          <h4 className='url'>Url</h4>
          <h4>Team Name</h4>
        </div>
        {data.map((item) => {
          return (
            <div className='content'>
              <h4 className='fullName'>{item.full_name}</h4>
              <h4 className='email'>{item.email}</h4>
              <h4 className='number'>{item.number}</h4>
              <h4 className='city'>{item.city}</h4>
              <h4 className='url'>{item.url}</h4>
              <h4>{item.team_name[0]}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
