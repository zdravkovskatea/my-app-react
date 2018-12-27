import React, {Component} from 'react';

class EditStudentDetails extends Component {

    constructor(props){
        super(props);
        // console.log(props.student);
        // let {id, ime, prezime, nasoka} = props.student;
        // console.log(id);
        // this.state = {
        //     student:{...props.student}
        //
        // };

        // console.log(this.state);
    }

    // onHandleChange = (property) => (event) => {
    //     const a = event.target.value;
    //     this.setState((prevState) => ({
    //         student: {
    //             ...prevState.student,
    //             [property]: a
    //         }
    //     }));
    // };

    // click = () =>{console.log('a');
    //     const tmp = {...this.state.student, ime:'Martin'};
    //     console.log(tmp);
    //     this.setState({student: tmp});
        // this.setState(prevState => ({
        // student: {
        //     ...prevState.student,
        //     ime: 'something'
        // }
    // };

    // const onFormSubmit = (formSubmitEvent) =>{
    //     formSubmitEvent.preventDefault();
    //     console.log('onFormSubmit',formSubmitEvent);
    //
    //     props.onNewStudent(
    //         {
    //             ime:formSubmitEvent.target.ime.value,
    //             prezime:formSubmitEvent.target.prezime.value,
    //             indeks:formSubmitEvent.target.indeks.value,
    //             nasoka:formSubmitEvent.target.nasoka.value
    //
    //         }
    //     );
    // };

    render() {

        //const{ime,prezime,indeks,nasoka} = this.state
        return (
            <div>
                {
                    (
                        <div className="card m-1 mx-auto">
                            <div className="card-header bg-info ">
                                <div className="text-white">Edit Student</div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.props.handleUpdateSubmit(this.props.student)}>
                                    <div className="form-group">
                                        <label htmlFor="name" style={{float: "left"}}>Name</label>
                                        <input type="text" name="ime" className="form-control form-control-lg"
                                               placeholder="Enter name"
                                               value={this.props.student.ime}
                                               onChange={this.props.onHandleChange('ime')}
                                        />
                                        <label htmlFor="surname" style={{float: "left"}}>Surname</label>
                                        <input type="text" name="prezime" className="form-control form-control-lg"
                                               value={this.props.student.prezime}
                                               placeholder="Enter lastname"
                                            onChange={this.props.onHandleChange('prezime')}
                                        />
                                        <label htmlFor="id" style={{float: "left"}}>Index</label>
                                        <input type="text" name="indeks" className="form-control form-control-lg"
                                               placeholder="Enter index"
                                               value={this.props.student.id}
                                            onChange={this.props.onHandleChange('id')}
                                        />
                                        <label htmlFor="studies" style={{float: "left"}}>Studies</label>
                                        <input type="text" name="nasoka" className="form-control form-control-lg"
                                               placeholder="Enter study program"
                                               value={this.props.student.nasoka}
                                            onChange={this.props.onHandleChange('nasoka')}
                                        />
                                    </div>
                                    <input type="submit" value="Submit" className="btn btn-success"/>
                                </form>
                            </div>
                        </div>)
                }
            </div>

        );
    }

};

export default EditStudentDetails;