using System;

namespace TourOfHeros.Controllers
{
    public class Hero
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Hero(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
