document.getElementsByClassName('gnb-menu')[0].addEventListener('mouseover',function(){
     document.getElementsByClassName('gnb-menu-box')[0].classList.add('show')

})

 document.getElementsByClassName('page-top')[0].addEventListener('mouseover',function(){
     document.getElementsByClassName('gnb-menu-box')[0].classList.remove('show')
     
 })
 document.getElementsByClassName('content')[0].addEventListener('mouseover',function(){
   document.getElementsByClassName('gnb-menu-box')[0].classList.remove('show')
   
})
document.getElementsByClassName('gnb-menu-border')[0].addEventListener('mouseover',function(){
   document.getElementsByClassName('gnb-menu-box')[0].classList.remove('show')
   
})
 document.getElementsByClassName('gnb-m')[0].addEventListener('click',function(){
    document.getElementsByClassName('gnb-menu-mbox')[0].classList.toggle('mshow')
    document.getElementsByClassName('gnb-menu-mboxf')[0].classList.add('mmshow')
 })

 document.getElementsByClassName('close')[0].addEventListener('click',function(){
    document.getElementsByClassName('gnb-menu-mbox')[0].classList.remove('mshow')
    document.getElementsByClassName('gnb-menu-mboxf')[0].classList.remove('mmshow')
 })

 document.getElementsByClassName('wrap')[0].addEventListener('wheel',function(){
    document.getElementsByClassName('gnb-menu-mbox')[0].classList.remove('mshow')
    document.getElementsByClassName('gnb-menu-mboxf')[0].classList.remove('mmshow')
    
})

var 지금사진 = 1;

$('.next').on('click',function(){
   if(지금사진 == 1){
      $('.slide').css('transform','translateX(-330px)');
      지금사진+=1
   }else if(지금사진 == 2){
      $('.slide').css('transform','translateX(-660px)');
   }
})

var 현재사진 = 1;
$('.re').on('click',function(){
   if(현재사진 == 1){
      $('.slide').css('transform','translateX(-330px)');
      현재사진+=1
   }else if(현재사진 ==2){
      $('.slide').css('transform','translateX(0px)');
      
   }
   
})

function topFunction() {
   $('html,body').animate({ scrollTop: 0 }, 500);
}

