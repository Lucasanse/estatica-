const productos = [

  // CPU
  { id: 100, nombre: "AMD Ryzen 5 5600X", descripcion: "Procesador de 6 núcleos y 12 hilos", precio: "130000", imagen: "img/CPU/AMD Ryzen 5 5600X.jpg", categoria: "cpu", socket: "AM4" },
  { id: 101, nombre: "Intel Core i5-12400F", descripcion: "Procesador de 6 núcleos y 12 hilos", precio: "150000", imagen: "img/CPU/Intel Core i5-12400F.jpg", categoria: "cpu", socket: "LGA1700" },
  { id: 200, nombre: "Intel Core i3-10100", descripcion: "Procesador de 4 núcleos y 8 hilos", precio: "100000", imagen: "img/CPU/Intel Core i3-10100.jfif", categoria: "cpu", socket: "LGA1200" },
  { id: 201, nombre: "AMD Ryzen 7 5800X", descripcion: "Procesador de 8 núcleos y 16 hilos", precio: "180000", imagen: "img/CPU/AMD Ryzen 7 5800X.jfif", categoria: "cpu", socket: "AM4" },
  { id: 210, nombre: "AMD Ryzen 3 4100", descripcion: "Procesador de 4 núcleos y 8 hilos", precio: "85000", imagen: "img/CPU/AMD Ryzen 3 4100.jpg", categoria: "cpu", socket: "AM4" },
  { id: 211, nombre: "Intel Core i7-11700K", descripcion: "Procesador de 8 núcleos y 16 hilos", precio: "200000", imagen: "img/CPU/Intel Core i7-11700K.jfif", categoria: "cpu", socket: "LGA1200" },
  { id: 212, nombre: "Intel Core i5-13600KF", descripcion: "Procesador de 14 núcleos y 20 hilos", precio: "260000", imagen: "img/CPU/Intel Core i5-13600KF.webp", categoria: "cpu", socket: "LGA1700" },
  { id: 230, nombre: "Intel Core i7-14700K", descripcion: "Procesador de 20 núcleos (8P+12E) y 28 hilos", precio: "395000", imagen: "img/CPU/Intel Core i7-14700K.jpg", categoria: "cpu", socket: "LGA1700" },


  // Motherboard
  { id: 202, nombre: "Gigabyte B460M", descripcion: "Placa madre para socket LGA1200, RAM DDR4, PCIe 3.0, sin soporte para M.2, formato Micro-ATX", precio: "80000", imagen: "img/mothers/Gigabyte B460M.png", categoria: "mother", socket: "LGA1200", ram: "DDR4", almacenamiento: ["SATA"], PCIe: "3.0" },
  { id: 203, nombre: "ASRock B550", descripcion: "Placa madre para socket AM4, RAM DDR4, PCIe 4.0, con soporte para M.2, ideal para Ryzen 3000/5000", precio: "90000", imagen: "img/mothers/ASRock B550.jpg", categoria: "mother", socket: "AM4", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 213, nombre: "ASUS Prime B660M-A", descripcion: "Placa madre para socket LGA1700, RAM DDR4, PCIe 4.0, con soporte para M.2, compatible con procesadores Intel 12ª/13ª Gen", precio: "95000", imagen: "img/mothers/ASUS Prime B660M-A.jpg", categoria: "mother", socket: "LGA1700", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 214, nombre: "MSI MAG B550 Tomahawk", descripcion: "Placa madre para socket AM4, RAM DDR4, PCIe 4.0, con soporte para M.2, robusta y preparada para gaming", precio: "110000", imagen: "img/mothers/MSI MAG B550 Tomahawk.jpg", categoria: "mother", socket: "AM4", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "4.0" },
  { id: 215, nombre: "Gigabyte H510M", descripcion: "Placa madre para socket LGA1200, RAM DDR4, PCIe 3.0, con soporte para M.2, económica y funcional", precio: "70000", imagen: "img/mothers/Gigabyte H510M.png", categoria: "mother", socket: "LGA1200", ram: "DDR4", almacenamiento: ["SATA", "M.2"], PCIe: "3.0" },
  { id: 231, nombre: "ASUS ROG Strix Z790-A Gaming WiFi", descripcion: "Placa madre para socket LGA1700, RAM DDR5, PCIe 5.0, soporte M.2 y WiFi 6E integrado, diseñada para alto rendimiento y gaming de última generación", precio: "250000", imagen: "img/mothers/ASUS ROG Strix Z790-A Gaming WiFi.jpg", categoria: "mother", socket: "LGA1700", ram: "DDR5", almacenamiento: ["SATA", "M.2"], PCIe: "5.0" },

  // RAM
  { id: 4, nombre: "Memoria RAM 8GB DDR4 Corsair", descripcion: "Corsair Vengeance LPX 3200MHz", precio: "25000", imagen: "img/ram/Memoria RAM 8GB DDR4 Corsair.webp", categoria: "ram", tipo: "DDR4" },
  { id: 5, nombre: "Memoria RAM 16GB DDR4 Kingston", descripcion: "Kingston HyperX Fury 3200MHz", precio: "45000", imagen: "img/ram/Memoria RAM 16GB DDR4 Kingston.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 6, nombre: "Memoria RAM 32GB DDR4 Corsair", descripcion: "Corsair Dominator Platinum RGB 3200MHz", precio: "95000", imagen: "img/ram/Memoria RAM 32GB DDR4 Corsair.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 27, nombre: "Memoria RAM 8GB DDR4 Crucial x2 unid", descripcion: "Crucial 2666MHz DDR4 (x2 unidades)", precio: "44000", imagen: "img/ram/Memoria RAM 8GB DDR4 Crucial x2 unid.webp", categoria: "ram", tipo: "DDR4" },
  { id: 104, nombre: "Memoria RAM 16GB DDR4 Corsair x2 unid", descripcion: "Corsair Vengeance 3200MHz (x2 unidades)", precio: "80000", imagen: "img/ram/Memoria RAM 16GB DDR4 Corsair x2 unid.jpg", categoria: "ram", tipo: "DDR4" },
  { id: 105, nombre: "Memoria RAM 32GB DDR5 Kingston Fury", descripcion: "Kingston Fury 5200MHz", precio: "90000", imagen: "img/ram/Memoria RAM 32GB DDR5 Kingston Fury.webp", categoria: "ram", tipo: "DDR5", esDestacado: "si"},
  { id: 217, nombre: "Memoria RAM 16GB DDR5 Corsair", descripcion: "Corsair Vengeance 5600MHz", precio: "75000", imagen: "img/ram/Memoria RAM 16GB DDR5 Corsair.webp", categoria: "ram", tipo: "DDR5" },
  { id: 218, nombre: "Memoria RAM 32GB DDR4 Ripjaws", descripcion: "G.Skill Ripjaws 3200MHz", precio: "94000", imagen: "img/ram/Memoria RAM 32GB DDR4 Ripjaws.jpg", categoria: "ram", tipo: "DDR4" },

  // Almacenamiento
{ id: 204, nombre: "SSD 480GB Kingston", descripcion: "Unidad SSD Kingston SATA 2.5\"", precio: "25000", imagen: "img/almacenamiento/SSD 480GB Kingston.jpg", categoria: "almacenamiento", tipo: "SATA" },
{ id: 205, nombre: "SSD M.2 NVMe 1TB", descripcion: "SSD M.2 NVMe 1TB de alta velocidad", precio: "60000", imagen: "img/almacenamiento/SSD M.2 NVMe 1TB.jpg", categoria: "almacenamiento", tipo: "M.2" },
{ id: 219, nombre: "HDD 1TB Seagate", descripcion: "Disco duro Seagate 1TB SATA 3.5\"", precio: "28000", imagen: "img/almacenamiento/HDD 1TB Seagate.jpg", categoria: "almacenamiento", tipo: "SATA" },
{ id: 220, nombre: "SSD M.2 500GB NVMe", descripcion: "WD Blue SN570 M.2 NVMe", precio: "42000", imagen: "img/almacenamiento/SSD M.2 500GB NVMe.png", categoria: "almacenamiento", tipo: "M.2" },
{ id: 221, nombre: "SSD 240GB Kingston", descripcion: "Kingston SSD 240GB SATA 2.5\"", precio: "19000", imagen: "img/almacenamiento/SSD 240GB Kingston.jpg", categoria: "almacenamiento", tipo: "SATA" },
{ id: 222, nombre: "SSD 960GB Kingston", descripcion: "Unidad SSD Kingston 960GB SATA 2.5\", gran capacidad para sistemas y archivos", precio: "38000", imagen: "img/almacenamiento/SSD 960GB Kingston.jpg", categoria: "almacenamiento", tipo: "SATA" },

  // Placas de video
  { id: 1, nombre: "Placa de Video RTX 3060", descripcion: "NVIDIA GeForce RTX 3060 12GB GDDR6.", precio: "350000", imagen: "img/Graficas/RTX 3060.jpg", categoria: "placa", consumo: 170, gpuInterfacePCIe: "4.0" },
  { id: 2, nombre: "Placa de Video RX 6600", descripcion: "ASUS Dual Radeon RX 6600 8GB GDDR6.", precio: "310000", imagen: "img/Graficas/RX 6600.jpg", categoria: "placa", gpuInterfacePCIe: "4.0" },
  { id: 3, nombre: "Placa de Video GTX 1660 Super", descripcion: "Ideal para gaming en 1080p.", precio: "270000", imagen: "img/Graficas/RTX 1660.jpg", categoria: "placa", gpuInterfacePCIe: "3.0" },
  { id: 24, nombre: "Placa de Video RTX 4070 Ti", descripcion: "12GB GDDR6X para alto rendimiento gráfico, ideal para gaming 2K/4K", precio: "850000", imagen: "img/Graficas/RTX 4070 Ti.jpg", categoria: "placa", gpuInterfacePCIe: "4.0" },
  { id: 25, nombre: "Placa de Video RX 6750 XT", descripcion: "12GB GDDR6, FidelityFX Super Resolution para mejor calidad de imagen", precio: "520000", imagen: "img/Graficas/RX 6750 XT.webp", categoria: "placa", gpuInterfacePCIe: "4.0" },
  { id: 232, nombre: "NVIDIA GeForce RTX 4070 Super", descripcion: "12GB GDDR6X, Ray Tracing y DLSS 3.5 para juegos de última generación", precio: "890000", imagen: "img/Graficas/RTX 4070 Super.jpg", categoria: "placa", gpuInterfacePCIe: "4.0" },

  // Fuente
{ id: 206, nombre: "Fuente 600W Sentey", descripcion: "80 Plus White", precio: "45000", imagen: "img/fuentes/Fuente 600W Sentey.jpg", categoria: "fuente", watts: 600 },
{ id: 207, nombre: "Fuente 750W Corsair", descripcion: "80 Plus Bronze", precio: "75000", imagen: "img/fuentes/Fuente 750W Corsair.jpg", categoria: "fuente", watts: 750 },
{ id: 222, nombre: "Fuente 500W EVGA", descripcion: "80 Plus White", precio: "38000", imagen: "img/fuentes/Fuente 500W EVGA.webp", categoria: "fuente", watts: 500 },
{ id: 223, nombre: "Fuente 650W ASUS TUF", descripcion: "80 Plus Bronze", precio: "62000", imagen: "img/fuentes/Fuente 650W ASUS TUF.png", categoria: "fuente", watts: 650 },
{ id: 224, nombre: "Fuente 850W Cooler Master", descripcion: "80 Plus Gold", precio: "98000", imagen: "img/fuentes/Fuente 850W Cooler Master.webp", categoria: "fuente", watts: 850 },


  // Gabinete
{ id: 208, nombre: "Gabinete Thermaltake", descripcion: "Estilo basico con filtros anti-polvo", precio: "50000", imagen: "img/gabinetes/Gabinete Thermaltake.png", categoria: "gabinete" },
{ id: 209, nombre: "Gabinete simple ATX", descripcion: "Diseño básico", precio: "30000", imagen: "img/gabinetes/Gabinete simple ATX.png", categoria: "gabinete" },
{ id: 225, nombre: "Gabinete Cooler Master MB511", descripcion: "Con RGB y frontal mesh", precio: "60000", imagen: "img/gabinetes/Gabinete Cooler Master MB511.png", categoria: "gabinete" },
{ id: 226, nombre: "Gabinete Redragon Grapple", descripcion: "ATX con RGB", precio: "55000", imagen: "img/gabinetes/Gabinete Redragon Grapple.jpeg", categoria: "gabinete" },
{ id: 227, nombre: "Gabinete económico sin fuente", descripcion: "ATX clásico marca NOVA", precio: "25000", imagen: "img/gabinetes/Gabinete económico sin fuente.jpg", categoria: "gabinete" },


  // Accesorios
 { id: 21, nombre: "Pad Mouse XL", descripcion: "Antideslizante, bordes cosidos.", precio: "6000", imagen: "img/accesorios/Pad Mouse XL.png", categoria: "accesorio" },
{ id: 22, nombre: "Soporte para monitor", descripcion: "Ajustable en altura.", precio: "15000", imagen: "img/accesorios/Soporte para monitor.webp", categoria: "accesorio" },
{ id: 23, nombre: "Base para notebook con cooler", descripcion: "5 ventiladores silenciosos.", precio: "18000", imagen: "img/accesorios/Base para notebook con cooler.webp", categoria: "accesorio" },
{ id: 28, nombre: "Kit limpieza PC", descripcion: "Alcohol isopropílico y brochas.", precio: "5000", imagen: "img/accesorios/Kit limpieza PC.png", categoria: "accesorio" },
{ id: 29, nombre: "Cable HDMI 2.0", descripcion: "1.5m de longitud, 4K UHD.", precio: "3000", imagen: "img/accesorios/Cable HDMI 2.0.jpg", categoria: "accesorio" },
{ id: 30, nombre: "Regulador de tensión Forza", descripcion: "6 tomas, protección eléctrica.", precio: "12000", imagen: "img/accesorios/Regulador de tensión Forza.png", categoria: "accesorio" },
{ id: 38, nombre: "Soporte celular para escritorio", descripcion: "Ajustable, metálico.", precio: "4000", imagen: "img/accesorios/Soporte celular para escritorio.webp", categoria: "accesorio" },

  // Periféricos
 { id: 7, nombre: "Teclado gamer retroiluminado", descripcion: "Diseño ergonómico y silencioso.", precio: "17000", imagen: "img/perifericos/Teclado gamer retroiluminado.webp", categoria: "periferico" },
{ id: 8, nombre: "Teclado mecánico Logitech", descripcion: "Switches azules, RGB.", precio: "35000", imagen: "img/perifericos/Teclado mecánico Logitech.jpg", esDiaDelPadre: "si", categoria: "periferico" },
{ id: 9, nombre: "Mouse gamer Logitech G203", descripcion: "Sensor preciso, RGB.", precio: "12000", imagen: "img/perifericos/Mouse gamer Logitech G203.jpg", categoria: "periferico" },
{ id: 10, nombre: "Mouse inalámbrico HP", descripcion: "Conectividad Bluetooth.", precio: "8000", imagen: "img/perifericos/Mouse inalámbrico HP.jfif", categoria: "periferico" },
{ id: 11, nombre: "Auriculares Redragon Zeus", descripcion: "Con micrófono y luces RGB.", precio: "25000", imagen: "img/perifericos/Auriculares Redragon Zeus.jpg", esDestacado: "si", categoria: "periferico" },
{ id: 12, nombre: "Auriculares inalámbricos JBL", descripcion: "Batería de larga duración.", precio: "30000", imagen: "img/perifericos/Auriculares inalámbricos JBL.jpg", categoria: "periferico" },
{ id: 13, nombre: "Monitor LG 27'' IPS", descripcion: "Full HD, 75Hz.", precio: "180000", imagen: "img/perifericos/Monitor LG 27'' IPS.jpg", categoria: "periferico" },
{ id: 14, nombre: "Monitor Samsung Curvo 32''", descripcion: "Diseño envolvente.", precio: "700000", imagen: "img/perifericos/Monitor Samsung Curvo 32.jpg", esDestacado: "si", categoria: "periferico" },
{ id: 15, nombre: "Webcam Logitech C920", descripcion: "1080p con micrófono.", precio: "38000", imagen: "img/perifericos/Webcam Logitech C920.webp", categoria: "periferico" },
{ id: 16, nombre: "Webcam Genius 720p", descripcion: "Ideal para videollamadas.", precio: "14000", imagen: "img/perifericos/Webcam Genius 720p.jpg", categoria: "periferico" },
{ id: 26, nombre: "Monitor ASUS TUF 165Hz", descripcion: "1ms, G-SYNC compatible.", precio: "280000", imagen: "img/perifericos/Monitor ASUS TUF 165Hz.png", categoria: "periferico" },
{ id: 31, nombre: "Teclado inalámbrico Logitech K380", descripcion: "Compacto y portátil.", precio: "18000", imagen: "img/perifericos/Teclado inalámbrico Logitech K380.png", categoria: "periferico" },
{ id: 32, nombre: "Mouse vertical ergonómico", descripcion: "Diseñado para prevenir lesiones.", precio: "30000", imagen: "img/perifericos/Mouse vertical ergonómico.webp", categoria: "periferico" },
{ id: 37, nombre: "Auriculares con cancelación de ruido", descripcion: "Diseño over-ear, confortables.", precio: "60000", imagen: "img/perifericos/Auriculares con cancelación de ruido.jpg", categoria: "periferico" },


  // Impresora
{ id: 17, nombre: "Impresora HP Ink Tank 415", descripcion: "WiFi, impresión económica.", precio: "120000", imagen: "img/impresoras/Impresora HP Ink Tank 415.png", esDestacado: "si", categoria: "impresora" },
{ id: 18, nombre: "Impresora Epson EcoTank L3250", descripcion: "Multifunción inalámbrica.", precio: "150000", imagen: "img/impresoras/Impresora Epson EcoTank L3250.jpg", esDiaDelPadre: "si", categoria: "impresora" },
{ id: 33, nombre: "Multifunción Brother DCP-T220", descripcion: "Imprime, escanea y copia.", precio: "130000", imagen: "img/impresoras/Multifunción Brother DCP-T220.jpg", categoria: "impresora" },

  // tonners y cartuchos
{ id: 500, nombre: "Tóner Brother TN-1060", descripcion: "Rinde hasta 1.000 páginas. Compatible con modelos HL-1202, DCP-1602, MFC-1910W.", precio: "25000", imagen: "img/toners/Tóner Brother TN-1060.webp", categoria: "toner" },
{ id: 501, nombre: "Tóner HP 85A CE285A", descripcion: "Para HP LaserJet P1102, M1212nf. Rinde hasta 1.600 páginas.", precio: "27000", imagen: "img/toners/Tóner HP 85A CE285A.webp", categoria: "toner" },
{ id: 502, nombre: "Cartucho Epson T544 Negro", descripcion: "Botella de tinta negra. Compatible con L1110, L3150, L5190.", precio: "9500", imagen: "img/toners/Cartucho Epson T544 Negro.jpg", categoria: "toner" },
{ id: 503, nombre: "Cartucho HP 664 Tricolor", descripcion: "Compatible con Deskjet 1115, 2135, 3635. Rendimiento estándar.", precio: "16000", imagen: "img/toners/Cartucho HP 664 Tricolor.webp", categoria: "toner" },
{ id: 504, nombre: "Tóner Samsung MLT-D111S", descripcion: "Rinde hasta 1.000 páginas. Compatible con M2020, M2070.", precio: "24000", imagen: "img/toners/Tóner Samsung MLT-D111S.webp", categoria: "toner" },


// PC armadas
{ id: 301, nombre: "PC Armada Gamer AMD Ryzen 5", descripcion: "Ryzen 5 5600G, 16GB RAM, SSD 980GB, Radeon Vega integrada.", precio: "390000", imagen: "img/pcArmadas/PC Armada Gamer AMD Ryzen 5.webp", categoria: "pc-armada", requerimiento: 10, almacenamiento: "980" },
{ id: 302, nombre: "PC Armada Intel i5 + GTX 1660", descripcion: "Intel i5-10400F, 16GB DDR4, SSD 480GB, GTX 1660 Super 6GB.", precio: "510000", imagen: "img/pcArmadas/PC Armada Intel i5 + GTX 1660.webp", categoria: "pc-armada", requerimiento: 100, almacenamiento: "480" },
{ id: 303, nombre: "PC Oficina Intel Core i3", descripcion: "Intel Core i3-10100, 8GB DDR4, SSD 240GB, gabinete slim.", precio: "290000", imagen: "img/pcArmadas/PC Oficina Intel Core i3.webp", categoria: "pc-armada", requerimiento: 5, almacenamiento: "256" },
{ id: 304, nombre: "PC Armada Básica AMD Athlon", descripcion: "AMD Athlon 3000G, 8GB RAM, SSD 240GB, video integrado.", precio: "250000", imagen: "img/pcArmadas/PC Armada Básica AMD Athlon.webp", categoria: "pc-armada", requerimiento: 5, almacenamiento: "256" },
{ id: 305, nombre: "PC Armada Creator Ryzen 7", descripcion: "Ryzen 7 5700G, 32GB RAM, SSD 1TB, video integrado Vega 8.", precio: "600000", imagen: "img/pcArmadas/PC Armada Creator Ryzen 7.webp", categoria: "pc-armada", requerimiento: 15, almacenamiento: "1024" },
{ id: 306, nombre: "PC Gamer AMD Ryzen 7 + RTX 4060", descripcion: "Ryzen 7 5800X, 16GB DDR4, SSD 1TB NVMe, RTX 4060 8GB.", precio: "850000", imagen: "img/pcArmadas/PC Gamer AMD Ryzen 7 + RTX 4060.jpg", categoria: "pc-armada", requerimiento: 100, almacenamiento: "1024" },
{ id: 307, nombre: "PC Trabajo Intel i7 + Quadro", descripcion: "Intel i7-10700, 32GB RAM, SSD 1TB, NVIDIA Quadro P1000.", precio: "920000", imagen: "img/pcArmadas/PC Trabajo Intel i7 + Quadro.jpg", categoria: "pc-armada", requerimiento: 100, almacenamiento: "1024" },

// Notebooks
{ id: 401, nombre: "Notebook Lenovo IdeaPad 3", descripcion: "Intel Core i5-1235U, 8GB RAM, SSD 512GB, pantalla 15.6\" Full HD.", precio: "490000", imagen: "img/notebooks/Notebook Lenovo IdeaPad 3.jpg", categoria: "notebook", requerimiento: 5, almacenamiento: "512",  esDiaDelPadre: "si"},
{ id: 402, nombre: "Notebook HP 250 G9", descripcion: "Intel Core i7-1255U, 16GB DDR4, SSD 1TB, Windows 11 Pro.", precio: "650000", imagen: "img/notebooks/Notebook HP 250 G9.jpeg", categoria: "notebook", requerimiento: 20, almacenamiento: "1024" },
{ id: 403, nombre: "Notebook ASUS Vivobook 14", descripcion: "AMD Ryzen 7 5700U, 12GB RAM, SSD 512GB, ultra liviana.", precio: "610000", imagen: "img/notebooks/Notebook ASUS Vivobook 14.webp", categoria: "notebook", requerimiento: 10, almacenamiento: "512",  esDiaDelPadre: "si" },
{ id: 404, nombre: "Notebook Dell Inspiron 15", descripcion: "Intel Core i3-1115G4, 8GB RAM, SSD 256GB, pantalla HD.", precio: "380000", imagen: "img/notebooks/Notebook Dell Inspiron 15.webp", categoria: "notebook", requerimiento: 5, almacenamiento: "256" },
{ id: 405, nombre: "Notebook Acer Aspire 5", descripcion: "Intel Core i5-1135G7, 16GB RAM, SSD 512GB, Intel Iris Xe.", precio: "470000", imagen: "img/notebooks/Notebook Acer Aspire 5.webp", categoria: "notebook", requerimiento: 8, almacenamiento: "512" },
{ id: 406, nombre: "Notebook MSI Modern 14", descripcion: "Ryzen 5 7530U, 16GB RAM, SSD 1TB, Radeon integrada.", precio: "530000", imagen: "img/notebooks/Notebook MSI Modern 14.webp", categoria: "notebook", requerimiento: 10, almacenamiento: "1024" },
{ id: 407, nombre: "Notebook ASUS TUF Gaming F15", descripcion: "Intel i7-12700H, 16GB RAM, SSD 1TB, RTX 3050 4GB.", precio: "820000", imagen: "img/notebooks/Notebook ASUS TUF Gaming F15.jpg", categoria: "notebook", requerimiento: 100, almacenamiento: "1024", esDestacado: "si" },
{ id: 408, nombre: "Notebook Gamer Lenovo Legion 5", descripcion: "Ryzen 7 6800H, 32GB RAM, SSD 1TB, RTX 4060 8GB.", precio: "1100000", imagen: "img/notebooks/Notebook Gamer Lenovo Legion 5.webp", categoria: "notebook", requerimiento: 100, almacenamiento: "1024" }

];


// Guardamos los productos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));