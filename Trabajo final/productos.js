const productos = [
  // Accesorios
  { id: 21, nombre: "Pad Mouse XL", descripcion: "Antideslizante, bordes cosidos.", precio: "6000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 22, nombre: "Soporte para monitor", descripcion: "Ajustable en altura.", precio: "15000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 23, nombre: "Base para notebook con cooler", descripcion: "5 ventiladores silenciosos.", precio: "18000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria:"accesorio" },
  { id: 28, nombre: "Kit limpieza PC", descripcion: "Alcohol isopropílico y brochas.", precio: "5000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 29, nombre: "Cable HDMI 2.0", descripcion: "1.5m de longitud, 4K UHD.", precio: "3000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 30, nombre: "Regulador de tensión Forza", descripcion: "6 tomas, protección eléctrica.", precio: "12000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 38, nombre: "Soporte celular para escritorio", descripcion: "Ajustable, metálico.", precio: "4000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },

  // Almacenamiento
  { id: 204, nombre: "SSD 480GB Kingston", descripcion: "SATA 2.5\"", precio: "25000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "SATA" },
  { id: 205, nombre: "SSD M.2 NVMe 1TB", descripcion: "Velocidad extrema", precio: "60000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "M.2" },

  // CPU
  { id: 100, nombre: "AMD Ryzen 5 5600X", descripcion: "6 núcleos, 12 hilos", precio: "130000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "AM4" },
  { id: 101, nombre: "Intel Core i5-12400F", descripcion: "6 núcleos, 12 hilos", precio: "150000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1700" },
  { id: 200, nombre: "Intel Core i3-10100", descripcion: "Socket LGA1200", precio: "100000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1200" },
  { id: 201, nombre: "AMD Ryzen 7 5800X", descripcion: "Socket AM4", precio: "180000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "AM4" },

  // Fuente
  { id: 206, nombre: "Fuente 600W Sentey", descripcion: "80 Plus White", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 600 },
  { id: 207, nombre: "Fuente 750W Corsair", descripcion: "80 Plus Bronze", precio: "75000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 750 },

  // Gabinete
  { id: 208, nombre: "Gabinete Thermaltake", descripcion: "Con RGB y vidrio templado", precio: "50000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 209, nombre: "Gabinete simple ATX", descripcion: "Diseño básico", precio: "30000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },

  // Impresora
  { id: 17, nombre: "Impresora HP Ink Tank 415", descripcion: "WiFi, impresión económica.", precio: "120000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "impresora" },
  { id: 18, nombre: "Impresora Epson EcoTank L3250", descripcion: "Multifunción inalámbrica.", precio: "150000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria: "impresora" },
  { id: 33, nombre: "Multifunción Brother DCP-T220", descripcion: "Imprime, escanea y copia.", precio: "130000", imagen: "img/ejemplo.jpg", categoria: "impresora" },

  // Motherboard
  { id: 202, nombre: "Gigabyte B460M", descripcion: "Intel LGA1200", precio: "80000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "LGA1200", ram: "DDR4", almacenamiento: ["SATA"], gpu: "PCIe 3.0" },
  { id: 203, nombre: "ASRock B550", descripcion: "AMD AM4", precio: "90000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "AM4", ram: "DDR4", almacenamiento: ["SATA", "M.2"], gpu: "PCIe 4.0" },

  // Periféricos
  { id: 7, nombre: "Teclado gamer retroiluminado", descripcion: "Diseño ergonómico y silencioso.", precio: "17000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 8, nombre: "Teclado mecánico Logitech", descripcion: "Switches azules, RGB.", precio: "35000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria: "periferico" },
  { id: 9, nombre: "Mouse gamer Logitech G203", descripcion: "Sensor preciso, RGB.", precio: "12000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 10, nombre: "Mouse inalámbrico HP", descripcion: "Conectividad Bluetooth.", precio: "8000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 11, nombre: "Auriculares Redragon Zeus", descripcion: "Con micrófono y luces RGB.", precio: "25000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "periferico" },
  { id: 12, nombre: "Auriculares inalámbricos JBL", descripcion: "Batería de larga duración.", precio: "30000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 13, nombre: "Monitor LG 27'' IPS", descripcion: "Full HD, 75Hz.", precio: "180000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 14, nombre: "Monitor Samsung Curvo 32''", descripcion: "Diseño envolvente.", precio: "250000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "periferico" },
  { id: 15, nombre: "Webcam Logitech C920", descripcion: "1080p con micrófono.", precio: "38000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 16, nombre: "Webcam Genius 720p", descripcion: "Ideal para videollamadas.", precio: "14000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 26, nombre: "Monitor ASUS TUF 165Hz", descripcion: "1ms, G-SYNC compatible.", precio: "280000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 31, nombre: "Teclado inalámbrico Logitech K380", descripcion: "Compacto y portátil.", precio: "18000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 32, nombre: "Mouse vertical ergonómico", descripcion: "Diseñado para prevenir lesiones.", precio: "11000", imagen: "img/ejemplo.jpg", categoria: "periferico" },
  { id: 37, nombre: "Auriculares con cancelación de ruido", descripcion: "Diseño over-ear, confortables.", precio: "60000", imagen: "img/ejemplo.jpg", categoria: "periferico" },

  // Placas de video
  { id: 1, nombre: "Placa de Video RTX 3060", descripcion: "NVIDIA GeForce RTX 3060 12GB GDDR6.", precio: "350000", imagen: "img/Graficas/RTX 3060.jpg", categoria: "placa", consumo: 170, gpuInterface: "PCIe 4.0" },
  { id: 2, nombre: "Placa de Video RX 6600", descripcion: "ASUS Dual Radeon RX 6600 8GB GDDR6.", precio: "310000", imagen: "img/Graficas/RX 6600.jpg", esDiaDelPadre: "si", categoria: "placa", gpuInterface: "PCIe 4.0" },
  { id: 3, nombre: "Placa de Video GTX 1660 Super", descripcion: "Ideal para gaming en 1080p.", precio: "270000", imagen: "img/Graficas/RTX 1660.jpg", categoria: "placa", gpuInterface: "PCIe 3.0" },
  { id: 24, nombre: "Placa de Video RTX 4070 Ti", descripcion: "12GB GDDR6X para alto rendimiento.", precio: "850000", imagen: "img/ejemplo.jpg", categoria: "placa", gpuInterface: "PCIe 4.0" },
  { id: 25, nombre: "Placa de Video RX 6750 XT", descripcion: "FidelityFX Super Resolution.", precio: "520000", imagen: "img/ejemplo.jpg", categoria: "placa", gpuInterface: "PCIe 4.0" },

  // RAM
  { id: 4, nombre: "Memoria RAM 8GB DDR4", descripcion: "Corsair Vengeance LPX 3200MHz.", precio: "25000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "ram" },
  { id: 5, nombre: "Memoria RAM 16GB DDR4", descripcion: "Kingston HyperX Fury 3200MHz.", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "ram" },
  { id: 6, nombre: "Memoria RAM 32GB DDR4", descripcion: "Corsair Dominator Platinum RGB.", precio: "95000", imagen: "img/ejemplo.jpg", categoria: "ram" },
  { id: 27, nombre: "RAM 8GB Crucial", descripcion: "2666MHz DDR4.", precio: "22000", imagen: "img/ejemplo.jpg", categoria: "ram" },
  { id: 104, nombre: "RAM 16GB DDR4 3200MHz", descripcion: "Corsair Vengeance", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 105, nombre: "RAM 32GB DDR5", descripcion: "Kingston Fury", precio: "90000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR5" }
];


// Guardamos los productos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));