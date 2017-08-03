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
                   return PartialView("_recuperar_credenciales");
               } 
              

        public ActionResult vista_registro()
        {
           
            return PartialView("_registrarse");
        }
    }
}