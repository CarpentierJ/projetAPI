var button = document.getElementById('button1');
button.addEventListener('click', function () {
    let input1 = document.getElementById('Login')
    let input2 = document.getElementById('Password')
    appelApi(input1.value, input2.value);
});


function appelApi(nom, mdp) {
    const data = { Login: nom, Password: mdp };

    const url = `http://192.168.65.242:4005/addUser`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête HTTP');
            }
            return response.json();
        })
        .then(responseData => {
            if (responseData.success) {
                console.log('Réponse de l\'API :', responseData);
                var tableau = document.getElementById("Labels");
                var nouvelleLigne = tableau.insertRow();
                nouvelleLigne.insertCell(0).innerHTML = responseData.Login;
                nouvelleLigne.insertCell(1).innerHTML = responseData.Password;
            } else {
                console.log('Réponse de l\'API :', "Insert Ko");
                alert("Opération réussie!");
            }
        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

const apiUrl = `http://192.168.65.242:4005`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }
        return response.json();
    })
    .then(data => {
        let div = document.getElementById("toto");
        var table = document.createElement("table");
        table.id = "Labels";
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(i + 0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = data[i].login;
            cell2.innerHTML = data[i].mdp;
        }
        div.appendChild(table);
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
