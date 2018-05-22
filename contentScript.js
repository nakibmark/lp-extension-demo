fetch(chrome.extension.getURL("/modal.html"))
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML += data;
        modalFunction();
    })
    .catch(err => console.error("Extension error loading modal html: " + err))

function modalFunction(){
    let links = document.getElementsByTagName("a");
    let modal = document.getElementById("extension-modal");
    let close = document.getElementById("close-modal");

    for (let link of links) {
        link.addEventListener("click", event => {
            event.preventDefault();
            modal.style.display = "block";
        });
    }

    close.onclick = () => modal.style.display = "none";
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
