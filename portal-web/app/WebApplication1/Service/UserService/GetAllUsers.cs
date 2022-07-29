using System.Collections.Generic;
using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.UserService
{
    public class GetAllUsers
    {
        private ContextDB _context;

        public GetAllUsers(ContextDB context)
        {
            _context = context;
        }

        public List<User> Execute()
        {
            return _context.users.ToList();
        }
    }
}
