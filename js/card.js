let _span = document.querySelectorAll('.num>span')
let _number = document.querySelectorAll('.card-number>input')
_number.forEach((item,index) => {
    item.addEventListener('input',(e)=>{
        let _target = e.target.value;
        let a = _target.length;
        for(let i = 0;i<=3;i++){
        _span[i].innerHTML = _number[i].value;
        console.log(_span[2]);
       }    
           if(a>=4){
            item.nextElementSibling.focus()    
        }            
        _reset()
    })
});
document.getElementById('hold').addEventListener('input',(e)=>{
    document.getElementById('holder1').innerHTML = e.target.value;
    _reset()
})
document.getElementById('max').addEventListener('input',(e)=>{
    document.getElementById('exp').innerHTML = e.target .value;
    _reset()            
})
document.getElementById('max1').addEventListener('input',(e)=>{ 
    document.getElementById('exp1').innerHTML = e.target .value; 
    _reset()          
})
document.getElementById('cvvv').addEventListener('input',(e)=>{
    document.getElementsByClassName('card1')[0].style.transform =' rotateY(180deg)' 
    document.getElementsByClassName('card1')[0].style.zIndex ='-99' 
    document.getElementsByClassName('card2')[0].style.transform ='rotateY(180deg)' 
    document.getElementsByClassName('card2')[0].style.zIndex ='99'  
    console.log(e.target.value);  
    document.getElementById('cardcv').innerHTML = e.target.value;     

})


function _reset(){
    document.getElementsByClassName('card1')[0].style.transform =' rotateY(0)' 
    document.getElementsByClassName('card1')[0].style.zIndex ='+99' 
    document.getElementsByClassName('card2')[0].style.transform ='rotateY(0)' 
    document.getElementsByClassName('card2')[0].style.zIndex ='-99' 
}
