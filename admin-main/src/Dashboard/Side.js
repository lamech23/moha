import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Side() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
  return (
    <div>
         <ul className={style} id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="text-center d-none d-md-inline">
                              <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                            </div>
                        </a>

                        <hr className="sidebar-divider my-0" />
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'> 
                               <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <hr className="sidebar-divider" />

                        <div className="sidebar-heading">Interface</div>
                        <li className="nav-item">

                            {/* houses */}
                            <p className="nav-link collapsed" data-toggle="collapse" data-target="#collapseHouses"
                                aria-expanded="true" aria-controls="collapseHouses">
                                <span>Add Houses</span>
                            </p>
                            <div id="collapseHouses" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Houses:</h6>
                                    <Link className="collapse-item" to='/createHouse'>Add</Link>
                                    <Link className="collapse-item" to='/View'>View</Link>
                                </div>
                            </div>


                            {/* feedback */}
                            <p className="nav-link collapsed" data-toggle="collapse" data-target="#collapseFeedback"
                                aria-expanded="true" aria-controls="collapseFeedback">
                                <span>FeedBack</span>
                            </p>
                            <div id="collapseFeedback" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Houses:</h6>
                                    <Link className="collapse-item" to='/ViewFeedback'>View</Link>
                                </div>
                            </div>


                            {/* users */}
                            <p className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUsers"
                                aria-expanded="true" aria-controls="collapseUsers">
                                <span>Users</span>
                            </p>
                            <div id="collapseUsers" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">User:</h6>
                                   <Link className="collapse-item" to='/'>View</Link>
                                </div>
                            </div>
                        </li>   
                    </ul>
    </div>
  )
}

export default Side