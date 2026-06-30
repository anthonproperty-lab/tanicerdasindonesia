/**
 * ============================================================
 * TANI CERDAS INDONESIA
 * Master Catalog
 * ============================================================
 */

const Solutions = [

/* ==========================================================
   PERTANIAN
========================================================== */

{
    id:1,

    slug:"hortikultura",

    category:"pertanian",

    product:{

        name:"Smart IoT Lahan Hortikultura",

        marketingName:"Smart Irrigation IoT",

        slogan:"Sistem Siram Otomatis",

        overview:"Sistem penyiraman otomatis berbasis sensor kelembapan tanah.",

        description:
        "Mengontrol penyiraman secara otomatis berdasarkan kondisi tanah sehingga penggunaan air lebih efisien dan tanaman tumbuh lebih optimal."

    },

    pricing:{
        startingPrice:4700000,
        currency:"IDR"
    },

    media:{
        thumbnail:"assets/img/products/hortikultura/thumb.webp",
        hero:"assets/img/products/hortikultura/hero.webp",
        gallery:[
            "assets/img/products/hortikultura/1.webp",
            "assets/img/products/hortikultura/2.webp",
            "assets/img/products/hortikultura/3.webp"
        ]
    },

    highlights:[
        "Monitoring HP",
        "Auto Irrigation",
        "Sensor Tanah",
        "Solar Ready"
    ],

    problems:[
        "Penyiraman masih manual",
        "Air sering terbuang",
        "Pompa sering lupa dimatikan",
        "Tanaman mudah layu"
    ],

    workflow:[
        "Sensor membaca kelembapan",
        "Controller memproses data",
        "Pompa aktif otomatis",
        "Data tampil di HP"
    ],

    features:[
        "Sensor Kelembapan Tanah",
        "Sensor Suhu",
        "Relay Otomatis",
        "Monitoring 4G",
        "Solar Panel (Opsional)"
    ],

    benefits:[
        "Hemat Air",
        "Hemat Tenaga",
        "Produktivitas Meningkat",
        "Monitoring Real-Time"
    ],

    package:[
        "Controller ESP32",
        "Sensor Tanah",
        "Sensor Suhu",
        "Relay",
        "SIM Card 4G",
        "Power Supply"
    ],

    badges:[
        "IoT",
        "4G",
        "Monitoring",
        "Auto"
    ],

    faq:[
        {
            question:"Apakah harus ada WiFi?",
            answer:"Tidak. Sistem menggunakan jaringan 4G."
        },
        {
            question:"Apakah bisa memakai panel surya?",
            answer:"Ya, tersedia versi tenaga surya."
        }
    ]
},

/* ==========================================================
   PERKEBUNAN
========================================================== */

{
    id:2,

    slug:"sawit",

    category:"perkebunan",

    product:{

        name:"Smart Palm Shield & Receiver LoRa",

        marketingName:"Palm Shield LoRa",

        slogan:"Pagar Gaib Anti Maling Sawit",

        overview:"Deteksi kendaraan masuk kebun secara otomatis.",

        description:
        "Sistem keamanan perkebunan menggunakan sensor getaran dan komunikasi LoRa jarak jauh."
    },

    pricing:{
        startingPrice:6800000,
        currency:"IDR"
    },

    media:{
        thumbnail:"assets/img/products/sawit/thumb.webp",
        hero:"assets/img/products/sawit/hero.webp",
        gallery:[]
    },

    highlights:[
        "LoRa",
        "Solar",
        "Alarm HP",
        "Anti Maling"
    ],

    problems:[
        "Pencurian sawit",
        "Blank Spot",
        "Sulit ronda malam"
    ],

    workflow:[
        "Sensor Getaran",
        "LoRa",
        "Gateway",
        "HP"
    ],

    features:[
        "Sensor Getaran",
        "LoRa",
        "Solar Panel",
        "Gateway",
        "SIM Card"
    ],

    benefits:[
        "Keamanan Kebun",
        "Monitoring 24 Jam",
        "Deteksi Kendaraan",
        "Alarm Otomatis"
    ],

    package:[],
    badges:["LoRa","Solar","Outdoor"],
    faq:[]
},

/* ==========================================================
   PERIKANAN
========================================================== */

{
    id:3,

    slug:"kolam",

    category:"perikanan",

    product:{
        name:"Smart IoT Kolam Ikan",
        marketingName:"Smart Aquaculture IoT",
        slogan:"Budidaya Pintar",
        overview:"Monitoring kualitas air dan pakan otomatis.",
        description:"IoT untuk budidaya ikan modern."
    },

    pricing:{
        startingPrice:5500000,
        currency:"IDR"
    },

    media:{
        thumbnail:"assets/img/products/kolam/thumb.webp",
        hero:"assets/img/products/kolam/hero.webp",
        gallery:[]
    },

    highlights:[
        "Auto Feeding",
        "Monitoring pH",
        "Monitoring Suhu"
    ],

    problems:[],

    workflow:[],

    features:[
        "Sensor pH",
        "Sensor Suhu",
        "Sensor Kekeruhan",
        "Auto Feeder"
    ],

    benefits:[
        "Ikan Lebih Sehat",
        "Pakan Tepat Waktu",
        "Monitoring HP"
    ],

    package:[],
    badges:["IoT","Fish"],
    faq:[]
},

/* ==========================================================
   PETERNAKAN
========================================================== */

{
    id:4,

    slug:"peternakan",

    category:"peternakan",

    product:{
        name:"Smart IoT Peternakan",
        marketingName:"Smart Livestock IoT",
        slogan:"Kandang Pintar",
        overview:"Monitoring kandang otomatis.",
        description:"Kontrol suhu, amonia dan air minum."
    },

    pricing:{
        startingPrice:7900000,
        currency:"IDR"
    },

    media:{
        thumbnail:"assets/img/products/peternakan/thumb.webp",
        hero:"assets/img/products/peternakan/hero.webp",
        gallery:[]
    },

    highlights:[
        "Sensor Amonia",
        "Auto Fan",
        "Water Monitoring"
    ],

    problems:[],

    workflow:[],

    features:[
        "Sensor Gas",
        "Sensor Suhu",
        "Float Sensor",
        "Relay"
    ],

    benefits:[
        "Ternak Lebih Sehat",
        "Mengurangi Heat Stress",
        "Monitoring HP"
    ],

    package:[],
    badges:["IoT","Livestock"],
    faq:[]
},

/* ==========================================================
   CCTV
========================================================== */

{
    id:5,

    slug:"cctv",

    category:"keamanan",

    product:{
        name:"Paket CCTV Solar 4G Outdoor",
        marketingName:"Solar CCTV 4G",
        slogan:"Pantau Kebun 24 Jam",
        overview:"CCTV tenaga surya tanpa WiFi.",
        description:"Monitoring area perkebunan dari HP."
    },

    pricing:{
        startingPrice:9400000,
        currency:"IDR"
    },

    media:{
        thumbnail:"assets/img/products/cctv/thumb.webp",
        hero:"assets/img/products/cctv/hero.webp",
        gallery:[]
    },

    highlights:[
        "Solar",
        "4G",
        "PTZ",
        "Outdoor"
    ],

    problems:[],

    workflow:[],

    features:[
        "Solar Panel",
        "PTZ Camera",
        "4G SIM",
        "Micro SD"
    ],

    benefits:[
        "Pantau dari HP",
        "Tanpa WiFi",
        "Rekaman Otomatis"
    ],

    package:[],
    badges:["Solar","Outdoor","4G"],
    faq:[]
}

];