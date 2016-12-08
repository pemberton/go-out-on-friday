using System.Threading.Tasks;

namespace FeatureFolder
{
    public interface IQueryHandler<TRequestModel, TResponseModel>
        where TRequestModel : IQuery
        where TResponseModel : IQueryResult
    {
        TResponseModel HandleQuery(TRequestModel request);
        Task<TResponseModel> HandleQueryAsync(TRequestModel request);
    }
}
