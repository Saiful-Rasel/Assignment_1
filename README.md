# Blog 7 :Provide an example of using union and intersection types in TypeScript

# union type : 
this a type where we declare this or this .that means if i am not knowing what i am give my function parameter this input maybe string or number . In that case we use union type and its symbol is |

as a example 
const addressCheckStringOrBoolean = (address : string | number) : string | number {
    if(typeof address === 'number' ){
        return address 
    }else if(typeof address ==='string'){
        return address.toUpeercase()
    }
}

# intersaction type 
this means you fullfill obiously two conditon must 
as a example 

const add = (num1:number,num2:number) : number => {
    if(typeof num1 === 'number' && typeoff num2 === 'number'){
        return num1 + num2
    }
}

# Blog 2 
# Question What is the use of the keyof keyword in TypeScript? Provide an example.
Ans:keyOf means one of the army.if the person is right he give permission to allow .
keyOf is mainly checck property type .it works as a guard ;

as a example 

const add = (num1:number,num2:number) : number => {
    if(typeof num1 === 'number' && typeoff num2 === 'number'){
        return num1 + num2
    }
}

here keyof check those parameter must be Number