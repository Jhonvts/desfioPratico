// ===============================
// CONTROLE DAS TELAS
// ===============================

function mostrarTela(numero) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    document
        .getElementById("etapa" + numero)
        .classList.add("ativa");
}


// ===============================
// ETAPA 1
// ===============================

document
    .getElementById("form1")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const idade = document.getElementById("idade").value;

        const erro = document.getElementById("erro1");

        if (nome === "") {

            erro.textContent =
                "Erro: você não informou seu nome. Parabéns!";

            return;
        }

        if (!email.includes("@")) {

            erro.textContent =
                "Tudo certo! Seu e-mail parece completamente errado.";

            return;
        }

        if (idade === "") {

            erro.textContent =
                "Você esqueceu um campo que não parece obrigatório.";

            return;
        }

        erro.textContent = "";

        mostrarTela(2);
    });


// ===============================
// BOTÃO CANCELAR DA ETAPA 1
// ===============================

function cancelar() {

    const erro = document.getElementById("erro1");

    erro.textContent =
        "Você clicou em AVANÇAR. Infelizmente, esse botão significa cancelar.";
}


// ===============================
// ETAPA 2
// ===============================

function validarEtapa2() {

    const senha =
        document.getElementById("senha").value;

    const senha2 =
        document.getElementById("senha2").value;

    const termos =
        document.getElementById("termos").checked;

    const erro =
        document.getElementById("erro2");


    if (senha.length < 4) {

        erro.textContent =
            "Senha muito curta. Ela precisa ter pelo menos 4 caracteres.";

        return;
    }


    if (senha.length > 8) {

        erro.textContent =
            "Senha muito longa. Máximo permitido: 8 caracteres.";

        return;
    }


    if (senha !== senha2) {

        erro.textContent =
            "As senhas são iguais, mas precisam ser diferentes.";

        return;
    }


    if (!termos) {

        erro.textContent =
            "Você precisa concordar com algo que não leu.";

        return;
    }


    erro.textContent = "";

    mostrarTela(3);
}


// ===============================
// VOLTAR
// ===============================

function voltar(etapa) {

    if (etapa === 2) {

        mostrarTela(1);

    } else if (etapa === 3) {

        mostrarTela(2);
    }
}


// ===============================
// FINALIZAÇÃO
// ===============================

function finalizar() {

    const resposta =
        document.getElementById("resposta").value.trim();

    const erro =
        document.getElementById("erro3");


    if (resposta !== "4") {

        erro.textContent =
            "Resposta incorreta. Dica: pense na matemática básica.";

        return;
    }


    erro.textContent = "";

    document
        .querySelectorAll(".tela")
        .forEach(tela => {
            tela.classList.remove("ativa");
        });

    document
        .getElementById("final")
        .classList.add("ativa");
}