const user = document.querySelector('.nome');
const curso = document.querySelector('.curso');
const faculdade = document.querySelector('.ensino-superior');
const cargo = document.querySelector('.cargo');
const skills = document.querySelector('.skills');
const objetivo = document.querySelector('.objetivo');
const idade = document.querySelector('.idade');
const localizacao = document.querySelector('.local');
const foto = document.querySelector('.foto-apresentacao');

function english() {
}
function portugues() {

}

function espanol() {

}

fetch('pt.json')
    .then(response => response.json())
    .then(data => {

        user.innerHTML = data.nome;
        idade.innerHTML = data.age;
        curso.innerHTML = data.curso;
        faculdade.innerHTML = data.faculdade;
        localizacao.innerHTML = data.location;
        cargo.innerHTML = data.cargo;
        objetivo.innerHTML = data.goals;
        skills.innerHTML = data.skills.join("<br>");
        foto.src = data.imagem;


    });