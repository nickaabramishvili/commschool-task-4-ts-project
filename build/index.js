"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subjects = [
    { name: "mathematics", difficultyCoefficient: 8, difficultyLevel: "empty", learnedFromClass: 4 },
    { name: "physics", difficultyCoefficient: 9, difficultyLevel: "empty", learnedFromClass: 5 },
    { name: "biology", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 },
    { name: "chemistry", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 },
    { name: "history", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 },
    { name: "english", difficultyCoefficient: 6, difficultyLevel: "empty", learnedFromClass: 3 },
    { name: "german", difficultyCoefficient: 6, difficultyLevel: "empty", learnedFromClass: 4 },
    { name: "art", difficultyCoefficient: 4, difficultyLevel: "empty", learnedFromClass: 3 },
    { name: "geography", difficultyCoefficient: 4, difficultyLevel: "empty", learnedFromClass: 4 },
];
var teachers = [
    {
        id: 1,
        firstName: "Pearl",
        lastName: "Benton",
        age: 29,
        email: "Pearl@gmail.com",
        subjects: [{ name: "mathematics", difficultyCoefficient: 8, difficultyLevel: "empty", learnedFromClass: 4 }],
        classesTeaching: [
            {
                classesQuiantity: 3,
                studentsList: [
                    "nika gordeladze",
                    "gio nozadze",
                    "levani gabrichidze",
                    "lasha gabrichidze",
                    "erekle shelia",
                    "toko bekauri",
                    "nuca komaxidze",
                    "nika urushadze",
                ],
                studentsCount: 8,
            },
        ],
    },
    {
        id: 1,
        firstName: "Dawood",
        lastName: "Stein",
        age: 31,
        email: "Dawood@gmail.com",
        subjects: [{ name: "physics", difficultyCoefficient: 9, difficultyLevel: "empty", learnedFromClass: 5 }],
        classesTeaching: [
            {
                classesQuiantity: 1,
                studentsList: ["erekle shelia", "toko bekauri", "nuca komaxidze", "nika urushadze"],
                studentsCount: 4,
            },
        ],
    },
    {
        id: 1,
        firstName: "Polly",
        lastName: "Fitzgerald",
        age: 35,
        email: "Polly@gmail.com",
        subjects: [
            { name: "biology", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 },
            { name: "chemistry", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 },
        ],
        classesTeaching: [
            {
                classesQuiantity: 1,
                studentsList: ["erekle shelia", "toko bekauri", "nuca komaxidze", "nika urushadze"],
                studentsCount: 4,
            },
        ],
    },
    {
        id: 1,
        firstName: "Branden",
        lastName: "Herman",
        age: 38,
        email: "Branden@gmail.com",
        subjects: [{ name: "history", difficultyCoefficient: 7, difficultyLevel: "empty", learnedFromClass: 5 }],
        classesTeaching: [
            {
                classesQuiantity: 1,
                studentsList: ["erekle shelia", "toko bekauri", "nuca komaxidze", "nika urushadze"],
                studentsCount: 4,
            },
        ],
    },
    {
        id: 1,
        firstName: "Jaydon",
        lastName: "Alvarado",
        age: 45,
        email: "Jaydon@gmail.com",
        subjects: [
            { name: "english", difficultyCoefficient: 6, difficultyLevel: "empty", learnedFromClass: 3 },
            { name: "german", difficultyCoefficient: 6, difficultyLevel: "empty", learnedFromClass: 4 },
        ],
        classesTeaching: [
            {
                classesQuiantity: 3,
                studentsList: [
                    "nino vekua",
                    "mari abashidze",
                    "teo abesadze",
                    "ana aspanadze",
                    "nika gordeladze",
                    "gio nozadze",
                    "levani gabrichidze",
                    "lasha gabrichidze",
                    "erekle shelia",
                    "toko bekauri",
                    "nuca komaxidze",
                    "nika urushadze",
                ],
                studentsCount: 12,
            },
        ],
    },
    {
        id: 1,
        firstName: "Darnell",
        lastName: "Whitney",
        age: 55,
        email: "Darnell@gmail.com",
        subjects: [{ name: "art", difficultyCoefficient: 4, difficultyLevel: "empty", learnedFromClass: 3 }],
        classesTeaching: [
            {
                classesQuiantity: 3,
                studentsList: [
                    "nino vekua",
                    "mari abashidze",
                    "teo abesadze",
                    "ana aspanadze",
                    "nika gordeladze",
                    "gio nozadze",
                    "levani gabrichidze",
                    "lasha gabrichidze",
                    "erekle shelia",
                    "toko bekauri",
                    "nuca komaxidze",
                    "nika urushadze",
                ],
                studentsCount: 12,
            },
        ],
    },
    {
        id: 1,
        firstName: "Eddy",
        lastName: "Shredder",
        age: 65,
        email: "Eddy@gmail.com",
        subjects: [{ name: "geography", difficultyCoefficient: 4, difficultyLevel: "empty", learnedFromClass: 4 }],
        classesTeaching: [
            {
                classesQuiantity: 2,
                studentsList: [
                    "nika gordeladze",
                    "gio nozadze",
                    "levani gabrichidze",
                    "lasha gabrichidze",
                    "erekle shelia",
                    "toko bekauri",
                    "nuca komaxidze",
                    "nika urushadze",
                ],
                studentsCount: 8,
            },
        ],
    },
];
var students = [
    {
        id: 1,
        firstName: "nino",
        lastName: "vekua",
        age: 11,
        classLevel: 3,
        subjects: [
            { name: "english", grade: 6 },
            { name: "art", grade: 5 },
        ],
    },
    {
        id: 2,
        firstName: "mari",
        lastName: "abashidze",
        age: 11,
        classLevel: 3,
        subjects: [
            { name: "english", grade: 7 },
            { name: "art", grade: 8 },
        ],
    },
    {
        id: 3,
        firstName: "teo",
        lastName: "abesadze",
        age: 11,
        classLevel: 3,
        subjects: [
            { name: "english", grade: 4 },
            { name: "art", grade: 8 },
        ],
    },
    {
        id: 4,
        firstName: "ana",
        lastName: "aspanadze",
        age: 11,
        classLevel: 3,
        subjects: [
            { name: "english", grade: 10 },
            { name: "art", grade: 8 },
        ],
    },
    {
        id: 5,
        firstName: "nika",
        lastName: "gordeladze",
        age: 12,
        classLevel: 4,
        subjects: [
            { name: "english", grade: 9 },
            { name: "art", grade: 3 },
            {
                name: "mathematics",
                grade: 8,
            },
            { name: "german", grade: 6 },
            {
                name: "geography",
                grade: 7,
            },
        ],
    },
    {
        id: 6,
        firstName: "gio",
        lastName: "nozadze",
        age: 12,
        classLevel: 4,
        subjects: [
            { name: "english", grade: 7 },
            { name: "art", grade: 5 },
            {
                name: "mathematics",
                grade: 4,
            },
            { name: "german", grade: 8 },
            {
                name: "geography",
                grade: 9,
            },
        ],
    },
    {
        id: 7,
        firstName: "levani",
        lastName: "gabrichidze",
        age: 12,
        classLevel: 4,
        subjects: [
            { name: "english", grade: 9 },
            { name: "art", grade: 10 },
            {
                name: "mathematics",
                grade: 10,
            },
            { name: "german", grade: 7 },
            {
                name: "geography",
                grade: 8,
            },
        ],
    },
    {
        id: 8,
        firstName: "lasha",
        lastName: "gabrichidze",
        age: 12,
        classLevel: 4,
        subjects: [
            { name: "english", grade: 10 },
            { name: "art", grade: 9 },
            {
                name: "mathematics",
                grade: 8,
            },
            { name: "german", grade: 8 },
            {
                name: "geography",
                grade: 8,
            },
        ],
    },
    {
        id: 9,
        firstName: "erekle",
        lastName: "shelia",
        age: 12,
        classLevel: 5,
        subjects: [
            { name: "english", grade: 3 },
            { name: "art", grade: 2 },
            {
                name: "mathematics",
                grade: 4,
            },
            { name: "german", grade: 4 },
            {
                name: "geography",
                grade: 5,
            },
            { name: "physics", grade: 3 },
            { name: "biology", grade: 8 },
            { name: "chemistry", grade: 7 },
            { name: "history", grade: 5 },
        ],
    },
    {
        id: 10,
        firstName: "toko",
        lastName: "bekauri",
        age: 12,
        classLevel: 5,
        subjects: [
            { name: "english", grade: 3 },
            { name: "art", grade: 8 },
            {
                name: "mathematics",
                grade: 9,
            },
            { name: "german", grade: 9 },
            {
                name: "geography",
                grade: 9,
            },
            { name: "physics", grade: 9 },
            { name: "biology", grade: 8 },
            { name: "chemistry", grade: 7 },
            { name: "history", grade: 7 },
        ],
    },
    {
        id: 11,
        firstName: "nuca",
        lastName: "komaxidze",
        age: 12,
        classLevel: 5,
        subjects: [
            { name: "english", grade: 7 },
            { name: "art", grade: 6 },
            {
                name: "mathematics",
                grade: 8,
            },
            { name: "german", grade: 6 },
            {
                name: "geography",
                grade: 8,
            },
            { name: "physics", grade: 4 },
            { name: "biology", grade: 6 },
            { name: "chemistry", grade: 7 },
            { name: "history", grade: 9 },
        ],
    },
    {
        id: 12,
        firstName: "nika",
        lastName: "urushadze",
        age: 12,
        classLevel: 5,
        subjects: [
            { name: "english", grade: 10 },
            { name: "art", grade: 9 },
            {
                name: "mathematics",
                grade: 8,
            },
            { name: "german", grade: 9 },
            {
                name: "geography",
                grade: 9,
            },
            { name: "physics", grade: 9 },
            { name: "biology", grade: 9 },
            { name: "chemistry", grade: 9 },
            { name: "history", grade: 9 },
        ],
    },
];
var schoolClassses = [
    {
        classNumber: 3,
        studentsList: [
            {
                id: 1,
                firstName: "nino",
                lastName: "vekua",
                age: 11,
                classLevel: 3,
                subjects: [
                    { name: "english", grade: 6 },
                    { name: "art", grade: 5 },
                ],
            },
            {
                id: 2,
                firstName: "mari",
                lastName: "abashidze",
                age: 11,
                classLevel: 3,
                subjects: [
                    { name: "english", grade: 7 },
                    { name: "art", grade: 8 },
                ],
            },
            {
                id: 3,
                firstName: "teo",
                lastName: "abesadze",
                age: 11,
                classLevel: 3,
                subjects: [
                    { name: "english", grade: 4 },
                    { name: "art", grade: 8 },
                ],
            },
            {
                id: 4,
                firstName: "ana",
                lastName: "aspanadze",
                age: 11,
                classLevel: 3,
                subjects: [
                    { name: "english", grade: 10 },
                    { name: "art", grade: 8 },
                ],
            },
        ],
        studentsCount: 4,
    },
    {
        classNumber: 4,
        studentsList: [
            {
                id: 5,
                firstName: "nika",
                lastName: "gordeladze",
                age: 12,
                classLevel: 4,
                subjects: [
                    { name: "english", grade: 9 },
                    { name: "art", grade: 3 },
                    {
                        name: "mathematics",
                        grade: 8,
                    },
                    { name: "german", grade: 6 },
                    {
                        name: "geography",
                        grade: 7,
                    },
                ],
            },
            {
                id: 6,
                firstName: "gio",
                lastName: "nozadze",
                age: 12,
                classLevel: 4,
                subjects: [
                    { name: "english", grade: 7 },
                    { name: "art", grade: 5 },
                    {
                        name: "mathematics",
                        grade: 4,
                    },
                    { name: "german", grade: 8 },
                    {
                        name: "geography",
                        grade: 9,
                    },
                ],
            },
            {
                id: 7,
                firstName: "levani",
                lastName: "gabrichidze",
                age: 12,
                classLevel: 4,
                subjects: [
                    { name: "english", grade: 9 },
                    { name: "art", grade: 10 },
                    {
                        name: "mathematics",
                        grade: 10,
                    },
                    { name: "german", grade: 7 },
                    {
                        name: "geography",
                        grade: 8,
                    },
                ],
            },
            {
                id: 8,
                firstName: "lasha",
                lastName: "gabrichidze",
                age: 12,
                classLevel: 4,
                subjects: [
                    { name: "english", grade: 10 },
                    { name: "art", grade: 9 },
                    {
                        name: "mathematics",
                        grade: 8,
                    },
                    { name: "german", grade: 8 },
                    {
                        name: "geography",
                        grade: 8,
                    },
                ],
            },
        ],
        studentsCount: 4,
    },
    {
        classNumber: 5,
        studentsList: [
            {
                id: 9,
                firstName: "erekle",
                lastName: "shelia",
                age: 12,
                classLevel: 5,
                subjects: [
                    { name: "english", grade: 3 },
                    { name: "art", grade: 2 },
                    {
                        name: "mathematics",
                        grade: 4,
                    },
                    { name: "german", grade: 4 },
                    {
                        name: "geography",
                        grade: 5,
                    },
                    { name: "physics", grade: 3 },
                    { name: "biology", grade: 8 },
                    { name: "chemistry", grade: 7 },
                    { name: "history", grade: 5 },
                ],
            },
            {
                id: 10,
                firstName: "toko",
                lastName: "bekauri",
                age: 12,
                classLevel: 5,
                subjects: [
                    { name: "english", grade: 3 },
                    { name: "art", grade: 8 },
                    {
                        name: "mathematics",
                        grade: 9,
                    },
                    { name: "german", grade: 9 },
                    {
                        name: "geography",
                        grade: 9,
                    },
                    { name: "physics", grade: 9 },
                    { name: "biology", grade: 8 },
                    { name: "chemistry", grade: 7 },
                    { name: "history", grade: 7 },
                ],
            },
            {
                id: 11,
                firstName: "nuca",
                lastName: "komaxidze",
                age: 12,
                classLevel: 5,
                subjects: [
                    { name: "english", grade: 7 },
                    { name: "art", grade: 6 },
                    {
                        name: "mathematics",
                        grade: 8,
                    },
                    { name: "german", grade: 6 },
                    {
                        name: "geography",
                        grade: 8,
                    },
                    { name: "physics", grade: 4 },
                    { name: "biology", grade: 6 },
                    { name: "chemistry", grade: 7 },
                    { name: "history", grade: 9 },
                ],
            },
            {
                id: 12,
                firstName: "nika",
                lastName: "urushadze",
                age: 12,
                classLevel: 5,
                subjects: [
                    { name: "english", grade: 10 },
                    { name: "art", grade: 9 },
                    {
                        name: "mathematics",
                        grade: 8,
                    },
                    { name: "german", grade: 9 },
                    {
                        name: "geography",
                        grade: 9,
                    },
                    { name: "physics", grade: 9 },
                    { name: "biology", grade: 9 },
                    { name: "chemistry", grade: 9 },
                    { name: "history", grade: 9 },
                ],
            },
        ],
        studentsCount: 4,
    },
];
// დავწეროთ ფუნქცია, რომელსაც უნდა გადავცეთ მოსწავლე,
// თუ მოსწავლე სწავლობს შესაბამის საგანს, ჩაემატოს მასწავლებლის
//  კლასის სიაში, ანუ თუ მოსწავლე სწავლობს ბუნებას და მასწავლებელი
//   ასწავლის ბუნებას, კლასების სიაში უნდა მოვძებნოთ ის კლასი,რომელშიც
//   ჩვენი მოსწავლეა და დავამატოთ მაგ კლასის სიაში. ki
function func1(student, teachers) {
    if (student.subjects[0].name === teachers.subjects[0].name) {
        teachers.classesTeaching[0].studentsList.push(student.firstName);
    }
    console.log(teachers.classesTeaching[0].studentsList);
}
func1(students[0], teachers[4]);
// დავწეროთ ფუნქცია, რომელიც პარამეტრად მიიღებს მოსწავლეს და საგანს და ქულას,
//  მოსწავლეს ამ გადაცემულ საგანში ჩაეწერება შესაბამისად გადაცემული ქულა.
function func2(student, subject, grade) {
    if (student.subjects[0].name === subject.name) {
        student.subjects[0].grade = grade;
        console.log(student.subjects[0].grade);
    }
}
func2(students[0], subjects[5], 10);
// დავწეროთ ფუნქცია, რომელიც დაამატებს მასწავლებელს, მასწავლებელი დაემატება
// მასწავლებელთა სიაში, თუ ასწავლის ისეთ საგანს, რომელიც
// არ გვაქ საგნების სიაში, მოცემული საგანი დაემატება საგნების სიას.
function func3(teacher, teachers, subjects) {
    teachers.push(teacher);
    var isSubjectTeached = subjects.every(function (el) { return el.name === teacher.subjects[0].name; });
    if (!isSubjectTeached) {
        subjects.push(teacher.subjects[0]);
    }
}
func3({
    id: 11,
    firstName: "Elena",
    lastName: "Grimsy",
    age: 21,
    email: "Elena@gmail.com",
    subjects: [{ name: "ethics", difficultyCoefficient: 8, difficultyLevel: "empty", learnedFromClass: 4 }],
    classesTeaching: [
        {
            classesQuiantity: 2,
            studentsList: [
                "nika gordeladze",
                "gio nozadze",
                "levani gabrichidze",
                "lasha gabrichidze",
                "erekle shelia",
                "toko bekauri",
                "nuca komaxidze",
                "nika urushadze",
            ],
            studentsCount: 8,
        },
    ],
}, teachers, subjects);
// დავწეროთ ფუნქცია, რომელსაც გადაეცემა მოსწავლე და დააბრუნებს აბარებს
// თუ არა მოსწავლე ყველა საგანს, თუ საგანში ქულა 6-ზე მეტი ყავს
// დაწეროს რომ აბარებს, წინააღმდეგ შემტხვევაში რომ იჭრება
function func4(student) {
    var studentPassesAllExams = student.subjects.every(function (el) { return el.grade > 6; });
    studentPassesAllExams ? console.log("student passes all exams") : console.log("student did not passed all exams");
}
func4(students[11]);
// დავწეროთ ფუნქცია, რომელიც მიანიჭებს საგნებს  სირთულის კოეფიციენტს,
// კოეფიციენტი უნდა მიენიჭოს რენდომად 1-დან 10-ის ჩათვლით, ასევე ამავე
// ფუნქციამ უნდა მიანიჭოს საგანს სირთულის დონეები, დონე იქნება 3 : Easy, Average,Hard ,
// მინიჭება მოხდება იმისდა მიხედვით თუ  რამდენი არის კოეფიციენტი, 1-დან 4-მდე იქნება Easy,
// 4-დან 8-მდე Average და 8-დან 10-ის ჩათვლით Hard.
function func5(subject) {
    for (var i = 0; i < subject.length; i++) {
        var elCoefficient = void 0;
        elCoefficient = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        subject[i].difficultyCoefficient = elCoefficient;
        // subject[i].difficultyLevel = "dddddddddddddddddd";
        var elDiffLevelsArr = ["Easy", "Average", "Hard"];
        if (elCoefficient <= 4) {
            subject[i].difficultyLevel = elDiffLevelsArr[0];
        }
        else if (elCoefficient > 4 && elCoefficient <= 8) {
            subject[i].difficultyLevel = elDiffLevelsArr[1];
        }
        else if (elCoefficient > 8 && elCoefficient <= 10) {
            subject[i].difficultyLevel = elDiffLevelsArr[2];
        }
        console.log(subject[i]);
    }
}
func5(subjects);
// task1 end
console.log("-----------------------------------");
console.log("task 2-1");
// task2 start
// 1. generic ფუნქცია, რომელსაც გადაეცემა მოსწავლე ან მასწავლებელი,
// გაარკვევს და დალოგავს ვინ გადაეცემა და თუ მასწავლებელია მაშინ
//  გამოიძახოს კიდევ ერთი ფუნქცია, რომელიც წაიკითხავს და დალოგავს
// ყველა მის მოსწავლეს.
function logTeachersStudents(params) {
    if ("classesTeaching" in params) {
        return params.classesTeaching[0].studentsList;
    }
}
function person(arg) {
    if ("classesTeaching" in arg) {
        console.log(arg);
        console.log(logTeachersStudents(arg));
    }
    else {
        console.log("it is a student");
    }
}
person(teachers[0]);
// roca person is body shi gadavcemdi logteachersstudents(arg) mashin miwitlebda da magitom magla any gadaveci
// task 2-2
// 2. generic ფუნქცია, რომელსაც გადაეცემა მოსწავლე ან საგანი,
// თუ გადაეცემა საგანი დალოგავს ყველა იმ მოსწავლეს, რომელიც
// ამ საგანს გადის, ხოლო თუ მოსწავლეა დალოგავს ყველა იმ საგნის
//  სირთულის კოეფიციენტს, რომელსაც სწავლობს
console.log("task 2-2 ");
function studentOrSubject(param) {
    if ("learnedFromClass" in param) {
        students.forEach(function (studentEl) {
            studentEl.subjects.forEach(function (studentSubjEl) {
                if (studentSubjEl.name === param.name) {
                    console.log(studentEl.firstName + " " + studentEl.lastName + " learning this subject");
                }
            });
        });
        console.log("param is subject");
    }
    else if ("subjects" in param) {
        param.subjects.forEach(function (studSubjEl) {
            subjects.forEach(function (subjEl) {
                if (studSubjEl.name === subjEl.name) {
                    console.log("student learning subj " + subjEl.name + " has difficulty coefficient of " + subjEl.difficultyCoefficient);
                }
            });
        });
        console.log("param is student");
    }
}
studentOrSubject(students[0]);
