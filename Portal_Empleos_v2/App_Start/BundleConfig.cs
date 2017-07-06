using System.Web;
using System.Web.Optimization;

namespace Portal_Empleos_v2
{
    public class BundleConfig
    {
        // Para obtener más información sobre Bundles, visite http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                 "~/Scripts/jquery-{version}-min.js",
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // preparado para la producción y podrá utilizar la herramienta de compilación disponible en http://modernizr.com para seleccionar solo las pruebas que necesite.
            // bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //           "~/Scripts/modernizr-*"));
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                           "~/Scripts/angular.js",
                           "~/Scripts/angular-route.js",
                           "~/Scripts/ngDialog.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularUiDirectives")
    .Include("~/Scripts/angular-ui/ui-bootstrap.min.js",
    "~/Scripts/angular-ui/ui-bootstrap.js",
    "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
    "~/Scripts/angular-ui/ui-bootstrap-tpls.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/testscript")
.Include("~/Scripts/control_angular/ajaxjs.js",
 "~/Scripts/controles_jasc.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                    "~/Content/font-awesome.css",
                    "~/Content/font-awesome.min.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/css2").Include(
                    "~/Content/ngDialog-theme-default.css",
                  "~/Content/ngDialog.css",
                    "~/Content/ngDialog.min.css"));
        }
    }
}
