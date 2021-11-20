function download(url) {
    filename = new URL(url)['pathname'].split('/').pop()
    fetch(url)
      .then(resp => resp.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
      
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
      
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      
        console.log(`${filename} downloaded`);
      })
      .catch(() => console.error(`${filename} wasn't downloaded`))
}

document.querySelector('img.NCYx-').click()
await new Promise(r => setTimeout(r, 5000));

let it = setInterval(() => {
    button = document.querySelector('button[aria-label="Next"]');
    if (!button) {
        console.log("Done")
        clearInterval(it)
    }

    video = document.querySelector('source');
    img = document.querySelector('img.y-yJ5')

    link = video || img;
    src = link.getAttribute('src')

    download(src);
   
    button.click()
}, 1000)
