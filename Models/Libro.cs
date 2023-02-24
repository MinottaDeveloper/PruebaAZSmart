using System;
using System.Collections.Generic;

namespace PruebaAZSmart.Models;

public partial class Libro
{
    public string Titulo { get; set; } = null!;

    public string Año { get; set; } = null!;

    public string Genero { get; set; } = null!;

    public int Paginas { get; set; }

    public string Autor { get; set; } = null!;

    public virtual Autore AutorNavigation { get; set; } = null!;
}
