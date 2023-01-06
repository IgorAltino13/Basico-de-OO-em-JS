

//criando um template
class Person{
    constructor(name){
        this.name = name;
    }

}

let input = document.querySelector("input");

//criando o objeto
let p1 = new Person;
input.addEventListener('keyup',(tecla)=> {
    
    if(tecla.code === 'Enter'){
        p1.name = input.value;
        let li = document.createElement('li');
        li.innerText = p1.name;
        document.querySelector('ul').append(li);
        input.value = '';
        console.log(p1.name);
    }
});




//criando uma class pessoa

class Pessoa{

    _age = 0;
    steps=0;
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeSteps(){
        this.steps++;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    get age(){
        return this._age;
    }

    set age(x){
        this._age = x;
    }
    /*
    setAge(newAge){
        if(typeof newAge != 'number'){
            console.log("Digite uma idade valida");
        }
        else{
            this.age = newAge;
        }
    }
    */
}


let p3 = new Pessoa("Igor", 'Altino');
console.log(p3.fullName);
p3.takeSteps();
p3.age = 20;

console.log(p3.steps,p3.age);



