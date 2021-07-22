const tabs = document.querySelectorAll('.tabs')

const handleSwitchTab = ({ target }) => {
    const tab = document.getElementById(`tab-${target.dataset.id}`)
    if (tab) {
        target.closest('.tabs').querySelectorAll('.active').forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
    }
}

tabs.forEach(el => {
    el.querySelectorAll('.tab-controller').forEach(c => c.addEventListener('click', handleSwitchTab))
})