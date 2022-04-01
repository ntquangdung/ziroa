var menu=document.querySelector('.menu');
var nuttop=document.querySelector('nuttop');
var khoi=document.querySelector('.khoi');
console.log(khoi.offsetTop);
var codinh=document.querySelector('.codinh')
var vtcodinh=codinh.offsetTop;
var vthuycodinh=vtcodinh+400;

window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>200){
        // console.log('Vị trí lơn hơn 200px');
        menu.classList.add('doimenu');
        nuttop.classList.add('hientop');   
    }   
    else{
        menu.classList.remove('doimenu');
        nuttop.classList.remove('hientop');
    }
    if((window.pageYOffset>vtcodinh)&&(window.pageYOffset<vthuycodinh))
    {
        codinh.classList.add
    } 
})