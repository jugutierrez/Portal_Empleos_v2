﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Portal_Empleos_v2.Models
{
    [Table("discapacidad_personas")]
    public class discapacidad_personas
    {
        [Key]
        [Column(Order = 1)]
        public int id_discapacidad_persona { get; set; }

        public string nombre_discapacidad_persona { get; set; }
    }
}