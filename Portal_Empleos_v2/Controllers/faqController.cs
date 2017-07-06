using Portal_Empleos_v2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portal_Empleos_v2.Controllers
{
    public class faqController : Controller
    {
        private PersonaDBContext db = new PersonaDBContext();
        // GET: faq
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult listar_faq()
        {



            List<vista_preguntas_faq> p_f = db.vista_preguntas_faq.ToList();
 
            return Json(new { success = true, pregunta_f = p_f }, JsonRequestBehavior.AllowGet);
       
        }
        public ActionResult listar_categorias_faq()
        {

            List<vista_categorias_faq> p_f = db.vista_categorias_faq.ToList();
         
            return Json(new { success = true, pregunta_f_c = p_f }, JsonRequestBehavior.AllowGet);
        }

        }
}