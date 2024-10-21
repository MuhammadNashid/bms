async function getMovies() {
    const res = await fetch("http://localhost:3000/api/getMovies");
    const movie=await res.json();
    console.log(movie);
    str=``;
    movie.map((data)=>{
        str+=`
               <div>
                    <a href="pages/movie.html?id=${data._id}">
                        <div class="card-img">
                            <img src="${data.cardpic}"
                                width="225"
                                height="380" alt>
                        </div>
                        <div>
                            <div class="s1-text-1"
                                style="padding-top: 5px;"><h3>${data.name}</h3></div>
                            <div class="s1-text-2"
                                style="padding-top: 5px;"><span>${data.category}</span></div>
                        </div>
                    </a>
                </div>
            
        `
    });
    document.getElementById('sec-1-card').innerHTML=str; 
}
getMovies()