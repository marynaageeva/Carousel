class Carousel {

    constructor(objectId, obj) {
        this.slides = document.querySelectorAll("#" + objectId + " .carousel-item");
        console.log(this.slides);
        this.currentPosition = 0;
        this.carouselObj = {
            "duration": 3000,
            "direction": "left"
        };
        this.numberSlides = Object.keys(this.slides).length;

        this.newSlide();

        for (key in obj) {
            if (key in this.carouselObj) {
                this.carouselObj[key] = obj[key];
            }
        }
    }

    start() {
        switch (this.carouselObj.direction) {
            case "left":
                this.moveToLeft();
                break;
        }
    }

    moveToLeft() {
        this.timer = setInterval(()=> {
            this.currentPosition = (this.currentPosition + 1) % this.numberSlides;
            this.newSlide();
            this.scrollLeft();
        }, this.carouselObj.duration);
    }

    newSlide() {
        this.hideAll();
        this.slides[this.currentPosition].classList.remove("hidden");
    }

    hideAll() {
        this.slides.forEach(function (item) {
            item.classList.add("hidden");
        });
    }

    scrollLeft() {
        // let item = this.slides[this.currentPosition];
        let preventItem = this.slides[this.currentPosition-1]; // ?????
         //   item.style.transition = "2s all";
            preventItem.style.transition = "2s all";

            preventItem.style.marginLeft = -100+"%";
    }
}