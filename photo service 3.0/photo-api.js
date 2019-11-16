
const getData = async (url) => {
    const getResponse = await fetch(url);
    const result = await getResponse.json();

    return result;
} 
const imgArray = [];
const togglePhoto = document.querySelector('.toggle-photo')

const createImg = (url, container) => {
    img = document.createElement('img');
    img.classList.add('photo');
    img.src = url;

    container.appendChild(img);
    imgArray.push(img);

    return img;
}

const containerOne = document.querySelector('.photo-container1');
const apiOne = 'https://api.unsplash.com/search/photos?query=blue&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12' 

const containerTwo = document.querySelector('.photo-container2');
const apiTwo = 'https://api.unsplash.com/search/photos?query=greeb&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12' 

const containerThree = document.querySelector('.photo-container3');
const apiThree = 'https://api.unsplash.com/search/photos?query=red&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12' 


getData(apiOne).then((result) => {

    for(key in result.results) {
        createImg(result.results[key].urls.small, containerOne)
    }

    for (key in imgArray) {
        imgArray[key].onclick = function() {
            togglePhoto.appendChild(imgArray[key]);
            togglePhoto.style.display = 'flex';
            imgArray[key].style.width = 'auto';
            imgArray[key].style.height = '80%';
        }
    }
})

getData(apiTwo).then((result) => {

    for(key in result.results) {

        createImg(result.results[key].urls.small, containerTwo)
    }
})

getData(apiThree).then((result) => {

    for(key in result.results) {

        createImg(result.results[key].urls.small, containerThree)
    }
})

