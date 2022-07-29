using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.DTO
{
    public class LoginDTO
    {
        public string? Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
