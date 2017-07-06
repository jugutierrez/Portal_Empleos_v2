using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Portal_Empleos_v2.Startup))]
namespace Portal_Empleos_v2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
