
 console.log('Loaded!');
 
 
 var img=document.getElementById('madi');
 var marginLeft=0;
 function moveRight(){
     marginLeft = marginLeft + 1;
     img.style.marginLeft=marginLeft+'px';
 }
 img.onclick= function () {
     var interval=setInterval(moveRight,50);
     
 };
 

 var submit=document.getElementById('submit_btn');
 submit.onclick= function () {
      var request=new  XMLHttpRequest();
     request.onreadystatechange= function(){
         if(request.readyState===XMLHttpRequest.DONE){
             if(request.status===200){
                console.log('user logged in');
                alert('Logged in Successsfully');
             }
             else if (request.status === 403){
                 alert('Username/password is incorrect');
             }
             else if (request.status === 500){
                 alert('Soemthing went wrong');
             }
         }
         
     } ;
     var username=document.getElementById('username').value;
     var password=document.getElementById('password').value;
     console.log(username);
     console.log(password);
     
     request.open('POST','http://crazymukh.imad.hasura-app.io/login',true);
     request.setRequestHeader('Content-Type','application/json');
     request.send(JSON.stringify({username:username,password:password}));
      
};