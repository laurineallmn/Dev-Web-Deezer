let emplacement1 = document.querySelector("#photo-profil");
fetch("https://www.theaudiodb.com/api/v1/json/2/artist.php?i=170446")
    .then(response => response.json())
    .then(result => {
        console.log(result.artists[0].strArtistThumb);
        let image = document.createElement("img");
        imageContent = result.artists[0].strArtistThumb;
        image.src = imageContent;
        emplacement1.appendChild(image);
    })


let emplacement2 = document.querySelector(".petit-container-droite");
fetch("https://www.theaudiodb.com/api/v1/json/2/artist.php?i=170446")
    .then(response => response.json())
    .then(result => {
        console.log(result.artists[0].strBiographyFR);
        let texte = document.createElement("p");
        textContent = result.artists[0].strBiographyFR;
        texte.innerHTML = textContent; //on met le content dans le p)
        emplacement2.appendChild(texte); //(on ajoute le p rempli dans le container)
    })