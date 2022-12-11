import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='col-3'>
                <div className="card">
                    <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" style={{width: "100%"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>
        )
    }
}
