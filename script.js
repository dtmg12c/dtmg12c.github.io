
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('lightgallery'), {
        // Options here
        plugins: [lgThumbnail, lgFullscreen],
        speed: 500,
        height: '90vh', // Adjust height as needed
        width: '90vw', // Adjust width as needed
        mode: 'lg-fade', // Choose transition effect
        download: false, // Disable download button
        thumbnail: true, // Enable thumbnails
        fullScreen: true, // Enable fullscreen mode
        mousewheel: true, // Enable mousewheel navigation
        autoplay: false, // Disable autoplay
        zoom: true, // Enable zoom on images
        hash: false, // Disable deeplinking with hashes
        lazyLoad : true
    });
});
