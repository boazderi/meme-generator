'use strict'


const gElGallery = document.querySelector('.images-gallery')

function renderGallery() {
    const galleryImages = getGalleryImages()
    const gElPictures = document.querySelector('.gallery-area')
    let imgsStr = ``
    galleryImages.forEach((img) => {
        imgsStr += `
        <img src="./${img.url}"  onclick="onImgSelect(${img.id})" class="grid-img img${img.id}" alt="">
        `
    })
    gElPictures.innerHTML += imgsStr
    
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
}

function onGalleryClicked(){
    if (edditorStatus.gGalleryIsOn) return
    gElGallery.classList.remove('hide')
    edditorStatus.gGalleryIsOn = true
    gElMemeEditor.classList.add('hide')
    edditorStatus.gMemeStatus = false
    renderGallery()
}