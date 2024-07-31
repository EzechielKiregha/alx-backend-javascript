///<reference path='Teacher.ts' />

namespace Subjects{
    export class Subject{
        teacher : Subjects.Teacher
        setTeacher(teacherObj : Teacher) {
           this.teacher = teacherObj;
        }
    }
}
