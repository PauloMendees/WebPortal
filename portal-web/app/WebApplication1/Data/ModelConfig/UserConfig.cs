using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Entitties;

namespace WebApplication1.Data.ModelConfig
{
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder
                .Property(b => b.Id)
                .IsUnicode(true)
                .HasColumnName("id")
                .HasColumnType("uuid")
                .HasMaxLength(128)
                .IsRequired();

            builder.Property(b => b.Email)
                .IsUnicode(true)
                .HasColumnName("email")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();

            builder.Property(b => b.Password)
                .HasColumnName("password")
                .HasColumnType("varchar")
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
