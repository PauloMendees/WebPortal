using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entitties
{
    public class RegisterCode
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string? Code { get; set; }

        [Required]
        public string? Email { get; set; }
        public RegisterCode(Guid id, string? code, string? email)
        {
            Id = id;
            Code = code;
            Email = email;
        }
    }
}
