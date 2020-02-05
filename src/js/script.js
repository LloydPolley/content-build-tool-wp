function dog(){
    const divq = document.createElement('div');
    divq.innerHTML = 'dog';
    return divq;
}

const f = () =>{
    console.log('f')
}

console.log('dog')

export default dog;