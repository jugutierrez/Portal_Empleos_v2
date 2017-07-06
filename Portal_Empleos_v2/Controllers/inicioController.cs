using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portal_Empleos_v2.Controllers
{
    public class inicioController : Controller
    {
        // GET: inicio
        public ActionResult Index()
        {
            return View();
        }
    }
}