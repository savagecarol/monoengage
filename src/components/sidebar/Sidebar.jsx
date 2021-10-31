import { Checkbox } from '@material-ui/core';
import { GradeOutlined, Person, PersonAddDisabledOutlined, RssFeed, School } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className = "sidebar">
           <div className="sidebarWrapper">

           <ul className="sidebarList">
<li className ="sidebarListItem">
<RssFeed className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol3 </span>
</li>
<li className ="sidebarListItem">
<Person className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol8 </span>
</li>
<li className ="sidebarListItem">
<PersonAddDisabledOutlined className = "sidebarIcon"/>
<span className="sidebarListItemText">Person </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol5 </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol4 </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol3 </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol2 </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol1 </span>
</li>
<li className ="sidebarListItem">
<School className = "sidebarIcon"/>
<span className="sidebarListItemText"> lol </span>
</li>
</ul>

                <button className ="sidebarButton"> Show More </button>
                <hr className = "sidebarHr"/>
           </div> 
        </div>
    )
}

export default Sidebar





