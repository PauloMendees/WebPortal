using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entitties
{
    public class Cliente
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string RG { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set; }

        [Required]
        public string Selfie { get; set; }

        [Required]
        public string Document { get; set; }

        [Required]
        public string CreatedBy_email { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        public Cliente(Guid id, string email, string rG, string nome, string password, string createdBy_email, DateTime birthDate, DateTime createdAt, string selfie, string document)
        {
            Id = id;
            Email = email;
            RG = rG;
            Nome = nome;
            Password = password;
            CreatedBy_email = createdBy_email;
            BirthDate = birthDate;
            CreatedAt = createdAt;
            Selfie = selfie;
            Document = document;
        }
    }
}
