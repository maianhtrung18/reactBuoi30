import React, { Component } from 'react'
import Card from './Card'

export default class Item extends Component {

    style = {
        width: "50px",
        height: "32px",
        backgroundColor: "#676767",
    }

    render() {
        return (
            <div className='container px-lg-5'>
                <div className='row'>
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                  
                </div>


            </div>
        )
    }
}
