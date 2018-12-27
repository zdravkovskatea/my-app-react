import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css';
import EditStudentDetails from "../EditStudentDetails/EditStudentDetails";
import Header from "../Header/Header";
import StudentsList from "../StudentsList/StudentsList";
import {listStudents} from "../studentRepository/studentRepository";
import {addStudent, getStudentById, getStudentsFromApi} from "../../repository/studentsApi";


class App extends Component {
    // state = {
    //     listStudents: []
    // };

    constructor(props) {
        super(props);
        this.state = {
            student: null,
            list: listStudents(),
            isUpdate: false
        };
    }

    onDelete = (id) => {
        const newList = this.state.list.filter(s => (s.id !== id));
        console.log(newList);
        this.setState({list: newList, student: null});
    };

    onHandleChange = (property) => (event) => {

        // const newList = this.state.list.map(s => {if(s.id === student.id){ return student} return s});
        const a = event.target.value;
        const newProperty = {[property]: a};
        const updatedStudent = {...this.state.student, ...newProperty};
        console.log(newProperty);
        this.setState({
            student: updatedStudent,
            isUpdate: false,
        });

        // this.setState({
        //     ...this.state,
        //     list: newList
        // });

        // const a = event.target.value;
        // this.setState((prevState) => ({
        //     student: {
        //         ...prevState.student,
        //         [property]: a
        //     }
        // }));
    };

    handleAction = (student, action) => {
        console.log('New Action!');
        this.setState({student, isUpdate: action});

    };

    handleUpdateSubmit = (student) => (event) => {
        event.preventDefault();
        console.log("Submited!");
        // this.setState({student: student});
        // const updatedStudent = this.state.list.filter(s => s.id === student.id).map(s => s=student);

        const newList = this.state.list.map(s => {if(s.id === student.id){ return student} return s});
        this.setState({list: newList, student: null});
    };

    componentDidUpdate() {
        console.log("Update detected!");
    }

    render() {
        console.log("New Render");
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-5">
                        <StudentsList
                            students={this.state.list}
                            onDelete={this.onDelete}
                            onShowDetails={this.handleShowDetails}
                            onClickEdit={this.handleEditClick}
                            handleAction={this.handleAction}
                            onUpdateCliked={this.handleUpdateClicked}

                        />
                    </div>
                    {console.log(this.state.student)}
                    {this.state.student != null &&
                    <div className="col-6">
                        <EditStudentDetails
                            student={this.state.student}
                            handleUpdateSubmit={this.handleUpdateSubmit}
                            isUpdate={this.state.isUpdate}
                        />
                    </div>

                    }

                </div>
            </div>
        );
    }


    // handlerForUpdate = (studentId) => {
    //     let students=[...this.state.listStudents];
    //     const index=students.indexOf(studentId);
    //     students[index]={...studentId};
    //     this.setState({listStudents:students});
    // };
    //
    // handleEditClick=(studentId)=>{
    //     console.log('[App.js] edit Student' );
    //     const student=this.state.listStudents[studentId];
    //     this.setState((state,props) =>{
    //         let students=[...this.state.listStudents];
    //         const index=students.indexOf(studentId);
    //         students[index]={...studentId};
    //         this.setState({listStudents:students});
    //     });
    //
    // };
    //
    // handleDelete=(studentId)=>{
    //   console.log("Event delete handled right now.",studentId);
    //   const newArrayStudents=this.state.listStudents.filter(student => student.indeks!==studentId);
    //   this.setState({listStudents:newArrayStudents});
    // };
    //
    //
    // handleChange(event,studentId){
    //     const ime=event.target.value;
    //     const prezime=event.target.value;
    //     const indeks=event.target.value;
    //         const nasoka=event.target.value;
    //         const newState={ime,prezime,indeks,nasoka};
    //         let students=[...this.state.listStudents];
    //         const index=students.indexOf(studentId);
    //         students[index]={...studentId};
    //         this.setState({listStudents:students});
    //
    //
    //     if (event === 'ime'){
    //         this.setState({ime:event.target.value});
    //     }
    //
    //     if (event === 'prezime') {
    //         this.setState({prezime: event.target.value});
    //     }
    //     if (event === 'indeks') {
    //         this.setState({indeks: event.target.value});
    //     }
    //     if (event === 'nasoka') {
    //         this.setState({nasoka: event.target.value});
    //     }
    //
    //     const newData={
    //         ime:this.state.ime,
    //         prezime:this.state.prezime,
    //         indeks:this.state.indeks,
    //         nasoka:this.state.nasoka,
    //     }
    //     this.handlerForUpdate();
    // };


    // DidMount() {
    //     this.loadData();
    // }
    //
    // componentWillUnmount = () => {
    //     console.log('unmount');
    // }
    //
    // loadData = () => {
    //     getStudentsFromApi()
    //         .then(response => response.json())
    //         .then((data) => {
    //             console.log('data: ', data)
    //             this.setState({
    //                 listStudents: data
    //             })
    //         });
    // };
    //
    // onNewStudent = (student) => {
    //     console.log('[App.js] On new student');
    //     addStudent(student).then((response) => {
    //         console.log('new student status: ', response.status)
    //         this.loadData();
    //     });
    // };
    //
    // handleShowDetails = (studentId) => {
    //     console.log('[App.js] On show student details');
    //     getStudentById(studentId).then((response) => {
    //         console.log('show student details status: ', response.status)
    //         this.loadData();
    //     });
    // };


}

export default App;
