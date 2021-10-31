import React from 'react'
import "./Topbar.css"
import { Search , Person, Chat, Notifications } from '@material-ui/icons'

const Topbar = () => {
    return (
        <div className = "topbarContainer">
              <div className="topbarLeft">
                <span className = "logo"> Social App </span>
              </div> 
              <div className="topbarCenter">
                  <div className="searchbar">
                      <Search className = "searchicon"/>
                     <input placeholder ="search for friends"  className = "searchInput" />
                  </div>
              </div> 
              <div className="topbarRight">
                <div className="topbarLinks">
                    <span className = "topbarLink" > HomePage </span>
                    <span className = "topbarLink" > TimeLine </span>
                </div>
                <div className="topbarIcons">
                    <div className = "topbarIconsItems">
                   <Person/> 
                   <span className="topbarIconBadge"> 1 </span>
                    </div>
                    <div className = "topbarIconsItems">
                   <Chat/> 
                   <span className="topbarIconBadge"> 1 </span>
                    </div>
                   <div className = "topbarIconsItems">
                   <Notifications/> 
                   <span className="topbarIconBadge"> 1 </span>
                    </div>
                </div>
                <img src="https://i.pinimg.com/originals/56/3a/a2/563aa24f9eddb7d4984ea8210045d57c.png" alt="" className="topbarImg"/>
              </div> 
        </div>
    )
}

export default Topbar
