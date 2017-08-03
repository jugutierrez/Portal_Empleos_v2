using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;


namespace ws_correos
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "Service1" en el código, en svc y en el archivo de configuración.
    // NOTE: para iniciar el Cliente de prueba WCF para probar este servicio, seleccione Service1.svc o Service1.svc.cs en el Explorador de soluciones e inicie la depuración.
    public class Service1 : IService1
    {
        public string SampleMethod(string msg)
        {
            Console.WriteLine("Called synchronous sample method with \"{0}\"", msg);
            return "The sychronous service greets you: " + msg;
        }

        // This asynchronously implemented operation is never called because 
        // there is a synchronous version of the same method.
        public IAsyncResult BeginSampleMethod(string msg, AsyncCallback callback, object asyncState)
        {
            Console.WriteLine("BeginSampleMethod called with: " + msg);
            return new CompletedAsyncResult<string>(msg);
        }

        public string EndSampleMethod(IAsyncResult r)
        {
            CompletedAsyncResult<string> result = r as CompletedAsyncResult<string>;
            Console.WriteLine("EndSampleMethod called with: " + result.Data);
            return result.Data;
        }

        public IAsyncResult BeginServiceAsyncMethod(string msg, AsyncCallback callback, object asyncState)
        {
            Console.WriteLine("BeginServiceAsyncMethod called with: \"{0}\"", msg);
            return new CompletedAsyncResult<string>(msg);
        }

        public string EndServiceAsyncMethod(IAsyncResult r)
        {
            CompletedAsyncResult<string> result = r as CompletedAsyncResult<string>;
            Console.WriteLine("EndServiceAsyncMethod called with: \"{0}\"", result.Data);
            return result.Data;
        }



     
    }



}
