namespace domain;
public class Audit
{
    // Create date and by user id
    public DateTime CreateDate { get; set; } = DateTime.Now;
    public long CreatedByUserId { get; set; }   
    public User CreatedByUser { get; set; }

    // Last update date and by user id
    public DateTime LastUpdateDate { get; set; } = DateTime.Now;
    public long LastUpdateByUserId { get; set; }   
    public User LastUpdateByUser { get; set; }
}
