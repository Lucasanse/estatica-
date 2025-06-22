const productos = [

  // CPU
  { id: 100, nombre: "AMD Ryzen 5 5600X", descripcion: "6 núcleos, 12 hilos", precio: "130000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "AM4" },
  { id: 101, nombre: "Intel Core i5-12400F", descripcion: "6 núcleos, 12 hilos", precio: "150000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1700" },
  { id: 200, nombre: "Intel Core i3-10100", descripcion: "Socket LGA1200", precio: "100000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1200" },
  { id: 201, nombre: "AMD Ryzen 7 5800X", descripcion: "Socket AM4", precio: "180000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "AM4" },
  { id: 210, nombre: "AMD Ryzen 3 4100", descripcion: "4 núcleos, 8 hilos", precio: "85000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "AM4" },
  { id: 211, nombre: "Intel Core i7-11700K", descripcion: "8 núcleos, 16 hilos", precio: "200000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1200" },
  { id: 212, nombre: "Intel Core i5-13600KF", descripcion: "14 núcleos, 20 hilos", precio: "260000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1700" },
  {id: 230, nombre: "Intel Core i7-14700K", descripcion: "20 núcleos (8P+12E), 28 hilos, ideal para gaming y multitarea", precio: "395000", imagen: "img/ejemplo.jpg", categoria: "cpu", socket: "LGA1700"},


  // Motherboard
  { id: 202, nombre: "Gigabyte B460M", descripcion: "Intel LGA1200", precio: "80000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "LGA1200", ram: "DDR4", almacenamiento: ["SATA"], PCIe: "3.0" },
  { id: 203, nombre: "ASRock B550", descripcion: "AMD AM4", precio: "90000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "AM4", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 213, nombre: "ASUS Prime B660M-A", descripcion: "Intel LGA1700, DDR4, M.2", precio: "95000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "LGA1700", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 214, nombre: "MSI MAG B550 Tomahawk", descripcion: "AM4, DDR4, PCIe 4.0", precio: "110000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "AM4", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 215, nombre: "Gigabyte H510M", descripcion: "Intel LGA1200, DDR4, M.2", precio: "70000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "LGA1200", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "3.0" },
 { id: 231, nombre: "ASUS ROG Strix Z790-A Gaming WiFi", descripcion: "DDR5, PCIe 5.0, soporte 14ª Gen Intel, WiFi 6E", precio: "250000", imagen: "img/ejemplo.jpg", categoria: "mother", socket: "LGA1700", ram: "DDR5", almacenamiento: ["SATA", "M.2"], PCIe: "5.0" },
  
 // RAM
  { id: 4, nombre: "Memoria RAM 8GB DDR4", descripcion: "Corsair Vengeance LPX 3200MHz.", precio: "25000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "ram", tipo: "DDR4" },
  { id: 5, nombre: "Memoria RAM 16GB DDR4", descripcion: "Kingston HyperX Fury 3200MHz.", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 6, nombre: "Memoria RAM 32GB DDR4", descripcion: "Corsair Dominator Platinum RGB.", precio: "95000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 27, nombre: "RAM 8GB Crucial DDR4 x2 unid", descripcion: "2666MHz DDR4.", precio: "44000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 104, nombre: "RAM 16GB DDR4 3200MHz", descripcion: "Corsair Vengeance", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 105, nombre: "RAM 32GB DDR5", descripcion: "Kingston Fury", precio: "90000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR5" },
  { id: 216, nombre: "RAM 8GB DDR4 x2 unid", descripcion: "2x8GB Crucial 2666MHz", precio: "43000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 217, nombre: "RAM 16GB DDR5 5600MHz", descripcion: "Corsair Vengeance", precio: "75000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR5" },
  { id: 218, nombre: "RAM 32GB DDR4", descripcion: "G.Skill Ripjaws 3200MHz", precio: "94000", imagen: "img/ejemplo.jpg", categoria: "ram", tipo: "DDR4" },

  // Almacenamiento
  { id: 204, nombre: "SSD 480GB Kingston", descripcion: "SATA 2.5\"", precio: "25000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "SATA" },
  { id: 205, nombre: "SSD M.2 NVMe 1TB", descripcion: "Velocidad extrema", precio: "60000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "M.2" },
  { id: 219, nombre: "HDD 1TB Seagate", descripcion: "SATA 3.5\"", precio: "28000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "SATA" },
  { id: 220, nombre: "SSD M.2 500GB NVMe", descripcion: "WD Blue SN570", precio: "42000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "M.2" },
  { id: 221, nombre: "SSD 240GB Kingston", descripcion: "SATA 2.5\"", precio: "19000", imagen: "img/ejemplo.jpg", categoria: "almacenamiento", tipo: "SATA" },

  // Placas de video
  { id: 1, nombre: "Placa de Video RTX 3060", descripcion: "NVIDIA GeForce RTX 3060 12GB GDDR6.", precio: "350000", imagen: "img/Graficas/RTX 3060.jpg", categoria: "placa", consumo: 170, gpuInterfacePCIe : "4.0" },
  { id: 2, nombre: "Placa de Video RX 6600", descripcion: "ASUS Dual Radeon RX 6600 8GB GDDR6.", precio: "310000", imagen: "img/Graficas/RX 6600.jpg", esDiaDelPadre: "si", categoria: "placa", gpuInterfacePCIe : "4.0" },
  { id: 3, nombre: "Placa de Video GTX 1660 Super", descripcion: "Ideal para gaming en 1080p.", precio: "270000", imagen: "img/Graficas/RTX 1660.jpg", categoria: "placa", gpuInterfacePCIe : "3.0" },
  { id: 24, nombre: "Placa de Video RTX 4070 Ti", descripcion: "12GB GDDR6X para alto rendimiento.", precio: "850000", imagen: "img/ejemplo.jpg", categoria: "placa", gpuInterfacePCIe : "4.0" },
  { id: 25, nombre: "Placa de Video RX 6750 XT", descripcion: "FidelityFX Super Resolution.", precio: "520000", imagen: "img/ejemplo.jpg", categoria: "placa", gpuInterfacePCIe : "4.0" },
  { id: 232, nombre: "NVIDIA GeForce RTX 4070 Super", descripcion: "12GB GDDR6X, Ray Tracing y DLSS 3.5", precio: "890000", imagen: "img/Graficas/RTX 4070 Super.jpg", categoria: "placa", gpuInterfacePCIe : "4.0" },
  // Fuente
  { id: 206, nombre: "Fuente 600W Sentey", descripcion: "80 Plus White", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 600 },
  { id: 207, nombre: "Fuente 750W Corsair", descripcion: "80 Plus Bronze", precio: "75000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 750 },
  { id: 222, nombre: "Fuente 500W EVGA", descripcion: "80 Plus White", precio: "38000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 500 },
  { id: 223, nombre: "Fuente 650W ASUS TUF", descripcion: "80 Plus Bronze", precio: "62000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 650 },
  { id: 224, nombre: "Fuente 850W Cooler Master", descripcion: "80 Plus Gold", precio: "98000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 850 },


  // Gabinete
  { id: 208, nombre: "Gabinete Thermaltake", descripcion: "Con RGB y vidrio templado", precio: "50000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 209, nombre: "Gabinete simple ATX", descripcion: "Diseño básico", precio: "30000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 225, nombre: "Gabinete Cooler Master MB511", descripcion: "Con RGB y frontal mesh", precio: "60000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 226, nombre: "Gabinete Redragon Grapple", descripcion: "ATX con RGB", precio: "55000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 227, nombre: "Gabinete económico sin fuente", descripcion: "ATX clásico", precio: "25000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },


  // Accesorios
  { id: 21, nombre: "Pad Mouse XL", descripcion: "Antideslizante, bordes cosidos.", precio: "6000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },
  { id: 22, nombre: "Soporte para monitor", descripcion: "Ajustable en altura.", precio: "15000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },
  { id: 23, nombre: "Base para notebook con cooler", descripcion: "5 ventiladores silenciosos.", precio: "18000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria: "accesorio" },
  { id: 28, nombre: "Kit limpieza PC", descripcion: "Alcohol isopropílico y brochas.", precio: "5000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },
  { id: 29, nombre: "Cable HDMI 2.0", descripcion: "1.5m de longitud, 4K UHD.", precio: "3000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },
  { id: 30, nombre: "Regulador de tensión Forza", descripcion: "6 tomas, protección eléctrica.", precio: "12000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },
  { id: 38, nombre: "Soporte celular para escritorio", descripcion: "Ajustable, metálico.", precio: "4000", imagen: "img/ejemplo.jpg", categoria: "accesorio" },


  // Fuente
  { id: 206, nombre: "Fuente 600W Sentey", descripcion: "80 Plus White", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 600 },
  { id: 207, nombre: "Fuente 750W Corsair", descripcion: "80 Plus Bronze", precio: "75000", imagen: "img/ejemplo.jpg", categoria: "fuente", watts: 750 },


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

  // Gabinete
  { id: 208, nombre: "Gabinete Thermaltake", descripcion: "Con RGB y vidrio templado", precio: "50000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },
  { id: 209, nombre: "Gabinete simple ATX", descripcion: "Diseño básico", precio: "30000", imagen: "img/ejemplo.jpg", categoria: "gabinete" },

  // Impresora
  { id: 17, nombre: "Impresora HP Ink Tank 415", descripcion: "WiFi, impresión económica.", precio: "120000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "impresora" },
  { id: 18, nombre: "Impresora Epson EcoTank L3250", descripcion: "Multifunción inalámbrica.", precio: "150000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria: "impresora" },
  { id: 33, nombre: "Multifunción Brother DCP-T220", descripcion: "Imprime, escanea y copia.", precio: "130000", imagen: "img/ejemplo.jpg", categoria: "impresora" },



];


// Guardamos los productos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));