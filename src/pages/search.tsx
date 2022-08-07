import axios from "axios"
import SearchCard from "../components/SearchCard"
import "../components/search.css"
import { useEffect, useState } from "react"

const search = () => {
  const [meatData, setMeatData] = useState<any[]>()
  const [allMeatCards, setAllMeatCards] = useState<any[]>()

  useEffect(() =>{
    axios.get("https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat")
    .then(response => {
      setMeatData(response.data.results)
    })
  }, [])

  useEffect(() =>{
    setAllMeatCards(meatData?.map(data =>{
      return(<SearchCard name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
    }))
  }, [meatData])




  if (!meatData) return null

  return (
    <div className='search-container'>
      {allMeatCards}

    </div>
  )
}

export default search