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
                { data: 'caracteristicas' },
                { data: '' },
                { data: 'guia' },
                { data: 'datasheet' },
                { data: 'manual' },
                { data: 'pagina' },
                { data: 'descricao' },
            ],

        searchPanes: {
            cascadePanes: true,
        },
        columnDefs: [
            {
                searchPanes: {
                    show: true,
                },
                targets: [1, 2, 3]
            },
            {
                "render": function (data, type, row) {
                    return '<div class="btn-group">' +
                        '<a href="' + row.guia + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Guia</a>' +
                        '<a href="' + row.datasheet + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Datasheet</a>' +
                        '<a href="' + row.manual + '" class="btn btn-secondary btn-xs"><i class="bi bi-file-earmark-pdf-fill"></i> Manual</a>' +
                        '<a href="' + row.pagina + '" class="btn btn-success btn-xs"><i class="bi bi-globe"></i> Página</a></div>';
                },
                "targets": 5
            },

            {
                data: 'caracteristicas',
                "render": function (data, type, row) {
                    var caracteristicas = data.split(' | ');
                    return type === "display" || type === "filter" ?
                        '<a href="# "class="btn btn-warning btn-xs">' + caracteristicas[0] + '</a> ' +
                        '<a href="# "class="btn btn-danger btn-xs">' + caracteristicas[1] + '</a> ' +
                        '<a href="# "class="btn btn-secondary btn-xs">' + caracteristicas[2] + '</a> ' +
                        '<a href="# "class="btn btn-info btn-xs">' + caracteristicas[3] + '</a> ' +
                        '<a href="# "class="btn btn-success btn-xs">' + caracteristicas[4] + '</a> ' :
                        data;
                },
                "targets": 4
            },

            {
                "render": function (data, type, row) {
                    return '<b>' + row.modelo + '</b>';
                },
                "targets": 1
            },
            {
                "visible": false,
                "targets": [6, 7, 8, 9, 10]
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