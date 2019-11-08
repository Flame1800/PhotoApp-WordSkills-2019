

const getData = async (url) => {
    const fetchResponse = await fetch(url);
    const result = await fetchResponse.json();

    return result;
}



const makePhoto = function(url, gall) {
    const gallery = document.querySelector(gall);
    const img = document.createElement('img');
    const imgArray = []
    img.classList.add('img');
    img.src = url;
    img.draggable = true;
    imgArray.push = img;
    gallery.appendChild(img);

    return gallery;
}


// Big Image f()
const clickImg = function(image) {
    image.addEventListener('click', () => {
        image.style.display = 'none';
    });
}

//Drag n Drop
const draggedItem = null;

const dragNdrop = (image) => {
    image.addEventListener("dragstart", () => {
        console.log('dragstart');
        draggedItem = this;
        image.style.display = 'none';
    })
    
    img.addEventListener("dragend", () => {
        console.log('dragend');
       
    })
}



//API
getData('https://api.unsplash.com/search/photos?query=cats&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    const photoArray = res.results;
    const imgArray = []

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.regular, '.gallery1');
    }
    console.log(imgArray);
    

})
getData('https://api.unsplash.com/search/photos?query=food&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.regular, '.gallery2')
    }
})
getData('https://api.unsplash.com/search/photos?query=humans&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {

    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.regular, '.gallery3')
    }
})
getData('https://api.unsplash.com/search/photos?query=cars&client_id=156d988dd84249d71254da4f9348f3f7e795037a4d8c43a5a76526856c40cb12').then((res) => {
    console.log(res.results);
    const photoArray = res.results;

    for (key in photoArray) {
        makePhoto(photoArray[key].urls.regular, '.gallery4')
    }
})


