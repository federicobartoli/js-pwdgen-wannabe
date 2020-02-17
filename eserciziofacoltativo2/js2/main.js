var nome = prompt('Scrivi il tuo nome');
var cognome = prompt('Ora il tuo cognome');
var colore = prompt('Ora il tuo colore preferito');
var data = new Date();
var anno = data.getFullYear();
document.getElementById('passwordgenerator').innerHTML = nome + (';') + cognome + (';') +  colore + (';') +  anno;
