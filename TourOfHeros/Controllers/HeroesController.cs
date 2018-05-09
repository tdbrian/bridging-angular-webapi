using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace TourOfHeros.Controllers
{
    [Route("api/v1/[controller]")]
    public class HeroesController : Controller
    {
        public static List<Hero> Heros = new List<Hero>
        {
            new Hero(11, "Mr. Nice"),
            new Hero(12, "Narco"),
            new Hero(13, "Bombasto"),
            new Hero(14, "Celeritas"),
            new Hero(15, "Magneta"),
            new Hero(16, "RubberMan"),
            new Hero(17, "Dynama"),
            new Hero(18, "Dr IQ"),
            new Hero(19, "Magma"),
            new Hero(20, "Tornado")
        };

        [HttpGet]
        public IEnumerable<Hero> Get()
        {
            return Heros;
        }

        [HttpGet("{id}")]
        public Hero Get(int id)
        {
            return Heros.Find(_ => _.Id == id);
        }

        [HttpPost]
        public void Post([FromBody]Hero hero)
        {
            Heros.Add(hero);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Hero hero)
        {
            var heroToUpdate = Heros.Find(_ => _.Id == id);
            heroToUpdate = hero;
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Heros.RemoveAll(_ => _.Id == id);
        }
    }
}
