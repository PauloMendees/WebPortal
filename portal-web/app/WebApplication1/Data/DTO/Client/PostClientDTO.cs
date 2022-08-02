using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Data.DTO.Client
{
    public class PostClientDTO
    {

        [Required]
        public string Email { get; set; }

        [Required]
        public int RG { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        public string CreatedByEmail { get; set; }

        [Required]
        public string Selfie { get; set; }

        [Required]
        public string Document { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }
    }
}
