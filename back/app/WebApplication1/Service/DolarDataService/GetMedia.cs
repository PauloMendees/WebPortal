using WebApplication1.Data;
using WebApplication1.Entitties;

namespace WebApplication1.Service.DolarDataService
{
    public class GetMedia
    {
        private readonly ContextDB _context;

        public GetMedia(ContextDB context)
        {
            _context = context;
        }

        public DolarData execute()
        {
            try
            {
                List<DolarData> dolarDataList = _context.dolarData.ToList();
                DolarData media = new DolarData(0, DateTime.UtcNow, Guid.NewGuid());
                foreach (DolarData dolarData in dolarDataList)
                {
                    media.Value += dolarData.Value;
                }

                media.Value = media.Value/ dolarDataList.Count();
                return media;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
