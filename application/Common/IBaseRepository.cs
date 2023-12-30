﻿namespace application;
public interface IBaseRepository<T>
{
    void Create(T entity);
    void Update(T entity);
    void Delete(T entity);
    Task<T> GetById(long id); //, CancellationToken cancellationToken
    Task<List<T>> GetAll(); // CancellationToken cancellationToken
}
