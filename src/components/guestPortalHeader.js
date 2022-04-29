// import { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import { GUEST } from '../assets/guestDetails';
// import { useEffect, useRef } from 'react';

function GuestPortalHeader(){

    const returnName = () => {
        if(localStorage.getItem('guest')){
            console.log( JSON.parse(localStorage.getItem('guest')).name);
            return JSON.parse(localStorage.getItem('guest')).name;
        }
        else{
            return null;
        }
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/guest">Hello {returnName()}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/guest/services">Services</Nav.Link>
                    <Nav.Link href="/guest/complaints">Complaints</Nav.Link>
                    <Nav.Link href="/guest/bill">Bill</Nav.Link>
                    <Nav.Link href="/guest/rar">Ratings and Reviews</Nav.Link>
                    <Nav.Link href="/guest/profile">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
// class GuestPortalHeader extends Component {
//     render(){
//         return(
//             <Navbar bg="dark" variant="dark">
//                 <Container>
//                     <Navbar.Brand href="/guest">Hello {GUEST.NAME}</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="/guest/services">Services</Nav.Link>
//                         <Nav.Link href="/guest/complaints">Complaints</Nav.Link>
//                         <Nav.Link href="/guest/bill">Bill</Nav.Link>
//                         <Nav.Link href="/guest/rar">Ratings and Reviews</Nav.Link>
//                         <Nav.Link href="/guest/profile">Profile</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         );
//     }
// }

export default GuestPortalHeader;