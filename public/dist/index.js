const planets = [];
function addPlanet(name, cordinates, situation) {
    planets.push({
        name,
        cordinates,
        situation,
        satelites: []
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
function findPlanets(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet ?? false;
}
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`);
}
function addSatelite(name, planet) {
    planet.satelites.push(name);
    alert(`Satélite ${name} adicionado ao planeta ${planet.name}.`);
}
function removeSatelite(name, planet) {
    planet.satelites = planet.satelites.filter(satelite => satelite !== name);
    alert(`Satélite ${name} removido de ${planet.name}.`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationPrompt = prompt('Informe a situação do planeta:\n1 - Habitado\n2 - Habitável\n3 - Inábitavel\n4 - Inexplorado\n');
        switch (situationPrompt) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inábitavel";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida.");
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callbackfn) {
    const planetName = prompt('Informe o nome do planeta: ');
    const planet = findPlanets(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert(`Planeta não encontrado! Retornando ao menu...`);
    }
}
function firstMenuOption() {
    const name = prompt('Informe o nome do planetaL: ');
    const cordinateA = Number(prompt('Informe a primeira cordenada: '));
    const cordinateB = Number(prompt('Informe a segunda cordenada: '));
    const cordinateC = Number(prompt('Informe a terceira cordenada: '));
    const cordinateD = Number(prompt('Informe a quarta cordenada: '));
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}? 
    Cordenadas: (${cordinateA}, ${cordinateB}, ${cordinateC}, ${cordinateD})
    Situação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [cordinateA, cordinateB, cordinateC, cordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satelite = prompt('Informe o nome do satélite a ser adicionado: ');
        addSatelite(satelite, planet);
    });
}
function fourtMenuOption() {
    promptValidPlanet(planet => {
        const satélite = prompt('Informe o nome do satélite a ser removido: ');
        removeSatelite(satélite, planet);
    });
}
function fifthMenuOption() {
    let list = 'Planetas: \n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.cordinates;
        list += ` 
        Nome: ${planet.name}
        Cordenadas: ${planet.cordinates}
        Situação: ${planet.situation}
        Satélites: ${planet.satelites}`;
        planet.satelites.forEach(satelite => {
            list += ` - ${satelite}`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Listar todos os planetas
    6 - Sair`;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourtMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('Encerrando aplicação...');
        default:
            alert('Opção inválida');
    }
}
