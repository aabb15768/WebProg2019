import React from 'react'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

// export default (setNumber) => {
//     return (
//         <div className="card my-4">
//             <h5 className="card-header">Categories</h5>
//             <div className="card-body">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <ul className="list-unstyled mb-0">
//                             <li>
//                                 <NavLink onClick={() => setNumber(0)} to="/posts/0">Taiwan</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="col-lg-6">
//                         <ul className="list-unstyled mb-0">
//                             <li>
//                                 <NavLink onClick={() => setNumber(1)} to="/posts/1">Tokyo</NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <NavLink onClick={() => this.props.setNumber(0)} to="/posts/0">Taiwan</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <NavLink onClick={() => this.props.setNumber(1)} to="/posts/1">Tokyo</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Category;