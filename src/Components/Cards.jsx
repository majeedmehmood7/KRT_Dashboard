import React from 'react';
import './Cards.css';
import { BsHouseDoor, BsFillHouseGearFill, BsFillHouseAddFill, BsPeopleFill, BsPersonFill } from 'react-icons/bs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Surveyed from '../Cards/Surveyed';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',  // Increase the width to make the modal larger
    maxWidth: 600, // Add a maxWidth to prevent the modal from becoming too wide
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Cards() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{ ...style, overflowY: 'scroll', maxHeight: '80vh' }}>
                        <Surveyed/>
                    </Box>
                </Modal>
            </div>


            <main className='main-container'>
                <div className='main-title'>
                    <h3>DASHBOARD</h3>
                </div>

                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>House Surveyed (2384)</h3>
                            <BsHouseDoor className='card_icon' />
                        </div>
                        <p>Villages: 50</p>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Master Plan (25)</h3>
                            <BsFillHouseGearFill className='card_icon' />
                        </div>
                        <p>Construction Villages:24 </p>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Under Construction (120) </h3>
                            <BsFillHouseAddFill className='card_icon' />
                        </div>
                        <p>House Underconstruction : 30</p>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Training Sessions (26)</h3>
                            <BsPeopleFill className='card_icon' />
                        </div>
                        <p>Attendance: 1095</p>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h3>CB</h3>
                            <BsPersonFill className='card_icon' onClick={handleOpen} />
                        </div>
                        <b><p>Chairman :<span>21</span></p></b>
                        <p><b>Community members :<span>46</span></b></p>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h3>KRT Field Staffs </h3>
                            <BsPersonFill className='card_icon' />
                        </div>
                        <b><p>Supervisor : <span>4</span></p></b>
                        <p><b>Warehouse Incharge : <span>34</span></b></p>
                    </div>

                    {/* <div className='card'>
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
            </div> */}
                </div>
            </main>
        </>
    )
}


