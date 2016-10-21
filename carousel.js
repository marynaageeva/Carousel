"use strict";

class Carousel {

    constructor(selector, obj) {
        this.slides = document.querySelectorAll(`${selector} .carousel-item`);

        this.currentPosition = 0;
        this.carouselObj = {
            duration: 3000,
            direction: "right",
            transitionSec: 2,
            numbElInOneSlide: 1
        };
        this.numberSlides = Object.keys(this.slides).length/this.carouselObj.numbElInOneSlide;

        for (let key in obj) {
            if (key in this.carouselObj) {
                this.carouselObj[key] = obj[key];
            }
        }
        this.slides.forEach = [].forEach;
        this.createIndicators(document.querySelector(`${selector}`));
    }

    start() {

        this.timer = setInterval(()=> {
            console.log(this.currentPosition === this.numberSlides - 1);
            switch (this.carouselObj.direction) {
                case "right":
                    this.moveToRight();
                    if (this.currentPosition === this.numberSlides - 1) {
                        this.carouselObj.direction = "left";
                    }
                    break;
                case "left":
                    this.moveToLeft();
                    if (this.currentPosition === 0) {
                        this.carouselObj.direction = "right";
                    }
                    break;
            }
        }, this.carouselObj.duration);
    }

    moveToRight() {
        this.currentPosition = (this.currentPosition + 1) % this.numberSlides;
        this.scroll();
    }

    moveToLeft() {
        this.currentPosition = (this.currentPosition - 1) % this.numberSlides;
        this.scroll();
    }

    scroll() {

        this.slides.forEach(item => {
            item.style.transition = this.carouselObj.transitionSec + "s all";
            item.style.transform = `translateX(-${(100 * this.currentPosition)}%)`;
            item.style.mozTransform = `translateX(-${(100 * this.currentPosition)}%)`;
            item.style.webKitTransform = `translateX(-${(100 * this.currentPosition)}%)`;
            item.style.msTransform = `translateX(-${(100 * this.currentPosition)}%)`;
        });
    }
    //
    // scrollLeft() {
    //
    //     for (let i = 0; i < this.numberSlides; i++) {
    //         let preventItem = this.slides[i];
    //         preventItem.style.transition = this.carouselObj.transitionSec + "s all";
    //         preventItem.style.transform = `translateX(-${(100*this.currentPosition)}%)`;
    //         preventItem.style.mozTransform = `translateX(-${(100*this.currentPosition)}%)`;
    //         preventItem.style.webKitTransform = `translateX(-${(100*this.currentPosition)}%)`;
    //         preventItem.style.msTransform = `translateX(-${(100*this.currentPosition)}%)`;
    //     }
    //
    // }

    /* Indicators */

    createIndicators(container) {
        var indicatorsContainer = document.createElement("div");
        indicatorsContainer.classList.add("indicators");
        for (let i = 0; i < this.numberSlides; i++) {
            let el = document.createElement("div");
            el.classList.add("indicator");
            indicatorsContainer.appendChild(el);
        }
        //
        // let width = indicatorsContainer.offsetWidth;
        // let documentWidth = container.offsetWidth;
        container.appendChild(indicatorsContainer);
    }
}