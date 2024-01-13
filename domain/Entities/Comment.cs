namespace domain;
public class Comment : Audit
{
    public long CommentId { get; set; }
    public long PostId { get; set; }
    public Post Post { get; set; }
    public string Body { get; set; }    
    public long Upvotes { get; set; }
}
