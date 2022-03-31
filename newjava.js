window.onload= function() {
    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.nav');
    
        icon.onclick = () => {
            nav.classList.toggle('visible')
        }
    const menuClose = document.querySelector('#menu-close');
    const sideMenu = document.querySelector('#side-menu');
    const commentBtn = document.querySelector('#comment');
    menuClose.onclick = () => {
        sideMenu.classList.remove('show-menu');
    }
    commentBtn.onclick = () => {
        sideMenu.classList.add('show-menu');
    }
    const reviewContent = document.querySelector('#review-input');
    const submitBtn = document.querySelector('#review-form');
    const reviewDisplay = document.querySelector('#review-display');
    let review = [];
    submitBtn.onsubmit = (e) => {
        e.preventDefault();
        let list = reviewContent.value;
        if (list) {
            review.push(list);
            reviewfunc();
        }
        reviewContent.value = '';
    }
    const reviewfunc = () => {
        reviewDisplay.innerHTML = '';  
        for (let i = 0; i < review.length; i++) {            
            const element = document.createElement('li');
            element.innerText = review[i];
            element.classList.add('review-list');
            reviewDisplay.appendChild(element);
        }  
    }
   


    
}
    


