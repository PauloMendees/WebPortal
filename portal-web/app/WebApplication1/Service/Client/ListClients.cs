using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.Client
{
    public class ListClients
    {
        private readonly ContextDB _context;

        public ListClients(ContextDB context)
        {
            _context = context;
        }

        public List<Cliente> execute()
        {
            var clientes = _context.clients.ToList();
            return clientes;
        }
    }
}
