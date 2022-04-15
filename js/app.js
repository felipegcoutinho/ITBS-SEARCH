/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '' + d.descricao + '';
}

$(document).ready(function () {
    var table = $('#tabela_main').DataTable({
        ajax: "banco.json",
        dom: 'Plfrtip',
        language:
        {
            url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json'
        },
        columns:
            [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": '',
                    "render": function () {
                        return '<i class="bi bi-plus-square-fill text-success"></i>';
                    },
                },
                { data: 'modelo' },
                { data: 'setor' },
                { data: 'categoria' },
                { data: 'tags' },
                { data: 'guia' },
                { data: 'datasheet' },
                { data: 'manual' },
                { data: 'pagina' },
            ],

        searchPanes: {
            cascadePanes: true,
        },
        columnDefs: [
            {
                searchPanes: {
                    show: true,
                },
                targets: ['Modelo', 'Setor', 'Categoria']
            },
            {
                "render": function (data, type, row) {
                     return '<span class="badge bg-dark">' + row.modelo + '</span>';
                },
                "targets": 'Modelo'
            },

            {
                "render": function (data, type, row) 
                {
                    if (row.status === 'EM LINHA')
                        return '<span class="badge-outline-success-status btn-xs ">' + row.status + '</span>';
                    else {
                        return '<span class="badge-outline-danger-status btn-xs">' + row.status + '</span>';
                    }
                },
                "targets": 'Status',
            },

            {
                "render": function (data, type, row) {
                    return '<span class="badge badge-outline-dark">' + row.setor + '</span> '
                },
                "targets": 'Setor',
            },

            {
                "render": function (data, type, row) {
                    return '<span class="badge badge-outline-success">' + row.categoria + '</span> '
                },
                "targets": 'Categoria',
            },

            {
                "render": function (data, type, row) {                                            
                    return '<a href="# "class="btn btn-warning btn-xs">' + row.tags1 + '</a> ' +
                        '<a href="# "class="btn btn-danger btn-xs">' + row.tags2 + '</a> ' +
                        '<a href="# "class="btn btn-secondary btn-xs">' + row.tags3 + '</a> ' +
                        '<a href="# "class="btn btn-info btn-xs">' + row.tags4 + '</a> ' +
                        '<a href="# "class="btn btn-success btn-xs">' + row.tags5 + '</a> ' 
                },
                "targets": 'Tags',
            },

            {
                "render": function (data, type, row) {
                    return '<div class="btn-group">' +
                        '<a target="_blank" href="' + row.guia + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Guia</a>' +
                        '<a target="_blank" href="' + row.datasheet + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Datasheet</a>' +
                        '<a target="_blank" href="' + row.manual + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Manual</a></div> ' +
                        '<a target="_blank" href="' + row.pagina + '" class="btn btn-success btn-xs"><i class="bi bi-arrow-up-right"></i> Página</a></div>';

                },
                "targets": 'Manuais'
            },

            {
                "visible": false,
                "targets": ['Guia', 'Datasheet', 'Manual', 'Pagina']
            }
        ]
    });

    // Add event listener for opening and closing details
    $('#tabela_main tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var tdi = tr.find("i");
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
            tdi.first().removeClass('bi bi-dash-square-fill text-danger');
            tdi.first().addClass('bi bi-plus-square-fill text-success');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
            tdi.first().removeClass('bi bi-plus-square-fill text-success');
            tdi.first().addClass('bi bi-dash-square-fill text-danger');
        }
    });
});