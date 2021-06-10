using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Data
{
    public class Project1Context : DbContext
    {
        public DbSet<Project1Context.Models.Movie> Movies{ get; set; }
        public Project1Context(DbContextOptions<Project1Context> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Models.Movie>().HasData(new Models.Movie() { ID = Guid.NewGuid({ 66676B22 - B350 - 48A2 - 89CF - 0B74CD1979F6 }), Name = "Die Hard", Genre= "Action"});
        }
  }
