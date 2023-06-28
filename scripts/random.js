//data structure for questions
const questions = [
    {
        id: 1,
        question: "Vía pública que está especialmente proyectada, construida y señalizada para el tránsito de vehículos autorizados, y que reúne las siguientes características: a) las propiedades colindantes no tienen acceso directo. b) no cruza a nivel ningún otro camino, vía o línea de ferrocarril, ni es cruzada a nivel por vía de comunicación o servidumbre de paso alguna.",
        optionA: "Autopista",
        optionB: "Carretera Interamericana",
        optionC: "Calles de doble carril",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 2,
        question: "Vía pública utilizada para el tránsito interurbano de vehículos con niveles adecuadosde seguridad y comodidad.",
        optionA: "Avenidas",
        optionB: "Avenidas y calles",
        optionC: "Carreteras",
        optionD: "Aceras",
        correctOption: "optionC"
    },

    {
        id: 3,
        question: "Preferencia en la circulación que tiene un vehículo o peatón con respecto a los demás vehículos o peatones.",
        optionA: "Derecho de vía",
        optionB: "Carril principal",
        optionC: "Ceder el paso",
        optionD: "Transitar por el carril izquierdo",
        correctOption: "optionA"
    },

    {
        id: 4,
        question: "Carril destinado para el uso único de un determinado tipo de vehículo y que muestra una separación física longitudinal a través de elementos fijos, tales como barreras o cordones o por medio de señalización especial. puede mantener cruces a nivel con otras vías, así como con los peatones.",
        optionA: "Carril Exclusivo",
        optionB: "Carril derecho",
        optionC: "Aceras",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 5,
        question: "Acción de ubicar un vehículo transitoriamente en el área destinada para este fin.",
        optionA: "Parar",
        optionB: "Estacionar",
        optionC: "Dejas pasajeros",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 6,
        question: "Sobrepasar el número de pasajeros establecido por el fabricante del vehículo como la capacidad máxima",
        optionA: "Exceso de carga",
        optionB: "Exceso de pasajeros",
        optionC: "Violar la ley de pesos y dimensiones",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 7,
        question: "Parte de la estructura de la vía de circulación contigua a la calzada, que sirve de protección a los efectos de erosión, utilizada eventualmente para la parada de vehículos en situaciones fortuitas o casos de emergencia y para la circulación de peatones.",
        optionA: "Acera",
        optionB: "Hombro",
        optionC: "Cordón",
        optionD: "Isleta",
        correctOption: "optionB"
    },

    {
        id: 8,
        question: "Documento de carácter personal e intransferible, expedido por la autoridad del tránsito y transporte terrestre que autoriza a una persona a conducir vehículos en el territorio nacional.",
        optionA: "Placa única de circulación",
        optionB: "Licencia de conducir",
        optionC: "Reglamento de tránsito ",
        optionD: "Póliza de seguros de daños contra terceros",
        correctOption: "optionB"
    },

    {
        id: 9,
        question: "Señales pintadas sobre la vía de circulación o con elementos adyacentes a ella para indicar, advertir o guiar el tránsito.",
        optionA: "Señales de tránsito informativas",
        optionB: "Señales preventivas",
        optionC: "Señales verticales",
        optionD: "Marcas de pavimento",
        correctOption: "optionD"
    },

    {
        id: 10,
        question: "Persona que no siendo el conductor ocupa un lugar dentro del vehículo.",
        optionA: "Peatón",
        optionB: "Pasajero",
        optionC: "Acompañante",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 11,
        question: "Zona de la calzada delimitada por dispositivos o marcas pintadas sobre la vía para que los peatones crucen o atraviesen la vía.",
        optionA: "Paso peatonal a nivel",
        optionB: "Paso peatonal a desnivel",
        optionC: "Paso peatonal vertical",
        optionD: "Paso peatonal mixto",
        correctOption: "optionA"
    },

    {
        id: 12,
        question: "Persona que transita a pie. también se consideran como peatones las personas discapacitadas o niños que transiten en aparatos especiales manejados por ellos o por otra persona.",
        optionA: "Persona que transita en bicicleta",
        optionB: "Peatón",
        optionC: "Discapacitado",
        optionD: "Todas son correctas",
        correctOption: "optionB"
    },

    {
        id: 13,
        question: "Prioridad o preferencia que tiene una vía o vehículo con respecto a otras vías u otros vehículos.",
        optionA: "Prelación",
        optionB: "Vía principal",
        optionC: "Vía Secundaria",
        optionD: "B y C son correctas",
        correctOption: "optionA"
    },

    {
        id: 14,
        question: "Paso preferencial de vehículos con relación al uso de las vías que comprende los vehículos de funcionarios autorizados, cuerpo de bomberos, Policía Nacional, ambulancias y otros casos de emergencia, además de cualquier otro que establezca la autoridad del tránsito y transporte terrestre.",
        optionA: "Paso primario",
        optionB: "Prioridad de paso",
        optionC: "Paso secundario",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 15,
        question: "Maniobra mediante la cual un vehículo adelanta a otro que lo antecede en el mismo carril de una calzada.",
        optionA: "Pasar al otro carril",
        optionB: "Rebasar",
        optionC: "Emparejar",
        optionD: "Aparcar",
        correctOption: "optionB"
    },

    {
        id: 16,
        question: "Circulación de personas, animales o vehículos por una vía pública o privada abierta al público.",
        optionA: "Caminos",
        optionB: "Veredas",
        optionC: "Calles",
        optionD: "Tránsito",
        correctOption: "optionD"
    },

    {
        id: 17,
        question: "Elemento reflector de seguridad que se coloca a una distancia apropiada de un vehículo estacionado en situaciones fortuitas o de emergencias en los carriles o áreas de circulación vial, y que advierte del peligro a los demás conductores.",
        optionA: "Conos de hule",
        optionB: "Casco protector",
        optionC: "Triángulo de seguridad",
        optionD: "Todas las anteriores",
        correctOption: "optionC"
    },

    {
        id: 18,
        question: "Persona que circula por algún tramo de la red vial como usuario de un medio de transporte, motorizado o no.",
        optionA: "Usuario de vía pública",
        optionB: "Peatón",
        optionC: "Conductor",
        optionD: "Policía",
        correctOption: "optionA"
    },

    {
        id: 19,
        question: "Zona o terreno de uso público destinado para el tránsito libre de vehículos, peatones y/o animales, sin más limitaciones que las establecidas por el presente reglamento.",
        optionA: "Carretera",
        optionB: "Avenida",
        optionC: "Calle",
        optionD: "Vía Pública",
        correctOption: "optionD"
    },

    {
        id: 20,
        question: "Vehículo destinado al transporte de turistas debidamente registrado e identificado como tal, con las normas y características que se exijan para esta actividad.",
        optionA: "Vehículos de uso particular en general",
        optionB: "Vehículos de turismo",
        optionC: "Taxis",
        optionD: "Buses",
        correctOption: "optionB"
    },

    {
        id: 21,
        question: "Los vehículos matriculados de otros países que ingresen al territorio de la República de Panamá podrán transitar libremente siempre y cuando cuenten con un permiso de circulación expedido por la Autoridad de Tránsito y Transporte Terrestre por un periodo de:",
        optionA: "30 días",
        optionB: "90 días",
        optionC: "60 días",
        optionD: "No pueden transitar",
        correctOption: "optionB"
    },

    {
        id: 22,
        question: "Los vehículos a motor deben portar el siguiente equipo de seguridad en las vías de circulación:",
        optionA: "Triángulo reflectivo de seguridad, herramientas básicas, llanta de repuesto, elevador mecánico, herramienta para reemplazo de llantas",
        optionB: "Reglamento de tránsito",
        optionC: "Licencia de conducir",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 23,
        question: "Es necesario que el vehículo se encuentre en condiciones adecuadas de seguridad, ya sea para uso particular, al servicio del estado, para el transporte público de pasajeros o de carga. Las condiciones de seguridad serán exigidas sobre los siguientes sistemas:",
        optionA: "Chasis, mecánico, emisión de gases, frenos, llantas, luces",
        optionB: "Dirección, bocinas preventivas, carrocería interna y externa",
        optionC: "Sistema eléctrico, amortiguación",
        optionD: "Todos los anteriores",
        correctOption: "optionD"
    },

    {
        id: 24,
        question: "Donde se inscribirá la propiedad de todos los vehículos a motor y unidades de arrastre que circulan por caminos, calles o vías particulares destinadas al uso público en todo el territorio nacional.",
        optionA: "En la Sección Nacional del Registro Único de Vehículos Motorizados",
        optionB: "En la Policía de Tránsito",
        optionC: "Juzgados de Tránsito",
        optionD: "Dirección General de la Autoridad de Tránsito",
        correctOption: "optionA"
    },

    {
        id: 25,
        question: "Prohibiciones en relación con los vehículos en general:",
        optionA: "No portar equipo de seguridad, colocar accesorios en los rines a una distancia que sobresalga de los guardafangos del vehículo",
        optionB: "Derramar combustible o sustancias tóxicas que afecten el ambiente en la vía pública, estar en mal estado mecánico o de carrocería",
        optionC: "A y B son correctas",
        optionD: "No portar licencia de conducir",
        correctOption: "optionC"
    },

    {
        id: 26,
        question: "Para transitar en las vías públicas, todo vehículo requiere una placa única y definitiva suministrada por:",
        optionA: "La Autoridad de Tránsito y Transporte Terrestre",
        optionB: "El municipio donde se encuentra inscrito",
        optionC: "En la agencia donde lo compró",
        optionD: "En la junta comunal",
        correctOption: "optionB"
    },

    {
        id: 27,
        question: "Todos los vehículos deben mantener encendidas las luces exteriores a partir de:",
        optionA: "De 6:00 p.m a 6:00 a.m o cuando las condiciones de visibilidad sean adversas",
        optionB: "Cuando el policía lo exija",
        optionC: "Cuando sea de noche o el auto tenga desperfecto",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 28,
        question: "Solamente podrán utilizar las señales luminosas especiales, sean rotativas o de destello, los vehículos que a continuación se detallan:",
        optionA: "De color rojo, los que estén al servicio de la Presidencia de la República, de la Policía Nacional, la Policía Técnica Judicial, la Cruz Roja Nacional y las ambulancias",
        optionB: "De color azul, los pertenecientes a las instituciones autorizadas por la Autoridad de de Tránsito y Transporte Terrestre, los utilizados por el Sistema Nacional de Protección Civíl y al Cuerpo de Bomberos de la República de Panamá",
        optionC: "De color rojo y azul, los que se encuentren al servicio de la Policía Nacional y de la Autoridad de Tránsito y Transporte Terrestre",
        optionD: "Todas las anteriores son correctas",
        correctOption: "optionD"
    },

    {
        id: 29,
        question: "Es obligatorio para todo conductor reemplazar el sistema de luces altas por el sistema de luces bajas siempre que se encuentre con otro vehículo.",
        optionA: "Este reemplazo se hará a una distancia no menor de ciento cincuenta (150) metros en carreteras y autopistas y no menos de setenta y cinco (75) metros en calles y avenidas",
        optionB: "Solamente en carreteras",
        optionC: "A 150 metros de autopistas",
        optionD: "Todas son correctas",
        correctOption: "optionA"
    },

    {
        id: 30,
        question: "Es prohibido respecto al sistema de iluminación de los vehículos:",
        optionA: "Reemplazar o agregar a la iluminación original del vehículo, mecanismos de destello o cualquier otro dispositivo de iluminación incandilante",
        optionB: "Utilizar luces de neón de cualquier color en el exterior del vehículo, al igual que cualquier otro tipo de luz no especificado en el Reglamento",
        optionC: "Usar el sistema de luces altas en zonas pobladas, excepto en los casos previstos en el artículo 52",
        optionD: "Todas son correctas",
        correctOption: "optionD"
    },

    {
        id: 31,
        question: "Los peatones están obligados a obedecer las indicaciones de la autoridad competente y las disposiciones para el control del tránsito establecidas en el presente reglamento y gozarán de las prioridades de paso para peatones que le sean concedidas. ¿A qué se refieren los artículos 33 de la ley de Tránsito y 100 del reglamento de tránsito, así como la disposición y mandato de la Policía Nacional?",
        optionA: "Artículo 33 de la ley de Tránsito",
        optionB: "Artículo 100 del reglamento de tránsito",
        optionC: "Disposición y mandato de la Policía Nacional",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 32,
        question: "Los peatones caminarán obligatoriamente por:",
        optionA: "Las aceras, veredas, pasos elevados y demás facilidades habilitadas para su uso",
        optionB: "Pavimento",
        optionC: "Aceras únicamente",
        optionD: "Puentes elevados peatonales solamente",
        correctOption: "optionA"
    },

    {
        id: 33,
        question: "En caso de no existir aceras, ¿cómo transitarán los peatones?",
        optionA: "Por los puentes elevados peatonales",
        optionB: "Por los parques fuera de la vía",
        optionC: "Del lado izquierdo de la vía con el sentido del tránsito de vehículos de frente",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 34,
        question: "Los peatones que caminen por la vía pública están en la obligación de:",
        optionA: "Acatar las órdenes y observar las señales que con respecto a la circulación de vehículos en general, imparta la Autoridad de Tránsito y Transporte Terrestre",
        optionB: "Portar su licencia de conducir",
        optionC: "Acatar lo que diga el policía de tránsito",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 35,
        question: "Antes de cruzar la vía, todo peatón esperará:",
        optionA: "El momento en el que no exista tránsito vehicular",
        optionB: "Que éste se halle detenido",
        optionC: "Que la distancia de los vehículos más próximos sea tal que pueda realizar el cruce a paso normal",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 36,
        question: "¿Qué peatones deben hacerse acompañar de una persona mayor de 16 años?",
        optionA: "Los mayores de 90 años",
        optionB: "Los menores de 12 años",
        optionC: "Los menores de 5 años",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 37,
        question: "Es prohibido para los peatones:",
        optionA: "Caminar en el mismo sentido del tránsito vehicular cuando no existan aceras, veredas y demás facilidades habilitadas para su uso",
        optionB: "Cruzar la vía sin utilizar las líneas de seguridad, semáforos peatonales o pasos elevados peatonales existentes",
        optionC: "Cruzar una intersección diagonalmente",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 38,
        question: "Detenerse en las aceras y formar tumultos que impidan la circulación es una infracción de:",
        optionA: "Los conductores",
        optionB: "Peatones",
        optionC: "Camiones de cargas",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 39,
        question: "La circulación de peatones en contravención de cualquiera de las disposiciones del reglamento de tránsito:",
        optionA: "Lo hará responsable de cualquier daño o perjuicio que cause",
        optionB: "Los peatones deberán ser atendidos y llevados al hospital más cercano",
        optionC: "Los peatones tienen preferencia de paso",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 40,
        question: "Los peatones que sean sorprendidos violando estas disposiciones:",
        optionA: "Serán conducidos a la autoridad del área jurisdiccional para que le imponga la sanción correspondiente",
        optionB: "El policía le pone una multa",
        optionC: "Se le hace llamado de atención",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 41,
        question: "Quienes podrán obtener una licencia de conducir vehículos, siempre que cumplan con los requisitos establecidos en el presente reglamento?",
        optionA: "Los panameños por nacimiento",
        optionB: "Los mayores de 25 años",
        optionC: "Los panameños y extranjeros mayores de 18 años",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 42,
        question: "Los extranjeros que ingresen a la República de Panamá en calidad de turistas solamente podrán conducir vehículos con licencia vigente de su país de origen por un periodo de:",
        optionA: "30 días",
        optionB: "60 días",
        optionC: "90 días",
        optionD: "120 días",
        correctOption: "optionC"
    },

    {
        id: 43,
        question: "Los extranjeros que ingresen a la República de Panamá en calidad de turistas podrán conducir vehículos tipo:",
        optionA: "Transporte colectivo",
        optionB: "Particulares",
        optionC: "Selectivo",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 44,
        question: "Los diferentes tipos de licencias de conducir que se expiden en la República de Panamá según el artículo 112 son:",
        optionA: "A, B, C, D, E1, E2, E3, F, G, H, I, J",
        optionB: "Particular, comercial y profesional",
        optionC: "Para autos sedanes",
        optionD: "Todas son correctas",
        correctOption: "optionA"
    },

    {
        id: 45,
        question: "Para renovar la licencia de conducir de un conductor mayor de setenta (70) años, además de cumplir con los requisitos establecidos en el presente reglamento, deberá presentar:",
        optionA: "Certificado psiquiátrico",
        optionB: "Examen psicológico y médico general",
        optionC: "A y B son correctas",
        optionD: "Una certificación de un médico con especialización en geriatría o medicina interna",
        correctOption: "optionD"
    },

    {
        id: 46,
        question: "Según el artículo 132 de la Ley de Tránsito, la licencia de conducir se debe:",
        optionA: "Enseñar",
        optionB: "Presentar",
        optionC: "Entregar",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 47,
        question: "¿Según el artículo 125 de la Ley de Tránsito, a quién se le debe entregar la licencia de conducir?",
        optionA: "Al policía",
        optionB: "A los inspectores de la ATTT",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 48,
        question: "La licencia de conducir se cancelará:",
        optionA: "Por disposición de la Autoridad de Tránsito y Transporte Terrestre basada en la imposibilidad permanente, física o mental, para conducir, diagnosticado en un certificado médico emitido por el Instituto de Medicina Legal",
        optionB: "Por decisión judicial o fallo condenatorio",
        optionC: "Por reincidencia al conducir en estado de embriaguez comprobada o intoxicación por estupefacientes determinado por la autoridad competente, con el agravante de causar accidentes de tránsito",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 49,
        question: "Artículo 122. Todo conductor es responsable del vehículo que conduce y está en la obligación de:",
        optionA: "Velar por la seguridad de sus pasajeros y de la carga que transporta",
        optionB: "Por la seguridad de los peatones",
        optionC: "No dañar el vehículo",
        optionD: "A y B son correctas",
        correctOption: "optionD"
    },

    {
        id: 50,
        question: "Artículo 125. Todo conductor de vehículo está en la obligación de:",
        optionA: "Portar la licencia de conducir",
        optionB: "Portar los documentos del vehículo",
        optionC: "Portar la placa de circulación",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 51,
        question: "El conductor que atropelle o lesione con su vehículo a cualquier persona debe:",
        optionA: "Poner en conocimiento del hecho a servicios de emergencias",
        optionB: "Prestar primeros auxilios según sus conocimientos",
        optionC: "Trasladarlo al centro de atención médica más cercano, siempre y cuando no presente un riesgo para el afectado al momento de su traslado",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 52,
        question: "No podrán viajar en el asiento delantero del vehículo, excepto en vehículos de una sola cabina.",
        optionA: "Los pasajeros menores de cinco (5) años",
        optionB: "Los pasajeros menores de dos (2) años",
        optionC: "Los pasajeros menores de diez (10) años",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 53,
        question: "Obligaciones de los conductores:",
        optionA: "En los vehículos a motor, excepto motocicletas, usar el cinturón de seguridad y exigir a sus pasajeros su uso como medida de seguridad; se exceptúan los pasajeros de vehículo de transporte colectivo, colegial y de turismo",
        optionB: "En bicicletas y motocicletas, usar el casco protector de acuerdo con su modalidad y exigir a sus pasajeros su uso como medida de seguridad",
        optionC: "Todas las anteriores",
        optionD: "",
        correctOption: "optionC"
    },

    {
        id: 54,
        question: "Es prohibido a los conductores de vehículos:",
        optionA: "Negarse a entregar la licencia de conducir cuando es requerido por las autoridades competentes",
        optionB: "Portar la licencia de conducir no adecuada al vehículo",
        optionC: "Cobrar deliberadamente a pasajeros en vehículos particulares, comerciales y de transporte gratuito de empleados",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 55,
        question: "Son prohibiciones de los conductores:",
        optionA: "Conducir con volumen excesivo en el equipo de sonido",
        optionB: "Hablar por teléfono mientras conduce",
        optionC: "Todas las anteriores",
        optionD: "Hacer el cambio de llantas en la vía pública sin tomar las medidas de precaución y seguridad",
        correctOption: "optionC"
    },

    {
        id: 56,
        question: "Los conductores de vehículos de transporte colegial deben:",
        optionA: "Garantizar la integridad física de los estudiantes que transportan",
        optionB: "Cuidar el vehículo",
        optionC: "Todas las anteriores",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 57,
        question: "Cobrar deliberadamente a pasajeros en vehículos particulares, comerciales y de transporte gratuito de empleados es:",
        optionA: "Una obligación",
        optionB: "Una prohibición",
        optionC: "Una forma de transporte",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 58,
        question: "Todo conductor de un vehículo que se utilice para el transporte de cargas peligrosas debe portar:",
        optionA: "El permiso previo de circulación y la hoja de seguridad del material transportado",
        optionB: "Permiso emitido por la Policía de Tránsito",
        optionC: "Paz y salvo del conductor",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 59,
        question: "El alcohol es:",
        optionA: "Una droga psicodepresora de consumo legal",
        optionB: "Una bebida prohibida",
        optionC: "Una bebida para conductores mayores de 18 años",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 60,
        question: "El estado de embriaguez y la intoxicación por estupefacientes se definen como:",
        optionA: "La pérdida transitoria o manifiesta disminución de las facultades físicas y mentales normales, causadas por el consumo de bebidas alcohólicas o estupefacientes, representativamente, y que disminuye las condiciones físicas y mentales normales para conducir cualquier tipo de vehículo",
        optionB: "Droga que causa sueño",
        optionC: "Todas de las anteriores",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 61,
        question: "El estado de embriaguez y la intoxicación por estupefacientes se determinarán por cualquiera de los siguientes exámenes y pruebas:",
        optionA: "Análisis de aires espirales (estado de embriaguez)",
        optionB: "Pruebas de estado físico",
        optionC: "Médicas",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 62,
        question: "Están en la obligación de someterse a las pruebas para determinar el grado de intoxicación por alcohol:",
        optionA: "En casos de peatones involucrados en accidentes por atropello",
        optionB: "Todos los conductores de vehículo a motor",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 63,
        question: "La conducta del conductor o el peatón, de negarse a someterse a cualquiera de las pruebas que determinan el estado de embriaguez:",
        optionA: "Es un derecho",
        optionB: "Es un deber solo del conductor",
        optionC: "Constituye un grave indicio en su contra",
        optionD: "Los peatones no tienen que hacerse la prueba",
        correctOption: "optionC"
    },

    {
        id: 64,
        question: "Es prohibido a los peatones y conductores de vehículos:",
        optionA: "Caminar o conducir con aliento alcohólico o en estado de embriaguez comprobada",
        optionB: "Caminar o conducir bajo los efectos de estupefacientes",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 65,
        question: "Los niveles de intoxicación que se determinan por análisis de aires espirales corresponden a los siguientes valores:",
        optionA: "Nivel de tolerancia 5% a 24% microgramos por decilitro",
        optionB: "Aliento alcohólico de 25% a 40% microgramos por decilitro",
        optionC: "Embriaguez comprobada de 41% en adelante microgramos por decilitro",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 66,
        question: "Cuando se procede a sancionar con multa y retención del vehículo:",
        optionA: "Embriaguez comprobada",
        optionB: "Aliento alcohólico",
        optionC: "Nivel de tolerancia",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 67,
        question: "Cuando el conductor sea sorprendido en estado de embriaguez comprobada o intoxicación por estupefacientes, será sancionado:",
        optionA: "De acuerdo con las reincidencias registradas en su historial",
        optionB: "De acuerdo con la disposición del inspector",
        optionC: "Todas de las anteriores",
        optionD: "Nigunas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 68,
        question: "Por cuánto tiempo se suspende la licencia de conducir cuando sobrepasa los 41 microgramos por decilitro en análisis de aire por primera vez será:",
        optionA: "3 meses",
        optionB: "6 meses",
        optionC: "1 año",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 69,
        question: "Artículo 144. Los conductores de vehículos están obligados.",
        optionA: "Moderar la marcha y a detenerla en donde la autoridad competente lo ordene",
        optionB: "De acuerdo con las circunstancias del tránsito, de la vía, de la visibilidad de los propios vehículos o peatones",
        optionC: "Deberán conducir prudentemente para evitar posibles accidentes o perjuicios a terceras personas",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 70,
        question: "Antes de iniciar la marcha, desviarse de una línea recta, retroceder, pasar a otro vehículo, entrar o cruzar en una vía o atravesar una vía férrea, el conductor debe:",
        optionA: "El conductor debe cerciorarse de que tal maniobra pueda hacerla sin peligro",
        optionB: "Debe usar el cinturón",
        optionC: "Debe portar placa de circulación",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 71,
        question: "En las autopistas, además de lo establecido para las vías de dos (2) o más carriles, rigen las siguientes reglas:",
        optionA: "El carril izquierdo o de velocidad será utilizado sólo para rebasar a otro vehículo",
        optionB: "No pueden transitar peatones, vehículos de tracción animal ni bicicletas",
        optionC: "No se puede estacionar ni detener el vehículo para el ascenso o descenso de pasajeros, ni efectuar carga y descarga de mercancías, excepto en aquellos lugares especialmente construidos para ello, o por desperfectos mecánicos",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 72,
        question: "El tránsito de bicicletas se realizará según las siguientes reglas:",
        optionA: "Transitar lo más cerca posible del borde derecho de la vía, tomando las debidas precauciones cuando pase un vehículo detenido o que avance en su mismo sentido",
        optionB: "Transitar solamente en los senderos especiales, cuando éstos sean habilitados en vías públicas",
        optionC: "Transitar uno detrás de otro cuando lo hagan en grupo, excepto en los senderos o lugares especiales designados exclusivamente para su uso",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 73,
        question: "En carreteras o autopistas, los triciclos y las motocicletas que transiten en grupos lo harán:",
        optionA: "En forma de x",
        optionB: "En forma de z",
        optionC: "En fila",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 74,
        question: "Para efectuar maniobras de giro y de cambio de carril es obligatorio:",
        optionA: "Utilizar las luces direccionales o, en su defecto, señales manuales determinadas",
        optionB: "Seguir al vehículo que va adelante",
        optionC: "Girar cuando cambia la luz",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 75,
        question: "Al rebasar otro vehículo, todo conductor deberá hacerlo:",
        optionA: "Por la derecha",
        optionB: "Por la izquierda",
        optionC: "Por el carril del centro",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 76,
        question: "Reglas para el rebasamiento:",
        optionA: "El que rebase debe constatar previamente a su izquierda la vía esté libre en una distancia suficiente para evitar todo riesgo, y que ningún conductor que lo siga lo esté a su vez rebasando",
        optionB: "Debe tener la visibilidad y visual suficiente, y no iniciar la maniobra si se aproxima una bifurcación, encrucijada, curva, puente, cima, pendiente o lugar peligroso",
        optionC: "Niguna las anteriores",
        optionD: "A y B son correctas",
        correctOption: "optionC"
    },

    {
        id: 77,
        question: "Tienen prioridad de paso en las vías de circulación:",
        optionA: "El vehículo en que viaja el presidente de la República, vicepresidente y Ministro de Estado",
        optionB: "Los vehículos de la Policía Nacional, del Cuerpo de Bomberos y del Sistema Nacional de Protección Civil, en casos de emergencia",
        optionC: "Las ambulancias u otros vehículos de socorro, cuando atienden un llamado de emergencia o transporten enfermos o heridos a centros de atención médicas",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 78,
        question: "Las vías públicas son para uso exclusivo:",
        optionA: "Del flujo vehicular",
        optionB: "De los peatones",
        optionC: "De los ciclistas",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 79,
        question: "Zonas distintas a las rurales, solamente se podrán remolcar vehículos por medio de:",
        optionA: "Una grúa",
        optionB: "Una lanza de metal",
        optionC: "Otro auto con cadenas seguras",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 80,
        question: "Es prohibido respecto a las normas generales de circulación:",
        optionA: "Frenar bruscamente o disminuir arbitraria y repentinamente la velocidad, realizar movimientos zigzagueantes o maniobras intempestivas",
        optionB: "Conducir en vía contraria",
        optionC: "Tránsito de equipo pesado en áreas residenciales",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 81,
        question: "Las señales viales de tránsito se clasifican en:",
        optionA: "Preventivas. Reglamentarias",
        optionB: "Informativas",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 82,
        question: "Las marcas pintadas sobre las vías:",
        optionA: "Se usan para guiar y advertir a los conductores; pueden ser pintadas de color amarillo o blanco",
        optionB: "Para que los conductores se mantengan en el carril",
        optionC: "Solo para transitar en zonas urbanas",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 83,
        question: "En las vías públicas reguladas por semáforos, se deberán cumplir las indicaciones:",
        optionA: "Avanzar con la luz verde si la intersección está despejada",
        optionB: "Con la luz amarilla, prepararse para detenerse porque la luz cambiará a roja",
        optionC: "Con la flecha verde avanzar si la vía está despejada en la dirección de la flecha y si está en el carril adecuado para hacerlo",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 84,
        question: "Cuando el tránsito vehicular sea dirigido por un inspector de tránsito de la Policía Nacional o inspector de la Autoridad del Tránsito y Transporte Terrestre debidamente capacitado, los conductores deberán:",
        optionA: "Esperar que se encienda el semáforo",
        optionB: "Transitar por el carril derecho",
        optionC: "Obedecer sus indicaciones por encima de la señalización existente",
        optionD: "Todos lo anterior",
        correctOption: "optionC"
    },

    {
        id: 85,
        question: "Es prohibido respecto a los dispositivos para el control del tránsito:",
        optionA: "No hacer el alto en las intersecciones donde esté indicado",
        optionB: "Realizar giros prohibidos por señales viales o marcas en la vía",
        optionC: "Desatender indicaciones del inspector",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 86,
        question: "El estacionamiento de bicicletas se hará:",
        optionA: "Fuera de la superficie del rodamiento",
        optionB: "Dentro de calzada del rodamiento",
        optionC: "Todas las anteriores",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 87,
        question: "Para evitar causar accidentes u obstruir el normal tránsito vehicular en la vía pública o peatonal en las aceras, los conductores no estacionarán:",
        optionA: "Vehículos a mano contraria del sentido de circulación",
        optionB: "Vehículos sin luces de seguridad en la noche en zonas de poca iluminación o rurales",
        optionC: "Autobuses, camiones y unidades de arrastre en la vía pública o en el hombro",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 88,
        question: "Es prohibido el estacionamiento de vehículos en los siguientes lugares:",
        optionA: "Menos de cinco metros de un hidrante",
        optionB: "A menos de diez metros de una señal vial de “Alto”",
        optionC: "A menos de cinco metros de una esquina",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 89,
        question: "El conductor debe transitar siempre teniendo en cuenta:",
        optionA: "El estado de vehículo y su carga",
        optionB: "Manteniendo el dominio de su vehículo para no entorpecer el tránsito vehicular",
        optionC: "De no ser así, deberá abandonar la vía o detener la marcha del vehículo sin obstruir el tránsito",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 90,
        question: "Los límites de velocidad quedan establecidos de la siguiente manera:",
        optionA: "En calles no se podrá exceder de 30 km/h",
        optionB: "En zonas escolares no se podrá exceder de 30 km/h",
        optionC: "En las vías públicas se podrá exceder de 60 km/h",
        optionD: "Todas las anteriores",
        correctOption: "optionC"
    },

    {
        id: 91,
        question: "En carreteras multicarriles en zonas urbanas, la velocidad será:",
        optionA: "El carril del extremo izquierdo del conductor: ochenta (80) kilómetros por hora",
        optionB: "El carril central: sesenta (60) kilómetros por hora",
        optionC: "El carril derecho: cincuenta (50) kilómetros por hora",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 92,
        question: "Bajando una pendiente se debe:",
        optionA: "Poner el auto en neutral para ahorrar combustible",
        optionB: "Controlar la velocidad únicamente con el motor del vehiculo",
        optionC: "Pisar el pedal de embrague",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 93,
        question: "Los conductores deberán disminuir la velocidad en los siguientes casos:",
        optionA: "En los lugares señalados como zona escolar, parques, o balnearios, recintos policiales, iglesias, centros de atención médica y cuando se presenten desfiles o concentración de personas.",
        optionB: "Cuando conduzcan próximo a las aceras y zonas de seguridad",
        optionC: "Cuando se aproximen a las líneas de seguridad",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 94,
        question: "El tránsito por las vías públicas de caballería, ganado en manadas o rebaños se permitirá únicamente cuando:",
        optionA: "Sea zona de lechería o de cría de ganado",
        optionB: "Cuando no existan otras vías utilizables que permitan realizar esta actividad",
        optionC: "Cuando la servidumbre tenga la maleza alta",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 95,
        question: "Para los efectos de la circulación de animales conducidos en las vías públicas se observarán las siguientes reglas:",
        optionA: "Entre las personas que guían habrá por lo menos un mayor de catorce años, que sea responsable del rebaño",
        optionB: "Cuando animales en rebaños o manadas transiten de noche por las vías públicas insuficientemente iluminadas, sus conductores llevarán suficientes artefactos luminosos para precisar su ubicación o dimensiones, que estarán situados del lado opuesto al hombro de la carretera.",
        optionC: "A y B son correctas.",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 96,
        question: "Los conductores de vehículos:",
        optionA: "Serán responsables de los animales que se encuentren en la vía",
        optionB: "No serán responsables de los daños que sufran los animales que se hallen en las vías públicas, incluyendo la muerte de estos",
        optionC: "Ninguna de las anteriores",
        optionD: "A y B son correctas",
        correctOption: "optionB"
    },

    {
        id: 97,
        question: "Quien será responsable de las infracciones que puedan cometerse y de los daños y perjuicios causados a terceros, sin perjuicio de las sanciones de naturaleza administrativa que correspondan:",
        optionA: "El conductor del vehículo que colisiona al animal",
        optionB: "El dueño del animal",
        optionC: "El que conduce el rebaño",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 98,
        question: "Las cabalgaduras deberán transitar:",
        optionA: "Por el lado derecho de la vía",
        optionB: "Por los hombros",
        optionC: "Por la calzada con precaución",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 99,
        question: "Prohibiciones en la conducción de animales por las vías públicas:",
        optionA: "A los menores de catorce (14) años, dirigir los rebaños",
        optionB: "Cruzar a los animales por los lugares distintos destinados",
        optionC: "Cabalgar de noche sin las señales luminosas suficientes",
        optionD: "Todas las anteriores",
        correctOption: "optionD"
    },

    {
        id: 100,
        question: "Para transitar por caminos y calles, las cabalgaduras deben estar provistas de:",
        optionA: "Dispositivos reflectivos",
        optionB: "Herraduras",
        optionC: "Montura adecuada",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 101,
        question: "Las personas que guíen animales en las vías públicas y que sean sorprendidas violando lo dispuesto en las prohibiciones:",
        optionA: "Serán multadas por el inspector de tránsito",
        optionB: "Serán puestas a orden de la policía",
        optionC: "Serán conducidas a la autoridad del área jurisdiccional para que le imponga la sanción correspondiente",
        optionD: "Todas las anteriores",
        correctOption: "optionC"
    },

    {
        id: 102,
        question: "Las caballerías, cualquier clase de ganado y los rebaños, deben:",
        optionA: "Cruzar las vías por los sitios debidamente señalados para este fin",
        optionB: "Por los particularmente establecidos para el servicio de propiedades privadas",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 103,
        question: "Las personas que guíen ganado bravo deben:",
        optionA: "Extremar las medidas de seguridad",
        optionB: "Transportarlos en un vehículo automotor",
        optionC: "Llevarlos fuera de la vía de circulación",
        optionD: "A y B son correctas",
        correctOption: "optionD"
    },

    {
        id: 104,
        question: "La aplicación y ejecución del presente reglamento en todas sus partes compete a:",
        optionA: "La Policía Nacional",
        optionB: "Los jueces de tránsito",
        optionC: "La autoridad de tránsito y transporte terrestre",
        optionD: "Todas las anteriores",
        correctOption: "optionC"
    },

    {
        id: 105,
        question: "Las acciones u omisiones contrarias a este reglamento tendrán el carácter de:",
        optionA: "Multas",
        optionB: "Accidentes",
        optionC: "Infracciones de Tránsito",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 106,
        question: "Las infracciones de tránsito serán sancionadas con:",
        optionA: "Amonestación o multa y la asignación de puntos en la forma prevista en el presente reglamento",
        optionB: "El inspector de tránsito",
        optionC: "El juez de tránsito",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 107,
        question: "Cuando el infractor incurra en varias faltas a la vez se le aplicará:",
        optionA: "La sanción por la falta más grave",
        optionB: "La sanción por la falta más leve",
        optionC: "Una sanción por cada falta cometida",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 108,
        question: "Están facultados para imponer boletas por infracciones las siguientes personas:",
        optionA: "Los inspectores de la A.T.T.T",
        optionB: "Los directores provinciales de la A.T.T.T",
        optionC: "Los inspectores de operaciones de la Policía Nacional",
        optionD: "Todos los anteriores",
        correctOption: "optionD"
    },

    {
        id: 109,
        question: "Las infracciones serán del conocimiento de:",
        optionA: "El departamento de infracciones menores de la A.T.T.T",
        optionB: "El policía de tránsito",
        optionC: "El director general",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 110,
        question: "Contra la citación por infracción solo cabe:",
        optionA: "Apelación",
        optionB: "Revisión",
        optionC: "Recurso de reconsideración ante los jueces de tránsito en su jurisdicción y ante el director de la A.T.T.T",
        optionD: "Todas las anteriores",
        correctOption: "optionC"
    },

    {
        id: 111,
        question: "En las infracciones que son sancionadas con agravantes y reincidencias, ¿quienes podrán imponer las multas?",
        optionA: "Los jueces de tránsito dentro de su jurisdicción y el Director General de la Autoridad del Tránsito y Transporte Terrestre",
        optionB: "Se considera la multa más baja",
        optionC: "Se procede a la reconsideración",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 112,
        question: "¿Quién será responsable de cualquier infracción de tránsito que incurra al manejar un vehículo?",
        optionA: "Todo conductor",
        optionB: "El pasajero",
        optionC: "El policía",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 113,
        question: "Las infracciones al reglamento de tránsito serán sancionadas con:",
        optionA: "Multas",
        optionB: "Amonestación",
        optionC: "A y B",
        optionD: "Cárcel temporal",
        correctOption: "optionC"
    },

    {
        id: 114,
        question: "Los procesos administrativos sobre accidentes de tránsito se tramitarán en:",
        optionA: "Dos instancias; la primera ante el juzgado de tránsito y la segunda instancia ante la autoridad municipal correspondiente.",
        optionB: "En los lugares donde no existan juzgados de tránsito, la primera instancia la constituye la autoridad municipal y la segunda instancia la gobernación de la provincia.",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionC"
    },

    {
        id: 115,
        question: "Los procesos de tránsito serán:",
        optionA: "Orales en la primera instancia y escritos en la segunda",
        optionB: "Solo orales",
        optionC: "Solo escritos en ambas instancias",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 116,
        question: "El accidente de tránsito es materia de conocimiento de:",
        optionA: "La policía de tránsito",
        optionB: "Los inspectores de la A.T.T.T",
        optionC: "A y B son correctas",
        optionD: "De los jueces del tránsito",
        correctOption: "optionD"
    },

    {
        id: 117,
        question: "Todo accidente de tránsito que ocurra en vías públicas, así como en áreas de acceso público, salvo que haya fallecidos, será atendido por:",
        optionA: "El inspector de tránsito de la Policía Nacional",
        optionB: "Los paramédicos",
        optionC: "El juez de tránsito que llega al lugar",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 118,
        question: "Ocurrido un accidente de tránsito, el inspector de tránsito:",
        optionA: "Llamará al juez de tránsito",
        optionB: "Levantará un informe escrito de lo acontecido, denominado 'parte policivo'",
        optionC: "Dirá quién es el culpable del accidente",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 119,
        question: "Cuando no se pudiere levantar el parte policivo en el lugar del accidente por fuga:",
        optionA: "Deberá seguir el vehículo hasta localizarlo",
        optionB: "La parte que se considere afectada podrá presentar una denuncia ya sea por colisión y fuga, atropello o por cualquier daño ocasionado a la propiedad pública o privada, la cual se formalizará ante la zona policial correspondiente al lugar donde ocurra el accidente",
        optionC: "Perderá el caso por falta de pruebas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 120,
        question: "Cuando a causa de un accidente de tránsito se produzca daño a semáforos, señales viales o infraestructuras de utilidad pública o privada:",
        optionA: "El juez de tránsito que atienda la causa deberá solicitar a la entidad competente un informe sobre el costo de los daños causados y ordenará a quien resulte responsable del accidente, el pago de todos los daños ya sean bien público o privado.",
        optionB: "Cada uno paga su daño",
        optionC: "Solo se pagan los daños de los vehículos",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 121,
        question: "La audiencia se efectuará:",
        optionA: "Cuando el policía esté disponible",
        optionB: "El día y la hora señalada",
        optionC: "Se pone otra fecha",
        optionD: "Todas las anteriores",
        correctOption: "optionB"
    },

    {
        id: 122,
        question: "Cuando un proceso permanezca por más de un (1) año sin decisión alguna en el juzgado de tránsito por la no comparecencia de ninguna de las partes involucradas:",
        optionA: "El juez podrá decretar de oficio la caducidad de la instancia de dicho proceso y el archivo del expediente",
        optionB: "Se notifica nuevamente a las partes involucradas",
        optionC: "Se sancionan por no asistir a la audiencia fijada",
        optionD: "Todas las anteriores",
        correctOption: "optionA"
    },

    {
        id: 123,
        question: "Si una de las partes objetase el informe policivo levantado al momento del accidente, el juez de tránsito podrá, si así lo considera conveniente, ordenar de oficio o a solicitud de parte, una diligencia de:",
        optionA: "Apelación",
        optionB: "Reconstrucción",
        optionC: "Recreación",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 124,
        question: "La resolución de primera instancia proferida por el juez de tránsito admite recurso de:",
        optionA: "Apelación",
        optionB: "Resolución",
        optionC: "Reconsideración",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 125,
        question: "El recurso de apelación deberá ser interpuesto al momento de la notificación, expresando la palabra:",
        optionA: "Desacuerdo",
        optionB: "Apelo",
        optionC: "A y B son correctas",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 126,
        question: "El escrito de sustentación de la apelación deberá ser presentado ante la autoridad de primera instancia:",
        optionA: "En 48 horas después de la notificación",
        optionB: "Dentro de los cinco días hábiles, contados a partir de la notificación",
        optionC: "En 8 días hábiles después de la notificación",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 127,
        question: "Están obligados a indemnizar los daños y perjuicios ocasionados por un accidente de tránsito las siguientes personas:",
        optionA: "El conductor o conductores a quienes se les declare responsables del accidente",
        optionB: "El o los propietarios de los vehículos cuyos conductores sean declarados responsables del accidente",
        optionC: "La compañía aseguradora del vehículo cuyo conductor haya sido declarado responsable del accidente",
        optionD: "Todos los anteriores",
        correctOption: "optionD"
    },

    {
        id: 128,
        question: "Los propietarios de vehículos están obligados a mantener vigente un seguro de responsabilidad civil que comprenda como mínimo:",
        optionA: "Responsabilidad por daño a la propiedad ajena por el monto mínimo de B/5,000.00 y responsabilidad de lesiones corporales de B/5,000.00 por persona y B/10,000.00 por accidente.",
        optionB: "B/25,000.00 por daños a terceros",
        optionC: "Todas las anteriores",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionA"
    },

    {
        id: 129,
        question: "Al no cumplir la sanción impuesta por una infracción de tránsito en un período de treinta (30) días, el monto de la multa se gravará con un recargo adicional de:",
        optionA: "25% del costo de la multa",
        optionB: "50% del costo de la multa",
        optionC: "10% del costo de la multa",
        optionD: "B/50.00 dólares de recargo",
        correctOption: "optionC"
    },

    {
        id: 130,
        question: "Por no cumplir la sanción impuesta por una infracción cometida en un período de treinta (30) días, la Autoridad del Tránsito y Transporte Terrestre procederá:",
        optionA: "Poner multa por licencia vencida",
        optionB: "A la suspensión de la licencia de conducir por el término de treinta (30) días",
        optionC: "A la revocación de la licencia de conducir",
        optionD: "A la retención del vehículo por treinta (30) días",
        correctOption: "optionB"
    },

    {
        id: 131,
        question: "Infracciones del artículo 241 que admiten recurso de reconsideración:",
        optionA: "23, 24, 25, 26, 37 y 45",
        optionB: "25, 35, 67",
        optionC: "Conducir sin placa",
        optionD: "Todas",
        correctOption: "optionD"
    },

    {
        id: 132,
        question: "Las multas impuestas por los juzgados de tránsito que no sean canceladas en un término de cuarenta y ocho (48) horas hábiles después de su notificación, tendrán un recargo fijo de:",
        optionA: "B/ 50.00 dólares por recargo",
        optionB: "B/ 25.00 dólares por desacato",
        optionC: "10% adicional de multa",
        optionD: "Ninguna de las anteriores",
        correctOption: "optionB"
    },

    {
        id: 133,
        question: "Propietario no será responsable en ningún caso de los daños causados por el vehículo del cual es dueño, cuando:",
        optionA: "Haya sido privado de su posesión como consecuencia de hurto",
        optionB: "Cuando se encuentre depositando en talleres para reparación o custodia",
        optionC: "A y B son correctas",
        optionD: "Cuando lo maneje otra persona",
        correctOption: "optionC"
    }
]

//start practice mode
startPractice();

//startPractice function
function startPractice() {

    let shuffledQuestions = []

    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }

    }

    //confirmation
    console.log("practice started");

    let incorrectasArray = []
    let incorrectasUserSelection = []

    let number = 1;
    let correctas = 0;
    let incorrectas = 0;
    let buttonClicked = false;
    let selectedOption = 0;
    let correctOption = 0;
    //display first question and other details
    let remainingQ = document.getElementById("restantes");
    remainingQ.innerHTML = number + " / " + shuffledQuestions.length;

    let goodOnes = document.getElementById("contadorCorrectas");
    goodOnes.innerHTML = correctas;

    let badOnes = document.getElementById("contadorMalas");
    badOnes.innerHTML = incorrectas;

    let questionTitle = document.getElementById("nDePregunta");
    questionTitle.innerHTML = "Pregunta #" + number;

    let question = document.getElementById("pregunta");
    question.innerHTML = shuffledQuestions[number - 1]["question"];

    //display answers
    let answer1 = document.getElementById("answerA");
    answer1.innerHTML = shuffledQuestions[number - 1]["optionA"];

    let answer2 = document.getElementById("answerB");
    answer2.innerHTML = shuffledQuestions[number - 1]["optionB"];

    let answer3 = document.getElementById("answerC");
    answer3.innerHTML = shuffledQuestions[number - 1]["optionC"];

    let answer4 = document.getElementById("answerD");
    answer4.innerHTML = shuffledQuestions[number - 1]["optionD"];



    //read which option did the user pick
    document.getElementById("myForm").addEventListener('submit', function (e) {
        e.preventDefault();
        //if end of questionnaire
        if (number == shuffledQuestions.length) {
            window.location.href = "results.html"
        }
        //if the button was clicked twice (means the user moves to the next question):
        if (buttonClicked) {
            selectedOption.setAttribute("class", "form-check-input form-check-large");
            correctOption.setAttribute("class", "form-check-input form-check-large");
            number += 1;
            questionTitle.innerHTML = "Pregunta #" + number;
            question.innerHTML = shuffledQuestions[number - 1]["question"];
            answer1.innerHTML = shuffledQuestions[number - 1]["optionA"];
            answer2.innerHTML = shuffledQuestions[number - 1]["optionB"];
            answer3.innerHTML = shuffledQuestions[number - 1]["optionC"];
            answer4.innerHTML = shuffledQuestions[number - 1]["optionD"];
            buttonClicked = false;
        }
        //if the button was clicked once (means you display if he had the correct answer or not first)
        else {

            correctOption = document.getElementById(shuffledQuestions[number - 1]["correctOption"]);
            selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
            if (selectedOption) {
                console.log("User chose answer " + selectedOption.getAttribute("id"))
            }
            else {
                console.log("No option detected")
            }

            //add or rest score
            if (selectedOption.getAttribute("id").localeCompare(shuffledQuestions[number - 1]["correctOption"]) == 0) {
                correctas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-valid");

            }
            else {
                incorrectas++;
                selectedOption.setAttribute("class", "form-check-input form-check-large is-invalid");
                correctOption.setAttribute("class", "form-check-input form-check-large is-valid");
                incorrectasArray.push(shuffledQuestions[number - 1]);
                incorrectasUserSelection.push(selectedOption.getAttribute("id"))
            }
            console.log("user has " + incorrectas + " wrong answers")
            console.log("user has " + correctas + " correct answers")

            badOnes.innerHTML = incorrectas;
            goodOnes.innerHTML = correctas;
            remainingQ.innerHTML = number + " / " + shuffledQuestions.length;
            buttonClicked = true;

            localStorage.setItem('correct', correctas);
            localStorage.setItem('incorrect', incorrectas);
            localStorage.setItem('incorrectasArray', JSON.stringify(incorrectasArray));
            localStorage.setItem('incorrectasUserSelection', JSON.stringify(incorrectasUserSelection));
        }
    });
}