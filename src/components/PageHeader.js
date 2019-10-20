import React, { Component } from 'react'
import {Container,Image} from 'semantic-ui-react';
import logo from '../assets/images/stethoscope.svg';
class PageHeader extends Component {
    render() {
        return (
           <Container fluid style={{"padding":40}} className="App-header">
               <h1 className="work-sans header-text">
               <Image src={logo} inline style={{height: 100}}/>
               DOCTOR NEARU
               </h1>
           </Container>
        )
    }
}

export default PageHeader
