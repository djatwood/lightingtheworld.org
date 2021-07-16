const toc = document.getElementById('toc')
if (toc) {
    const colorClass = 'text-pigeon-blue'
    const highlightQueue = []

    const getLinkElement = (id) => toc.querySelector(`a[href="#${id}"]`)

    const highlight = (el) => {
        toc.querySelectorAll(`.${colorClass}`).forEach(el => el.classList.remove(colorClass));
        el.classList.add(colorClass);
    }

    const handleIntersection = (events) => {
        events.forEach(event => {
            if (event.isIntersecting) {
                const el = getLinkElement(event.target.id)
                highlightQueue.push(el)
            } else {
                const current = highlightQueue.shift()
                // highlight previous link when going up and the current link is leaving the viewport
                const up = event.boundingClientRect.y > document.documentElement.clientHeight / 2
                if (current && up && highlightQueue.length > 0) {
                    let el = current.closest('li')
                    if (el) el = el.previousElementSibling
                    if (el) el = el.querySelector('a')
                    if (el) highlight(el)
                }
            }

            if (highlightQueue.length > 0) highlight(highlightQueue[0])
        })
    }

    const observer = new IntersectionObserver(handleIntersection, { rootMargin: `-${document.documentElement.clientHeight / 3}px` })
    const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((tag) => 'main>' + tag).join(',')
    document.querySelectorAll(headers).forEach(el => observer.observe(el))


    const smoothScroll = (event) => {
        event.preventDefault()
        const id = event.target.getAttribute('href').slice(1)
        document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' })
        highlight(getLinkElement(id))
    }

    toc.querySelectorAll('a').forEach(el => el.addEventListener('click', smoothScroll))
}