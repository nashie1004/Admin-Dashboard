namespace domain;
public class CommunityFlair
{
    public long CommunityFlairId { get; set; }
    public long CommunityId { get; set; }
    public Community CommunityId { get; set; }
    public string Title { get; set; }
}
