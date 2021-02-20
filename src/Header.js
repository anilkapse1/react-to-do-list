import React from 'react';

function Header(props) {
    return (
            <div className="card">
                <div class="card-img">
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.userName}</h5>
                    <p className="card-text">{props.roll}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    );
}

export default Header;  