using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data.DTO;
using WebApplication1.Service.UserService;
using WebApplication1.Utils;

namespace WebApplication1.Controllers.Users
{
    [ApiController]
    [Route("[controller]")]
    public class StartRegisterController : ControllerBase
    {
        private StartRegister _service;

        public StartRegisterController(StartRegister service)
        {
            _service = service;
        }

        [HttpPost("/user/startRegister")]
        [AllowAnonymous]
        public IActionResult StartRegisterUser([FromBody] StartRegisterDTO dto)
        {
            ServiceResult result = _service.execute(dto.Email);
            if(result.Error) return BadRequest(result);
            return Ok(result.Message);
        }
    }
}
