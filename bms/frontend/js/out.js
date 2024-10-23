document.getElementById('info').addEventListener('submit',async function (e){
    e.preventDefault();

    email=document.getElementById('email').value
    pass=document.getElementById('pass').value

    console.log(email,pass);

    const res=await fetch('http://localhost:4000/api/login',{
        method: "post",
        headers:{"Content-Text":"application/json"},
        body:JSON.stringify({email,pass})
    })
        console.log(res);

    const data=await res.json()
    if(res.status==200){
        localStorage.setItem('token',data.token)
        window.location.href="../index.html"
    }
    else{
        alert(data.error)
    }
})