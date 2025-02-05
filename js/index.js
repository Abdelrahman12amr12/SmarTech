

function save()
{
    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var password=document.getElementById("password")
    var phone=document.getElementById("phone")

    if(name.value.length<5)
    {
        name.style.border="2px solid red"
        return;
    }else{
        name.style.border="2px solid black"
    }

    if(email.value.indexOf("@")==-1)
    {
        email.style.border="2px solid red"
        return ;
    }else{
        email.style.border="2px solid black"
    }

    if(password.value.length<7)
        {
            password.style.border="2px solid red"
            return;
        }else{
            password.style.border="2px solid black"
    }

    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("phone",phone.value)


    window.open("../index.html","_self")
}

function check()
{
    var email=document.getElementById("email")
    var password=document.getElementById("password")
    var emaillocal=localStorage.getItem("email")
    var passwordlocal=localStorage.getItem("password")
    if(email.value==emaillocal&&password.value==passwordlocal)
    {
        window.open("./html/home.html","_self")
    }else{
        alert("you enter wrong email and password")
    }
}

