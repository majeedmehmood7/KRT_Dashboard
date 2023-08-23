import React from 'react';
import './Cards.css';
import { BsHouseDoor, BsFillHouseGearFill, BsFillHouseAddFill, BsPeopleFill, BsPersonFill } from 'react-icons/bs';


export default function Cards() {
  return (
    
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>House Surveyed (2384)</h3>
                    <BsHouseDoor className='card_icon'/>
                </div>
                <p>Villages: 50</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Master Plan (25)</h3>
                    <BsFillHouseGearFill className='card_icon'/>
                </div>
                <p>Construction Villages:24 </p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Under Construction (120) </h3>
                    <BsFillHouseAddFill className='card_icon'/>
                </div>
                <p>House Underconstruction : 30</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Training Sessions (26)</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <p>Attendance: 1095</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Chairman</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>3</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Members</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>11</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Supervisor</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>0</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>WareHouse Incharge</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>0</p>
            </div>
        </div>
        </main>
  )
}


