'use strict'

function renderGallery() {
    const elGallery = document.querySelector('.gallery-area')
    const galleryImages = getGalleryImage()
    let imgsStr = ``
    galleryImages.forEach((imgUrl, idx) => {
        imgsStr += `
        <img src="${imgUrl}" class="grid-img img${idx}" alt="">
        `
    })
    elGallery.innerHTML += imgsStr
}