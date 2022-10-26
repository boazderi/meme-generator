'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gKeyWords = [
    ['fake news!', 'trump'],
    ['dogs', 'pats'],
    ['baby', 'dog', 'bed'],
    ['cat', 'keyboard', 'sleeping'],
    ['baby', 'yes', 'victory'],
    ['guy', 'history'],
    ['baby', 'black', 'big eyes'],
    ['joker', 'funny', 'commedy'],
    ['joke', 'baby'],
    ['obama', 'president', 'lough'],
    ['sport', 'gays', 'boxers'],
    ['haim hecht', 'zadik', 'honesty'],
    ['dicaprio', 'congratulations'],
    ['matrix'],
    ['no chance', 'guy'],
    ['lol', 'are you serious'],
    ['putin', 'dictator'],
    ['toy story'],
]
var gImgs = []

createSqureImgs()

function createSqureImgs() {
    for (var i = 1; i < 19; i++) {
        gImgs.push({
            id: i,
            url: `img/meme-imgs (square)/${i}.jpg`,
            keywords: gKeyWords[i-1]
        })
    }
}


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

function getMeme(id) {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text
}


function getGalleryImages() {
    return gImgs
}


function setImg(imgid) {
    gMeme.selectedImgId = imgid
}