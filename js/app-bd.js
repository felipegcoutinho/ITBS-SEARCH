// Get a reference to the database service
const database = firebase.database();
const usersRef = database.ref('/data');

$(function () {
    $('#addBtn').on('click', function (e) {
        $('#form-equipamentos').submit();
        e.preventDefault();
        const autoId = usersRef.push().key
        usersRef.child(autoId).set({
            modelo: modelo.value,
            statuss: statuss.value,
            setor: setor.value,
            categoria: categoria.value,
            tags1: tags1.value,
            guia: guia.value,
            datasheet: datasheet.value,
            manual: manual.value,
            pagina: pagina.value,
            descricao: descricao.value
        });
    })
});