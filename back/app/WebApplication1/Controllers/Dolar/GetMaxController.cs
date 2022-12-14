using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Entitties;
using WebApplication1.Service.DolarDataService;

namespace WebApplication1.Controllers.Dolar
{
    [ApiController]
    [Route("[controller]")]
    public class GetMaxController : ControllerBase
    {
        private readonly GetMax _service;

        public GetMaxController(GetMax service)
        {
            _service = service;
        }

        [Authorize(Roles = "ColaboratorRole, ClientRole")]
        [HttpGet("/dolar/getmax")]
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
