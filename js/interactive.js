/*SIMPLE ALERTS*/

function greetings() {
    if (navigator.cookieEnabled)
        userName = readCookie("mascot_username");
    if (userName) {
        happy();
        alert("Hey " + userName + ", tava com saudades de você!");
    } else {
        happy();
        alert("Olá, Eu sou um mascote, me chamo Myuubi. É um prazer em conhecer você!");
    }
}

function touchMascot() {
    if (userName) {
        happy();
        alert("Gosto do seu carinho! " + userName + ". Obrigadoo <3");
    } else {
        userName = prompt("Qual é seu nome?", "Digite seu nome aqui: ");
        if (userName) {
            alert("Prazer em te conhecer, " + userName + "!");
            if (navigator.cookieEnabled)
                writeCookie("irock_username", userName, 5 * 365);
            else
                alert("Desculpe. Cookies não são suportados/não estão ativos no seu navegador. Não lembrarei seu nome mais tarde :/");
        }
    }
}