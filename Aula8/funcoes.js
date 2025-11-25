function testesTipos() {
    let a = 10;
    let b = 26.62;
    let c = false;
    let d = 'Jonas';
    let e = [];
    let f = {};
    let g = "Luma";
    let h = `${d} e ${g} são irmãos!`;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(h);
    console.log(Number.parseInt('1' + 1));
}

function testesLetConstVar() {
    if (true) {
        var a = 10;
    }
    console.log(a);

    const v = [2,3,5,8];
    v[0] = 10;
    console.log(v);

    const d = 45;
    d = 80;

    if (true) {
        let b = 10;
    }
    console.log(b);
}

function testesControles() {
    const opt = confirm('Certeza?');
    if (opt) {
        alert('Feito');
    } else {
        alert('Cancelado.');
    }
}

function testesRepeticao() {
    for (let i = 0; i < 15; i++) {
        console.log(i * 2);        
    }
    let i = 100;
    while (i < 120) {
        console.log(i);
        i++;
    }
}

function testesObjetos() {
    const pessoa = {
        "nome": 'Kiko',
        "idade": 87,
        "cpf": '111.111.111-11'
    };
    console.log(typeof pessoa);
    console.log(pessoa)
    console.log(pessoa.nome);
}

function testesArray() {
    const generico = [12, 'Maria',45];
    console.log(typeof generico);
    console.log(generico);

    for (let i = 0; i < generico.length; i++) {
        console.log(generico[i]);        
    }
}

function testesArrayComObjetos() {
    const pessoas = [
        {"nome": 'Calebe', "idade": 18},
        {"nome": 'Kayky', "idade": 88},
        {"nome": 'Lucas', "idade": 100}
    ]
    for (let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i].nome +
            ': ' +
            pessoas[i].idade
        );        
    }
}

function testesObjetosComArray() {
    const pessoa = {
        "nome": 'PI',
        "idade": 11,
        "dependentes": [
            'Ana', 'Paula', 'Isaias'
        ]
    };
}