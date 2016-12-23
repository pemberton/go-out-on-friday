using FeatureFolder;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GoOutOnFriday.Event
{
    public class Details
    {
        public class Request : IQuery
        {
            public int Id { get; set; }
        }

        public class Response : IQueryResult
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string ShortDescription { get; set; }
            public string Description { get; set; }
            public string PathToMap { get; set; }
            public string Address { get; set; }
            public string SiteAddress { get; set; }
            public DateTime StartDay { get; set; }
            public DateTime? EndDay { get; set; }
            public TimeSpan? StartHour { get; set; }
            public TimeSpan? EndHour { get; set; }
            public IEnumerable<string> PathesToPictures { get; set; }
        }

        public class Query : IQueryHandler<Request, Response>
        {
            public Response HandleQuery(Request request)
            {
                var model = new Response
                {

                };

                return model;
            }

            public Task<Response> HandleQueryAsync(Request request)
            {
                var model = new Response
                {
                    Id = request.Id,
                    Name = "Фестиваль тыквы",
                    ShortDescription = "Тыква и тыква",
                    Description = "Тыква как она есть",
                    PathToMap = "images/event-map.jpg",
                    PathesToPictures = new List<string>()
                };

                ((List<string>)model.PathesToPictures)
                    .AddRange(new string[] { "images/pumpkin1.jpg",
                                             "images/pumpkin2.jpg",
                                             "images/pumpkin3.jpg",
                                             "images/pumpkin4.jpg",
                                             "images/pumpkin5.jpg",
                                             "images/pumpkin-big.jpg",
                                           });

                return Task.FromResult(model);
            }
        }
    }
}
