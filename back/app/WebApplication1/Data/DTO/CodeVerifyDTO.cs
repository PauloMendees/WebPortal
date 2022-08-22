using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.DTO
{
    public class CodeVerifyDTO
    {
        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Code { get; set; }
    }
}
