import { Subject } from "./subject";
export interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    subjects: Subject[];
    classesTeaching: { classesQuiantity: number; studentsList: string[]; studentsCount: number }[];
}
