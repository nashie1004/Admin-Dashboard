namespace domain;
public class Reply : Audit
{
    public long ReplyId { get; set; }   
    public long CommentId { get; set; } 
    public Comment Comment { get; set; }
    public string Body { get; set; }
    public long Upvotes { get; set; }
}
