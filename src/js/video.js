let videos = document.querySelectorAll('.video'); // select all .video elements

for (var i = 0; i < videos.length; i++) { // for each
    videos[i].addEventListener('click', function() { // on click
        var iframe = document.createElement('iframe'); // create <iframe>
        iframe.setAttribute('allowfullscreen', ''); // set attributes
        iframe.setAttribute('allow', 'autoplay; fullscreen');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/'+ this.dataset.videoid +'?autoplay=1'); // populate video ID
        this.innerHTML = ''; // remove existing HTML (<a> & <img>)
        this.appendChild(iframe); // replace with <iframe>
        event.preventDefault(); // prevent link action
    });
};