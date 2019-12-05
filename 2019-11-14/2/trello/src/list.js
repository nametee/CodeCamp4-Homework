import React from 'react'

class List extends React.Component {
    render(){
        return(
            <div className="container">
                {this.props.listItem.map(item =>(
                    <div className="card bg-light mb-3" >
                        <div className="card-body">
                            <button type="button" className="btn">
                                {item.name}
                            </button>
                        </div>
                  </div>
                ))}
            </div>
        )
    }
}

export default List