function gerar() {
  var res9A = document.getElementById("res9A");
  var res9B = document.getElementById("res9B");
  var res1A = document.getElementById("res1A");
  var res1B = document.getElementById("res1B");
  var res2A = document.getElementById("res2A");
  var res2B = document.getElementById("res2B");
  var res3B = document.getElementById("res3B");
  res9A.innerHTML = "";
  res9B.innerHTML = "";
  res1A.innerHTML = "";
  res1B.innerHTML = "";
  res2A.innerHTML = "";
  res2B.innerHTML = "";
  res3B.innerHTML = "";
  var alunos9A;
  var alunos9B;
  var alunos1A;
  var alunos1B;
  var alunos2A;
  var alunos2B;

  function definindoAlunos() {
    alunos9A = [
        "ALICE ARAÚJO",
        "ANA CLARA SILVA",
        "ANA LAURA",
        "ANA LUÍSA SANTOS",
        "ANDRÉ DA COSTA",
        "ANGELINA VIEIRA",
        "ANITA HELENA",
        "ARTHUR SILVA",
        "BRUNA GUALBERTO",
        "CAIO GABRIEL",
        "CAIO MESQUITA",
        "DEBORA FERNANDES",
        "ENRIQUE RIBEIRO",
        "GABRIEL BARBOSA",
        "GABRIELA MADEIRA",
        "GUILHERME RODRIGUES",
        "GUSTAVO JULIATE",
        "HELENA DE PAULA",
        "HENRIQUE RIBEIRO",
        "JOÃO VITOR SIQUEIRA",
        "LEONARDO FELIPE",
        "LILIAN DE CÁSSIA",
        "LUCAS DESLANDES",
        "LUCIANO TEIXEIRA",
        "MARCELA MESQUITA",
        "MARIA EDUARDA",
        "MARIA LUIZA PÁDUA",
        "MARIANA PIERANGELI",
        "MARINA PEREIRA",
        "OTÁVIO CREPALDI",
        "OTÁVIO CUSTÓDIO",
        "OTÁVIO HENRIQUE",
        "PEDRO FRANÇA",
        "PEDRO MARQUES",
        "SOPHIA ABREU",
        "VINÍCIUS RODRIGUES",
    ];

    alunos9B = [
        "ÁGATHA JUVENCIO",
        "ÁLVARO MADEIRA",
        "ANA LUIZA",
        "ANDRÉ LUIZ",
        "ANITA LOESCH",
        "CAIO DE SOUZA",
        "CAMILA MAGALHÃES",
        "DAVI TEIXEIRA",
        "EDUARDA ANDRADE",
        "EMILLY HIPOLITO",
        "FERNANDO CARVALHO",
        "GABRIELLA GALDONE",
        "GUSTAVO GUEDES",
        "IAN PINHEIRO ",
        "IGOR VITORINO",
        "JOÃO VITOR AZEVEDO",
        "JÚLIA LEITE",
        "KELLY DIAS DINIZ",
        "LAÍS LINHARES",
        "LAUDOMILA MARIA",
        "LAURA TEIXEIRA",
        "LEONARDO MATHEUS",
        "LETÍCIA GAMA",
        "LETÍCIA MACHADO",
        "LIRIS RAMOS",
        "LIVIA DE ALMEIDA",
        "LUÍS ANTÔNIO LIMA",
        "MARCELA FERNANDA",
        "MARCUS HENRIQUE",
        "MARIA C. SILVA",
        "MARIA C. BORGES",
        "MARIA FERNANDA",
        "MARIA LUÍSA",
        "MARIA PAULA",
        "MIGUEL ANDRADE",
        "STELA OLIVEIRA",
        "IVAN FLORES",
        "SARA RAYNEE",
        "ERIC MARTIMIANO",
    ];

    alunos1A = [
      "ANA CLARA",
      "ANA GABRIELA",
      "ANA JÚLIA",
      "ANA PAULA",
      "ANNITA BERTILACCHI",
      "ANTÔNIO HENRIQUE",
      "ANTÔNIO MORETTI",
      "AQUILES GONÇALVES",
      "ARTHUR MENESES",
      "BIANCA TONETTI",
      "BRENO HENRIQUE",
      "FÁDUA DE FATIMA",
      "FERNANDA ALVES",
      "GABRIEL COSTA",
      "GEOVANA ZACARONI",
      "GEOVANNA MADEIRA",
      "GUILHERME FREIRE",
      "GUSTAVO SOUZA",
      "HELENA DE RESENDE",
      "JOÃO EDUARDO",
      "JOÃO VITTOR",
      "JÚLIA FERNANDES",
      "LAÍS CRISTINA",
      "LEONARDO NESTOR",
      "LUIZ PAULO",
      "LUIZA SILVA",
      "MARIA E. BARTHOLO",
      "MARIA E. VIGILATO",
      "MATHEUS ARAÚJO",
      "MATHEUS GUERRA",
      "PEDRO CARVALHO",
      "PEDRO DESLANDES",
      "PEDRO UMEMURA",
      "RAUL CARVALHO",
      "RODRIGO ALVES",
    ];

    alunos1B = [
      "ALICE ARRIEL",
      "ANA LAURA",
      // "BERNARDO BARBOSA",
      "CLEO CARVALHO",
      "EMILLY SILVA",
      "ERICK ZAKHIA ",
      "FELIPE SODRE",
      "GABRIELA LIMA",
      "GIOVANA PEREIRA",
      "GIOVANNA JÚLIA",
      "IAGO MOREIRA",
      "JAMYLE ALBINO",
      "JÚLIA BOTELHO",
      "LARA COSTA",
      "LARA CRISTINA",
      "LAURA CAMILLY",
      "LORENA LAÍS",
      "LUIZ FELIPE",
      "MARIA E. BOTELHO",
      "MARIA E. OLIVEIRA",
      "MARIA LUIZA",
      "MATHEUS PEREIRA",
      "MATHEUS ESTEVES",
      "OTÁVIO BARROSO",
      "PEDRO HENRIQUE",
      "PEDRO OTÁVIO",
      "PIERRE PIVATO",
      "RAFAELLA RESENDE",
      "SABRINA INES",
    ];
    alunos2A = [
      "ALICE MENEZES",
      "ANA BEATRIZ",
      "ANA CLARA",
      "ANA LUIZA",
      "ANTONIO HENRIQUE",
      "DANIEL COELHO",
      "DANIEL DE CASTRO",
      "GABRIELLA OLIVEIRA",
      "GUILHERME MENDES",
      "JOÃO BATISTA",
      "JOÃO P. WOUTERS",
      "JOÃO P. DA SILVA",
      "JOAO P. MENDES",
      "JOÃO VICTOR",
      "LÍVIA MARIA",
      "LUCAS BORGES",
      "LUCAS SEIJI",
      "LUIGI OLIVEIRA",
      "LUÍS EDUARDO",
      "MARIA CLARA ",
      "MATEUS FRANCO",
      "MATHEUS FELIPE",
      "PEDRO ALENCAR",
      "PEDRO HENRIQUE",
      "RYAN CARLO",
      "VERONICA OLIVEIRA",
      "VITOR CARVALHO",
      "SANDRA PEREIRA",
    ];
    alunos2B = [
      "BETINA LOESCH",
      "CAROLINA MARQUES",
      "DAVI NASCIMENTO",
      "EDUARDA TAYSLA",
      "FELIPE FAZA",
      "FELIPE NASCIMENTO",
      "GUSTAVO ALESSANDRO",
      "GUSTAVO HENRIQUE",
      "HENRIQUE CRESPO",
      "IGNÁCIO DANIEL",
      "ISABELLY CHRISTINE",
      "ISRAEL PULHEZ",
      "JÚLIA DE OLIVEIRA",
      "LARA RESENDE",
      "LERRANYA VICTÓRIA",
      "LUCAS ALVES",
      "LUCAS DE MESQUITA",
      "MARIA CLARA",
      "MARIA EDUARDA",
      "MARIA LUIZA",
      "MATEUS VITOR",
      "MURILO CARVALHO",
      "MURILO SOARES",
      "THIAGO ANTÔNIO",
      "VICTÓRIA MARIA",
      "VITORIO AUGUSTO",
      "SOPHIA MARIA",
    ];
    // console.log(alunos9A.length, alunos9B.length, alunos1A.length, alunos1B.length, alunos2A.length, alunos2B.length, alunos3A.length, alunos3B.length)
  }
  
  var sala9A = [];
  var sala9B = [];
  var sala1A = [];
  var sala1B = [];
  var sala2A = [];
  var sala2B = [];
  var sala3B = [];

  var alunos9A9A = [];
  var alunos9A9B = []; // alunos 9b na sala 9a
  var alunos9A1A = [];
  var alunos9A1B = [];
  var alunos9A2A = [];
  var alunos9A2B = [];
  var alunos9A3B = [];

  var alunos9B9A = [];
  var alunos9B9B = [];
  var alunos9B1A = [];
  var alunos9B1B = [];
  var alunos9B2A = [];
  var alunos9B2B = [];
  var alunos9B3B = [];

  var alunos1A9A = [];
  var alunos1A9B = [];
  var alunos1A1A = [];
  var alunos1A1B = [];
  var alunos1A2A = [];
  var alunos1A2B = [];
  var alunos1A3B = [];

  var alunos1B9A = [];
  var alunos1B9B = [];
  var alunos1B1A = [];
  var alunos1B1B = [];
  var alunos1B2A = [];
  var alunos1B2B = [];
  var alunos1B3B = [];

  var alunos2A9A = [];
  var alunos2A9B = [];
  var alunos2A1A = [];
  var alunos2A1B = [];
  var alunos2A2A = [];
  var alunos2A2B = [];
  var alunos2A3B = [];

  var alunos2B9A = [];
  var alunos2B9B = [];
  var alunos2B1A = [];
  var alunos2B1B = [];
  var alunos2B2A = [];
  var alunos2B2B = [];
  var alunos2B3B = [];


  var alunos3B9A = [];
  var alunos3B9B = [];
  var alunos3B1A = [];
  var alunos3B1B = [];
  var alunos3B2A = [];
  var alunos3B2B = [];
  var alunos3B3B = [];

  definindoAlunos();
  function randomArrayShuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  function randomizingTheOrderOfTheStudents() {
    randomArrayShuffle(alunos9A);
    randomArrayShuffle(alunos9B);
    randomArrayShuffle(alunos1A);
    randomArrayShuffle(alunos1B);
    randomArrayShuffle(alunos2B);
    randomArrayShuffle(alunos2A);

    function addStudentsAt9A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9A.push(room[i])
        if (room == alunos9A) {
          alunos9A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9A2B.push(room[i]);
        } 
        alunos9A9A.sort();
        alunos9A9B.sort();
        alunos9A1A.sort();
        alunos9A1B.sort();
        alunos9A2A.sort();
        alunos9A2B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    
    addStudentsAt9A(alunos9A, 5);
    addStudentsAt9A(alunos9B, 6);
    addStudentsAt9A(alunos1A, 5);
    addStudentsAt9A(alunos1B, 4);
    addStudentsAt9A(alunos2A, 4);
    addStudentsAt9A(alunos2B, 4);

    function addStudentsAt9B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala9B.push(room[i])
        if (room == alunos9A) {
          alunos9B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos9B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos9B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos9B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos9B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos9B2B.push(room[i]);
        } 
        alunos9B9A.sort();
        alunos9B9B.sort();
        alunos9B1A.sort();
        alunos9B1B.sort();
        alunos9B2A.sort();
        alunos9B2B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    
    addStudentsAt9B(alunos9A, 6);
    addStudentsAt9B(alunos9B, 6);
    addStudentsAt9B(alunos1A, 5);
    addStudentsAt9B(alunos1B, 4);
    addStudentsAt9B(alunos2A, 4);
    addStudentsAt9B(alunos2B, 4);

    function addStudentsAt1A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1A.push(room[i])
        if (room == alunos9A) {
          alunos1A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1A2B.push(room[i]);
        } 
        alunos1A9A.sort();
        alunos1A9B.sort();
        alunos1A1A.sort();
        alunos1A1B.sort();
        alunos1A2A.sort();
        alunos1A2B.sort();
      }
      room.splice(0, numberOfStudents);
    }
    

    addStudentsAt1A(alunos9A, 5);
    addStudentsAt1A(alunos9B, 6);
    addStudentsAt1A(alunos1A, 5);
    addStudentsAt1A(alunos1B, 4);
    addStudentsAt1A(alunos2A, 4);
    addStudentsAt1A(alunos2B, 4);

    //SALA 1B:
    function addStudentsAt1B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala1B.push(room[i])
        if (room == alunos9A) {
          alunos1B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos1B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos1B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos1B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos1B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos1B2B.push(room[i]);
        }
        alunos1B9A.sort();
        alunos1B9B.sort();
        alunos1B1A.sort();
        alunos1B1B.sort();
        alunos1B2A.sort();
        alunos1B2B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    

    addStudentsAt1B(alunos9A, 5);
    addStudentsAt1B(alunos9B, 5);
    addStudentsAt1B(alunos1A, 5);
    addStudentsAt1B(alunos1B, 4);
    addStudentsAt1B(alunos2A, 4);
    addStudentsAt1B(alunos2B, 4);

    //SALA 2A:
    function addStudentsAt2A(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2A.push(room[i])
        if (room == alunos9A) {
          alunos2A9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2A9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2A1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2A1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2A2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2A2B.push(room[i]);
        }
        alunos2A9A.sort();
        alunos2A9B.sort();
        alunos2A1A.sort();
        alunos2A1B.sort();
        alunos2A2A.sort();
        alunos2A2B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    

    addStudentsAt2A(alunos9A, 5);
    addStudentsAt2A(alunos9B, 5);
    addStudentsAt2A(alunos1A, 5);
    addStudentsAt2A(alunos1B, 4);
    addStudentsAt2A(alunos2A, 4);
    addStudentsAt2A(alunos2B, 4);

    //SALA 2B:
    function addStudentsAt2B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala2B.push(room[i])
        if (room == alunos9A) {
          alunos2B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos2B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos2B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos2B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos2B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos2B2B.push(room[i]);
        }
        alunos2B9A.sort();
        alunos2B9B.sort();
        alunos2B1A.sort();
        alunos2B1B.sort();
        alunos2B2A.sort();
        alunos2B2B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    
    addStudentsAt2B(alunos9A, 5);
    addStudentsAt2B(alunos9B, 5);
    addStudentsAt2B(alunos1A, 5);
    addStudentsAt2B(alunos1B, 4);
    addStudentsAt2B(alunos2A, 4);
    addStudentsAt2B(alunos2B, 3);

    //SALA 3A:
    /*
                                9A: 5 5 6 4 4 4 4 4
                                9B: 5 6 6 5 4 4 4 5
                                1A: 5 5 4 4 4 4 4 4
                                1B: 5 5 4 5 3 3 3 4
                                2A: 4 4 3 4 3 3 3 4
                                2B: 4 4 4 3 3 3 3 3
                                3A: 4 5 3 3 3 3 3 3
                                3B: 4 5 4 4 4 3 3 5
                                */

    //SALA 3B:
    function addStudentsAt3B(room, numberOfStudents) {
      for (var i = 0; i < numberOfStudents; i++) {
        // sala3B.push(room[i])
        if (room == alunos9A) {
          alunos3B9A.push(room[i]);
        } else if (room == alunos9B) {
          alunos3B9B.push(room[i]);
        } else if (room == alunos1A) {
          alunos3B1A.push(room[i]);
        } else if (room == alunos1B) {
          alunos3B1B.push(room[i]);
        } else if (room == alunos2A) {
          alunos3B2A.push(room[i]);
        } else if (room == alunos2B) {
          alunos3B2B.push(room[i]);
        } 
        alunos3B9A.sort();
        alunos3B9B.sort();
        alunos3B1A.sort();
        alunos3B1B.sort();
        alunos3B2A.sort();
        alunos3B2B.sort();
      }
      room.splice(0, numberOfStudents);
    }

    
    addStudentsAt3B(alunos9A, 5);
    addStudentsAt3B(alunos9B, 6);
    addStudentsAt3B(alunos1A, 5);
    addStudentsAt3B(alunos1B, 4);
    addStudentsAt3B(alunos2A, 4);
    addStudentsAt3B(alunos2B, 4);
  }
  randomizingTheOrderOfTheStudents();
  sala9A.push(
    ...alunos9A9A,
    ...alunos9A9B,
    ...alunos9A1A,
    ...alunos9A1B,
    ...alunos9A2A,
    ...alunos9A2B,
  );

  sala9B.push(
    ...alunos9B9A,
    ...alunos9B9B,
    ...alunos9B1A,
    ...alunos9B1B,
    ...alunos9B2A,
    ...alunos9B2B,
  );

  sala1A.push(
    ...alunos1A9A,
    ...alunos1A9B,
    ...alunos1A1A,
    ...alunos1A1B,
    ...alunos1A2A,
    ...alunos1A2B,
  );

  sala1B.push(
    ...alunos1B9A,
    ...alunos1B9B,
    ...alunos1B1A,
    ...alunos1B1B,
    ...alunos1B2A,
    ...alunos1B2B,
  );

  sala2A.push(
    ...alunos2A9A,
    ...alunos2A9B,
    ...alunos2A1A,
    ...alunos2A1B,
    ...alunos2A2A,
    ...alunos2A2B,
  );

  sala2B.push(
    ...alunos2B9A,
    ...alunos2B9B,
    ...alunos2B1A,
    ...alunos2B1B,
    ...alunos2B2A,
    ...alunos2B2B,
  );

  sala3B.push(
    ...alunos3B9A,
    ...alunos3B9B,
    ...alunos3B1A,
    ...alunos3B1B,
    ...alunos3B2A,
    ...alunos3B2B,
  );

  // for (var i = 0; i < sala9A.length; i++) {
  //   if (i == 0) {
  //     res9A.innerHTML += `<h2>SALA 9A</h2>`;
  //   }
  //   res9A.innerHTML += `${sala9A[i]} <br>`;
  // }
  // for (var i = 0; i < sala9B.length; i++) {
  //   if (i == 0) {
  //     res9B.innerHTML += `<h2>SALA 9B</h2>`;
  //   }
  //   res9B.innerHTML += `${sala9B[i]} <br>`;
  // }
  // for (var i = 0; i < sala1A.length; i++) {
  //   if (i == 0) {
  //     res1A.innerHTML += `<h2>SALA 1A</h2>`;
  //   }
  //   res1A.innerHTML += `${sala1A[i]} <br>`;
  // }
  // for (var i = 0; i < sala1B.length; i++) {
  //   if (i == 0) {
  //     res1B.innerHTML += `<h2>SALA 1B</h2>`;
  //   }
  //   res1B.innerHTML += `${sala1B[i]} <br>`;
  // }
  // for (var i = 0; i < sala2A.length; i++) {
  //   if (i == 0) {
  //     res2A.innerHTML += `<h2>SALA 2A</h2>`;
  //   }
  //   res2A.innerHTML += `${sala2A[i]} <br>`;
  // }
  // for (var i = 0; i < sala2B.length; i++) {
  //   if (i == 0) {
  //     res2B.innerHTML += `<h2>SALA 2B</h2>`;
  //   }
  //   res2B.innerHTML += `${sala2B[i]} <br>`;
  // }
  // for (var i = 0; i < sala3B.length; i++) {
  //   if (i == 0) {
  //     res3B.innerHTML += `<h2>SALA 3B</h2>`;
  //   }
  //   res3B.innerHTML += `${sala3B[i]} <br>`;
  // }

  console.log(sala9A.length);
  console.log(sala9B.length);
  console.log(sala1A.length);
  console.log(sala1B.length);
  console.log(sala2A.length);
  console.log(sala2B.length);
  var res = document.getElementById("res");
  res.innerHTML = `<table border="1"> 
  <tr>
  <td><strong>09/07</strong></td> 
  <td><strong>Alunos do 9ºA</strong></td>
  <td><strong>Alunos do 9ºB</strong></td>
  <td><strong>Alunos do 1ºA</strong></td> 
  <td><strong>Alunos do 1ºB</strong></td>
  <td><strong>Alunos do 2ºA</strong></td>
  <td><strong>Alunos do 2ºB</strong></td>
  </tr>
  <tr>
  <td><strong>Local: <br> Sala 9A</strong></td>
  <td> 

  ${alunos9A9A[0]} <br>
  ${alunos9A9A[1]} <br>
  ${alunos9A9A[2]} <br>
  ${alunos9A9A[3]} <br>
  ${alunos9A9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos9A9B[0]} <br>
  ${alunos9A9B[1]} <br>
  ${alunos9A9B[2]} <br>
  ${alunos9A9B[3]} <br>
  ${alunos9A9B[4]} <br>
  ${alunos9A9B[5]} <br>
  </td>
  
  <td> 
  ${alunos9A1A[0]} <br>
  ${alunos9A1A[1]} <br>
  ${alunos9A1A[2]} <br>
  ${alunos9A1A[3]} <br>
  ${alunos9A1A[4]} <br>
  </td>

  <td> 
  ${alunos9A1B[0]} <br>
  ${alunos9A1B[1]} <br>
  ${alunos9A1B[2]} <br>
  ${alunos9A1B[3]} <br>
  </td>

  <td> 
  ${alunos9A2A[0]} <br>
  ${alunos9A2A[1]} <br>
  ${alunos9A2A[2]} <br>
  ${alunos9A2A[3]} <br>
  </td>
  
  <td> 
  ${alunos9A2B[0]} <br>
  ${alunos9A2B[1]} <br>
  ${alunos9A2B[2]} <br>
  ${alunos9A2B[3]} <br>
  </td>
  </tr>





  <tr>
  <td><strong>Local: <br> Sala 9B</strong></td> 
  <td> 
  
  ${alunos9B9A[0]} <br>
  ${alunos9B9A[1]} <br>
  ${alunos9B9A[2]} <br>
  ${alunos9B9A[3]} <br>
  ${alunos9B9A[4]} <br>
  ${alunos9B9A[5]} <br>
  </td> 
  
  <td> 
  ${alunos9B9B[0]} <br>
  ${alunos9B9B[1]} <br>
  ${alunos9B9B[2]} <br>
  ${alunos9B9B[3]} <br>
  ${alunos9B9B[4]} <br>
  ${alunos9B9B[5]} <br>
  </td>

  <td> 
  ${alunos9B1A[0]} <br>
  ${alunos9B1A[1]} <br>
  ${alunos9B1A[2]} <br>
  ${alunos9B1A[3]} <br>
  ${alunos9B1A[4]} <br>
  </td>

  <td> 
  ${alunos9B1B[0]} <br>
  ${alunos9B1B[1]} <br>
  ${alunos9B1B[2]} <br>
  ${alunos9B1B[3]} <br>
  </td>

  <td> 
  ${alunos9B2A[0]} <br>
  ${alunos9B2A[1]} <br>
  ${alunos9B2A[2]} <br>
  ${alunos9B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos9B2B[0]} <br>
  ${alunos9B2B[1]} <br>
  ${alunos9B2B[2]} <br>
  ${alunos9B2B[3]} <br>
  </td>
  </tr>



  <tr>
  <td><strong>Local: <br> Sala 1A</strong></td>
  <td> 
  
  ${alunos1A9A[0]} <br>
  ${alunos1A9A[1]} <br>
  ${alunos1A9A[2]} <br>
  ${alunos1A9A[3]} <br>
  ${alunos1A9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos1A9B[0]} <br>
  ${alunos1A9B[1]} <br>
  ${alunos1A9B[2]} <br>
  ${alunos1A9B[3]} <br>
  ${alunos1A9B[4]} <br>
  ${alunos1A9B[5]} <br>
  </td>

  <td> 
  ${alunos1A1A[0]} <br>
  ${alunos1A1A[1]} <br>
  ${alunos1A1A[2]} <br>
  ${alunos1A1A[3]} <br>
  ${alunos1A1A[4]} <br>
  </td>

  <td> 
  ${alunos1A1B[0]} <br>
  ${alunos1A1B[1]} <br>
  ${alunos1A1B[2]} <br>
  ${alunos1A1B[3]} <br>
  </td>

  <td> 
  ${alunos1A2A[0]} <br>
  ${alunos1A2A[1]} <br>
  ${alunos1A2A[2]} <br>
  ${alunos1A2A[3]} <br>
  </td>
  
  <td> 
  ${alunos1A2B[0]} <br>
  ${alunos1A2B[1]} <br>
  ${alunos1A2B[2]} <br>
  ${alunos1A2B[3]} <br>
  </td>
  </tr>

  

  <tr>
  <td><strong>Local: <br> Sala 1B</strong></td>
  <td>
  
  ${alunos1B9A[0]} <br>
  ${alunos1B9A[1]} <br>
  ${alunos1B9A[2]} <br>
  ${alunos1B9A[3]} <br>
  ${alunos1B9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos1B9B[0]} <br>
  ${alunos1B9B[1]} <br>
  ${alunos1B9B[2]} <br>
  ${alunos1B9B[3]} <br>
  ${alunos1B9B[4]} <br>
  </td>

  <td> 
  ${alunos1B1A[0]} <br>
  ${alunos1B1A[1]} <br>
  ${alunos1B1A[2]} <br>
  ${alunos1B1A[3]} <br>
  ${alunos1B1A[4]} <br>
  </td>

  <td> 
  ${alunos1B1B[0]} <br>
  ${alunos1B1B[1]} <br>
  ${alunos1B1B[2]} <br>
  ${alunos1B1B[3]} <br>
  </td>

  <td> 
  ${alunos1B2A[0]} <br>
  ${alunos1B2A[1]} <br>
  ${alunos1B1B[2]} <br>
  ${alunos1B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos1B2B[0]} <br>
  ${alunos1B1B[1]} <br>
  ${alunos1B2B[2]} <br>
  ${alunos1B2B[3]} <br>
  </td>
  </tr>


  

  <tr>
  <td><strong>Local: <br> Sala 2A</strong></td>
  <td> 
  ${alunos2A9A[0]} <br>
  ${alunos2A9A[1]} <br>
  ${alunos2A9A[2]} <br>
  ${alunos2A9A[3]} <br>
  ${alunos2A9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos2A9B[0]} <br>
  ${alunos2A9B[1]} <br>
  ${alunos2A9B[2]} <br>
  ${alunos2A9B[3]} <br>
  ${alunos2A9B[4]} <br>
  </td>

  <td> 
  ${alunos2A1A[0]} <br>
  ${alunos2A1A[1]} <br>
  ${alunos2A1A[2]} <br>
  ${alunos2A1A[3]} <br>
  ${alunos2A1A[4]} <br>
  </td>

  <td> 
  ${alunos2A1B[0]} <br>
  ${alunos2A1B[1]} <br>
  ${alunos2A1B[2]} <br>
  ${alunos2A1B[3]} <br>
  </td>

  <td> 
  ${alunos2A2A[0]} <br>
  ${alunos2A2A[1]} <br>
  ${alunos2A2A[2]} <br>
  ${alunos2A2A[3]} <br>
  </td>
  
  <td> 
  ${alunos2A2B[0]} <br>
  ${alunos2A2B[1]} <br>
  ${alunos2A2B[2]} <br>
  ${alunos2A2B[3]} <br>
  </td>
  </tr>



  <tr>
  <td><strong>Local: <br> Sala 2B</strong></td>
  <td> 
  ${alunos2B9A[0]} <br>
  ${alunos2B9A[1]} <br>
  ${alunos2B9A[2]} <br>
  ${alunos2B9A[3]} <br>
  ${alunos2B9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos2B9B[0]} <br>
  ${alunos2B9B[1]} <br>
  ${alunos2B9B[2]} <br>
  ${alunos2B9B[3]} <br>
  ${alunos2B9B[4]} <br>
  </td>

  <td> 
  ${alunos2B1A[0]} <br>
  ${alunos2B1A[1]} <br>
  ${alunos2B1A[2]} <br>
  ${alunos2B1A[3]} <br>
  ${alunos2B1A[4]} <br>
  </td>

  <td> 
  ${alunos2B1B[0]} <br>
  ${alunos2B1B[1]} <br>
  ${alunos2B1B[2]} <br>
  ${alunos2B1B[3]} <br>
  </td>

  <td> 
  ${alunos2B2A[0]} <br>
  ${alunos2B2A[1]} <br>
  ${alunos2B2A[2]} <br>
  ${alunos2B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos2B2B[0]} <br>
  ${alunos2B2B[1]} <br>
  ${alunos2B2B[2]} <br>
  </td>
  </tr>


  


  <tr>

  <tr>
  <td><strong>Local: <br> Sala 3B</strong></td>
  <td> 
  ${alunos3B9A[0]} <br>
  ${alunos3B9A[1]} <br>
  ${alunos3B9A[2]} <br>
  ${alunos3B9A[3]} <br>
  ${alunos3B9A[4]} <br>
  </td> 
  
  <td> 
  ${alunos3B9B[0]} <br>
  ${alunos3B9B[1]} <br>
  ${alunos3B9B[2]} <br>
  ${alunos3B9B[3]} <br>
  ${alunos3B9B[4]} <br>
  ${alunos3B9B[5]} <br>
  </td>

  <td> 
  ${alunos3B1A[0]} <br>
  ${alunos3B1A[1]} <br>
  ${alunos3B1A[2]} <br>
  ${alunos3B1A[3]} <br>
  ${alunos3B1A[4]} <br>
  </td>

  <td> 
  ${alunos3B1B[0]} <br>
  ${alunos3B1B[1]} <br>
  ${alunos3B1B[2]} <br>
  ${alunos3B1B[3]} <br>
  </td>

  <td> 
  ${alunos3B2A[0]} <br>
  ${alunos3B2A[1]} <br>
  ${alunos3B2A[2]} <br>
  ${alunos3B2A[3]} <br>
  </td>
  
  <td> 
  ${alunos3B2B[0]} <br>
  ${alunos3B2B[1]} <br>
  ${alunos3B2B[2]} <br>
  ${alunos3B2B[3]} <br>
  </td>
  </tr>
  </table>`;
}
function gerarPDF() {
  var dados = res.innerHTML;
  var janela = window.open("", "", "width=1200, height=1200");
  janela.document.write("<html><head><style>");
  janela.document.write(
    "table, tr, td { border: 1px solid black; border-collapse: collapse; font-size: 10px;} td {padding: 5px;} body {font-family: Helvetica;} "
  );
  janela.document.write("</style>");
  janela.document.write("</head>");
  janela.document.write("<body>");
  janela.document.write(dados);
  janela.document.write("</body></html>");
  janela.document.close();
  janela.print();
}

/*
        

        9A: 5 5 6 4 4 4 4 4
        9B: 5 6 6 5 4 4 4 5
        1A: 5 5 4 4 4 4 4 4
        1B: 5 5 4 5 3 3 3 4
        2A: 4 4 3 4 3 3 3 4
        2B: 4 4 4 3 3 3 3 3
        3A: 4 5 3 3 3 3 3 3
        3B: 4 5 4 4 4 3 3 5
            9 9 1 1 2 2 3 3

5 5 5 4 4 4 4 5 36
6 5 6 4 4 4 4 6 39
5 5 6 4 4 3 3 5 35
4 5 4 3 3 3 3 3 28
3 5 4 3 3 3 3 4 28
4 5 3 3 3 3 3 3 27
4 4 3 3 3 3 3 3 26
5 5 4 4 4 4 3 4 33

        */
