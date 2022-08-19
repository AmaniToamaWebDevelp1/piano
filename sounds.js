const pianokeys = document.querySelectorAll('.key');
function playSound(newUrl){
    new Audio(newUrl).play()
}
pianokeys.forEach((pianokey,i) => {
    const number = i < 9  ? '0' + (i + 1): (i + 1)
    const newUrl = '24-piano-keys/key' +number+ '.mp3'
    console.log(newUrl);

    pianokey.addEventListener('click',() => playSound(newUrl))
})