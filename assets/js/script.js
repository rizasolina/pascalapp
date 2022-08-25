function loadProgram() {
    fetch('../../program.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('data-program').innerHTML = ""
        const json = JSON.stringify(data.program);
        const result = JSON.parse(json);
        for (let i = 0; i < result.length; i++) {
            document.getElementById('data-program').innerHTML += `
            <div class="card">
                    <img src="${result[i].img}" alt="">
                    <div class="card-body">
                        <h4>${result[i].name}</h4>
                    </div>
                </div>`;
        }
    }).catch(err => {
        console.error(err);
    })
}

loadProgram();