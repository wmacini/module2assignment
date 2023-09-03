
var students = [];
var student = {
    name: 'Joan Smith',
    birthYear: 2002,
    course: 'IFT458',
    grade: 90,
    active: true,
    age: function calculate(){
        if(this.active){
            return 2022 - this.birthYear;
        }
    }
}

var student2 = {
    name: 'Andy Moore',
    birthYear: 2000,
    course: 'IFT458',
    grade: 100,
    active: false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        }
        else{
            return 0;
        }
    }
}

students.push(student);
students.push(student2);
students.forEach((item) => console.log(item.age()));

console.log(students);
// console.log(student['name']);
// console.log(student.name);
// console.log(student2.age());
// console.log(student.age());