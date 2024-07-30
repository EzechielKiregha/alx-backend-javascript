/**
 * Function that returns an array of ids keys
 * using the map method
 */

export default function getListStudentsIds(arr){
    let newArr = []
    if(arr instanceof Array) {
        newArr = arr.map((item) => item.id);
    }

    return newArr;
}