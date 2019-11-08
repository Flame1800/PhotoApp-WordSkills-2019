
const butonOurPhotos = document.querySelector('.btn-our-photos');
const message = document.querySelector('.message');
const containerOurPhotos = document.querySelector('.container-our-photos');


butonOurPhotos.onclick = () => {
    message.style.display = 'none';
    containerOurPhotos.style.display = 'block';
}


