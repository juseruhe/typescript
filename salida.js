var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello World");
// Tipos 
var myString = "Hola Mundo";
myString = 22 + "";
var myNumber = 22;
var myBool = true;
// Aceptar cualquier tipo de dato
var myVar = "hello";
myVar = false;
// Arreglos
var stringArray = ["Item1", "Item2", ""];
var numberArray = [1, 2, 3];
var booleanArray = [true, false, true];
var anyArray = [1, 2, true, "hello", [], {}];
//tuple
var strNumTpl;
strNumTpl = ["hola", 5];
strNumTpl = ["world", 280];
// void undefined null
//let myVoid:void = undefined
//let myNull:null = null
//let myUnDefined:undefined = undefined
//document.write(typeof(myVoid))
function getSuma(num1, num2) {
    return num1 + num2;
}
var mySuma = function (num1, num2) {
    if (typeof (num1 === 'string')) {
        num1 = parseInt(num1);
    }
    if (typeof (num2 === 'string')) {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showToDo(todo) {
    console.log(todo.title + "." + todo.texto);
}
var myToDo = { title: 'carro', texto: 'Carro XD XD' };
showToDo(myToDo);
// Clases
var User = /** @class */ (function () {
    function User(name, email, edad) {
        this.name = name;
        this.email = email;
        this.edad = edad;
    }
    User.prototype.registrar = function () {
        console.log(this.name + " esta registrado");
    };
    User.prototype.mostrarEdad = function () {
        return this.edad;
    };
    User.prototype.edadAnios = function () {
        return this.edad + " Años";
    };
    User.prototype.pagado = function () {
        return console.log(this.name + " Ha pagado su factura");
    };
    return User;
}());
var Juan = new User('Juan', 'ju@gmail.com', 23);
console.log(Juan.edadAnios());
var Miembros = /** @class */ (function (_super) {
    __extends(Miembros, _super);
    function Miembros(id, name, email, edad) {
        var _this = _super.call(this, name, email, edad) || this;
        _this.id = id;
        return _this;
    }
    Miembros.prototype.pagado = function () {
        _super.prototype.pagado.call(this);
    };
    return Miembros;
}(User));
var Jay = new Miembros(105, "Jay", "ja@email.com", 48);
Jay.pagado();
