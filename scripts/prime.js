var movie = [
    "https://i.ytimg.com/vi/jhhmQWEEGUU/maxresdefault.jpg",
    "https://img.android.com.pl/images/user-images/2021/01/amazon-prime-video-1.jpg",
    "https://c4.wallpaperflare.com/wallpaper/791/160/853/superheroes-squad-boys-amazon-prime-video-the-boys-hd-wallpaper-preview.jpg",
    "https://i.ytimg.com/vi/nnXpbTFrqXA/maxresdefault.jpg",
    "https://bagmatitimes.com/wp-content/uploads/2021/08/Shershaah_H.jpg",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/best-movies-prime-video-2022.jpg?q=50&fit=contain&w=767&h=384&dpr=1.5"
      
 ];
    
 
 // localStorage.setItem("mvlist",JSON.stringify(arr));
 // var movie = JSON.parse(localStorage.getItem("mvlist"));
 
 var div=document.querySelector("#slideshow");
 var img= document.createElement("img");
 img.setAttribute("id","font");
 
 img.src=movie[0];
 div.append(img);
 
 
 let i=1;
 setInterval(function(){
     if(i== movie.length){
         i=0;
     }
 
 
     img.src=movie[i];
     div.append(img);
     i++;
 
 },3000);
 
 let data=[
 
   {
        image:"https://cdn.bollywoodmdb.com/movies/largethumb/250x267/2020/bhuj-the-pride-of-india/bhuj-the-pride-of-india-poster-8.jpg",
         Name:"Bhuj-the-pride of India",
         date:2021,
         rating:6.2,
     
     },
 {
     image:"https://stat1.bollywoodhungama.in/wp-content/uploads/2020/03/Baaghi-3-9-553x800.jpg",
     Name:"Bagghi",
     date: 2020,
     rating:5.5,
 },
 
 
 {
     image:"https://cdn.bollywoodmdb.com/movies/largethumb/2019/nitesh-tiwari-s-next/poster.jpg",
     Name:"Chhichhore",
     date:2017,
     rating:7.1,
 },
 {
     image:"https://stat2.bollywoodhungama.in/wp-content/uploads/2020/08/Dil-Bechara-1.jpg",
     Name:'Dil-Bechara',
     date:2018,
     rating: 7.8,
 },
 
 {
     image:"https://wallpapercave.com/wp/wp7285321.jpg",
     Name:"Mirzapur",
     date:2018,
     rating:8.8,
 },
 
 
 {
     image:"https://cdn.99images.com/photos/movies-tv/kgf-chapter-2/kgf-chapter-2-movie-latest-hd-photos-posters-wallpapers-mv9x.jpg",
     Name:"KGF- 2",
     date:2019,
     rating:4.1,
 },
 {
     image:"https://m.media-amazon.com/images/M/MV5BODg1MTYyZjYtMzJhZi00ZjI3LWI3MTItZTFhZDNhZmYwMjYwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
     Name:"Delhi Crime",
     date:2020,
     rating:8.0,
     
 },
 {
     image:"https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
     Name:"Sharshaah",
     date:2021,
     rating:9.1,
    
 },
 {
     image:"https://i.pinimg.com/750x/7d/9f/ee/7d9fee4435121aff2a3679f5d8574b2d.jpg",
     Name:"Puspa",
     date:2022,
     rating:9.5,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/The_Joker_Red_Black_Artwork-NGPS1408_Copy_c325b199-f838-47f9-8a51-49a2bf0546ef_480x480.jpg?v=1578633338",
     Name:"The Joker",
     date:2015,
     rating:7,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/Shawshank_Redemption_-_Hope_Is_Good_Thing_Copy_480x480.jpg?v=1578633584",
     Name:"HOPE",
     date:2001,
     rating:6.2,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/dark_knight_480x480.jpg?v=1578633378",
     Name:"The Dark Knight",
     date:2013,
     rating:7.9,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/pg1012_480x480.jpg?v=1578633270",
     Name:"Into the Wild",
     date:2018,
     rating:8.8,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/pg1678_480x480.jpg?v=1578633291",
     Name:"Rocky Balboa",
     date:1988,
     rating:5.9,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0151/0741/products/l_2386116_2d0f3560_480x480.jpg?v=1578633274",
     Name:"One Direction",
     date:2012,
     rating:9.8,
 },
 {
     image:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1619649706/user-1101439/profile/fcgkcuixm5e1ghfubzqc.jpg",
     Name:"Spiderman No way Home",
     date:2022,
     rating:9.7,
 },
 {
     image:"https://cdn.europosters.eu/image/1300/posters/harry-potter-deathly-hallows-i104624.jpg",
     Name:"Harry Potter",
     date:2015,
     rating:8.4,
 },
 {
     image:"https://m.media-amazon.com/images/I/61RhWaYBp7L._AC_SY679_.jpg",
     Name:"Avengers-End Game",
     date:2020,
     rating:9.3,
 },
 {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLZSYK3T0CEoFmhdEDXnePn7mAZxr_U6O6Q&usqp=CAU",
     Name:"Batman",
     date:2014,
     rating:7.7,
 },
 {
     image:"https://static2.showtimes.com/poster/660x980/baahubali-2-the-conclusion-hindi-111259.jpg",
     Name:"Bahubali 2",
     date:2017,
     rating:9.4,
 },
 {
     image:"https://www.teahub.io/photos/full/243-2430532_null-singham-hindi-movie-poster.jpg",
     Name:"Singham",
     date:2012,
     rating:8.91,
 },
 {
     image:"https://cdn.shopify.com/s/files/1/0747/3829/products/mNS0677_1024x1024.jpg?v=1571444655",
     Name:"Barfi",
     date:2019,
     rating:5.1,
 },
 {
     image:"https://i.pinimg.com/736x/76/53/1c/76531c391ee223a683bc71b1d895399f.jpg",
     Name:"WAR",
     date:2016,
     rating:6.4,
 },
 {
     image:"https://images-na.ssl-images-amazon.com/images/I/A1JmB99YwOL._RI_.jpg",
     Name:"Race 2",
     date:2010,
     rating:8.2,
 },
 {
     image:"https://m.media-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_.jpg",
     Name:"Pink",
     date:2016,
     rating:7.7,
 },
 ];
 
 function hpriceSort(){
     var selected=document.querySelector("#priceSort").value;
     if(selected =="high"){
         data.sort(function(a,b){
             return Number(b.rating)- Number(a.rating);
         });
     }
     if(selected =="low"){
         data.sort(function(a,b){
             return Number(a.rating)- Number(b.rating);
         });
     }
     displayList(data);
     
 }
 
 displayList(data);
 
 
 
 
 function displayList(data){
     document.querySelector("#movies").innerHTML="";
 
 data.map(function(elem){
     var Movie_div = document.createElement("div");
     Movie_div.setAttribute("id","flag");
     
     var img1=document.createElement("img");
     img1.src=elem.image;
     img1.setAttribute("id","hip");
 
     var titel = document.createElement("h4");
     titel.textContent=elem.Name;
     titel.setAttribute("id","fun");
   var div2 = document.createElement("div");
   div2.setAttribute("id","fix");
     var date = document.createElement("h4");
     date.textContent=elem.date;
     var rating = document.createElement("p");
     rating.textContent=elem.rating;
     rating.setAttribute("id","fgi");
     if(elem.rating>=8.5){
         rating.style.color="green";
     }
     else if(elem.rating>=6 && elem.rating<8.5){
         rating.style.color="yellow";
     }
     else{
         rating.style.color="red";
     }
 
     div2.append(date,rating);
 
     Movie_div.append(img1,titel,div2);
     document.querySelector("#movies").append(Movie_div);
    });
 }
 
 var bag=localStorage.getItem("name");
 document.querySelector("#name").innerHTML=`Hi,${bag}`;
 
 document.getElementById("name").addEventListener("click",function(){
     window.location.href="index.html";
 });

 document.getElementById("sub-btn").addEventListener("click",function(){
     window.location.href="trending.html";
 })