using System.Collections.Generic;

namespace GoOutOnFriday.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string PathToMap { get; set; }
        public string Address { get; set; }
        public Timetable Timetable { get; set; }
        public IEnumerable<string> PathesToPictures { get; set; }
    }
}
