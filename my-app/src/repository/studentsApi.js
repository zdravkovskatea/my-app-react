export const getStudentsFromApi = () =>{
    return fetch('http://localhost:8080/students');
};

export const addStudent = (student) => {
    return fetch('http://localhost:8080/students',{
        method: 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            indeks: student.indeks,
            ime: student.ime,
            prezime: student.prezime,
            nasoka: student.nasoka
        })
    });
};

export const getStudentById = (studentId) =>{
    return fetch('http://localhost:8080/students/{studentId}',{
        method:'GET'

    });
};

export const deleteStudentById = (studentId) => {
    return fetch('http://localhost:8080/students/{studentId}',{
        method:'DELETE'
    })
}

export const updateStudent = (student) =>{
    return fetch('http://localhost:8080/students/' + student.indeks,{
        method : 'PATCH'
    });
};