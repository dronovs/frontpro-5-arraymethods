const users = [
    {
        name: 'Bob',
        age: 27,
        address:{
            country:'USA',
            city:'LA'
        },
        marks:[2,3,5,4,2,3,1,5]
    },
    {
        name: 'July',
        age: 21,
        address:{
            country:'Ukraine',
            city:'Kiev'
        },
        marks:[4,4,5,4,3,4,3,5]
    },
    {
        name: 'Monya',
        age: 15,
        address:{
            country:'Ukraine',
            city:'Odessa'
        },
        marks:[5,1,5,1,5,1,5,1]
    },
    {
        name: 'Vsevolod',
        age: 19,
        address:{
            country:'Ukraine',
            city:'Lviv'
        },
        marks:[3,4,5,3,1,2,4,6]
    },
];
console.log(`Basic array of students`, users);
console.log(`-------------------------------`);

//not adult users
let isNotAdult = users.filter(user => user.age < 18);
console.log(`Not adult students: `, isNotAdult);
console.log(`-------------------------------`);

// foreign users
let foreignStudent = users.filter(user => user.address.country !== 'Ukraine');
console.log(`Foreign students: `, foreignStudent);
console.log(`-------------------------------`);

//updated array of students
let studentsUpdatedArray = users.map(user => {
    return {
        ...user,
        isAdult: user[`age`] >= 18,
        averageMark: user.marks.reduce((sum, current) => sum + current)/(user.marks.length - 1)
    }
})
console.log(`Updated array of students `, studentsUpdatedArray);
console.log(`-------------------------------`);

// average mark of students
let averageStudentMark = studentsUpdatedArray.reduce((sum, user) => {
    return (sum += user.marks.reduce((sumMarks, nextMark) =>
        (sumMarks += nextMark), 0)/(user.marks.length - 1));
}, 0) /(studentsUpdatedArray.length - 1);

console.log(`Average mark of students: `, averageStudentMark);
console.log(`-------------------------------`);

// countries and cities of students
let addressesOfStudents = {
    countries: studentsUpdatedArray.map(student => student['address']['country']),
    cities: studentsUpdatedArray.map(student => student['address']['city'])
}
console.table(addressesOfStudents);
console.log(`-------------------------------`);


// function to add firstName and lastName
function addFirstLastName (arr) {
     return arr.map( student => {
        return {
            ...student,
            firstName: student.firstName ? student.firstName : student.firstName = 'Ivan',
            lastName: student.lastName ? student.lastName : student.lastName = 'Ivanov',
        }
        })
}
let arrOfStudentsFirstLastNames = addFirstLastName(studentsUpdatedArray);
console.table(`Array with added first and last names`, arrOfStudentsFirstLastNames);
console.log(`-------------------------------`);

// function to return objects with 3 or more keys
function filtersThreeOrMoreKeys (arr) {
    return arr.filter(student => {
        return Object.keys(student).length >= 3;
    })
}

let filteredArrayWithThreeOrMoreKeys = filtersThreeOrMoreKeys(arrOfStudentsFirstLastNames);
console.log(`Filtered array with 3 or more keys`, filteredArrayWithThreeOrMoreKeys);
console.log(`-------------------------------`);

// function to filter keys with numbers and strings
function filtersObjectsStringNumber (arr) {
    return arr.filter((student) => {
        let valuesOfObjects = Object.values(student);
        return (
            valuesOfObjects.some((value) => typeof value === 'string') &&
            valuesOfObjects.some((value) => typeof value === 'number')
        )
    })

}

let anotherFilteredArray = filtersObjectsStringNumber(arrOfStudentsFirstLastNames);
console.log(`Filtered array of strings and numbers`, anotherFilteredArray);
console.log(`-------------------------------`);