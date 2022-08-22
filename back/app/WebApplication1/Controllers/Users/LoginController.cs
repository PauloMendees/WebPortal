using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.DTO.User;
using WebApplication1.Service.UserService;
using WebApplication1.Utils;

namespace WebApplication1.Controllers.Users
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly Login _service;

        public LoginController(Login service)
        {
            _service = service;
        }

        [HttpPost("/user/login")]

        public IActionResult LoginRequest([FromBody] LoginDTO dto)
        {
            LoginResult result = _service.execute(dto);
            if (result.Error) return Unauthorized(result.Message);
            return Ok(result);
        }
    }
}
