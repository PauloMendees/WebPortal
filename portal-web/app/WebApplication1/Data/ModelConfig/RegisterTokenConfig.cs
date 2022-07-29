using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Entitties;

namespace WebApplication1.Data.ModelConfig
{
    public class RegisterTokenConfig : IEntityTypeConfiguration<RegisterCode>
    {
        public void Configure(EntityTypeBuilder<RegisterCode> builder)
        {
            builder
                .Property(b => b.Id)
                .IsUnicode(true)
                .HasColumnName("id")
                .HasColumnType("uuid")
                .HasMaxLength(128)
                .IsRequired();

            builder.Property(b => b.Code)
                .IsUnicode(true)
                .HasColumnName("code")
                .HasColumnType("varchar")
                .HasMaxLength(10)
                .IsRequired();

            builder.Property(b => b.Email)
                .IsUnicode(true)
                .HasColumnName("email")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
