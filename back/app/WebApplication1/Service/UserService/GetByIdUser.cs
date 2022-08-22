using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.UserService
{
    public class GetByIdUser
    {
        private ContextDB _context;

        public GetByIdUser(ContextDB context)
        {
            _context = context;
        }

        public User? execute(Guid id)
        {
            User? user = _context.users.FirstOrDefault(x => x.Id == id);

            return user;
        }
    }
}
