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
                string cryptPassword = crypto.execute(dto.Password);
                if (user == null)
                {
                    Cliente? client = _context.clients.FirstOrDefault(x => x.Email == dto.Email);
                    if (client == null) return new LoginResult("", "invalid", true, "Email ou senha inválidos.");
                    if(client.Email == dto.Email && client.Password == cryptPassword)
                    {
                        ClientNavToken tokenService = new ClientNavToken();
                        string token = tokenService.Create(user.Email);
                        return new LoginResult(token, "client", false, "Autenticação bem sucedida.");
                    }

                };
                if(dto.Email == user.Email && cryptPassword == user.Password)
                {
                    ColaboratorNavToken tokenService = new ColaboratorNavToken();
                    string token = tokenService.Create(user.Email);
                    return new LoginResult(token, user.Type, false, "Autenticação bem sucedida.");
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
