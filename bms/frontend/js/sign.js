document.getElementById('forms').addEventListener('submit',async function (e){
    e.preventDefault();

    username=document.getElementById('username').value
    email=document.getElementById('email').value
    pass=document.getElementById('pass').value
    cpass=document.getElementById('cpass').value

    console.log(username,email,pass,cpass);

    const res=await fetch('http://localhost:4000/api/adduser',{
        method: "post",
        headers:{"Content-Text":"application/json"},
        body:JSON.stringify({username,email,pass,cpass})
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