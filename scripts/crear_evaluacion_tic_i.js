function crearEvaluacionInicial() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet();

  if (!hoja) {
    throw new Error('Abre Apps Script desde Extensiones > Apps Script de la hoja de cálculo.');
  }

  var propiedades = PropertiesService.getScriptProperties();
  var clave = 'FORMULARIO_TIC_INICIAL';
  var idExistente = propiedades.getProperty(clave);

  if (idExistente) {
    var existente = FormApp.openById(idExistente);
    console.log('Formulario ya creado.');
    console.log('Editar: ' + existente.getEditUrl());
    console.log('Responder: ' + existente.getPublishedUrl());
    return;
  }

  var formulario = FormApp.create('Evaluación inicial · TIC I');

  formulario.setDescription(
    'Cuestionario para conocer tus conocimientos previos en TIC I.\n' +
    'No se califica. Responde sin consultar materiales.\n' +
    'Si no conoces la respuesta, indica "No lo sé todavía".'
  );

  formulario.setCollectEmail(true);
  formulario.setConfirmationMessage('Tus respuestas se han registrado correctamente. Gracias.');
  formulario.setDestination(FormApp.DestinationType.SPREADSHEET, hoja.getId());

  // === DATOS DEL ALUMNO ===
  formulario.addTextItem().setTitle('Nombre y apellidos').setRequired(true);

  var n = 0;

  function test(texto, opciones) {
    n++;
    formulario.addMultipleChoiceItem()
      .setTitle(n + '. ' + texto)
      .setChoiceValues(opciones.concat(['No lo sé todavía.']))
      .setRequired(true);
  }

  function desarrollo(texto) {
    n++;
    formulario.addParagraphTextItem()
      .setTitle(n + '. ' + texto)
      .setHelpText('Escribe lo que sepas. Si no sabes, escribe "No lo sé todavía".')
      .setRequired(true);
  }

  // === UD1 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD1 · Sociedad de la información')
    .setHelpText('Uso de las TIC, impacto social, representación digital de la información y tendencias tecnológicas.');

  test('¿Qué es la "brecha digital"?', [
    'La diferencia de velocidad entre redes de internet.',
    'La desigualdad en el acceso y uso de las tecnologías de la información.',
    'Un tipo de virus informático.',
    'Una actualización del sistema operativo.'
  ]);

  test('¿Cuál de estos es un contaminante primario de la atmósfera?', [
    'Ozono troposférico (O3).',
    'Ácido sulfúrico (H2SO4).',
    'Óxidos de nitrógeno (NOx).',
    'Smog fotoquímico.'
  ]);

  test('¿En qué formato se almacena la información en un ordenador?', [
    'En decimal (.dec).',
    'En binario (0 y 1).',
    'En hexadecimal únicamente.',
    'En lenguaje natural.'
  ]);

  test('¿Cuántos bits hay en 1 byte?', [
    '4 bits.',
    '8 bits.',
    '16 bits.',
    '32 bits.'
  ]);

  desarrollo('Explica con un ejemplo qué es la "huella digital" que dejamos al navegar por internet.');

  // === UD2 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD2 · Procesadores de texto')
    .setHelpText('Procesadores de texto, formateo de documentos, imágenes, tablas y estilos.');

  test('¿Cuál es la función principal de un procesador de texto?', [
    'Crear, editar y formatear documentos de texto.',
    'Calcular fórmulas matemáticas.',
    'Almacenar grandes bases de datos.',
    'Navegar por internet.'
  ]);

  test('¿Qué formato de archivo NO corresponde a un procesador de texto?', [
    'DOCX.',
    'PDF.',
    'XLSX.',
    'ODT.'
  ]);

  test('¿Para qué sirve una tabla de contenidos automática?', [
    'Para crear gráficos estadísticos.',
    'Para listar los capítulos o secciones del documento con sus páginas.',
    'Para proteger el documento con contraseña.',
    'Para cambiar la fuente de todo el documento.'
  ]);

  test('¿Qué es un estilo predefinido en un procesador de texto?', [
    'Una imagen que se inserta automáticamente.',
    'Un conjunto de formato (fuente, tamaño, color) aplicable de forma rápida y coherente.',
    'Una plantilla de correo electrónico.',
    'Un plugin de inteligencia artificial.'
  ]);

  desarrollo('Menciona al menos tres opciones de formato que ofrece un procesador de texto para dar estilo a un párrafo.');

  // === UD3 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD3 · Hojas de cálculo')
    .setHelpText('Herramientas de cálculo, fórmulas, funciones, formato condicional, gráficos y manejo de datos.');

  test('¿Qué tipo de referencia se actualiza automáticamente al copiar una fórmula?', [
    'Referencia absoluta.',
    'Referencia mixta.',
    'Referencia relativa.',
    'Referencia circular.'
  ]);

  test('¿Qué resultado devuelve la función =SUMA(A1:A5)?', [
    'Suma el contenido de las celdas A1 a A5.',
    'Cuenta cuántas celdas hay entre A1 y A5.',
    'Calcula la media de A1 a A5.',
    'Multiplica A1 por A5.'
  ]);

  test('¿Para qué se utiliza el formato condicional?', [
    'Para crear gráficos automáticamente.',
    'Para cambiar el aspecto de las celdas según el valor que contengan.',
    'Para ordenar datos alfabéticamente.',
    'Para proteger la hoja de cálculo.'
  ]);

  test('¿Qué符号 (símbolo) se usa para fijar una columna o fila en una referencia absoluta?', [
    'El signo +.',
    'El signo $.',
    'El signo @.',
    'El signo #.'
  ]);

  desarrollo('Escribe la fórmula que usarías para calcular la nota media de las notas que hay en las celdas B2, B3 y B4.');

  // === UD4 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD4 · Bases de datos')
    .setHelpText('Bases de datos relacionales, modelo E-R, lenguaje SQL, claves primarias y foráneas.');

  test('¿Qué es una clave primaria en una base de datos relacional?', [
    'Una contraseña de administrador.',
    'Un campo que identifica de forma única cada registro de una tabla.',
    'Un campo que almacena fechas.',
    'Una función de búsqueda.'
  ]);

  test('¿Qué sentencia SQL se utiliza para consultar datos?', [
    'INSERT INTO.',
    'SELECT.',
    'DELETE.',
    'UPDATE.'
  ]);

  test('¿Qué significa "relación 1:N" entre dos tablas?', [
    'Cada registro de la tabla A se relaciona con uno de la tabla B.',
    'Un registro de la tabla A puede estar relacionado con varios de la tabla B.',
    'Las tablas no tienen claves.',
    'Las tablas están duplicadas.'
  ]);

  test('¿Qué tipo de campo se usa para almacenar texto en una base de datos?', [
    'INTEGER.',
    'VARCHAR.',
    'BOOLEAN.',
    'FLOAT.'
  ]);

  desarrollo('Explica con un ejemplo sencillo la diferencia entre una clave primaria y una clave foránea.');

  // === UD5 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD5 · Arquitectura de ordenadores')
    .setHelpText('Componentes de un ordenador, arquitectura de Von Neumann, memoria, periféricos y sistemas operativos.');

  test('¿Cuál es la función principal de la CPU?', [
    'Mostrar imágenes en la pantalla.',
    'Ejecutar instrucciones y procesar datos.',
    'Almacenar archivos permanentemente.',
    'Conectar el ordenador a internet.'
  ]);

  test('¿Qué diferencia hay entre RAM y un disco SSD?', [
    'La RAM es volátil y rápida; el SSD almacena datos de forma permanente.',
    'No hay diferencia; son lo mismo.',
    'El SSD es más rápido que la RAM.',
    'La RAM solo se usa en servidores.'
  ]);

  test('¿Qué hace el sistema operativo?', [
    'Ejecuta únicamente programas de edición de vídeo.',
    'Gestiona los recursos del hardware y facilita la interacción con el usuario.',
    'Convierte el código máquina en código fuente.',
    'Navega por internet automáticamente.'
  ]);

  test('¿Qué tipo de periférico es un escáner?', [
    'Periférico de salida.',
    'Periférico de entrada.',
    'Periférico de entrada/salida.',
    'No es un periférico.'
  ]);

  desarrollo('Nombra cuatro componentes internos de un ordenador de sobremesa y explica brevemente la función de cada uno.');

  // === UD6 ===
  formulario.addSectionHeaderItem()
    .setTitle('UD6 · Programación con Python')
    .setHelpText('Algoritmos, pseudocódigo, tipos de datos, estructuras de control, funciones y depuración.');

  test('¿Qué es un algoritmo?', [
    'Un lenguaje de programación.',
    'Una secuencia ordenada de pasos para resolver un problema.',
    'Un tipo de variable.',
    'Una aplicación de edición de imágenes.'
  ]);

  test('¿Qué tipo de dato es True en Python?', [
    'int.',
    'str.',
    'bool.',
    'float.'
  ]);

  test('¿Qué estructura de control se utiliza para repetir una acción?', [
    'if / elif / else.',
    'for / while.',
    'print().',
    'input().'
  ]);

  test('¿Qué resultado muestra el siguiente código?\nx = 4\ny = 2\nprint(x ** y)', [
    '6.',
    '8.',
    '16.',
    '42.'
  ]);

  test('¿Qué es una función en programación?', [
    'Una variable global.',
    'Un bloque de código reutilizable que realiza una tarea específica.',
    'Un tipo de bucle.',
    'Un archivo de texto.'
  ]);

  desarrollo('Escribe un programa en Python que pida al usuario su nombre y muestre por pantalla un saludo personalizado. Por ejemplo: "Hola, María".');

  // === RESULTADO ===
  console.log('Formulario creado correctamente.');
  console.log('URL para responder: ' + formulario.getPublishedUrl());
  console.log('URL para editar: ' + formulario.getEditUrl());

  propiedades.setProperty(clave, formulario.getId());
}
