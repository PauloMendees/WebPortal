using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Entitties;
using WebApplication1.Service.DolarDataService;

namespace WebApplication1.Controllers.Dolar
{
    [ApiController]
    [Route("[controller]")]
    public class GetMinController : ControllerBase
    {
        private readonly GetMin _service;

        public GetMinController(GetMin service)
        {
            _service = service;
        }

        [Authorize(Roles = "ColaboratorRole, ClientRole")]
        [HttpGet("/dolar/getmin")]
        public IActionResult GetValue()
        {
            try
            {
                DolarData dolarData = _service.execute();
                return Ok(dolarData);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
