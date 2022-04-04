const cardListItems = document.querySelectorAll(".cards-list__item");
const cardImageItems = document.querySelectorAll(".cards-list__image");
const cardTextItems = document.querySelectorAll(".cards-list__information");
const cardScreenItems = document.querySelectorAll(".cards-list__screen");

class SwitcherCard {
    constructor(cardListItems, cardImageItems, cardTextItems, cardScreenItems) {
        this.cardListItems = cardListItems;
        this.cardImageItems = cardImageItems;
        this.cardTextItems = cardTextItems;
        this.cardScreenItems = cardScreenItems;
        this._init();
    }
    _init(){
        this.render();
    }
    render(){
        for(let i = 0; i<this.cardListItems.length; i++){
            this.cardImageItems[i].addEventListener("click", () =>{
                this.isActiveCard(this.cardTextItems, "cards-list__information_active");
                this.cardTextItems[i].classList.add("cards-list__information_active");

                this.isActiveCard(this.cardListItems, "cards-list__item_active");
                this.cardListItems[i].classList.add("cards-list__item_active");

                this.isActiveCard(this.cardScreenItems, "cards-list__screen_active");
                this.cardScreenItems[i].classList.add("cards-list__screen_active");
            })
        }
    }
    isActiveCard(activeItem, classItem){
        for(let i = 0; i<activeItem.length; i++){
            if(activeItem[i].classList.contains(`${classItem}`)){
                activeItem[i].classList.remove(`${classItem}`);
            }
        }
    }
}

const switcherCard = new SwitcherCard(cardListItems, cardImageItems, cardTextItems, cardScreenItems);
