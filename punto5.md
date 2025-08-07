## ✅ 5. Análisis final (teórico)

**Responder lo siguiente:**

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`?
- ¿Cuáles son las ventajas de usar `getters` y `setters`?
- ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?
- Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al `prototype` de una función constructora o usar `Object.assign`?

## Respuesta
### Diferencias, ventajas y desventajas entre funciones constructoras con prototype y class
###### Funciones constructoras con prototype:
1. Compatible con versiones más viejas de JavaScript.
2. Se usa una función normal y se agregan métodos a su prototype.
###### Clases (class):
1. Permite usar constructor, getters, setters y otros conceptos modernos.
2. Más fácil de mantener y leer.

### Ventaja de usar Getters y Setters
1. Permiten controlar el acceso a propiedades (por ejemplo, validar valores antes de asignar).
2. Ayudan a mantener la encapsulación (ocultar datos internos).
3. Se usan como si fueran atributos, pero pueden ejecutar código detrás (lógica).

###  Problemas al modificar prototipos nativos como String
1. Romper funcionalidades existentes: Otros códigos esperan el comportamiento original y puede fallar si cambia.
2. Conflictos con otras librerías: Si dos librerías modifican el mismo método, pueden generar errores difíciles de rastrear.
3. Difícil de mantener: Cambios globales pueden afectar toda la aplicación inesperadamente.

### Diferencias entre asignar métodos al prototype o usar Object.assign
*Prototype:* Solo copias un método específico.
*Object.assign:* Copia todas las propiedades y métodos del objeto a prototype de un tiro, más rápido si hay muchos métodos.

Si tenés varios métodos en personPrototype, usar Object.assign es más práctico y limpio. Si solo un método, asignarlo directamente está bien.

