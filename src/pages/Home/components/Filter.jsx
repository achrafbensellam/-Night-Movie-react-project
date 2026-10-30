import { useState } from "react";
import React from "react";
// import { CiSearch } from "react-icons/ci";
import './Filter.css'


export default function Filter() {
const [search,setSearch] = useState('')

       const [type,setType] = useState('all');
    const [horror,setHorror] = useState('horror');
    const [comedy,setComedy] = useState('comedy');
    const [action,setAction] = useState('action');


    const [array,setArray] = useState([
        {
            id:1,
            name:'x',
            category:'horror'
        },
        {
            id:2,
            name:'y',
            category:'action'
        },
        {
            id:3,
            name:'z',
            category:'comedy'
        }
    ])


   const DisplayArray =  array.filter(function(item) {
          if (type !== 'all') {
            if (item.category !== type) {
                 return false                
            }
        }

        if (search !== '') {
            
            
            if (item.name.toLowerCase().startsWith(search.toLowerCase()) === false) {
                return false
            }
        }
       return true
        
     } )
    



    return(
        <section>
                    <div className="contaFilter">

            <div className="thefilterText">
                <p style={{color:'yellowgreen',fontSize:'small'}}>EXPLORE THE COLLECTION</p>
                <h1 style={{color:'white'}}>DISCOVER MOVIES</h1>
            </div>

            <div className="divofSearchAndselect">
            <div className="searchBox">
                {/* <CiSearch className='searchIcon'/> */}
                 <input className="searchinpt" placeholder="Search the movie" type="search" value={search} onChange={e=>setSearch(e.target.value)} />
            </div>           

<div className="selectdiv">
       <select name="" id="" className="theselectinpt"  onChange={e=>setType(e.target.value)}>
            <option value="all">All</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
        </select>
</div>
            </div>


 
     
        </div>
        <div className="cardsconta">
       <div className="cards">
            {DisplayArray.map(item=> (
                 <div key={item.id}>

                    <h1>{item.name}</h1>
                    <p>category : {item.category}</p>
                 </div>

            ))

            }
        </div>
</div>
        </section>


    )

    
}