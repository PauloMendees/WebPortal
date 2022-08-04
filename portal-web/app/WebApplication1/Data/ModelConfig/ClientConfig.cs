using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Entitties;

namespace WebApplication1.Data.ModelConfig
{
    public class ClientConfig : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder
                .Property(x => x.Id)
                .IsUnicode(true)
                .HasColumnName("id")
                .HasColumnType("uuid")
                .HasMaxLength(128)
                .IsRequired();

            builder
                .Property(x => x.Nome)
                .HasColumnName("name")
                .HasColumnType("varchar")
                .HasMaxLength(50)
                .IsRequired();

            builder
                .Property(x => x.Email)
                .HasColumnName("email")
                .HasColumnType("varchar")
                .HasMaxLength(70)
                .IsRequired();

            builder
                .Property(x => x.RG)
                .HasColumnName("rg")
                .HasColumnType("char")
                .HasMaxLength(20)
                .IsRequired();

            builder
                .Property(x => x.Password)
                .HasColumnName("password_hash")
                .HasMaxLength(200)
                .HasColumnType("varchar")
                .IsRequired();

            builder
                .Property(x => x.BirthDate)
                .HasColumnName("birth_date")
                .HasColumnType("Date")
                .IsRequired();

            builder
                .Property(x => x.CreatedAt)
                .HasColumnName("created_at")
                .HasColumnType("Date")
                .IsRequired();

            builder
                .Property(x => x.CreatedBy_email)
                .HasColumnName("created_by")
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
