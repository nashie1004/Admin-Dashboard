namespace domain;
public class UserFollowingCommunities 
{
    public long UserFollowingCommunityId { get; set; }
    public long CommunityId { get; set; }
    public Community Community { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
    public DateTime FollowingSinceDate { get; set; }    
    
}
