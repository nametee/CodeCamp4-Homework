import React from 'react'
import List from './list.js' 

class Trello extends React.Component {
    label = {
        name: "Phone Features",
        list: [
            { id: 1, name: "Subwoofer" },
            { id: 2, name: "Non-porous, washable" },
            { id: 3, name: "Wings" },
            { id: 4, name: "Beveled Bezel"},
            { id: 5, name: "Bezeled Bevel"},
            { id: 6, name: "Seedless"} 
        ]
    }

    render(){
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-9">
                                <span className="panel-header-title">{this.label.name}</span>
                            </div>
                            <div className="col-3">
                                <span className="panel-header-dot">
                                    <button type="button" className="btn" >
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                </span>
                            </div> 
                        </div>
                    </div>
                    <div className="card-body">
                        <List listItem={this.label.list}/>
                    </div>
                    <div className="card-footer">
                        <button class="btn btn-outline-light" type="button">Add a card...</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trello