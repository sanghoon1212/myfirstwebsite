var Links = {
            setColor:function(color){
            var baba = document.querySelectorAll('a');
            var i = 0 ;
            while( i < baba.length){
                baba[i].style.color = color;
                i = i + 1;
                }
            }
        }
        /*function LinksSetColor(color){
            var baba = document.querySelectorAll('a');
            var i = 0 ;
            while( i < baba.length){
                baba[i].style.color = color;
                i = i + 1;
                }
        }*/
        var Body = {
            setColor:function(color){
                document.querySelector('body').style.color = color;
            },
            setBackGroundColor:function(color){
                document.querySelector('body').style.backgroundColor=color;
            }
        }
        
    function nightDayHandler(self){
        var body1 = document.querySelector('body')
       if(self.value === 'night'){
        Body.setBackGroundColor('black');
        Body.setColor('white');
        self.value = 'day';
       
        
        
        Links.setColor('powderblue');
        }
         else {
        Body.setBackGroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        
        Links.setColor('blue');
         }
        }