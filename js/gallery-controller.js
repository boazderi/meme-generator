'use strict'




function initGallery(){
    renderGallery()
    setKeywordsOnGallerySearch()
}

let gFilter

function renderGallery() {
    var galleryImages = !gFilter? getGalleryImages() : getFilteredImgs(gFilter)
    const gElPictures = document.querySelector('.gallery-area')
    let imgsStr = ``
    galleryImages.forEach((img) => {
        imgsStr += `
        <img src="./${img.url}"  onclick="onImgSelect(${img.id})" class="grid-img img${img.id}" alt="">
        `
    })
    gElPictures.innerHTML = imgsStr
}

function setKeywordsOnGallerySearch(){
    const filteredKeywords = getFilteredKeywords()
    const elDataList = document.querySelector('#keywords')
    let listOptionsStr = ``
    filteredKeywords.forEach(key => {
        listOptionsStr+=`<option value="${key}">`
    })
    elDataList.innerHTML += listOptionsStr
}

function onImgSelect(imgId){
    setImg(imgId)
    renderMeme()
}

function onSetFilterByKey(key, ev){
    ev.preventDefault()
    gFilter = key
    renderGallery()
}


function getRandomImage(){
    console.log('find random image');
    const image = gImgs[getRandomIntInclusive(0, gImgs.length - 1)]
    console.log('image',image);
    onImgSelect(image.id)
}