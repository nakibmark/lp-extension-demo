let nodes = document.getElementsByTagName("h1");
for (let node of nodes) {
    node.addEventListener("click", event => {
        window.alert("You clicked on the H1!")
    });
}
