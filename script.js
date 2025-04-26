const user = document.querySelector('.nome');
const curso = document.querySelector('.curso');
const faculdade = document.querySelector('.ensino-superior');
const cargo = document.querySelector('.cargo');
const skills = document.querySelector('.skills');
const objetivo = document.querySelector('.objetivo');
const idade = document.querySelector('.idade');
const localizacao = document.querySelector('.local');
const foto = document.querySelector('.foto-apresentacao');
const projetos = document.querySelector('.projeto');
const exp = document.querySelector('.experience');


fetch('pt.json')
    .then(response => response.json())
    .then(data => {
        objetivo.innerHTML = data.goals;
        foto.src = data.imagem;
        user.innerHTML = data.nome;
        idade.innerHTML = data.age;
        curso.innerHTML = data.curso;
        faculdade.innerHTML = data.faculdade;
        localizacao.innerHTML = data.location;
        cargo.innerHTML = data.cargo;
        skills.innerHTML = data.skills.join("<br>");
        projetos.innerHTML = data.projects.join("<br>");
        exp.innerHTML = data.experiences.join("<br>");
    });