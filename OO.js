

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


//Herança

class NewPerson{
    filhos = 2;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHi(){
        console.log(`${this.name} say hi`);
    }
}

class Student extends NewPerson{

    constructor(name,id,age){
        super(name,age);
        this.id = id;
    }
    //sobrescrevendo a funçao pai
    sayHi(){
        console.log(`${this.name} say hello`);
    }

    //se quisermos executar a funçao pai (sayHi)
    sayFather(){
        super.sayHi();
    }
}


let newP1 = new Student("Igor",2020084303,20);
newP1.filhos = 3;//mudando um atributo da classe pai.
newP1.sayHi();
console.log(`O aluno ${newP1.name} tem ${newP1.age} anos e tem o número de matricula #${newP1.id}.Além disso, tem ${newP1.filhos} filhos`);

//Trabalhando com factory


class Time{
    estadio = "Tem";
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function criaTime(name,age,estadio){
    let p = new Time(name,age);
    p.estadio = estadio;
    return p;
}

let t1 = criaTime('Atlético',114,'tem');
let t2 = criaTime('Cruzeiro',102,'não tem');

console.log(`O ${t1.name} tem ${t1.age} anos e ${t1.estadio} estadio`);
console.log(`O ${t2.name} tem ${t2.age} anos e ${t2.estadio} estadio`);
