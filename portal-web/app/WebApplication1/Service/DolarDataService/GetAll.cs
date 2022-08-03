using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.DolarDataService
{
    public class GetAllDolar
    {
        private readonly ContextDB _context;

        public GetAllDolar(ContextDB context)
        {
            _context = context;
        }

        public List<DolarData> execute()
        {
            List<DolarData> list = _context.dolarData.ToList();

            return list;
        }
    }
}
