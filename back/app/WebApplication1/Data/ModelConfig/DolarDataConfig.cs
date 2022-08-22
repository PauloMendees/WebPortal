using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Entitties;

namespace WebApplication1.Data.ModelConfig
{
    public class DolarDataConfig : IEntityTypeConfiguration<DolarData>
    {
        public void Configure(EntityTypeBuilder<DolarData> builder)
        {
            builder
                .Property(b => b.Id)
                .IsUnicode(true)
                .HasColumnName("id")
                .HasColumnType("uuid")
                .HasMaxLength(128)
                .IsRequired();

            builder.Property(b => b.Value)
                .HasColumnName("value")
                .HasColumnType("double")
                .IsRequired();

            builder.Property(b => b.Moment)
                .IsUnicode(true)
                .HasColumnName("moment")
                .HasColumnType("Date")
                .HasMaxLength(100)
                .IsRequired();
        }
    }
}
