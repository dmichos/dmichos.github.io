document.addEventListener('DOMContentLoaded', function() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const rssFeedUrl = 'https://api.msrc.microsoft.com/update-guide/rss';
    
    fetch(proxyUrl + rssFeedUrl)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then(data => {
            const items = data.querySelectorAll('item');
            let html = '';
            items.forEach(el => {
                const title = el.querySelector('title').textContent;
                const link = el.querySelector('link').textContent;
                html += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            });
            document.getElementById('rss-feed').innerHTML = html;
        })
        .catch(err => console.error('Failed to fetch RSS feed:', err));
});
