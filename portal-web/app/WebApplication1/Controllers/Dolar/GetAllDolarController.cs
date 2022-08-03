using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Entitties;
using WebApplication1.Service.DolarDataService;

namespace WebApplication1.Controllers.Dolar
{
    [ApiController]
    [Route("[controller]")]
    public class GetAllDolarController : ControllerBase
    {
        private readonly GetAllDolar _service;

        public GetAllDolarController(GetAllDolar service)
        {
            _service = service;
        }

        [Authorize(Roles = "ColaboratorRole, ClientRole")]
        [HttpGet("/dolar/getall")]
        public IActionResult list()
        {
            try
            {
                List<DolarData> dolarDataList = _service.execute();
                return Ok(dolarDataList);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
