// Get a reference to the database service
const database = firebase.database();
const dataRef = database.ref('data');

$(function () {
    $('#addBtn').on('click', function (e) {
        $('#form-equipamentos').submit();
        e.preventDefault();
        const autoId = dataRef.push().key
        dataRef.child(autoId).set({
        //dataRef.set({            
            modelo: modelo.value,
            statuss: statuss.value,
            setor: setor.value,
            categoria: categoria.value,
            tags1: tags1.value,
            tags2: tags2.value,
            tags3: tags3.value,
            tags4: tags4.value,
            tags5: tags5.value,
            guia: guia.value,
            datasheet: datasheet.value,
            manual: manual.value,
            pagina: pagina.value,
            descricao: descricao.value
        });
    })
});

//load older conatcts as well as any newly added one...
dataRef.on("child_added", function(snap) {
    console.log("added", snap.key, snap.val());
    $('#contacts').append(contactHtmlFromObject(snap.val()));
  });




