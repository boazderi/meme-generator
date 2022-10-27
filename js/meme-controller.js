'use strict'


const gElMemeEditor = document.querySelector('.meme-editor-container')
let gLastMemeId

function onInit(){
    console.log('start init');
    initCanvas()
    renderGallery()
}

function renderMeme(){
    console.log('start render');
    gElGallery.classList.add('hide')
    edditorStatus.gGalleryIsOn = false
    gElMemeEditor.classList.remove('hide')
    edditorStatus.gMemeStatus = true
    const currMeme = getMeme() 
    const currMemeImgPath = gImgs.find(img => img.id === currMeme.selectedImgId).url
    const currMemeTxt = currMeme.lines[gMeme.selectedLineIdx].txt
    drawImgAndTxt(currMemeImgPath, currMemeTxt)
}



function onTxtInput(txt){
    setLineTxt(txt)
    renderMeme()
    // const currMeme = getMeme() 
    // const txtPos = currMeme.lines[gMeme.selectedLineIdx].position
    // const currMemeTxt = currMeme.lines[gMeme.selectedLineIdx].txt
    // drawItem({txt: {currMemeTxt, x: txtPos.x, y: txtPos.y}})
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

function onSwitchLines(){
    switchLines()
    renderMeme()
}

function onAlignText(direction){
    setAlignTxt(direction)
}