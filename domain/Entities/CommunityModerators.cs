namespace domain;
public class CommunityModerators
{
    public long CommunityModeratorId { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
    public long CommunityId { get; set; }
    public Community Community { get; set; }
    public DateTime JoinDate { get; set; }
}
