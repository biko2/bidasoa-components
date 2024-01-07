export interface EntityInclude<T> {
  /**
   * Un entity include puede no traer entity. Principalmente, esto ocurre
   * cuando la entidad a la que se referencia no tiene traducción al idioma
   * actual. En ese escenario, el entity include apunta a un JSON que no
   * existe y el objeto llegará vacío.
   */
  entity: T;
}
