var button = document.getElementById('button1');
button.addEventListener('click', function () {
    let input1 = document.getElementById('Login')
    let input2 = document.getElementById('Password')
    appelApi(input1.value, input2.value);
});


function appelApi(Login, Password) {
    const data = { Login: pseudo, Password: mdp };

    fetch('http://192.168.65.242/projetAPI', {
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
                var tableau = document.getElementById("container");
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
        var table = document.createElement("table");
        table.id = "User";
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow(i + 0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = data[i].pseudo;
            cell2.innerHTML = data[i].mdp;
        }
        div.appendChild(table);
        console.log(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
