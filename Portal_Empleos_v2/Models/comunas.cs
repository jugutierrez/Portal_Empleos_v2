﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Portal_Empleos_v2.Models
{
    [Table("comunas")]
    public class comunas
    {
        [Key]
        [Column(Order = 1)]
        public int id_comuna { get; set; }

        public string nombre_comuna { get; set; }
        public int id_ciudad { get; set; }
    }
}