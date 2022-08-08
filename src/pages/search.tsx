import axios from "axios"
import {v4 as uuid} from 'uuid';
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
      return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
    }))
  }, [meatData])


  function changeStore(e:any){
    ///Change other dropdowns to all
    (document.getElementById("type-dropdown") as HTMLInputElement).value = ""

    axios.get(`https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat?store=${e.target.value}`)
    .then(res => {
      setAllMeatCards(res?.data.results.map((data: { name: string; type: string; store: string; pricePerLb: number; option: string }) =>{
        return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
      }))
    })
    
  }
  function changeType(e:any){
    ///Change other dropdowns to all
    (document.getElementById("store-dropdown") as HTMLInputElement).value = ""

    axios.get(`https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat?type=${e.target.value}`)
    .then(res => {
      setAllMeatCards(res?.data.results.map((data: { name: string; type: string; store: string; pricePerLb: number; option: string }) =>{
        return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
      }))
    })
  }


  if (!meatData) return null

  return (
    <>
      <div className="search-bar">
        <select id="store-dropdown" onChange={changeStore}>
          <option value="">All Stores</option>
          <option value="walmart">Walmart</option>
          <option value="kroger">Kroger</option>
        </select>
        <select id="type-dropdown" onChange={changeType}>
          <option value="">All Types</option>
          <option value="chicken">Chicken</option>
          <option value="pork">Pork</option>
          <option value="groundBeef">Ground Beef</option>
        </select>
      </div>
      <div className='search-container'>
        {allMeatCards}
      </div>    
    </>

  )
}

export default search