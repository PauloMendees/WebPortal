using MailKit.Net.Smtp;
using MimeKit;
using WebApplication1.Utils;

namespace WebApplication1.Service.Email
{
    public class SendEmailService
    {
        public async Task<ServiceResult> execute(string email, string message)
        {
            try
            {
                Validator validator= new Validator();
                bool emailIsValid = validator.EmailValidate(email);
                if (!emailIsValid) return new ServiceResult(true, "Email inválido.");

                MimeMessage emailMessage = new MimeMessage();
                emailMessage.From.Add(new MailboxAddress("[BOT]", Environment.GetEnvironmentVariable("FromEmail")));
                emailMessage.To.Add(MailboxAddress.Parse(email));
                emailMessage.Subject = "[WebPortal] You're almost there!";
                emailMessage.Body = new TextPart("plain")
                {
                    Text = message
                };
                var client = new SmtpClient();

                try
                {
                    client.Connect("smtp.gmail.com", 465 , true);
                    client.AuthenticationMechanisms.Remove("XOUATH2");
                    client.Authenticate(Environment.GetEnvironmentVariable("FromEmail"), Environment.GetEnvironmentVariable("EmailPassword"));
                    client.Send(emailMessage);
                    return new ServiceResult(false, "Email enviado.");
                }
                catch(Exception e)
                {
                    throw new Exception("Erro ao enviar email. Error: " + e.Message);
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
