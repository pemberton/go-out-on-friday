namespace FeatureFolder
{
    public interface IQuery<TRequestModel, TResponseModel>
    {
        TResponseModel Query(TRequestModel request);
    }
}
