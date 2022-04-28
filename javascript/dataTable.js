var dataSet1 = [
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car"  ],
];

var dataSet = [
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
    [ "Tiger Nixon", "Active", "Edinburgh@gmail,com", "094545421", "Car", "4253KJHJK" ],
];
$(document).ready(function() {
    $('#riders').DataTable( {
        data: dataSet,
        columns: [
            { title: "User" },
            { title: "Status" },
            { title: "Email" },
            { title: "Phone Number" },
            { title: "Vehicle Type" },
            { title: "License PLate" }
        ]
    } );
    $('#deliveries').DataTable( {
        data: dataSet1,
        columns: [
            { title: "Oredr No." },
            { title: "Status" },
            { title: "Buyer" },
            { title: "Rider" },
            { title: "Store" },
        ]
    } );
} );