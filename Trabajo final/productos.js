const productos = [
  // Placas de video
  { id: 1, nombre: "Placa de Video RTX 3060", descripcion: "NVIDIA GeForce RTX 3060 12GB GDDR6.", precio: "350.000", imagen: "img/placa1.jpg", esDestacado: "si" },
  { id: 2, nombre: "Placa de Video RX 6600", descripcion: "ASUS Dual Radeon RX 6600 8GB GDDR6.", precio: "310.000", imagen: "img/placa2.jpg", esDiaDelPadre: "si" },
  { id: 3, nombre: "Placa de Video GTX 1660 Super", descripcion: "Ideal para gaming en 1080p.", precio: "270.000", imagen: "img/placa3.jpg" },

  // Memorias RAM
  { id: 4, nombre: "Memoria RAM 8GB DDR4", descripcion: "Corsair Vengeance LPX 3200MHz.", precio: "25.000", imagen: "img/ram1.jpg", esDestacado: "si" },
  { id: 5, nombre: "Memoria RAM 16GB DDR4", descripcion: "Kingston HyperX Fury 3200MHz.", precio: "45.000", imagen: "img/ram2.jpg" },
  { id: 6, nombre: "Memoria RAM 32GB DDR4", descripcion: "Corsair Dominator Platinum RGB.", precio: "95.000", imagen: "img/ram3.jpg" },

  // Periféricos - Teclados
  { id: 7, nombre: "Teclado gamer retroiluminado", descripcion: "Diseño ergonómico y silencioso.", precio: "17.000", imagen: "img/teclado1.jpg" },
  { id: 8, nombre: "Teclado mecánico Logitech", descripcion: "Switches azules, RGB.", precio: "35.000", imagen: "img/teclado2.jpg", esDiaDelPadre: "si" },

  // Periféricos - Mouse
  { id: 9, nombre: "Mouse gamer Logitech G203", descripcion: "Sensor preciso, RGB.", precio: "12.000", imagen: "img/mouse1.jpg" },
  { id: 10, nombre: "Mouse inalámbrico HP", descripcion: "Conectividad Bluetooth.", precio: "8.000", imagen: "img/mouse2.jpg" },

  // Periféricos - Auriculares
  { id: 11, nombre: "Auriculares Redragon Zeus", descripcion: "Con micrófono y luces RGB.", precio: "25.000", imagen: "img/auriculares1.jpg", esDestacado: "si" },
  { id: 12, nombre: "Auriculares inalámbricos JBL", descripcion: "Batería de larga duración.", precio: "30.000", imagen: "img/auriculares2.jpg" },

  // Periféricos - Monitores
  { id: 13, nombre: "Monitor LG 27'' IPS", descripcion: "Full HD, 75Hz.", precio: "180.000", imagen: "img/monitor1.jpg" },
  { id: 14, nombre: "Monitor Samsung Curvo 32''", descripcion: "Diseño envolvente.", precio: "250.000", imagen: "img/monitor2.jpg", esDestacado: "si" },

  // Periféricos - Webcams
  { id: 15, nombre: "Webcam Logitech C920", descripcion: "1080p con micrófono.", precio: "38.000", imagen: "img/webcam1.jpg" },
  { id: 16, nombre: "Webcam Genius 720p", descripcion: "Ideal para videollamadas.", precio: "14.000", imagen: "img/webcam2.jpg" },

  // Impresoras
  { id: 17, nombre: "Impresora HP Ink Tank 415", descripcion: "WiFi, impresión económica.", precio: "120.000", imagen: "img/impresora1.jpg", esDestacado: "si" },
  { id: 18, nombre: "Impresora Epson EcoTank L3250", descripcion: "Multifunción inalámbrica.", precio: "150.000", imagen: "img/impresora2.jpg", esDiaDelPadre: "si" },

  // Tóners y cartuchos
  { id: 19, nombre: "Tóner HP 107A", descripcion: "Original, negro.", precio: "22.000", imagen: "img/toner1.jpg" },
  { id: 20, nombre: "Cartucho Epson T544", descripcion: "Color magenta, alta duración.", precio: "9.000", imagen: "img/cartucho1.jpg" },

  // Otros periféricos y accesorios
  { id: 21, nombre: "Pad Mouse XL", descripcion: "Antideslizante, bordes cosidos.", precio: "6.000", imagen: "img/pad1.jpg" },
  { id: 22, nombre: "Soporte para monitor", descripcion: "Ajustable en altura.", precio: "15.000", imagen: "img/soporte1.jpg" },
  { id: 23, nombre: "Base para notebook con cooler", descripcion: "5 ventiladores silenciosos.", precio: "18.000", imagen: "img/base1.jpg", esDiaDelPadre: "si" },

  // Placas de video adicionales
  { id: 24, nombre: "Placa de Video RTX 4070 Ti", descripcion: "12GB GDDR6X para alto rendimiento.", precio: "850.000", imagen: "img/placa4.jpg" },
  { id: 25, nombre: "Placa de Video RX 6750 XT", descripcion: "FidelityFX Super Resolution.", precio: "520.000", imagen: "img/placa5.jpg" },

  // Monitores adicionales
  { id: 26, nombre: "Monitor ASUS TUF 165Hz", descripcion: "1ms, G-SYNC compatible.", precio: "280.000", imagen: "img/monitor3.jpg" },

  // RAM adicionales
  { id: 27, nombre: "RAM 8GB Crucial", descripcion: "2666MHz DDR4.", precio: "22.000", imagen: "img/ram4.jpg" },

  // Accesorios extra
  { id: 28, nombre: "Kit limpieza PC", descripcion: "Alcohol isopropílico y brochas.", precio: "5.000", imagen: "img/limpieza1.jpg" },
  { id: 29, nombre: "Cable HDMI 2.0", descripcion: "1.5m de longitud, 4K UHD.", precio: "3.000", imagen: "img/hdmi.jpg" },
  { id: 30, nombre: "Regulador de tensión Forza", descripcion: "6 tomas, protección eléctrica.", precio: "12.000", imagen: "img/regulador1.jpg" },

  // Más periféricos
  { id: 31, nombre: "Teclado inalámbrico Logitech K380", descripcion: "Compacto y portátil.", precio: "18.000", imagen: "img/teclado3.jpg" },
  { id: 32, nombre: "Mouse vertical ergonómico", descripcion: "Diseñado para prevenir lesiones.", precio: "11.000", imagen: "img/mouse3.jpg" },

  // Más impresoras
  { id: 33, nombre: "Multifunción Brother DCP-T220", descripcion: "Imprime, escanea y copia.", precio: "130.000", imagen: "img/impresora3.jpg" },

  // Tóners y cartuchos extra
  { id: 34, nombre: "Tóner Samsung MLT-D111S", descripcion: "Original para Samsung SL-M2020.", precio: "19.000", imagen: "img/toner2.jpg" },

  // Extras para oficina
  { id: 35, nombre: "Mini UPS para router", descripcion: "Mantiene internet activo ante cortes.", precio: "20.000", imagen: "img/miniups.jpg" },
  { id: 36, nombre: "Router TP-Link AX1500", descripcion: "Wi-Fi 6 para todo el hogar.", precio: "42.000", imagen: "img/router1.jpg" },

  // Auriculares extra
  { id: 37, nombre: "Auriculares con cancelación de ruido", descripcion: "Diseño over-ear, confortables.", precio: "60.000", imagen: "img/auriculares3.jpg" },

  // Soporte celular
  { id: 38, nombre: "Soporte celular para escritorio", descripcion: "Ajustable, metálico.", precio: "4.000", imagen: "img/soporte2.jpg" },

  // Cámaras de seguridad
  { id: 39, nombre: "Cámara IP Wi-Fi 360°", descripcion: "Vigilancia para el hogar.", precio: "32.000", imagen: "img/camara1.jpg" },

  // Estabilizador
  { id: 40, nombre: "Estabilizador APC 1000VA", descripcion: "Protección eléctrica para PC.", precio: "48.000", imagen: "img/estabilizador1.jpg" }
];

// Guardamos los productos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));