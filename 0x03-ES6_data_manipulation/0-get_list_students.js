export default function getListStudents(){


    class Obj {
        constructor(id, firstName, location){
            this.id = id;
            this.firstName = firstName;
            this.location = location;
        }
    }

    const obj_1 = new Obj(1, 'Guillaume', 'San Francisco')
    const obj_2 = new Obj(2, 'James', 'Columbia')
    const obj_3 = new Obj(5, 'Serena', 'San Francisco')
    
    return [obj_1, obj_2, obj_3]
}