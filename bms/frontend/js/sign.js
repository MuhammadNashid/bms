document.getElementById('form').addEventListener('submit',async function (e){
    e.preventDefault();

    name=document.getElementById('username').value
    email=document.getElementById('email').value
    pass=document.getElementById('pass').value
    cpass=document.getElementById('cpass').value

    console.log(name,email,pass,cpass);

    const res=await fetch('http://localhost:5000/api/adduser',{
        method: "post",
        headers:{"Content-Text":"application/json"},
        body:JSON.stringify({name,email,pass,cpass})
    })
    console.log(res);

    const data=await res.json()
    if(res.status==201){
        alert(data.msg)
        window.location.href="../index.html"
    }
    else{
        alert(data.error)
    }
})