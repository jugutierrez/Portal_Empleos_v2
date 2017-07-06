using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Portal_Empleos_v2.Models
{
    public class modelo_datos_soporte
    {

        public string nombre_remitente { get; set; }

        public string correo_remitente { get; set; }

        public int rut_remitente { get; set; }

        public string digito_rut_remitente { get; set; }

        public string asunto_mensaje { get; set; }

        public string descripcion_mensaje { get; set; }

        public byte[] foto_soporte { get; set; }

        [NotMapped] 
        public HttpPostedFileBase fotos { get; set; }
    }
}