using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GoOutOnFriday.Event;
using FridayNight.Web.Event;
using System;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GoOutOnFriday.Controllers
{
    [EnableCors("SiteCorsPolicy")]
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            Details.Request request = new Details.Request
            {
                Id = id
            };

            Details.Query query = new Details.Query();
            var result = await query.HandleQueryAsync(request);

            if (result == null)
            {
                return NotFound();
            }

            return new ObjectResult(result);
        }

        public async Task<IActionResult> Get(DateTime startPeriod, DateTime endPeriod)
        {
            List.Request request = new List.Request
            {
                StartPeriod = startPeriod,
                EndPeriod = endPeriod
            };

            List.Query query = new List.Query();
            var result = await query.HandleQueryAsync(request);

            if (result == null)
            {
                return NotFound();
            }

            return new ObjectResult(result);
        }
    }
}
