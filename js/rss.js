document.addEventListener('DOMContentLoaded', function() {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const rssFeedUrl = encodeURIComponent('https://api.msrc.microsoft.com/update-guide/rss');

    fetch(proxyUrl + rssFeedUrl)
        .then(response => response.json())
        .then(data => {
            const parser = new window.DOMParser();
            const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');
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
