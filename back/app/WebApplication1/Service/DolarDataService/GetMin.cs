using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.DolarDataService
{
    public class GetMin
    {
        private readonly ContextDB _context;

        public GetMin(ContextDB context)
        {
            _context = context;
        }

        public DolarData execute()
        {
            try
            {
                List<DolarData> dolarDataList = _context.dolarData.ToList();
                DolarData lower = new DolarData(9999, DateTime.UtcNow, Guid.NewGuid());
                foreach (DolarData dolarData in dolarDataList)
                {
                    if (dolarData.Value < lower.Value)
                    {
                        lower = dolarData;
                    }
                }

                return lower;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
