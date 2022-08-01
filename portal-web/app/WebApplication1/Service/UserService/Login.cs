using WebApplication1.Data;
using WebApplication1.Data.DTO.User;
using WebApplication1.Entitties;
using WebApplication1.Service.Criptografia;
using WebApplication1.Service.Tokens;
using WebApplication1.Utils;

namespace WebApplication1.Service.UserService
{
    public class Login
    {
        private readonly ContextDB _context;

        public Login(ContextDB context)
        {
            _context = context;
        }

        public LoginResult execute(LoginDTO dto)
        {
            try
            {
                GenerateHash crypto = new GenerateHash();
                User? user = _context.users.FirstOrDefault(x => x.Email == dto.Email);
                Console.WriteLine("Teste");
                if (user == null) return new LoginResult("", "invalid", true, "Email ou senha inválidos.");
                string cryptPassword = crypto.execute(dto.Password);
                if(dto.Email == user.Email && cryptPassword == user.Password)
                {
                    if(user.Type == "colaborator")
                    {
                        ColaboratorNavToken tokenService = new ColaboratorNavToken();
                        string token = tokenService.Create(user.Email);
                        return new LoginResult(token, user.Type, false, "Autenticação bem sucedida.");
                    }
                    else
                    {
                        ClientNavToken tokenService = new ClientNavToken();
                        string token = tokenService.Create(user.Email);
                        return new LoginResult(token, user.Type, false, "Autenticação bem sucedida.");
                    }
                }
                else
                {
                    return new LoginResult("", "invalid", true, "Email ou senha inválidos.");
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
