const genRandom = () =>{
    let number = "";
    for(let i=0;i<5;i+=1){
        let num =Math.round(Math.random()*10);
        number+=num;
    }
    return number
}
module.exports = genRandom;
