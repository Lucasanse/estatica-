const productos = [
  // Placas de video
  { id: 1, nombre: "Placa de Video RTX 3060", descripcion: "NVIDIA GeForce RTX 3060 12GB GDDR6.", precio: "350000", imagen: "img/Graficas/RTX 3060.jpg", esDestacado: "si", categoria: "placa"},
  { id: 2, nombre: "Placa de Video RX 6600", descripcion: "ASUS Dual Radeon RX 6600 8GB GDDR6.", precio: "310000", imagen: "img/Graficas/RX 6600.jpg", esDiaDelPadre: "si", categoria: "placa" },
  { id: 3, nombre: "Placa de Video GTX 1660 Super", descripcion: "Ideal para gaming en 1080p.", precio: "270000", imagen: "img/Graficas/RTX 1660.jpg", categoria: "placa" },

  // Memorias RAM
  { id: 4, nombre: "Memoria RAM 8GB DDR4", descripcion: "Corsair Vengeance LPX 3200MHz.", precio: "25000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria: "ram" },
  { id: 5, nombre: "Memoria RAM 16GB DDR4", descripcion: "Kingston HyperX Fury 3200MHz.", precio: "45000", imagen: "img/ejemplo.jpg", categoria: "ram"  },
  { id: 6, nombre: "Memoria RAM 32GB DDR4", descripcion: "Corsair Dominator Platinum RGB.", precio: "95000", imagen: "img/ejemplo.jpg", categoria: "ram"  },

  // Periféricos - Teclados
  { id: 7, nombre: "Teclado gamer retroiluminado", descripcion: "Diseño ergonómico y silencioso.", precio: "17000", imagen: "img/ejemplo.jpg", categoria:"periferico"},
  { id: 8, nombre: "Teclado mecánico Logitech", descripcion: "Switches azules, RGB.", precio: "35000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria:"periferico"},

  // Periféricos - Mouse
  { id: 9, nombre: "Mouse gamer Logitech G203", descripcion: "Sensor preciso, RGB.", precio: "12000", imagen: "img/ejemplo.jpg", categoria:"periferico" },
  { id: 10, nombre: "Mouse inalámbrico HP", descripcion: "Conectividad Bluetooth.", precio: "8000", imagen: "img/ejemplo.jpg", categoria:"periferico" },

  // Periféricos - Auriculares
  { id: 11, nombre: "Auriculares Redragon Zeus", descripcion: "Con micrófono y luces RGB.", precio: "25000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria:"periferico" },
  { id: 12, nombre: "Auriculares inalámbricos JBL", descripcion: "Batería de larga duración.", precio: "30000", imagen: "img/ejemplo.jpg", categoria:"periferico" },

  // Periféricos - Monitores
  { id: 13, nombre: "Monitor LG 27'' IPS", descripcion: "Full HD, 75Hz.", precio: "180000", imagen: "img/ejemplo.jpg", categoria:"periferico" },
  { id: 14, nombre: "Monitor Samsung Curvo 32''", descripcion: "Diseño envolvente.", precio: "250000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria:"periferico" },

  // Periféricos - Webcams
  { id: 15, nombre: "Webcam Logitech C920", descripcion: "1080p con micrófono.", precio: "38000", imagen: "img/ejemplo.jpg", categoria:"periferico" },
  { id: 16, nombre: "Webcam Genius 720p", descripcion: "Ideal para videollamadas.", precio: "14000", imagen: "img/ejemplo.jpg", categoria:"periferico" },

  // Impresoras
  { id: 17, nombre: "Impresora HP Ink Tank 415", descripcion: "WiFi, impresión económica.", precio: "120000", imagen: "img/ejemplo.jpg", esDestacado: "si", categoria:"impresora" },
  { id: 18, nombre: "Impresora Epson EcoTank L3250", descripcion: "Multifunción inalámbrica.", precio: "150000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria:"impresora" },

  // Tóners y cartuchos
  { id: 19, nombre: "Tóner HP 107A", descripcion: "Original, negro.", precio: "22000", imagen: "img/ejemplo.jpg", categoria:"toner" },
  { id: 20, nombre: "Cartucho Epson T544", descripcion: "Color magenta, alta duración.", precio: "9000", imagen: "img/ejemplo.jpg", categoria:"toner" },

  // Otros periféricos y accesorios
  { id: 21, nombre: "Pad Mouse XL", descripcion: "Antideslizante, bordes cosidos.", precio: "6000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 22, nombre: "Soporte para monitor", descripcion: "Ajustable en altura.", precio: "15000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 23, nombre: "Base para notebook con cooler", descripcion: "5 ventiladores silenciosos.", precio: "18000", imagen: "img/ejemplo.jpg", esDiaDelPadre: "si", categoria:"accesorio" },

  // Placas de video adicionales
  { id: 24, nombre: "Placa de Video RTX 4070 Ti", descripcion: "12GB GDDR6X para alto rendimiento.", precio: "850000", imagen: "img/ejemplo.jpg", categoria: "placa" },
  { id: 25, nombre: "Placa de Video RX 6750 XT", descripcion: "FidelityFX Super Resolution.", precio: "520000", imagen: "img/ejemplo.jpg", categoria: "placa" },

  // Monitores adicionales
  { id: 26, nombre: "Monitor ASUS TUF 165Hz", descripcion: "1ms, G-SYNC compatible.", precio: "280000", imagen: "img/ejemplo.jpg", categoria:"periferico" },

  // RAM adicionales
  { id: 27, nombre: "RAM 8GB Crucial", descripcion: "2666MHz DDR4.", precio: "22000", imagen: "img/ejemplo.jpg", categoria: "ram"  },

  // Accesorios extra
  { id: 28, nombre: "Kit limpieza PC", descripcion: "Alcohol isopropílico y brochas.", precio: "5000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 29, nombre: "Cable HDMI 2.0", descripcion: "1.5m de longitud, 4K UHD.", precio: "3000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },
  { id: 30, nombre: "Regulador de tensión Forza", descripcion: "6 tomas, protección eléctrica.", precio: "12000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },

  // Más periféricos
  { id: 31, nombre: "Teclado inalámbrico Logitech K380", descripcion: "Compacto y portátil.", precio: "18000", imagen: "img/ejemplo.jpg", categoria:"periferico"  },
  { id: 32, nombre: "Mouse vertical ergonómico", descripcion: "Diseñado para prevenir lesiones.", precio: "11000", imagen: "img/ejemplo.jpg", categoria:"periferico"  },

  // Más impresoras
  { id: 33, nombre: "Multifunción Brother DCP-T220", descripcion: "Imprime, escanea y copia.", precio: "130000", imagen: "img/ejemplo.jpg", categoria:"impresora" },

  // Tóners y cartuchos extra
  { id: 34, nombre: "Tóner Samsung MLT-D111S", descripcion: "Original para Samsung SL-M2020.", precio: "19000", imagen: "img/ejemplo.jpg", categoria:"toner" },

  // Extras para oficina
  { id: 35, nombre: "Mini UPS para router", descripcion: "Mantiene internet activo ante cortes.", precio: "20000", imagen: "img/ejemplo.jpg", categoria:"otro" },
  { id: 36, nombre: "Router TP-Link AX1500", descripcion: "Wi-Fi 6 para todo el hogar.", precio: "42000", imagen: "img/ejemplo.jpg", categoria:"otro" },

  // Auriculares extra
  { id: 37, nombre: "Auriculares con cancelación de ruido", descripcion: "Diseño over-ear, confortables.", precio: "60000", imagen: "img/ejemplo.jpg", categoria:"periferico"  },

  // Soporte celular
  { id: 38, nombre: "Soporte celular para escritorio", descripcion: "Ajustable, metálico.", precio: "4000", imagen: "img/ejemplo.jpg", categoria:"accesorio" },

  // Cámaras de seguridad
  { id: 39, nombre: "Cámara IP Wi-Fi 360°", descripcion: "Vigilancia para el hogar.", precio: "32000", imagen: "img/ejemplo.jpg", categoria:"otro"  },

  // Estabilizador
  { id: 40, nombre: "Estabilizador APC 1000VA", descripcion: "Protección eléctrica para PC.", precio: "48000", imagen: "img/ejemplo.jpg", categoria:"otro" }
];

// Guardamos los productos en localStorage
localStorage.setItem("productos", JSON.stringify(productos));