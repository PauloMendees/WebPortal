using WebApplication1.Data;
using WebApplication1.Entitties;
using WebApplication1.Service.Email;
using WebApplication1.Utils;

namespace WebApplication1.Service.UserService
{
    public class StartRegister
    {
        private readonly ContextDB _context;

        public StartRegister(ContextDB context)
        {
            _context = context;
        }

        public ServiceResult execute(string email)
        {
            try
            {
                User? userDB = _context.users.FirstOrDefault(x => x.Email == email);
                if (userDB == null)
                {
                    Validator validator = new Validator();
                    bool emailIsValid = validator.EmailValidate(email);
                    if (!emailIsValid) return new ServiceResult(true, "Email inválido.");
                    RegisterCode code = _context.registerCodes.FirstOrDefault(x => x.Email == email);

                    if(code != null)
                    {
                        _context.registerCodes.Remove(code);
                        _context.SaveChanges();
                    }

                    CodeGenerator codeGenerator = new CodeGenerator();
                    string verificationCode = codeGenerator.generate();
                    _context.registerCodes.Add(new RegisterCode(Guid.NewGuid(), verificationCode, email));
                    _context.SaveChanges();
                    SendEmailService emailService = new SendEmailService();

                    emailService.execute(email, @"This is your code to continue with the register: " + verificationCode);

                    return new ServiceResult(false, "Um código de verificação foi enviado para o email.");
                }
                else
                {
                    return new ServiceResult(true, "Email já cadastrado.");
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
