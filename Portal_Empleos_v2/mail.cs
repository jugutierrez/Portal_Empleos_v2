using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Web;
namespace Portal_Empleos_v2
{



    public class mail
    {//string smtpAddress = "172.15.0.12";
        string smtpAddress = "smtp.office365.com";
        int portNumber = 587;
        bool enableSSL = true;
        string emailFrom = "portalempleos@maipu.cl";
        string password = "M1ip5016";

        public string correos(string emailTo, byte[] pdf, string titulo, string mensaje)
        {



            Attachment data = new Attachment(new MemoryStream(pdf), "pdfplox.pdf", "application/pdf");
            try
            {
                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(emailFrom);
                    mail.To.Add(emailTo);
                    mail.Subject = titulo;
                    mail.Body = mensaje;
                    mail.IsBodyHtml = true;


                    mail.Attachments.Add(data);
                    ServicePointManager.ServerCertificateValidationCallback =

              delegate (object s

                  , X509Certificate certificate

                  , X509Chain chain

                  , SslPolicyErrors sslPolicyErrors)

              { return true; };



                    SmtpClient smtp = new SmtpClient(smtpAddress, portNumber);

                    smtp.Credentials = new NetworkCredential(emailFrom, password);
                    smtp.EnableSsl = enableSSL;
                    try
                    {
                        smtp.Send(mail);
                    }
                    catch (Exception ex)
                    {
                        return "su correo no pudo ser enviado";
                    }


                }
                return "correo fue enviado exitosamente";
            }
            catch (NotSupportedException)
            { return "su correo no pudo ser enviado"; }

        }

        public async void  Correo_Soporte(string emailTo, string nombre, Int32 anexo, string titulo, string mensaje, byte[] foto)
        {

            try
            {

                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(emailFrom);
                    mail.To.Add("jgutierreza@maipu.cl");
                    if (titulo == null)
                    { titulo = "Problema en Portal De empleos(Respuesta Estandar)"; }
                    mail.Subject = titulo;

                    mail.Body = "<p> Persona que envia el reporte: " + nombre + "</p> <p> Correo electronico:" + emailTo +
                        "</p> <p> Anexo de Contacto:" + anexo + "</p> <p> Descripcion del Problema </p>" + mensaje;
                    mail.IsBodyHtml = true;
                    if (foto != null) 
                   
                    {
                        Attachment data = new Attachment(new MemoryStream(foto), "reporte.jpg");

                        mail.Attachments.Add(data);
                    }
                    ServicePointManager.ServerCertificateValidationCallback =

              delegate (object s

                  , X509Certificate certificate

                  , X509Chain chain

                  , SslPolicyErrors sslPolicyErrors)

              { return true; };
                    SmtpClient smtp = new SmtpClient(smtpAddress, portNumber);

                    smtp.Credentials = new NetworkCredential(emailFrom, password);
                    smtp.EnableSsl = enableSSL;
                    try
                    {
                      await  smtp.SendMailAsync(mail);
                    }
                    catch (Exception ex)
                    {
                     
                    }


                }
             
            }
            catch (NotSupportedException)
            {  }

        }

        public string Correo_recupera_credenciales(string emailTo, Int32 rut, string dig_rut, string nombre ,string clave)
        {


            try
            {

                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress(emailFrom);
                    mail.To.Add("jgutierreza@maipu.cl");

                    mail.Subject = "Solicitud de Recuperacion de Credenciales";

                    mail.Body = "<p> estimado: " + nombre + "</p> <p> Correo electronico:" + emailTo +
                        
                       " <p> Rut: " + rut + "-" + dig_rut + "</p>" +
                        "</p> <p> su contraseña es: "+ clave +"</p>" ;
                    mail.IsBodyHtml = true;




                    SmtpClient smtp = new SmtpClient(smtpAddress, portNumber);

                    smtp.Credentials = new NetworkCredential(emailFrom, password);
                    smtp.EnableSsl = enableSSL;
                    try
                    {
                        smtp.Send(mail);
                    }
                    catch (Exception ex)
                    {
                        return "su correo no pudo ser enviado";
                    }


                }
                return "correo fue enviado exitosamente";
            }
            catch (NotSupportedException)
            { return "su correo no pudo ser enviado"; }

        }

    }
}