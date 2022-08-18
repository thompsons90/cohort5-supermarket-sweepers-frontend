import axios from "axios"
import {v4 as uuid} from 'uuid';
import SearchCard from "../components/SearchCard"
import "../components/search.css"
import { useEffect, useState } from "react"

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button} from "reactstrap"

const search = () => {
  const [meatData, setMeatData] = useState<any[]>()
  const [allMeatCards, setAllMeatCards] = useState<any[]>()

  const [queryItems, setQueryItems] = useState({store: "", type: "", name: "", option: ""})
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleType = () => setTypeDropdownOpen((prevState) => !prevState)

  useEffect(() =>{
    axios.get("https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat")
    .then(response => {
      setMeatData(response.data.results)
    })
  }, [])

  ///Displays new cards on page whenever new meatData gets fetched
  useEffect(() =>{
    setAllMeatCards(meatData?.map(data =>{
      return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
    }))
  }, [meatData])


  function formSubmit(e:any){
    e.preventDefault()

    ///Change other dropdowns to all
    axios.get(`https://supermarket-sweepers-backend.herokuapp.com/api/groceryitems/meat?store=${queryItems.store}&option=${queryItems.option}&type=${queryItems.type}&q=${queryItems.name}`)
    .then(res => {
      setAllMeatCards(res?.data.results.map((data: { name: string; type: string; store: string; pricePerLb: number; option: string }) =>{
        return(<SearchCard key={uuid()} name={data.name} type={data.type} store={data.store} pricePerLb={data.pricePerLb} option={data.option}/>)
      }))
    })
     
  }
  
// for form items save items to state, handling state of form
  function onQueryChange(e:any){
    setQueryItems(prevItem => ({
      ...prevItem,
      [e.target.name]: e.target.value
    }))
  }

  function changeStoreString(storeString:string){
    setQueryItems(prevItem => ({
      ...prevItem,
      store: storeString
    }))
  }

  function changeTypeString(typeString:string){
    setQueryItems(prevItem => ({
      ...prevItem,
      type: typeString
    }))
  }

  const dropDownStyle = {
    marginLeft: "1rem",
    marginRight: "1rem"
  }

  if (!meatData) return null

  return (
    <>
      <form style={{marginLeft: "1.8%"}} onSubmit={formSubmit} className="d-flex p-5">
          <Dropdown style={dropDownStyle} isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle style={{textTransform: "capitalize"}} caret>{queryItems.store === "" ? "All Stores" : queryItems.store}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => {changeStoreString("")}}>All Stores</DropdownItem>
              <DropdownItem onClick={() => {changeStoreString("walmart")}}>Walmart</DropdownItem>
              <DropdownItem onClick={() => {changeStoreString("kroger")}}>Kroger</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown style={{marginLeft: "0", marginRight: "1rem"}} isOpen={typeDropdownOpen} toggle={toggleType} >
            <DropdownToggle style={{textTransform: "capitalize"}} caret>{queryItems.type === "" ? "All Types" : queryItems.type}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => {changeTypeString("")}}>All Types</DropdownItem>
              <DropdownItem onClick={() => {changeTypeString("chicken")}}>Chicken</DropdownItem>
              <DropdownItem onClick={() => {changeTypeString("pork")}}>Pork</DropdownItem>
              <DropdownItem onClick={() => {changeTypeString("groundBeef")}}>Ground Beef</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Input 
            name="name"
            placeholder="Filter Results"
            onChange={onQueryChange}
            style={{width: "20%"}}
          />

          <Button style={dropDownStyle}>Submit</Button>
      </form>


      <div className='search-container'>
        {allMeatCards}
      </div>    
    </>

  )
}

export default search