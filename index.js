function rickroll() {
    let doNotClick = document.getElementById('btn');
    const buttonContainer = document.getElementById('button-container');

    doNotClick.addEventListener('click', () => {
        doNotClick.style.display = 'none';

        const video = document.createElement('video');
        video.src = './Rick Roll (Different link + no ads).mp4';
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.position = 'fixed';
        video.style.top = '0';
        video.style.left = '0';
        video.style.objectFit = 'cover';

        const image = document.createElement('img');
        image.src = './troll.png'; 
        image.style.position = 'fixed';
        image.style.top = '10%';  
        image.style.left = '5%';  
        image.style.zIndex = '1';
        image.style.width = '20%';  

        const image2 = document.createElement('img');
        image2.src = './troll.png'; 
        image2.style.position = 'fixed';
        image2.style.top = '10%'; 
        image2.style.right = '5%';  
        image2.style.zIndex = '1';
        image2.style.width = '20%';  

        const text = document.createElement('div');
        text.innerText = 'GET TROLLED BOZO';
        text.style.position = 'fixed';
        text.style.bottom = '5%'; 
        text.style.left = '50%';
        text.style.transform = 'translateX(-50%)';
        text.style.color = 'white';
        text.style.fontWeight = 'bold';
        text.style.fontSize = '4vw';  

        document.body.appendChild(video);
        document.body.appendChild(image);
        document.body.appendChild(image2);
        document.body.appendChild(text);

        video.addEventListener('ended', () => {
            video.remove();
            image.remove();
            image2.remove();
            text.remove();
            
            doNotClick.style.display = 'block';
        });
    });
}

rickroll()

