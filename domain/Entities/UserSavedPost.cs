namespace domain;
public class UserSavedPost
{
    public long UserSavedPostId { get; set; }
    public long PostId { get; set; }
    public Post Post { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
}
