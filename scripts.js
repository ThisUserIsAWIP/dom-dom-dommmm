window.addEventListener('DOMContentLoaded', function () {
    let masterdiv = document.createElement('div');
    let button = document.createElement('button');
    let btntxt = document.createTextNode("Add Square");
    button.appendChild(btntxt);
    masterdiv.appendChild(button);
    document.body.appendChild(masterdiv);
    button.setAttribute("type", "button");
    masterdiv.style.display = 'flex';
    masterdiv.style.flexFlow = "row wrap";
    idCounter = 0;

    button.addEventListener('click', function () {
        let blksq = document.createElement('div');
        blksq.className = "blksq";
        masterdiv.appendChild(blksq);
        blksq.id = ++idCounter;
        let blksqtxt = blksq.id
        blksq.addEventListener("mouseover", function () {
            blksq.textContent = blksqtxt;
        });
        blksq.addEventListener("mouseout", function () {
            blksq.textContent = "";
        });
        let colors = ['blue', 'peach', 'pink', 'red', 'orange', 'green', 'yellow', 'purple']
        blksq.addEventListener('click', function () {
            let randomnumber = Math.floor(Math.random() * colors.length)
            blksq.style.backgroundColor = colors[randomnumber]
        });
        blksq.addEventListener("dblclick", function (event) {
            if (idCounter % 2 === 0) {
                if (event.target.nextSibling === null) {
                    alert = "no squares after";
                } else {
                    masterdiv.removeChild(event.target.nextSibling);
                }
            } else {
                if (event.target.previousSibling === null) {
                    alert = "no squares before";
                } else {
                    masterdiv.removeChild(event.target.previousSibling);
                }
            }
        });
    });
    
}); 
