import axios from "axios"
import {v4 as uuid} from 'uuid';
import SearchCard from "../components/SearchCard"
import "../components/search.css"
import { useEffect, useState } from "react"

const search = () => {
  const [meatData, setMeatData] = useState<any[]>()
  const [allMeatCards, setAllMeatCards] = useState<any[]>()

  const [queryItems, setQueryItems] = useState({store: "", type: "", name: ""})


  useEffect(() =>{
    axios.get("https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat")
    .then(response => {
      setMeatData(response.data.results)
    })
  }, [])

  useEffect(() =>{
    changeQueryString()
  }, [queryItems])

  useEffect(() =>{
    setAllMeatCards(meatData?.map(data =>{
      return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
    }))
  }, [meatData])

// formerly changeStore
  function changeQueryString(){
    ///Change other dropdowns to all
    axios.get(`https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat?store=${queryItems.store}&type=${queryItems.type}&q=${queryItems.name}`)
    .then(res => {
      setAllMeatCards(res?.data.results.map((data: { name: string; type: string; store: string; pricePerLb: number; option: string }) =>{
        return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
      }))
    })
     
  }
  // function changeType(e:any){
  //   ///Change other dropdowns to all
  //   (document.getElementById("store-dropdown") as HTMLInputElement).value = ""

  //   axios.get(`https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat?type=${e.target.value}`)
  //   .then(res => {
  //     setAllMeatCards(res?.data.results.map((data: { name: string; type: string; store: string; pricePerLb: number; option: string }) =>{
  //       return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
  //     }))
  //   })
  // }
  
// for form items save items to state, handling state of form
  function onQueryChange(e:any){
    setQueryItems(prevItem => ({
      ...prevItem,
      [e.target.name]: e.target.value
    }))
  }


  if (!meatData) return null

  return (
    <>
      <div className="search-bar">
        <select name="store" id="store-dropdown" onChange={onQueryChange}>
          <option value="">All Stores</option>
          <option value="walmart">Walmart</option>
          <option value="kroger">Kroger</option>
        </select>
        <select name="type" id="type-dropdown" onChange={onQueryChange}>
          <option value="">All Types</option>
          <option value="chicken">Chicken</option>
          <option value="pork">Pork</option>
          <option value="groundBeef">Ground Beef</option>
        </select>
      </div>
      <input name="name" type="text" placeholder="Filter Results" onChange={onQueryChange}/>
      <button type="submit">Submit</button>
      <div className='search-container'>
        {allMeatCards}
      </div>    
    </>

  )
}

export default search