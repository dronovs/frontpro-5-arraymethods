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
        name: user.name,
        age: user.age,
        marks: user.marks,
        address: user.address,
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

function updatesArrays (arr) {
    arr.map( student => {
        return {
            firstName: 'Ivan',
            lastName: 'Ivanov'
        }
        })
}
let oneMoreUpdatedArrayOfStudent = updatesArrays(studentsUpdatedArray);
console.log(updatesArrays(oneMoreUpdatedArrayOfStudent));