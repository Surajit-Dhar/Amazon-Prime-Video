
    //var url= "https://api.themoviedb.org/3/movie/550?api_key=3d61d960c44713dffc726a77736ff640";

    async function getMovie(){
        
        try{
            let movie = document.querySelector(".search-box").value;
            let response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d61d960c44713dffc726a77736ff640&query=${movie}&total_results=50`);
           // https://api.themoviedb.org/3/trending/all/day?api_key=3d61d960c44713dffc726a77736ff640&query=${movie}
            let data = await response.json();
            let ans = data.results;
            appendMovies(ans)
            console.log(data.results);
           
           

        }
        catch(err){
            console.log(err);
        }
        

    }
    getMovie();

    function appendMovies(movies){
        document.querySelector("#uyi").innerHTML="";
        if(movies === undefined){
            return false;

        }
        movies.forEach(function(elem){

     
         let p =document.createElement("p");
         p.innerHTML=elem.name;
      
        let Movies_div = document.createElement("div");
        Movies_div.setAttribute("id","res");
        let img = document.createElement("img");
        let url=elem.poster_path;
        img.src=`https://image.tmdb.org/t/p/w500${url}`;
        img.style.height="560px";
        img.style.width="410px";

        let h3 = document.createElement("h3");
        h3.textContent=elem.original_title;
        h3.style.color="white";

        let rd=document.createElement("h4");
        rd.textContent=elem.release_date;
        rd.style.color="white";

        let h4=document.createElement("h4");
        h4.textContent=`Rating: ${elem.vote_average}`;
        h4.style.color="white";
        


        Movies_div.append(img,h3,rd,h4);
        document.querySelector("#uyi").append(Movies_div);

            
        });
    }

    document.getElementById("btn").addEventListener("click",function(){
        window.location.href="prime.html";
    })
