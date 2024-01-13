namespace domain;
public class Community : Audit
{
    public long CommunityId { get; set; }
    public string Banner { get; set; }  
    public string ShortDescription { get; set; }
    public string LongDescription { get; set; }
    public long CommunityGenreId { get; set; }
    public CommunityGenre CommunityGenre { get; set; }
    public string Avatar { get; set; }
}
