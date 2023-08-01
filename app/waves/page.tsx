import WaveList from "./WaveList";
import {useEffect, useState} from "react"


const [waves, setWaves] = useState([])

useEffect(() => {
  setWaves([
    {
      wave_id: 1,
      title: " Harry Potter",
      user: {username: "Moxy", avatar_url:""},


    }
  ])
}, [])


function Page() {
  return <section>
  <h2>All Waves</h2>
  <WaveList />
  </section>
}

export default Page;
