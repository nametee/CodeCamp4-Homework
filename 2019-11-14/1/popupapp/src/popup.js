import React from "react";

class Popup extends React.Component {
    render(){
        return (
            <div className='container'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#PopupModal">
                    Launch  modal
                </button>
                <div className="modal" tabIndex="-1" role="dialog"   id="PopupModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.heading}</h5> 
                        </div>
                        <div className="modal-body">
                            <p>{this.props.children}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" >Close</button> 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;