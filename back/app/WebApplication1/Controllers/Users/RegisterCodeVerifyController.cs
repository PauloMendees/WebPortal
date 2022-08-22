using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.DTO;
using WebApplication1.Service.UserService;
using WebApplication1.Utils;

namespace WebApplication1.Controllers.Users
{
    [ApiController]
    [Route("[controller]")]
    public class RegisterCodeVerifyController : ControllerBase
    {
        private readonly RegisterCodeVerify _service;

        public RegisterCodeVerifyController(RegisterCodeVerify service)
        {
            _service = service;
        }

        [HttpPost("/user/codeVerify")]
        [AllowAnonymous]
        public IActionResult Verify([FromBody] CodeVerifyDTO dto)
        {
            try
            {
                ServiceResult result = _service.execute(dto);
                if (result.Error) return Unauthorized(result);
                return Ok(result);
            }
            catch
            {
                return BadRequest("Erro interno de servidor");
            }
        }
    }
}
