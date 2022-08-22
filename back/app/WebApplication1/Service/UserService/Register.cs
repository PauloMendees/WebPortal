using WebApplication1.Data;
using WebApplication1.Data.DTO.User;
using WebApplication1.Entitties;
using WebApplication1.Service.Criptografia;
using WebApplication1.Utils;

namespace WebApplication1.Service.UserService
{
    public class Register
    {
        private readonly ContextDB _context;

        public Register(ContextDB context)
        {
            _context = context;
        }

        public ServiceResult execute(PostUserColaboratorDTO dto)
        {
            try
            {
                Validator validator = new Validator();
                GenerateHash crypto = new GenerateHash();
                bool passwordIsValid = validator.PasswordValidate(dto.Password);
                if (!passwordIsValid) return new ServiceResult(true, "Senha inválida. Deve haver 1 maiúscula, 1 minúscula, 1 símbolo e 8 dígitos.");
                User user = new User(crypto.execute(dto.Password), dto.Email, "colaborator", Guid.NewGuid());
                _context.users.Add(user);
                _context.SaveChanges();
                return new ServiceResult(false, "Usuário cadastrado com sucesso.");
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
