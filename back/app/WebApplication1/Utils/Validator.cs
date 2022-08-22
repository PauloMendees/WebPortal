using System.Text.RegularExpressions;

namespace WebApplication1.Utils
{
    public class Validator
    {
        public bool EmailValidate(string email)
        {
            Regex rg = new Regex(@"^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");
            return rg.IsMatch(email);
        }

        public bool PasswordValidate(string password)
        {
            Regex rg = new Regex("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

            return rg.IsMatch(password);
        }
    }
}
