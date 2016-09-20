/* VARIABLES */
var current;
var imgTab, descriptionTab, linkTab;
var thisImg, thisDescription, thisLink;
var interval;

/* FONCTIONS */
//Tableau d'image
function imgTab()
{	
	imgTab = [];
	imgTab[0] = "images/1.jpg"
	imgTab[1] = "images/2.jpg"
	imgTab[2] = "images/3.jpg"
}
//Tableau des descriptions
function descriptionTab()
{
	descriptionTab = [];
	descriptionTab[0] = "Moto de derrière"
	descriptionTab[1] = "Moto de devant"
	descriptionTab[2] = "Moto de côté"
}
//Tableau de liens
function linkTab()
{
	linkTab = [];
	linkTab[0] = "http://www.google.fr/"
	linkTab[1] = "http://www.qwant.com/"
	linkTab[2] = "http://www.duckduckgo.com/"
}

console.log(typeof linkTab);
console.log(linkTab);
//Afficher/Cacher la description
function showDescription()
{
	selectTitle.classList.remove("hide");
}
function hideDescription()
{
	selectTitle.classList.add("hide");
}

//Slide
function rightSide()
{
	current++;
	if(current >= imgTab.length)
	{
		current = 0;
	}
	thisImg.setAttribute("src", imgTab[current]);	
	thisDescription.innerHTML = descriptionTab[current];
	thisLink.setAttribute("href", linkTab[current]);
}
function leftSide()
{
	current--;
	if(current < 0)
	{
		current = imgTab.length - 1;
	}
	thisImg.setAttribute("src", imgTab[current]);	
	thisDescription.innerHTML = descriptionTab[current];
	thisLink.setAttribute("href", linkTab[current]);
}
//Stop Auto Scroll
function stopAutoScroll()
{
	clearInterval(interval);
}
//Auto Scroll
function autoScroll()
{
	interval = setInterval(function()
	{
		
		current++;

		if(current >= imgTab.length)
		{
			current = 0;
		}

		if(current < 0)
		{
			current = imgTab.length;
		}


		thisImg.setAttribute("src", imgTab[current]);	
		thisDescription.innerHTML = descriptionTab[current];
		thisLink.setAttribute("href", linkTab[current]);
		
	}, 2500);	
	
}
//Carousel
function carousel()
{
	thisImg.setAttribute("src", imgTab[current]);
	thisDescription.innerHTML = descriptionTab[current];
	thisLink.setAttribute("href", linkTab[current]);
	autoScroll();
	document.querySelector(".carousel").appendChild(thisImg);
	document.querySelector(".title").appendChild(thisDescription);
	document.querySelector(".title").appendChild(thisLink);
}

/* VALEUR */
current = 0;
console.log(current);
selectCarousel = document.querySelector(".carousel");
selectTitle = document.querySelector(".title");

thisImg = document.createElement("img");
thisImg.classList.add("carouselImg");

thisDescription = document.createElement("p");
thisDescription.classList.add("description");

thisLink = document.createElement("a");
thisLink.classList.add("descriptionLink");
thisLink.setAttribute("target", "blank_");
thisLink.innerHTML = "<i class=\"fa fa-external-link\" aria-hidden=\"true\"></i>";

selectCarousel.onmouseover = stopAutoScroll;
selectCarousel.onmouseleave = autoScroll;

thisImg.onmouseover = showDescription;
selectTitle.onmouseover = showDescription;
thisImg.onmouseleave = hideDescription;
selectTitle.onmouseleave = hideDescription;

/* Retour */

imgTab();//appel de la fonction tableau

descriptionTab();//appel de la liste des descriptions

linkTab();

carousel();//appel de la fonction carousel

document.querySelector("#right").onclick = rightSide;
document.querySelector("#left").onclick = leftSide;