using Microsoft.EntityFrameworkCore;
using WebApplication1.Data.ModelConfig;
using WebApplication1.Entitties;

namespace WebApplication1.Data
{
    public class ContextDB : DbContext
    {
        public ContextDB(DbContextOptions<ContextDB> opt) : base(opt)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            new UserConfig().Configure(modelBuilder.Entity<User>());
            new RegisterTokenConfig().Configure(modelBuilder.Entity<RegisterCode>());
            new ClientConfig().Configure(modelBuilder.Entity<Cliente>());
        }

        public DbSet<User> users { get; set; }
        public DbSet<RegisterCode> registerCodes { get; set; }
        public DbSet<Cliente> clients { get; set; }
        public DbSet<DolarData> dolarData { get; set; }
    }
}
