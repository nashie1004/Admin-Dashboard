namespace application;
public interface IBaseRepository<T>
{
    bool Create(T entity);
    bool Update(T entity);
    bool Delete(T entity);
    Task<T> GetById(long id); //, CancellationToken cancellationToken
    Task<List<T>> GetAll(); // CancellationToken cancellationToken
}
