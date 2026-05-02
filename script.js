window.onload = function() {
    let timeLeft = 5;
    let progress = 0;
    const countdownDisplay = document.getElementById('countdown');
    const loaderFill = document.getElementById('loader-fill');
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContent = document.getElementById('main-content');

    const timer = setInterval(() => {
        progress += 1;
        loaderFill.style.width = (progress / 50) * 100 + "%";

        if (progress % 10 === 0) {
            timeLeft--;
            if (timeLeft >= 1) {
                countdownDisplay.innerText = timeLeft;
            }
        }

        if (progress >= 50) {
            clearInterval(timer);
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.transition = '0.5s opacity ease';
            
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
                mainContent.style.display = 'block';
                document.body.classList.add('main-bg-active');
            }, 500);
        }
    }, 100);
};

function openLetter() {
    const modal = document.getElementById('letterModal');
    modal.style.display = "flex"; 
    document.body.style.overflow = "hidden"; 
}

function closeLetter() {
    const modal = document.getElementById('letterModal');
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}


window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target == modal) {
        closeLetter();
    }
}
