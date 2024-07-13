fetch('http://yourWebSite.com/api/all')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let table = document.querySelector('#tableId')
        data.forEach(row => {
            let tr = document.createElement('tr');
            tr.appendChild(document.createElement('th').innerText(row.item1))
            tr.appendChild(document.createElement('th').innerText(row.item2))
            tr.appendChild(document.createElement('th').innerText(row.item3))
            table.appendChild(tr)
        })
    });

function mostrar() {
    let archivo = document.getElementById("file").files[0];
    let reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            document.getElementById("img").src = reader.result;
        }
    }
}
