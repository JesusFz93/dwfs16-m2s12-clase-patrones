const iterador = (function () {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let index = 0;
  let length = data.length;

  return {
    /**
     * ¿Aún me faltan elementos por recoorer?
     * @return Boolean
     */
    hasNext() {
      return index < length;
    },
    /**
     * Quiero el "siguiente" elemento. "siguiente" elemento es lo que esta función regrese,
     * puede ser cualquier elemento dentro del arreglo "data"
     * @return Number   The next element
     */
    next() {
      let element;
      if (!this.hasNext()) {
        return null;
      }
      element = data[index];
      index += 2;
      return element;
    },
    /**
     * Quiero el elemento actual, no uso next porque provocaria un incremento en el index
     * @return {[type]} [description]
     */
    current() {
      return data[index];
    },
    /**
     * Regresar el cursor al primer elemento, asi puede recorrer los elementos nuevamente
     * @return undefined
     */
    rewind() {
      index = 0;
    },
  };
})();

const body = document.body;
// Aquí usamos el método hasNext() y el ciclo while para recorrer los elementos
while (iterador.hasNext()) {
  body.append("siguiente: " + iterador.next() + "\n");
}

// rebobinamos al inicio de los datos
iterador.rewind();
// Ahora el elemento actual debe ser "1"
body.append("Elemento actual: " + iterador.current());
