using Microsoft.EntityFrameworkCore;

namespace AngularJSWebApiCore.Models
{
    public class ContactContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("MyContactData");
        }
    }
}
