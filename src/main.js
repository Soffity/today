function Load() {
    document.getElementById('date_title').innerText = "Day of " + new Date().toLocaleDateString();
    let tle = document.getElementById('date_title');
    let u1_img = document.getElementById('unit1_img');
    let Timer = document.getElementById('unit4_text');
    let u1_txt = document.getElementById('unit1_img_text');
    let quo = document.getElementById('quote');
    let quo_a = document.getElementById('q-author');
    document.getElementById('weather').setAttribute('src', 'http://www.7timer.info/bin/civil.php?lon=51.899976&lat=51.641874&ac=0&lang=ru&unit=metric&output=internal&tzshift=0');
    fetch('https://api.adviceslip.com/advice?id=' + String(Math.floor(Math.random() * 101)))
        .then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById('unit3_text').innerText = data.slip.advice;
        });
    fetch('https://api.nasa.gov/planetary/apod?api_key=dCQ9Kq6s2gcXmY9CkgenKXGJ1wBgfj8fQnRltIhH')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            u1_img.setAttribute('src', data.url);
            u1_img.setAttribute('title', data.url);
            u1_txt.innerText = data.explanation;
        });
    fetch('files/quotes.json').then((response) => {
        return response.json();
    }).then((data) => {
        let q = data.list[Math.floor(Math.random() * 1644)];
        quo.innerHTML = q.text;
        quo_a.innerHTML = q.author;
    });
    for (let index = 0; index < document.getElementsByTagName('div').length; index++) {
        const element = document.getElementsByTagName('div')[index];
        element.style.display = 'block';
    }
    setInterval(function() {
        Timer.innerText = new Date().toTimeString().split(' ')[0];
    }, 900);
}