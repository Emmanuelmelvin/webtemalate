let txt;
let con;
let password1 = document.querySelector(".pinput1").value; 
let password2 = document.querySelector(".pinput2").value;
let password3 = document.querySelector(".password2").value; 
let name1 = document.querySelector(".name1").value;
let name2 = document.querySelector(".name2").value;  
 function submit() {
    let x = document.forms["forms"];
    for (let i = 0; i < x.length ;i++) {
        if (x.elements[i].value == ""){
               txt = "Please fill up required spaces";
        } else {
                if(password1 == password2){
                    txt = "";
                    if(name2 === " "){
                        txt = "Invalid Username"
                    }
                    else{
                        txt = "";
                        show()
                    }
                }else
                { txt = "Password does not match"
            }
      }
      document.getElementById("checker").innerHTML = txt;
}
 }
function show() {
    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block"
}
function check() {     
    let x = document.forms["forms1"];
     for (let i = 0; i < x.length ;i++) {
        if (x.elements[i].value == ""){
               txt = "Please fill up required spaces";
        } else {
                 if (password1 == password3 ) {
                if (name1 === name2 ) {
                    con ="login approved!"
                    document.getElementById("checker3").innerHTML = con;
                   confirmed();
                }
                else {
                    txt = "Username Error!";
                }
            } 
        
            else {
               txt = "login error!";
            }
        }
        document.getElementById("checker2").innerHTML = txt ;
    }}
        function confirmed(){
            document.getElementById("checker2").innerHTML = "";
            document.getElementById("part2").style.opacity = "0.5"
            document.getElementById("waiter").style.display = "block"
            setTimeout(function () {
                document.getElementById("after").style.display = "block";
                document.getElementById("part2").style.display = "none"
                document.getElementById("waiter").style.display = "none"
            } , 3000)
        }