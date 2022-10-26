'use strict'



function onInit(){
    console.log('start init');
    initCanvas()
    renderMeme()
    renderGallery()
}


function renderMeme(){
    console.log('start render');
    var currMeme = getMeme()
    const currMemeImgPath = currMeme.gImg.url
    const currMemeTxt = currMeme.gMeme.lines[0].txt
    drawImgAndTxt(currMemeImgPath, currMemeTxt, 30, 50)
    // drawTxt(currMemeTxt, 30, 50)
}


function onTxtInput(txt){
    console.log('txt',txt);
    setLineTxt(txt)
    renderMeme()
}