namespace domain;
public class CommunityReport : Audit
{
    public long CommunityReportId { get; set; }
    public long UserId { get; set; }
    public User User { get; set; }
    public long CommunityId { get; set; }
    public Community Community { get; set; }
    public DateTime ReportDate { get; set; }
}
