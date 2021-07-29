
   var request =new XMLHttpRequest();
   request.open('GET','https://api.covid19api.com/summary',true);
   request.send();
   request.onload=function(){
       var data =JSON.parse(this.response);
           
          console.log(data);
       
       
   

   }