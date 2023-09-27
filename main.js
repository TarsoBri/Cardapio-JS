const menu = [
    {
      id: 1,
      title: "Panquecas Americanas",
      category: "breakfast",
      price: 'R$15,99',
      img: "Images/panqueca.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Hamburguer com fritas",
      category: "lunch",
      price: 'R$29,99',
      img: "Images/burguer-fritas.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Milkshake de oreo",
      category: "shakes",
      price: 'R$12,00',
      img: "Images/Oreo-Shake.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Torrada",
      category: "breakfast",
      price: 'R$14,99',
      img: "Images/torrada.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Salada",
      category: "lunch",
      price: 'R$19,00',
      img: "Images/salada.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Milkshake de Morango",
      category: "shakes",
      price: 'R$10,00',
      img: "Images/Morango-Shake.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Cafézinho",
      category: "breakfast",
      price: 'R$2,99',
      img: "Images/coffe.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Arroz e Feijão",
      category: "lunch",
      price: 'R$22,00',
      img: "Images/almoço.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Milkshake de Ferrero",
      category: "shakes",
      price: 'R$ 15,00',
      img: "Images/Ferrero-shake.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Pizza",
      category: "dinner",
      price: 'R$ 50,00',
      img: "Images/pizza.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
  ];

document.body.classList.remove('no-js')
document.body.classList.add('js')

const sectionCenter = document.querySelector('.section-center');
const btnsFilters = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', putMenu(menu));

btnsFilters.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        
        const menuCategory = menu.filter( menuItem => {
            if(menuItem.category === category){
                return menuItem;
            }
        });

        if(category === 'all'){
            putMenu(menu);
        }else{
            putMenu(menuCategory);
        }
    });
});

function putMenu(menuItens){
    let allItems = menuItens.map(function (item){
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.img}" class="photo" />
        <div class="item-info">
          <div class="item-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
    });
    allItems = allItems.join("");
    sectionCenter.innerHTML = allItems;
}



