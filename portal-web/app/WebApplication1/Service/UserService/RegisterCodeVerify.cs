using WebApplication1.Data;
using WebApplication1.Data.DTO;
using WebApplication1.Entitties;
using WebApplication1.Service.Tokens;
using WebApplication1.Utils;

namespace WebApplication1.Service.UserService
{
    public class RegisterCodeVerify
    {
        private readonly ContextDB _context;

        public RegisterCodeVerify(ContextDB context)
        {
            _context = context;
        }

        public ServiceResult execute(CodeVerifyDTO dto)
        {
            try
            {
                RegisterCode code = _context.registerCodes.FirstOrDefault(x => x.Code == dto.Code);
                if (code == null || code.Email != dto.Email) return new ServiceResult(true, "Código inválido");
                StartRegisterToken token = new StartRegisterToken();

                return new ServiceResult(false, token.Create(dto.Email));
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
