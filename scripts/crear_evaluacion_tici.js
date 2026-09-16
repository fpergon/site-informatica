// ===== EVALUACIÓN INICIAL TIC I =====
// Copiar en Extensiones > Apps Script desde la hoja de cálculo de resultados
// Ejecutar crearFormularioEvaluacion() para generar el Google Forms
// La URL del formulario se muestra en el Registro de ejecución

function crearFormularioEvaluacion() {
  var form = FormApp.create('Evaluación Inicial — TIC I');
  form.setDescription('Cuestionario de conocimientos previos · 20 preguntas (13 test + 7 desarrollo)');
  form.setIsQuiz(true);
  form.setAllowResponseEdits(true);
  form.setCollectEmail(false);

  // ===================== BLOQUE 1: Sociedad de la información =====================
  var s1 = form.addSectionHeaderItem();
  s1.setTitle('Bloque 1 · Sociedad de la información y del conocimiento');

  form.addMultipleChoiceItem()
    .setTitle('¿Qué es la "brecha digital"?')
    .setChoiceValues([
      'A. La velocidad de conexión a internet.',
      'B. La desigualdad en el acceso y uso de las tecnologías de la información.',
      'C. Un tipo de virus informático.',
      'D. Una red social popular.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Cuál de estos NO es un exponente de la Sociedad de la Información?')
    .setChoiceValues([
      'A. Comercio electrónico.',
      'B. Teletrabajo.',
      'C. La imprenta de Gutenberg.',
      'D. Redes sociales.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Explica con tus palabras qué es la "huella digital" y da un ejemplo de información que dejamos al navegar por internet.')
    .setRequired(true);

  // ===================== BLOQUE 2: Procesadores de texto =====================
  var s2 = form.addSectionHeaderItem();
  s2.setTitle('Bloque 2 · Procesadores de texto');

  form.addMultipleChoiceItem()
    .setTitle('¿Cuál es la función principal de un procesador de texto?')
    .setChoiceValues([
      'A. Crear, editar y formatear documentos de texto.',
      'B. Calcular fórmulas matemáticas complejas.',
      'C. Almacenar grandes cantidades de datos.',
      'D. Navegar por internet.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué formato de archivo NO es un formato de procesador de texto?')
    .setChoiceValues([
      'A. DOCX',
      'B. XLSX',
      'C. PDF',
      'D. ODT'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Menciona al menos 3 opciones de formato que ofrece un procesador de texto para dar formato a un párrafo (ej: alineación, interlineado...).')
    .setRequired(true);

  // ===================== BLOQUE 3: Hojas de cálculo =====================
  var s3 = form.addSectionHeaderItem();
  s3.setTitle('Bloque 3 · Hojas de cálculo');

  form.addMultipleChoiceItem()
    .setTitle('¿Qué tipo de referencia se actualiza automáticamente al copiar una fórmula a otra celda?')
    .setChoiceValues([
      'A. Referencia absoluta.',
      'B. Referencia mixta.',
      'C. Referencia relativa.',
      'D. Referencia circular.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Para qué sirve el formato condicional?')
    .setChoiceValues([
      'A. Para crear gráficos automáticamente.',
      'B. Para ordenar los datos alfabéticamente.',
      'C. Para proteger la hoja de cálculo.',
      'D. Para cambiar el aspecto de las celdas según sus valores.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Escribe la fórmula que escribirías en una hoja de cálculo para sumar los valores de las celdas A1, A2 y A3.')
    .setRequired(true);

  // ===================== BLOQUE 4: Bases de datos =====================
  var s4 = form.addSectionHeaderItem();
  s4.setTitle('Bloque 4 · Bases de datos');

  form.addMultipleChoiceItem()
    .setTitle('¿Qué es una clave primaria en una base de datos relacional?')
    .setChoiceValues([
      'A. Un campo que identifica de forma única cada registro de una tabla.',
      'B. Una contraseña para acceder a la base de datos.',
      'C. Un campo que almacena números telefónicos.',
      'D. Un tipo de consulta SQL.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué sentencia SQL se utiliza para obtener datos de una tabla?')
    .setChoiceValues([
      'A. INSERT',
      'B. SELECT',
      'C. DELETE',
      'D. UPDATE'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Explica la diferencia entre una relación 1:N y una relación N:M en una base de datos. Pon un ejemplo de cada una.')
    .setRequired(true);

  // ===================== BLOQUE 5: Arquitectura de ordenadores =====================
  var s5 = form.addSectionHeaderItem();
  s5.setTitle('Bloque 5 · Arquitectura de ordenadores');

  form.addMultipleChoiceItem()
    .setTitle('¿Cuál es la función principal de la CPU?')
    .setChoiceValues([
      'A. Almacenar archivos permanentemente.',
      'B. Mostrar imágenes en el monitor.',
      'C. Ejecutar instrucciones y procesar datos.',
      'D. Conectar el ordenador a internet.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué diferencia hay entre memoria RAM y un disco duro SSD?')
    .setChoiceValues([
      'A. La RAM es volátil y rápida; el SSD es permanente y más lento.',
      'B. La RAM almacena el sistema operativo; el SSD solo guarda documentos.',
      'C. No hay diferencia, son lo mismo.',
      'D. El SSD es volátil; la RAM es permanente.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Nombra al menos 4 componentes internos de un ordenador de sobremesa y explica brevemente la función de cada uno.')
    .setRequired(true);

  // ===================== BLOQUE 6: Programación con Python =====================
  var s6 = form.addSectionHeaderItem();
  s6.setTitle('Bloque 6 · Programación con Python');

  form.addMultipleChoiceItem()
    .setTitle('¿Qué es un algoritmo?')
    .setChoiceValues([
      'A. Un lenguaje de programación.',
      'B. Una secuencia ordenada de pasos para resolver un problema.',
      'C. Un tipo de variable en Python.',
      'D. Un programa informático completo.'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué resultado muestra el siguiente código Python?\nx = 5\ny = 3\nprint(x * y)')
    .setChoiceValues([
      'A. 8',
      'B. 53',
      'C. "5 * 3"',
      'D. 15'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('¿Qué estructura de control se utiliza para repetir una acción varias veces?')
    .setChoiceValues([
      'A. if',
      'B. elif',
      'C. for / while',
      'D. print()'
    ])
    .setPoints(1)
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Escribe un programa en Python que pida al usuario su nombre y lo salude por pantalla. (Ejemplo de salida: "¡Hola, María!").')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('¿Qué diferencia hay entre una variable y una constante? Da un ejemplo de cada una.')
    .setRequired(true);

  Logger.log('=== EVALUACIÓN INICIAL TIC I ===');
  Logger.log('Formulario creado con 20 preguntas (13 test + 7 desarrollo)');
  Logger.log('URL del formulario: ' + form.getPublishedUrl());
  Logger.log('URL de edición: ' + form.getEditUrl());
  Logger.log('');
  Logger.log('Marcas las respuestas correctas en el editor del formulario:');
  Logger.log('  P1: B | P2: C | P3: A | P4: B | P5: C | P6: D');
  Logger.log('  P7: A | P8: B | P9: C | P10: A | P11: B | P12: D | P13: C');
}
