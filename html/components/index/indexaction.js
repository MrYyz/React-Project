import $ from '../../libs/jquery.min.js'
import * as Indexcomponents from './indexcomponents'
export function indexObj(){
    
    return {
        Indexcomponents,
        type:[]
    };
} 
export function thechange(e){
    if(e.target.tagName.toLowerCase()==='li'){
    Array.prototype.forEach.call(e.target.parentNode.children,function(item){
        item.className='';
    })
    if(e.target.tagName.toLowerCase()==='li'){
        e.target.className='red';
    }
}
    return {       
         type: []
}
}

export function banner(theWidth,theul){
                clearInterval(set);
               
                
                let i=0;
               
                var set=setInterval(function(){
                   
                    i++;
                        if(i>3){
                            i=0;
                        }
                      
                    $(theul).animate({
                        left : -theWidth*i
                    })
                    
                },3000)

                // theul.addEventListener('touchstart',function(event){
                //     console.log(event.screenX);
                // })
            $(theul).on('touchstart',function(e){
                var event=e.originalEvent.targetTouches[0];
                var thex=event.clientX;
                var k=i;
                
                clearInterval(set);
              
                $(this).on('touchmove',function(e){
                var event=e.originalEvent.targetTouches[0];
                   
                    if(event.clientX-thex<-100){
                        i=k+1;
                        if(i>3){
                            i=0;
                        }
                        $(theul).stop().animate({
                            left : -theWidth*i
                        })
                        return false;
                    }else if(event.clientX-thex>100){
                        i=k-1;
                        if(i<0){
                            i=3;
                        }
                        $(theul).stop().animate({
                            left : -theWidth*i
                        })
                        return false;
                    }
                })
                
            })
            $(theul).on('touchend',function(){
                set=setInterval(function(){
                
                    i++;
                        if(i>3){
                            i=0;
                        }
                        
                    $(theul).animate({
                        left : -theWidth*i
                    })
                    
                },3000)
            })
    return {
        type: []
        
    }
}

export function recommed(_url){
    console.log(_url);
    return {
        type:['beforeRequset','Requested','requestError'],
        url: _url
    }
}