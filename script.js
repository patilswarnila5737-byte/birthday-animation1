window.onload = function() {
    let timeLeft = 5;
    let progress = 0;
    const countdownDisplay = document.getElementById('countdown');
    const loaderFill = document.getElementById('loader-fill');
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContent = document.getElementById('main-content');

    // लोडिंग बार आणि काउंटडाऊनचे लॉजिक
    const timer = setInterval(() => {
        progress += 1;
        loaderFill.style.width = (progress / 50) * 100 + "%"; // ५ सेकंद = ५० स्टेप्स (दर १००ms)

        // दर १ सेकंदाला नंबर बदलण्यासाठी
        if (progress % 10 === 0) {
            timeLeft--;
            if (timeLeft >= 1) {
                countdownDisplay.innerText = timeLeft;
            }
        }

        // ५ सेकंद पूर्ण झाल्यावर
        if (progress >= 50) {
            clearInterval(timer);
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.transition = '0.5s';
            
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
    modal.style.display = "flex"; // "block" ऐवजी "flex" वापरा
    document.body.style.overflow = "hidden"; // पत्र उघडल्यावर स्क्रोलिंग बंद
}

function closeLetter() {
    const modal = document.getElementById('letterModal');
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
