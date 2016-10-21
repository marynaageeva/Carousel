class Carousel {

    constructor(selector, obj) {
        this.slides = document.querySelectorAll(selector + " .carousel-item");
        console.log(this.slides);
        this.currentPosition = 0;
        this.carouselObj = {
            duration: 3000,
            direction: "left",
            transitionSec: 2
        };
        this.numberSlides = Object.keys(this.slides).length;

        for (key in obj) {
            if (key in this.carouselObj) {
                this.carouselObj[key] = obj[key];
            }
        }
    }

    start() {
        this.timer = setInterval(()=> {
            switch (this.carouselObj.direction) {
                case "left":
                    this.moveToRight();
                    break;
                case "right":
                    this.moveToLeft();
                    break;
            }
        }, this.carouselObj.duration);
        // switch (this.carouselObj.direction) {
        //     case "left":
        //         this.moveToLeft();
        //         break;
        // }
    }

    moveToRight() {
        this.currentPosition = (this.currentPosition + 1) % this.numberSlides;
       // this.newSlide();
        this.scrollRight();
    }
    //
    // newSlide() {
    //     this.hideAll();
    //     this.slides[this.currentPosition].classList.remove("hidden");
    // }
    //
    // hideAll() {
    //     /* to provide supporting in all browsers where forEach does't work for collection*/
    //     this.slides.forEach = [].forEach;
    //     this.slides.forEach(function (item) {
    //         item.classList.add("hidden");
    //     });
    // }

    scrollRight() {
        // let item = this.slides[this.currentPosition];
        let preventItem = this.slides[this.currentPosition - 1]; // ?????
        //   item.style.transition = "2s all";
        preventItem.style.transition = this.carouselObj.transitionSec + "s all";
        preventItem.style.marginLeft = -100 + "%";
    }

    scrollLeft() {
        let preventItem = this.slides[this.currentPosition + 1];
        preventItem.style.transition = this.carouselObj.transitionSec + "s all";
        preventItem.style.marginLeft = 100 + "%";
    }

    /* Indicators */

}