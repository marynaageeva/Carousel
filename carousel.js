"use strict";

class Carousel {

    constructor(selector, obj) {
        this.slides = document.querySelectorAll(selector + " .carousel-item");
        this.currentPosition = 0;
        this.carouselObj = {
            duration: 3000,
            direction: "right",
            transitionSec: 2
        };
        this.numberSlides = Object.keys(this.slides).length;

        for (var key in obj) {
            if (key in this.carouselObj) {
                this.carouselObj[key] = obj[key];
            }
        }
    }

    start() {
        this.timer = setInterval(()=> {
            console.log(this.currentPosition === this.numberSlides - 1);
            switch (this.carouselObj.direction) {
                case "right":
                    console.log("right");
                    this.moveToRight();
                    if (this.currentPosition === this.numberSlides - 1) {
                        this.carouselObj.direction = "left";
                    }
                    break;
                case "left":
                    console.log("left");
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
        for (let i = 0; i < this.numberSlides; i++) {
            let preventItem = this.slides[i];
            preventItem.style.transition = this.carouselObj.transitionSec + "s all";
            preventItem.style.transform = `translateX(-${(100*this.currentPosition)}%)`;
            preventItem.style.mozTransform = `translateX(-${(100*this.currentPosition)}%)`;
            preventItem.style.webKitTransform = `translateX(-${(100*this.currentPosition)}%)`;
            preventItem.style.msTransform = `translateX(-${(100*this.currentPosition)}%)`;
        }
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

}