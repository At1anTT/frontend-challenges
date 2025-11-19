// 😢😞😐😀😎


const starsMap = document.getElementsByClassName('star')
const starWrapper = document.getElementById('star-wrapper')

starWrapper.addEventListener('focus', (event) => setGoldColor(event), true)

function setGoldColor(event) {
    const target = event.target;
    
    const targetIndex= +target.getAttribute('data-index');


    for (let i= targetIndex; i >= 0; i--) {
        starsMap[i].classList.add('star-filled');
    }
}




