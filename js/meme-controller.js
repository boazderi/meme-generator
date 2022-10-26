'use strict'

const gElGallery = document.querySelector('.gallery-area')
const gElMemeEditor = document.querySelector('.meme-editor')
let gLastMemeId

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
    const txtPos = currMeme.lines[gMeme.selectedLineIdx].position
    const currMemeImgPath = gImgs.find(img => img.id === currMeme.selectedImgId).url
    const currMemeTxt = currMeme.lines[gMeme.selectedLineIdx].txt
    drawItem({img: currMemeImgPath})
    // drawItem({txt: {currMemeTxt, x: txtPos.x, y: txtPos.y}})
}



function onTxtInput(txt){
    setLineTxt(txt)
    const currMeme = getMeme() 
    const txtPos = currMeme.lines[gMeme.selectedLineIdx].position
    const currMemeTxt = currMeme.lines[gMeme.selectedLineIdx].txt
    drawItem({txt: {currMemeTxt, x: txtPos.x, y: txtPos.y}})
}

function onSetColor(color){
    console.log('Color',color);
    setColor(color)
}

function onChangeFontSize(num){
    setFontSize(num)
}

function onAddLine(){
    addTextLine()
}