namespace domain;
public class PaginatedList<T>
{
    public IReadOnlyCollection<T> Items { get; set; }
    public int PageNumber { get; }
    public int TotalPages { get; }
    public int TotalCount { get; }
    public bool HasPreviousPage => PageNumber > 1;
    public bool HasNextPage => PageNumber < TotalPages;
}
