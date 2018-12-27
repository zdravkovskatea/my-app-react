
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StudentItem from "../StudentItem/StudentItem";

class StudentsList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {students} = this.props;
        return (
            <div>
                {students.map(student => (
                        <StudentItem
                            student={student}
                            handleAction = {this.props.handleAction}
                            isUpdate = {this.props.isUpdate}
                            onDelete={this.props.onDelete}
                            onShowDetails={this.props.onShowDetails}
                        />
                    )
                )}
            </div>
        );
    }
}
StudentsList.propTypes={
    ime: PropTypes.string.isRequired,
    prezime:PropTypes.string.isRequired,
    indeks:PropTypes.string.isRequired,
    nasoka:PropTypes.string.isRequired
};
export default StudentsList;