using FeatureFolder;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FridayNight.Web.Event
{
    public class List
    {
        public class Request: IQuery
        {
            public DateTime StartPeriod { get; set; }

            public DateTime EndPeriod { get; set; }
        }

        public class Category
        {
            public string Name { get; set; }
            public IList<Event> Events { get; set; }

        }

        public class Event
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string PathToImage { get; set; }
            public string Description { get; set; }
        }

        public class Response : IQueryResult
        {
            public IList<Category> Categories { get; set; }
        }

        public class Query : IQueryHandler<Request, Response>
        {
            public Response HandleQuery(Request request)
            {
                throw new NotImplementedException();
            }

            public Task<Response> HandleQueryAsync(Request request)
            {
                var model = new Response
                {
                    Categories = new List<Category>()
                };

                var forFamily = new Category
                {
                    Name = "Для семьи",
                    Events = new List<Event>()
                };

                var forFamilyEvent1 = new Event
                {
                    Id = 1,
                    Name = "Фестиваль тыквы",
                    Description = "Тыква в разных видах",
                    PathToImage = ""
                };

                forFamily.Events.Add(forFamilyEvent1);

                model.Categories.Add(forFamily);

                return Task.FromResult(model);
            }
        }
    }
}
