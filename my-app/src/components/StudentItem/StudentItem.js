import React, {Component} from 'react';
import PropTypes from 'prop-types';

class StudentItem extends Component {

    constructor(props){
        super(props);
    }

    render()
{
        return (
            <div className="card" style={{width: "30rem"}} key={this.props.student.indeks}>
                <div className="card-header bg-info ">
                    <div className="text-white">Student
                        <div onClick={() => this.props.onDelete(this.props.student.indeks)}
                             className="btn btn-warning m-1"
                             style={{cursor: "pointer", color: "black", float: "right"}}
                        >Delete</div>
                        <div onClick={() => this.props.onShowDetails(this.props.student.indeks)}
                             className="btn btn-secondary m-1"
                             style={{cursor: "pointer", color: "white", float: "right"}}
                        >Details</div>

                        <div onClick={() => this.props.handleUpdate(this.props.student)}
                            className="btn btn-primary m-1" style={{float: "right", cursor: "pointer"}}>Update


                        </div>

                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Ime: {this.props.student.ime}</li>
                    <li className="list-group-item">Prezime : {this.props.student.prezime}</li>
                </ul>
            </div>

        );
    };

}
StudentItem.propTypes={
    EditHandler : PropTypes.func.isRequired
};

export default StudentItem;