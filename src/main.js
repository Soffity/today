function Load() {
    document.getElementById('date_title').innerText = "Day of " + new Date().toLocaleDateString();
    let tle = document.getElementById('date_title');
    let u1_img = document.getElementById('unit1_img');
    let Timer = document.getElementById('unit4_text');
    let u1_txt = document.getElementById('unit1_img_text');
    let quo = document.getElementById('quote');
    let quo_a = document.getElementById('q-author');
    let xhr = new XMLHttpRequest();
    document.getElementById('weather').setAttribute('src', 'http://www.7timer.info/bin/civil.php?lon=51.899976&lat=51.641874&ac=0&lang=ru&unit=metric&output=internal&tzshift=0');
    url = 'https://api.adviceslip.com/advice?id=' + String(Math.floor(Math.random() * 101))
    xhr.open('GET', url, false) 
    xhr.send()
    resp = JSON.parse(xhr.responseText)
    document.getElementById('unit3_text').innerText = resp.slip.advice;
    xhr.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=dCQ9Kq6s2gcXmY9CkgenKXGJ1wBgfj8fQnRltIhH', false)
    xhr.send()
    data = JSON.parse(xhr.responseText)
            u1_img.setAttribute('src', data.url);
            u1_img.setAttribute('title', data.url);
            u1_txt.innerText = data.explanation;
     
    xhr.open('GET','files/quotes.json', false)
    xhr.send()
    data = JSON.parse(xhr.responseText)
        let q = data.list[Math.floor(Math.random() * 1644)];
        quo.innerHTML = q.text;
        quo_a.innerHTML = q.author;
    for (let index = 0; index < document.getElementsByTagName('div').length; index++) {
        const element = document.getElementsByTagName('div')[index];
        element.style.display = 'block';
    }
    setInterval(function() {
        Timer.innerText = new Date().toTimeString().split(' ')[0];
    }, 900);
}