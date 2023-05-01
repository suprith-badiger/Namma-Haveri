
const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "ಹಾವೇರಿ ";
    }, 0);

    setTimeout(() => {
        text.textContent = " ಹೆಮ್ಮೆ " ;
    }, 3000);
}

textLoad();
setInterval(textLoad, 6000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.terget.classList.remove('active');
        }
    });
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));

const slidingElements = document.querySelectorAll('.logos');
slidingElements.forEach((el1) => observer.observe(el1));



