const videoThumbnails = document.querySelectorAll('.lazy-video-thumbnail')
const handleLoadVideo = ({ target }) => {
    target.classList.add("hidden");
    const frame = target.nextElementSibling
    if (frame) {
        frame.setAttribute("src", frame.dataset.src)
        frame.classList.remove('hidden')
    }
}
videoThumbnails.forEach(el => el.addEventListener('click', handleLoadVideo))