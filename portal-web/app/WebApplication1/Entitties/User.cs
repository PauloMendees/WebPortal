using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace WebApplication1.Entitties
{
    public class User
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Email { get; set; }

        [JsonIgnore]
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public User(string password, string email, Guid id = default)
        {
            Password = password;
            Email = email;
            Id = id;
        }
    }
}
