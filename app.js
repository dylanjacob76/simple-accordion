const accordionItemEl = document.getElementsByClassName("accordion__item");

function accordion() {
    for (let item of accordionItemEl) {
        let accHeader = item.firstElementChild;
        accHeader.addEventListener("click", function() {
            let accDetails = this.nextElementSibling;
            if (accDetails.style.maxHeight) {
                accDetails.style.maxHeight = null;
                this.lastElementChild.style.webkitTransform = 'rotate(' + 0 + 'deg)';
            } else {
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                this.lastElementChild.style.webkitTransform = 'rotate(' + 45 + 'deg)';
            }
        })
    }
}

accordion();