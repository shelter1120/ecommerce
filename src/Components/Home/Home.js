import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import "../Home/Home.css"


const Home = () => {
    const tourData = [
        {
            date: "JUL 16",
            city: "DETROIT, MI",
            place: "DTE ENERGY MUSIC THEATRE"
        },
        {
            date: "JUL 19",
            city: "TORONTO,ON",
            place: "BUDWEISER STAGE",
        },
        {
            date: "JUL 22",
            place: "JIGGY LUBE LIVE",
            city: "BRISTOW, VA",
        },
        {
            date: "JUL 29",
            place: "AK- CHIN PAVILION",
            city: "PHOENIX, AZ",
        },
        {
            date: "Aug 2",
            city: "LAS VEGAS, NV",
            place: "T- MOBILE ARENA",
        },
        {
            date: "Aug 7",
            city: "CONCORD, CA",
            place: "CONCORD PAVILION",
        }
    ]
    
    
  return (
    <>
    <header>
      <button className='home-btn'>
        Get our latest album
      </button>
      
        <FaPlayCircle className='home-icon' />          
    </header>

     <div>
        <h1 className="home-head">Tours</h1>
        <ul className="ticket-list">
            {
        tourData.map((ticket)=>{
            return <div>
         <span>{ticket.date}</span>
         <span>{ticket.city}</span>
         <span>{ticket.place}</span>
         <span><button>Buy Ticket</button></span>
            </div>

        })
            }
        </ul>

     </div>
     <footer className="home-footer">
     <h1>The Genrics</h1>
     </footer>
    
    </>
  )
}

export default Home 