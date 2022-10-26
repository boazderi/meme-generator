'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [{ id: 1, url: 'img/meme-imgs (square)/1.jpg', keywords: ['funny', 'cat'] }];

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'FAKE NEWS!!!',
            size: 20,
            align: 'center',
            color: 'red'
        }
    ]
}

function getMeme() {
    return {gMeme, gImg: gImgs[0]}
}

function setLineTxt(text){
    gMeme.lines[0].txt = text
}