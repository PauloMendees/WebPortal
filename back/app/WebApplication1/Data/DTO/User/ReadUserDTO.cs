using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.DTO.User
{
    public class ReadUserDTO
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string? Email { get; set; }
    }
}
