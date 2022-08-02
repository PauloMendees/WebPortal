using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.DTO.Client;
using WebApplication1.Service.Client;
using WebApplication1.Utils;

namespace WebApplication1.Controllers.Clients
{
    [ApiController]
    [Route("[controller]")]
    public class PostClientController : ControllerBase
    {
        private readonly PostClient _service;

        public PostClientController(PostClient service)
        {
            _service = service;
        }

        [Authorize(Roles = "ColaboratorRole")]
        [HttpPost("/client/post")]
        public IActionResult create([FromBody] PostClientDTO dto)
        {
            try
            {
                ServiceResult result = _service.execute(dto);
                if (result.Error) return BadRequest(result.Message);
                return Ok(result);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
