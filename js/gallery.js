/* Trying to dim the entire section behind the selected image to reduce lag,
   but not working quite right */

/* let images = document.querySelectorAll('.gallery > img');
let dim_bg = document.querySelector('span');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        dim_bg.style.visibility = 'visible';
    })

    image.addEventListener('mouseout', () => {
        dim_bg.style.visibility = 'hidden';
        dim_bg.style.zIndex = 2;
    })
}); */