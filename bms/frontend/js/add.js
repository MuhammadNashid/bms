document.getElementById('form').addEventListener('submit',async function (e) {
    e.preventDefault();

    name=document.getElementById('name').value
    rating=document.getElementById('rating').value
    vote=document.getElementById('vote').value
    visual=document.getElementById('visual').value
    lang=document.getElementById('lang').value
    duration=document.getElementById('duration').value
    category=document.getElementById('category').value
    released=document.getElementById('released').value
    about=document.getElementById('about').value
    cardpic=pic1
    bgpic=pic2
    
    
    console.log(name,rating,vote,visual,lang,duration,category,released,about,cardpic,bgpic);

    const res=await fetch('http://localhost:4000/api/add',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({name,rating,vote,visual,lang,duration,category,released,about,cardpic,bgpic})
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

 let pic1
 let pic2
 async function picture1() {
    const file=document.getElementById("cardpic").files[0]
      pic1=await convertBase641(file)
    console.log(pic1);
    document.getElementById('card-div').src=pic1 
}

async function picture2() {
    const file=document.getElementById("bgpic").files[0]
      pic2=await convertBase642(file)
    console.log(pic2);
    document.getElementById('bg-div').src=pic2 
}


function convertBase641(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
function convertBase642(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}