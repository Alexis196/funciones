function verdad(){
    return true;
}
console.log(verdad());



const miPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if (true){
            resolve();
        }else{
            reject()
        }
    }, 5000)
})

miPromesa
    .then(() => console.log('Soy una promesa'))
    .catch(() => console.log('error'))
    .finally(() => console.log('Final de la promesa'))
;


function* indices(){
    let ind = 0
    while(true){
        ind += 2
        yield ind;
        if (ind >= 10){
            return ind
        }
    }
}

const gen = indices();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
