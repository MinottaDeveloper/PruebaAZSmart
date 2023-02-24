using System;
using System.Collections.Generic;

namespace PruebaAZSmart.Models;

public partial class Autore
{
    public string NombreCompleto { get; set; } = null!;

    public string? FechaDeNacimiento { get; set; }  = null!;

    public string? Ciudad { get; set; } = null!;

    public virtual ICollection<Libro> Libros { get; } = new List<Libro>();
}
