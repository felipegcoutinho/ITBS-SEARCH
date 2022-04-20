// Get a reference to the database service
const database = firebase.database();
const dataRef = database.ref('data');

// const modelo = document.getElementById('modelo');
// const statuss = document.getElementById('statuss');
// const setor = document.getElementById('setor');
// const categoria = document.getElementById('categoria');
// const tags1 = document.getElementById('tags1');
// const tags2 = document.getElementById('tags2');
// const tags3 = document.getElementById('tags3');
// const tags4 = document.getElementById('tags4');
// const tags5 = document.getElementById('tags5');
// const guia = document.getElementById('guia');
// const datasheet = document.getElementById('datasheet');
// const manual = document.getElementById('manual');
// const pagina = document.getElementById('pagina');
// const descricao = document.getElementById('descricao');
// const addBtn = document.getElementById('addBtn');
// const updateBtn = document.getElementById('updateBtn');
// const removeBtn = document.getElementById('removeBtn');

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

    dataRef.on('child_added', snapshot => {
        console.log(snapshot.val());
        })

  
});