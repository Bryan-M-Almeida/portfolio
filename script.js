/* idioma */
const imagemBandeira = document.querySelector('.flag-icon');
const seletorSite = document.getElementById('idiomaSite');

/* sobre */
const user = document.querySelector('.nome');
const idade = document.querySelector('.idade');
const curso = document.querySelector('.curso');
const facul = document.querySelector('.ensino-superior');
const localizacao = document.querySelector('.local');
const cargo = document.querySelector('.cargo');


const foto = document.querySelector('.foto-apresentacao');

/* experiência */
const exp = document.querySelector('.experience');

/* projetos */
const projetos = document.querySelector('.projeto');

/* objetivos */
const objetivo = document.querySelector('.objetivo');

/* tecnologias */
const skills = document.querySelector('.skills');

/* json */
fetch('pt.json')
    .then(response => response.json())
    .then(data => {

        function idiomaDoSite(site) {
            switch (site) {
                case 'br':
                    imagemBandeira.src = data.bandeira.brasil;
                    break;
                case 'us':
                    imagemBandeira.src = data.bandeira.eua;
                    break;
                case 'es':
                    imagemBandeira.src = data.bandeira.espanha;
                    break;
                default:
                    imagemBandeira.src = data.bandeira.brasil;
            }
        }

        seletorSite.addEventListener('change', () => {
            idiomaDoSite(seletorSite.value);
        });
        idiomaDoSite(seletorCurriculo.value);
        /* sobre */
        foto.src = data.imagem;
        user.innerHTML = data.nome;
        idade.innerHTML = data.age;
        curso.innerHTML = data.curso;
        facul.innerHTML = data.faculdade;
        localizacao.innerHTML = data.location;
        cargo.innerHTML = data.cargo;

        /* experiência */
        exp.innerHTML = data.experiences.join("<br>");

        /* objetivos */
        objetivo.innerHTML = data.goals;

        /* tecnologias */
        skills.innerHTML = data.skills.join("<br>");

        /* projetos */
        projetos.innerHTML = data.projects.join("<br>");
    });

const seletorCurriculo = document.getElementById('seletor-curriculo');
const curriculoDiv = document.getElementById('curriculo');

// Função para atualizar o botão de download do currículo
function idiomaDoCurriculo(idioma) {
    let nomeArquivo = '';
    let idiomaTexto = '';

    // Decidir o nome do arquivo com base no idioma selecionado
    switch (idioma) {
        case 'pt':
            nomeArquivo = 'curriculos/português/CV_Bryan-M-Almeida_Dev_PT.pdf';
            idiomaTexto = 'Currículo (PT)';
            break;
        case 'en':
            nomeArquivo = 'curriculos/inglês/CV_Bryan-M-Almeida_Dev_EN.pdf';
            idiomaTexto = 'Currículo (EN)';
            break;
        case 'es':
            nomeArquivo = 'curriculos/espanhol/CV_Bryan-M-Almeida_Dev_ES.pdf';
            idiomaTexto = 'Currículo (ES)';
            break;
        default:
            nomeArquivo = 'curriculo-pt.pdf'; // Default para português
            idiomaTexto = 'Currículo (PT)';
    }

    // Inserir o link de download no div
    curriculoDiv.innerHTML = `
        <a href="${nomeArquivo}"  class="botao-curriculo">
            📄 ${idiomaTexto}
        </a>
    `;
}





seletorCurriculo.addEventListener('change', (e) => {
    idiomaDoCurriculo(e.target.value);
});



// Inicializa com o valor padrão do select (Português)
idiomaDoCurriculo(seletorCurriculo.value);
idiomaDoSite(seletorCurriculo.value);