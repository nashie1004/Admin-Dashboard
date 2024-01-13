namespace domain;
public class CommunityBlockedUsers
{
    public long CommunityBlockedUserId { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
    public long CommunityId { get; set; }
    public Community Community { get; set; }
    public DateTime BlockDate { get; set; }
}
