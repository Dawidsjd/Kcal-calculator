import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




let start = false;



function translate(){
let text = document.getElementById("input").value.trim();
    
    
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=pl-PL|en-GB`;
    console.log(apiUrl);

    fetch(apiUrl).then(res => res.json()).then(data => {
       // toText.value = data.responseData.translatedText;
        console.log(data.responseData.translatedText)
        fetch(`https://api.calorieninjas.com/v1/nutrition?query=${data.responseData.translatedText}`, {
        method: "GET",
        headers: {'X-Api-Key': 'l4+sIPyhjRdLmF5ZgWitqw==lYM6VU7kEq95v4jR'}
        })
        .then(response => response.json()) 
        .then(data => {
         console.log(data.items[0].calories)
         document.getElementById("totalFat").textContent = data.items[0].fat_total_g;
         document.getElementById("Fat").textContent = data.items[0].fat_saturated_g;
         document.getElementById("carbo").textContent = data.items[0].carbohydrates_total_g;
         document.getElementById("blonnik").textContent = data.items[0].fiber_g;
         document.getElementById("cukier").textContent = data.items[0].sugar_g;
         document.getElementById("bialko").textContent = data.items[0].protein_g;
         document.getElementById("name").textContent = text;
         document.getElementById("kcal").textContent = data.items[0].calories;
        })
            .catch(err => console.log(err))
            document.querySelector("#grid").textContent = "";
            const url = 'https://api.unsplash.com/search/photos?query='+data.responseData.translatedText+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages(data);
   })

   .catch(error => console.log(error));
      });
    //////////////////////////////////////////////

    const text1 = ["banan", "pomarańcze", "jabłko", "sałatka", "Kapusta", "ogórki", "Rabarbar", "Truskawki", "Kefir" , "Świeży dorsz", "Kawa"];
    let rand_prod = text1[Math.floor((Math.random() * text1.length))];
    
    
    let apiUrl1 = `https://api.mymemory.translated.net/get?q=${rand_prod}&langpair=pl-PL|en-GB`;
    console.log(apiUrl1);

    fetch(apiUrl1).then(res => res.json()).then(data => {
       // toText.value = data.responseData.translatedText;
        console.log(data.responseData.translatedText)
        fetch(`https://api.calorieninjas.com/v1/nutrition?query=${data.responseData.translatedText}`, {
        method: "GET",
        headers: {'X-Api-Key': 'l4+sIPyhjRdLmF5ZgWitqw==lYM6VU7kEq95v4jR'}
        })
        .then(response => response.json()) 
        .then(data => {
         console.log(data.items[0])
         document.getElementById("totalFat1").textContent = data.items[0].fat_total_g;
         document.getElementById("Fat1").textContent = data.items[0].fat_saturated_g;
         document.getElementById("carbo1").textContent = data.items[0].carbohydrates_total_g;
         document.getElementById("blonnik1").textContent = data.items[0].fiber_g;
         document.getElementById("cukier1").textContent = data.items[0].sugar_g;
         document.getElementById("bialko1").textContent = data.items[0].protein_g;
         document.getElementById("name1").textContent = rand_prod;
         document.getElementById("kcal1").textContent = data.items[0].calories;
        })
            .catch(err => console.log(err))
            document.querySelector("#grid1").textContent = "";
            const url1 = 'https://api.unsplash.com/search/photos?query='+data.responseData.translatedText+'&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

  fetch(url1)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      loadImages1(data);
   })

   .catch(error => console.log(error));
      });
    
      start = true;
}



function los(){
    let l1 = parseFloat(document.getElementById("kcal").innerHTML);
    let l2 = parseFloat(document.getElementById("kcal1").innerHTML);

    let wynik_ost = l1/l2;

    let wartosc = wynik_ost.toFixed(2);

    console.log("ile razy wiecej: " + wartosc);

    let new_kcal = (l2 * wartosc).toFixed(1);

    console.log("ile mniejwiecej kalori: "+ new_kcal);

    let gramy = (wartosc * 100).toFixed(0);

    console.log(gramy + " gramów");

    let roznica_gramow = gramy - 100;

    console.log("roznica wynosi: "+roznica_gramow);

    

    document.getElementById("porownanie").innerHTML = gramy + " g " +"≈ "+(gramy/1000).toFixed(1)+"kg  "+ document.getElementById("name1").innerHTML + "<br>" + "Ilość kalori ≈ " + new_kcal + " kcal" + "<br>" + "Ostatecznie różnica gramow wynosi: " + roznica_gramow + " g";  

  start = false;
}

///////////////////////////////////

function Event(event){
  if (event.key == "Enter")
    
    translate();
    if(start == true){
      setTimeout(los,3000);
    }
    
}



function loadImages(data) {
  for(let i = 0;i < 1;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector("#grid").appendChild(image);
  }
}

function loadImages1(data) {
  for(let i = 0;i < 1;i++){
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage = "url("+data.results[i].urls.raw + "&w=1366&h=768" +")";
    image.addEventListener("dblclick", function(){
      window.open(data.results[i].links.download, '_blank');
    })
    document.querySelector("#grid1").appendChild(image);
  }
}

function createData(name, calories, totalFat, fat, carbo, fiber, sugar, protein) {
    return { name, calories, totalFat, fat, carbo, fiber, sugar, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];
  


export default function Calculator(){
    return (
        <div className="main">
            <input type="text" name="" id="input" class="from-text" onKeyDown={Event}/><i id="search" class="fas fa-search"></i>
            <div className="grid-products">
            <div className="produkt_1">
            <section>
            <div class="container">
                <div id="grid"></div>
            </div>
            </section>

            <TableContainer component={Paper} class="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produkt (porcja 100g)</TableCell>
            <TableCell align="right">Kalorie</TableCell>
            <TableCell align="right">Tłuszcz</TableCell>
            <TableCell align="center">Tłuszcze<br/>nasycone</TableCell>
            <TableCell align="right">Węglowodany</TableCell>
            <TableCell align="right">Błonnik</TableCell>
            <TableCell align="right">Cukier</TableCell>
            <TableCell align="right">Białko</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" id="name">
                
              </TableCell>
              <TableCell align="center" id="kcal"></TableCell>
              <TableCell align="center" id="totalFat"></TableCell>
              <TableCell align="center" id="Fat"></TableCell>
              <TableCell align="center" id="carbo"></TableCell>
              <TableCell align="center" id="blonnik"></TableCell>
              <TableCell align="center" id="cukier"></TableCell>
              <TableCell align="center" id="bialko"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
            <div className="produkt_2">
            <section>
            <div class="container">
                <div id="grid1"></div>
            </div>
            </section>

            <TableContainer component={Paper} class="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produkt (porcja 100g)</TableCell>
            <TableCell align="right">Kalorie</TableCell>
            <TableCell align="right">Tłuszcz</TableCell>
            <TableCell align="center">Tłuszcze<br/>nasycone</TableCell>
            <TableCell align="right">Węglowodany</TableCell>
            <TableCell align="right">Błonnik</TableCell>
            <TableCell align="right">Cukier</TableCell>
            <TableCell align="right">Białko</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" id="name1">
                
              </TableCell>
              <TableCell align="center" id="kcal1"></TableCell>
              <TableCell align="center" id="totalFat1"></TableCell>
              <TableCell align="center" id="Fat1"></TableCell>
              <TableCell align="center" id="carbo1"></TableCell>
              <TableCell align="center" id="blonnik1"></TableCell>
              <TableCell align="center" id="cukier1"></TableCell>
              <TableCell align="center" id="bialko1"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div> 
            </div>
            <h1>Porównanie</h1>
            <h2 id="porownanie"></h2>      
            
            
        </div>
    )
}