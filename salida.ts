console.log("Hello World")


// Tipos 

var myString: string= "Hola Mundo"
myString = 22+""



var myNumber:number= 22

var myBool: boolean = true

// Aceptar cualquier tipo de dato
var myVar:any = "hello"
myVar = false

// Arreglos

var stringArray:string[] = ["Item1","Item2",""]
var numberArray:number[] = [1,2,3]
var booleanArray:boolean[]= [true,false,true]
var anyArray:any[] = [1,2,true,"hello",[],{}]


//tuple

var strNumTpl:[string,number]
strNumTpl = ["hola",5]
strNumTpl = ["world",280]

// void undefined null

//let myVoid:void = undefined
//let myNull:null = null
//let myUnDefined:undefined = undefined


//document.write(typeof(myVoid))

function getSuma(num1:number,num2:number):number{

    return num1 + num2
}

let mySuma = function(num1:number|string,num2:number|string):number {

if(typeof(num1 === 'string')){

    num1 = parseInt(num1)

}
if(typeof(num2 === 'string')){

    num2 = parseInt(num2)

}

return num1 + num2

}
/*
function getName(firstName:string,lastName?:string):string{
    if(lastName == undefined){
        return firstName
    }
    else {
    return firstName+" "+lastName;
    }
}

document.write(getName("Juan"))*/

/* Funciones sin retorno
function myVoidFunction():void{


}*/

interface IToDo{
    title: string,
    texto:string
}

function showToDo(todo: IToDo){
    console.log(`${todo.title}.${todo.texto}`)
}

let myToDo: IToDo = {title: 'carro', texto: 'Carro XD XD'}

showToDo(myToDo)

// Clases

class User {

    name: string
   public email:string
    protected edad:number

    constructor(name:string,email:string,edad:number) {

        this.name= name
        this.email= email
        this.edad = edad
        
        
    }

    registrar(){
        console.log(`${this.name} esta registrado`)
    }

    mostrarEdad(){

        return this.edad
    }

    edadAnios(){
        return this.edad+" Años"
    }

    pagado(){
        return console.log(`${this.name} Ha pagado su factura`)
    }
}

var Juan = new User('Juan','ju@gmail.com',23)

console.log(Juan.edadAnios())



class Miembros extends User{

    id: number;


constructor(id,name,email,edad){

super(name,email,edad);

this.id = id

}

pagado(){
    super.pagado()
}


}






var Jay = new Miembros(105,"Jay","ja@email.com",48)

Jay.pagado()