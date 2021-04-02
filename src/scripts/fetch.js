function status() {
    fetch('http://localhost:8083/')
        .then(response => response.json())
        .then(data => {
            let select = document.getElementById("fruits");
            data.list.forEach(element => {
               select.innerHTML += "<option value='" + element.name + "'>" + element.name + "</option>";
            });
            let res = document.getElementById("res");
            res.innerText = data.total
            console.log(data);
        });        
}

    let btn = document.getElementById("scan");
    btn.addEventListener("click", () => {
        let sel = document.getElementById("fruits").value;
        let select = document.getElementById("fruits");
        fetch('http://localhost:8083/panier', {
            mode: "no-cors",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fruit: sel})
        })
        .then(_ =>{ 
            status();
            select.innerHTML = ""
        })
    });    

    status();

