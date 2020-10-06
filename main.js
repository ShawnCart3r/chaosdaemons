




































const god = [
    {id: 1,
    title: "Keeper of Secrets",
    category: "Slaanesh",
    price: 140.00,
    img: "./image/Keeper of Secrets.webp",         
},

{
    id: 2,
    title: "Daemonette",
    category: "Slaanesh",
    price: 35.00,
    img: "./image/daemonettes.jpg",


},

{
    id: 3,
    title:"Fiend of Slaanesh",
    category: "Slaanesh",
    price: 35.00,
    img: "./image/fiends of Slaanesh.webp",


},

{
    id: 4,
    title: "Seekers of Slaanesh",
    category: "Slaanesh",
    price: 35.00,
    img:"./image/Seekers of Slaanesh.jpg",


},

{
    id: 5,
    title: "Bloodthister",
    category: "Khorne",
    price: 140.00,
    img:"./image/Bloodthrister.webp",


},

{
    id: 6,
    title: "Bloodletter",
    category: "Khorne",
    price: 35.00,
    img: "./image/bloodletter.jpg",


},

{
    id: 7,
    title: "BloodCrusher",
    category: "Khorne",
    price: 100.00,
    img: "./image/bloodcrusher.webp",


},

{
    id: 8,
    title: "Hound of Khorne",
    category: "Khorne",
    price: 50.00,
    img:"./image/houndsofkhorne.jpg",


},

{
    id: 9,
    title:"Great Unclean One",
    category: "Nurgle",
    price: 140.00,
    img: "./image/greatuncleanone.webp",


},

{
    id: 10,
    title: "Plaguebearers",
    category: "Nurgle",
    price: 35.00,
    img:"./image/Plaguebearer.webp",


},

{
    id: 11,
    title: "Nurglings",
    category: "Nurgle",
    price: 40.00,
    img:"./image/nurglings.jpg",


},

{
    id: 12,
    title: "Beasts of Nurgle",
    category: "Nurgle",
    price: 35.00,
    img:"./image/beastofnurgle.jpg",


},

{
    id: 13,
    title:"Plague Drone",
    category: "Nurgle",
    price: 35.00,
    img: "./image/plaguedrone.webp",


},

{
    id: 14,
    title: "Lord of Change",
    category: "Tzeentch",
    price: 140.00,
    img: "./image/lordofchange.jpg",


},

{
    id: 15,
    title: "Pink Horror",
    category: "Tzeentch",
    price: 35.00,
    img:"./image/pinkhorrors.webp",


},

{
    id: 16,
    title: "Flamers of Tzeentch",
    category: "Tzeentch",
    price: 35.00,
    img: "./image/FlamersofTzeentch.jpg",


},

{
    id: 17,
    title: "Screamers of Tzeentch",
    category: "Tzeentch",
    price: 50.00,
    img:"./image/screamersoftzeentch.jpg",


},



];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn")


window.addEventListener("DOMContentLoaded", function () {
    displayGodItems(god)
    
});




filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const godCategory = god.filter( function (godItem) {
    if(godItem.category === category){
        return godItem;

    }
            
           
            

        });
        // console.log(godCategory);
        if(category === "all") {
            displayGodItems(god);
        } else {
            displayGodItems(godCategory);
        }

    });

});



function displayGodItems(godItems){
    let displayGod = godItems.map(function (item) {
        // console.log(item);
        return ` <article class="${item.img}"><img src="${item.img}" class="photo" alt="${item.title}"> <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price"> $${item.price}</h4>
        </header>
        
      </div></article>`;
    });
    displayGod = displayGod.join("")
  sectionCenter.innerHTML = displayGod

}








/*

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMcontentLoaded", function () {
   
    displaygodItems(god);
    displaygodButtons();
});
 
function displaygodItems(godItems) {
    let displayGod = god.map(function (god) {
        return god /`<article class="god-item">
        <img src=${god.img} class="photo" alt=${god.title} />
        <div class="item-info">
          <header>
            <h4>${god.title}</h4>
            <h4 class="price">$${god.price}</h4>
          </header>
          <p class="god-text">
            ${god.desc}
          </p>
        </div>
      </article>`;
});

displayGod = displayGod.join("");

sectionCenter.innerHTML = displayGod;
}

function displayGodButtons() {
    const catergories = god.reduce (
        function  (values, god) {
            if (!values, includes(god.category)) {
                values.push(items.category);

            }
            return values;
        },
        ["all"]
    );
const categoryBtns = catergories
.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
    </button>`;
  })

  .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
          const category = e.currentTarget.dataset.id;
          const godCategory = god.filter(function (godItem) {
              if (godItem,category === category) {
                  return godItem;
              }
          });
          if (category === "all") {
              displayGodItems(god);
          } else {
              displayGodItems(godCategory);
          }
      });
  });

}
 */

