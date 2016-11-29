using FeatureFolder;
using System;
using System.Collections.Generic;

namespace GoOutOnFriday.Event
{
    public class Details
    {
        public class Request
        {
            public int Id { get; set; }
        }

        public class Response
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string ShortDescription { get; set; }
            public string Description { get; set; }
            public string PathToMap { get; set; }
            public string Address { get; set; }
            public DateTime StartDay { get; set; }
            public DateTime? EndDay { get; set; }
            public TimeSpan? StartHour { get; set; }
            public TimeSpan? EndHour { get; set; }
            public IEnumerable<string> PathesToPictures { get; set; }
        }

        public class Query : IQuery<Request, Response>
        {
            Response IQuery<Request, Response>.Query(Request request)
            {


                throw new NotImplementedException();
            }
        }
    }
}
