using WebApplication1.Data;
using WebApplication1.Data.DTO.Client;
using WebApplication1.Entitties;
using WebApplication1.Service.Criptografia;
using WebApplication1.Utils;

namespace WebApplication1.Service.Client
{
    public class PostClient
    {
        private readonly ContextDB _context;

        public PostClient(ContextDB context)
        {
            _context = context;
        }

        public ServiceResult execute(PostClientDTO dto)
        {
            try
            {
                User? createdBy = _context.users.FirstOrDefault(x => x.Email == dto.CreatedByEmail);
                Validator validator = new Validator();
                bool emailIsValid = validator.EmailValidate(dto.Email);
                if (!emailIsValid) return new ServiceResult(true, "Email inválido");
                Cliente clienteDB = _context.clients.FirstOrDefault(x => x.Email == dto.Email);
                if (clienteDB != null) return new ServiceResult(true, "Email já cadastrado");
                if (createdBy == null) return new ServiceResult(true, "Email de usuário não encontrado.");
                GenerateHash crypto = new GenerateHash();
                Cliente client = new Cliente(Guid.NewGuid(), dto.Email, dto.RG, dto.Nome, crypto.execute(dto.Password), createdBy.Email, dto.BirthDate, DateTime.UtcNow, dto.Selfie, dto.Document);
                _context.Add(client);
                _context.SaveChanges();
                return new ServiceResult(false, "Cliente criado com sucesso.");
            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
