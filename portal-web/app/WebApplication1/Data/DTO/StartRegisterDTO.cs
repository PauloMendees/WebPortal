using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.DTO
{
    public class StartRegisterDTO
    {
        [Required]
        public string? Email { get; set; }
    }
}
