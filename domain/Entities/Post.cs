namespace domain;
public class Post : Audit
{
    public long PostId { get; set; }
    public string Title { get; set; }
    public bool IsTextPostType { get; set; } = true;
    public string Body { get; set; }
    public long UpVotes { get; set; }
    public PostStatus Status { get; set; } = PostStatus.Ok;
    public long CommunityId { get; set; }   
    public Community Community { get; set; }
    // public ICollection<Comment> Comments { get; set; }
}
