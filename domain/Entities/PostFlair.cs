namespace domain;
public class PostFlair
{
    public long PostFlairId { get; set; }
    public long CommunityFlairId { get; set; }
    public CommunityFlair CommunityFlair { get; set; }
    public long PostId { get; set; }
    public Post Post { get; set; }
}
