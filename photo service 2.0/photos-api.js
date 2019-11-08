
const getData = async (url) => {
    const fetchResponce = await fetch(url);
    const result =  await fetchResponce.json();

    return result;
}

const containerPhoto1 = document.querySelector('.photo-container1');
const containerPhoto2 = document.querySelector('.photo-container2');
const containerPhoto3 = document.querySelector('.photo-container3');

const makePhoto = (url, container) => {
    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = url;

    container.appendChild(photo);
}

//makePhoto('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRai40jRb4M4_lRReaKuYGGnEKHPjqHf5kuAJ0AJrAyDPTV5BsF', containerPhoto1);

getData('https://api.unsplash.com/search/photos?query=scenery&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.small, containerPhoto1);
    }
})
getData('https://api.unsplash.com/search/photos?query=chill&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.small, containerPhoto2);
    }
})
getData('https://api.unsplash.com/search/photos?query=animals&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.small, containerPhoto3);
    }
})