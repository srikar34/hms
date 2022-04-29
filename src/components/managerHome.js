import React, { Component } from 'react'; 
import ManagerPortalHeader from './managerPortalHeader';


class Manager extends Component {
    render(){
        return(
            <div>
            <ManagerPortalHeader />
            <div class="center">Use navigation bar to move across various sections</div>
            </div>
        );
    }
}

export default Manager;