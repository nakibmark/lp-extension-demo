let nodes = document.getElementsByTagName("a");
for (let node of nodes) {
    node.addEventListener("click", event => {
        event.preventDefault();
        window.alert("You clicked on " + node.textContent + "!");
    });
}
