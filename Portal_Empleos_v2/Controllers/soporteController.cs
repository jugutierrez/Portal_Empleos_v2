using Portal_Empleos_v2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;


namespace Portal_Empleos_v2.Controllers
{
    public class soporteController : Controller
    {
        // GET: soporte
        public ActionResult Index()
        {
          
           
            return View();
        }

        public ActionResult enviar_soporte(modelo_datos_soporte nuevo_soporte)
        {
            mail m = new mail();
            byte[] data = new byte[nuevo_soporte.fotos.ContentLength];
            nuevo_soporte.fotos.InputStream.Read(data, 0, nuevo_soporte.fotos.ContentLength);

            nuevo_soporte.foto_soporte = data;
            m.Correo_Soporte(nuevo_soporte.correo_remitente, nuevo_soporte.nombre_remitente, nuevo_soporte.rut_remitente, nuevo_soporte.asunto_mensaje, nuevo_soporte.descripcion_mensaje, nuevo_soporte.foto_soporte);

 
            return View("index");
        }
    }
}