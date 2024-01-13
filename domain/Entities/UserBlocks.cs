namespace domain;
public class UserBlocks
{
    public long UserBlockId { get; set; }
    public long BlockedUserId { get; set; }
    public User BlockedUser { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
    public DateTime BlockSinceDate { get; set; }
}
