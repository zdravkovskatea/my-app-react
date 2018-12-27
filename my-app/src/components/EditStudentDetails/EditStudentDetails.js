import React, {Component} from 'react';

class EditStudentDetails extends Component {

    constructor(props){
        super(props);
        // console.log(props.student);
        // let {id, ime, prezime, nasoka} = props.student;
        // console.log(id);
        this.state = {
            student:{...props.student}

        };

        // console.log(this.state);
    }

    onFormSubmit = (student) => (event) => {
        event.preventDefault();
        console.log("Form Submit!");
        // this.setState({student: student});
        // const updatedStudent = this.state.list.filter(s => s.id === student.id).map(s => s=student);

        // const newList = this.state.list.map(s => {if(s.id === student.id){ return student} return s});
        // this.setState({list: newList, student: null});
    };

    onHandleChange = (property) => (event) => {
        console.log(property);console.log(event.target.value);
        const a = event.target.value;
        this.setState((prevState) => ({
            student: {
                ...prevState.student,
                [property]: a
            }
        }));
    };

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
        let onChangeProp = function(){
            if(this.props.isUpdate){
                return this.onHandleChange('ime');
            }
            return null;
        };
        let onChangeAction = (prop) => this.props.isUpdate ? this.onHandleChange(prop) : null;

        return (
            <div>
                {
                    (
                        <div className="card m-1 mx-auto">
                            <div className="card-header bg-info ">
                                <div className="text-white">Edit Student</div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.props.handleUpdateSubmit(this.state.student)}>
                                    <div className="form-group">
                                        <label htmlFor="name" style={{float: "left"}}>Name</label>
                                        <input type="text" name="ime" className="form-control form-control-lg"
                                               placeholder="Enter name"
                                               value={this.state.student.ime}
                                               onChange={onChangeAction('ime')}
                                        />
                                        <label htmlFor="surname" style={{float: "left"}}>Surname</label>
                                        <input type="text" name="prezime" className="form-control form-control-lg"
                                               value={this.state.student.prezime}
                                               placeholder="Enter lastname"
                                            onChange={onChangeAction('prezime')}
                                        />
                                        <label htmlFor="id" style={{float: "left"}}>Index</label>
                                        <input type="text" name="indeks" className="form-control form-control-lg"
                                               placeholder="Enter index"
                                               value={this.state.student.id}
                                            onChange={onChangeAction('id')}
                                        />
                                        <label htmlFor="studies" style={{float: "left"}}>Studies</label>
                                        <input type="text" name="nasoka" className="form-control form-control-lg"
                                               placeholder="Enter study program"
                                               value={this.state.student.nasoka}
                                            onChange={onChangeAction('nasoka')}
                                        />
                                    </div>
                                    { (this.props.isUpdate === true) &&
                                        <input type="submit" value="Submit" className="btn btn-success"/>
                                    }
                                </form>
                            </div>
                        </div>)
                }
            </div>

        );
    }

};

export default EditStudentDetails;