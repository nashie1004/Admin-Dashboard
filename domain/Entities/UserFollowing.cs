namespace domain;
public class UserFollowing
{
    public long UserFollowingId { get; set; }
    public long FollowingUserId { get; set; }   
    public User FollowingUser { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
}
