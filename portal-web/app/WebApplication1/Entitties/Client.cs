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
        public int RG { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password {get; set; }

        [Required]
        public User? CreatedBy { get; set; }

        [Required]
        public Guid CreatedBy_id { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        public Cliente(Guid id, string email, int rG, string nome, string password, Guid createdBy_id, DateTime birthDate, DateTime createdAt)
        {
            Id = id;
            Email = email;
            RG = rG;
            Nome = nome;
            Password = password;
            CreatedBy_id = createdBy_id;
            BirthDate = birthDate;
            CreatedAt = createdAt;
        }
    }
}
