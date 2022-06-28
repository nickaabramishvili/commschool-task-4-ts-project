import { subject } from "./subject";
export interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    subjects: subject[];
    classesTeaching: { classesQuiantity: number; studentsList: string[]; studentsCount: number }[];
}
