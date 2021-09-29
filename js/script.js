

const makeRequest = () => {
    return fetch("https://rickandmortyapi.com/api/charactessdfsr")
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw `error ${response.status}`
        })
        .catch((error) => console.error(error))
}


makeRequest()
    .then((data) => data.results)
    .then((characters) => {
        console.log(getAliveHumans(characters))
        console.log(getCharacterNames(characters))
        console.log(getNameAndOrigin(characters))
    })
    .then(() => console.log("done"))



    .finally(() => console.log("finally"))


const getAliveHumans = characters => characters.filter((character) => {
    return character.status === 'Alive' && character.species === 'Human'
})

const getCharacterNames = characters => characters.map(character => character.name)

const getNameAndOrigin = characters => characters.map(character => {
    return {
        name: character.name,
        origin: character.origin.name
    }
})






const student1 = {
    name: "Paul",
    id: 1,
}

const student2 = {
    name: "Lucy",
    id: 2,
}

const students = [student1, student2]

function renameMutable(students, studentId, newName) {
    const foundStudent = students.find(student => student.id === studentId)

    if (foundStudent) {
        foundStudent.name = newName;
    }

    return students
}

function renameImmutable(students, studentId, newName) {
    return students.map(student => {
        if (student.id === studentId) {
            return {...student, name: newName}
        }
        return student
    })
}

// console.log('before mutation', JSON.parse(JSON.stringify(students)))
// renameMutable(students, 1, 'Päule')
// console.log('after mutation', JSON.parse(JSON.stringify(students)))
//
// console.log('before immutable', JSON.parse(JSON.stringify(students)))
// const newStudents = renameImmutable(students, 2, 'Ludmilla')
// console.log('after immutable', JSON.parse(JSON.stringify(students)))
//
// console.log('copied students', newStudents)