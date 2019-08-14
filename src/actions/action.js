export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export function add(){
    return{
        type: PLUS,
        val: 1
    }
};

export function sub(){
    return{
        type: MINUS,
        val: 1
    }
};