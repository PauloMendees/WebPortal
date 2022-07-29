using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.DTO;
using WebApplication1.Service.UserService;
using WebApplication1.Utils;

namespace WebApplication1.Controllers.Users
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly Register _service;

        public RegisterController(Register service)
        {
            _service = service;
        }

        [Authorize(Roles = "RegisterRole")]
        [HttpPost("/user/register")]
        public IActionResult Register([FromBody] PostUserColaboratorDTO dto)
        {
            try
            {
                ServiceResult result = _service.execute(dto);
                if(result.Error) return BadRequest(result);
                return Ok(result);
            }
            catch
            {
                return BadRequest("Erro interno de servidor");
            }
        }
    }
}
