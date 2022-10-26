'use strict'

function renderGallery() {
    const galleryImages = getGalleryImages()
    let imgsStr = ``
    galleryImages.forEach((img) => {
        imgsStr += `
        <img src="${img.url}"  onclick="onImgSelect(${img.id})" class="grid-img img${img.id}" alt="">
        `
    })
    gElGallery.innerHTML += imgsStr
}

function onImgSelect(imgid){
    setImg(imgid)
    renderMeme()
}

