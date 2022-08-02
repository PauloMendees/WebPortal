using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Entitties;
using WebApplication1.Service.Client;

namespace WebApplication1.Controllers.Clients
{
    [ApiController]
    [Route("[controller]")]
    public class GetAllClients : ControllerBase
    {
        private readonly ListClients _service;

        public GetAllClients(ListClients service)
        {
            _service = service;
        }

        [Authorize(Roles = "ColaboratorRole")]
        [HttpPost("/client/post")]
        public IActionResult list()
        {
            try
            {
                List<Cliente> clientes = _service.execute();
                return Ok(clientes);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }

        }
    }
}
