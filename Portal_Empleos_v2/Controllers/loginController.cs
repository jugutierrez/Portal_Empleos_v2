using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Portal_Empleos_v2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Portal_Empleos_v2.Controllers
{
    public class loginController : Controller
    {
        PersonaDBContext db = new PersonaDBContext();
        // GET: /Login/
        public ActionResult Index(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
       
                    return View("index");
     
            
        }
        [HttpPost]
        [AllowAnonymous]
   
        public async Task<ActionResult> Index(personas model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                var user = checkUser(model.correo_electronico_persona , model.clave_persona);
                if (user != null)
                {
                    var vSessionValue = new personas();
                    SignInAsync(user.id_persona);
                    Session["persona_id"] = user.id_persona;
                    Session["curriculum_id"] = user.id_curriculum;
                
                    vSessionValue.id_persona = Convert.ToInt32(Session["persona_id"]);
                    vSessionValue.id_curriculum = Convert.ToInt32(Session["curriculum_id"]);
                 return RedirectToAction("index", "Curriculum_mant");
                
                }
                else
                {
                    ModelState.AddModelError("", "El Usuario o la Contraseña no Coinciden.");
                }
            }
            return View(model);
        }

        private void SignInAsync(int id2)
        {


            var k = db.personas.Find(id2);
            var claims = new List<Claim>
            {
          new Claim(ClaimTypes.Name, k.nombre_persona)
       
                 };
            var id = new ClaimsIdentity(claims,
                                        DefaultAuthenticationTypes.ApplicationCookie);

            var ctx = Request.GetOwinContext();
            var authenticationManager = ctx.Authentication;
            authenticationManager.SignIn(id);





            // check existing value into session


        }


       
        public static personas checkUser(string userName, string password)
        {
            PersonaDBContext db = new PersonaDBContext();

            var query = (from u in db.personas
                         where u.correo_electronico_persona == userName && u.clave_persona == password && u.id_estado_persona < 1
                         select u).FirstOrDefault();
            if (query != null)
                return query;
            else
                return null;
        }


  

        public ActionResult LogOff()
        {




            AuthenticationManager.SignOut();
            
            Session.Abandon();
            Session.Clear();
            Response.Cookies.Clear();
            Session.RemoveAll();
            AuthenticationManager.SignOut();
            return RedirectToAction("Index", "inicio");
        }


       public IAuthenticationManager AuthenticationManager
        {
            get
            {
                return HttpContext.GetOwinContext().Authentication;
            }
        }

       
               public ActionResult recordar_credenciales()
               {
                   return View("recuperar_credenciales");
               } /*
               [HttpPost]
               [ValidateAntiForgeryToken]
               public JsonResult recordar_login(FormCollection form)
               {
                   mail m = new mail();
                   try
                   {
                       string[] rad = new string[form.AllKeys.Count()];
                       if (form.AllKeys.Length != 0)
                       {
                           for (int i = 0; i < form.AllKeys.Count(); i++)
                           {
                               if (Request[form.Keys[i]] != "")
                               {
                                   rad[i] = Request[form.Keys[i]];
                               }
                               else
                               {

                                   return Json(new { success = false, responseText = "Campo por completar : " + form.Keys[i].ToString() }, JsonRequestBehavior.AllowGet);
                               }

                           }

                       }




                       m.Correo_recupera_credenciales(rad[1], Convert.ToInt32(rad[2]), Convert.ToInt32(rad[3]), Convert.ToInt32(rad[4]), rad[5]);
                       return Json(new { success = true, responseText = "Correo Enviado exitosamente , en breve un encargado se pondra en contacto." }, JsonRequestBehavior.AllowGet);
                   }
                   catch (Exception ex)
                   {
                       return Json(new { success = false, responseText = " ha sucedido un error , favor intente nuevamente" }, JsonRequestBehavior.AllowGet);
                   }
               }
               */

        public ActionResult vista_registro()
        {
            ViewBag.id_region = new SelectList(db.regiones, "id_region", "nombre_region");


            ViewBag.id_comuna = new SelectList(db.comunas, "id_comuna", "nombre_comuna");

            ViewBag.id_ciudad = new SelectList(db.ciudades, "id_ciudad", "nombre_ciudad");
            return View("registrarse");
        }
    }
}