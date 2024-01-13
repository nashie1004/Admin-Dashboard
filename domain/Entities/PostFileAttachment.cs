namespace domain;
public class PostFileAttachment
{
    public long PostFileAttachmentId { get; set; }
    public string File { get; set; }
    public long PostId { get; set; }
    public Post Post { get; set; }
}
