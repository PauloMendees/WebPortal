using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entitties
{
    public class DolarData
    {
        [Key]
        [Required]
        public Guid Id { get; set; }

        [Required]
        public double Value { get; set; }

        [Required]
        public DateTime Moment { get; set; }
        public DolarData(double value, DateTime moment, Guid id)
        {
            Value = value;
            Moment = moment;
            Id = id;
        }
    }
}
