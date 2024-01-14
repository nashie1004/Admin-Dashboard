using application;

namespace infrastructure;
public class BaseRepository<T> where T : IBaseRepository<T>, new() 
{
    public BaseRepository()
    {
        
    }

    public bool Create(T entity){
        return true;
    }

    public bool Update(T entity){
        return true;
    }

    public bool Delete(T entity){
        return true;
    }

    public async Task<T> GetById(long id){
        var retVal = new T();
        return retVal;
    }

    public async Task<List<T>> GetAll(){
        var retVal = new List<T>(){};
        return retVal;
    }
}
