'use strict'

const gElGallery = document.querySelector('.gallery-area')
const gElMemeEditor = document.querySelector('.meme-editor')

function onInit(){
    console.log('start init');
    initCanvas()
    renderGallery()
}

function renderMeme(){
    console.log('start render');
    document.querySelector('.images-gallery').classList.add('hide')
    gElMemeEditor.classList.remove('hide')
    const currMeme = getMeme() 
    const currMemeImgPath = gImgs.find(img => img.id === currMeme.selectedImgId).url
    const currMemeTxt = currMeme.lines[0].txt
    drawImgAndTxt(currMemeImgPath, currMemeTxt, 30, 50)
}


function onTxtInput(txt){
    console.log('txt',txt);
    setLineTxt(txt)
    renderMeme()
}

function onSetColor(color){
    console.log('Color',color);
    setColor(color)
}

function onChangeFontSize(num){
    setFontSize(num)
}