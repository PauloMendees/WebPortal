using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.DolarDataService
{
    public class GetMax
    {
        private readonly ContextDB _context;

        public GetMax(ContextDB context)
        {
            _context = context;
        }

        public DolarData execute()
        {
            try
            {
                List<DolarData> dolardDataList = _context.dolarData.ToList();
                DolarData bigger = new DolarData(0, DateTime.UtcNow, Guid.NewGuid());
                foreach (DolarData dolarData in dolardDataList)
                {
                    if(dolarData.Value > bigger.Value)
                    {
                        bigger = dolarData;
                    }
                }

                return bigger;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
