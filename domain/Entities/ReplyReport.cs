namespace domain;
public class ReplyReport
{
    public long ReplyReportId { get; set; }
    public long ReplyId { get; set; }
    public Reply Reply { get; set; }
    public long ReportedByUserId { get; set; }
    public User ReportedByUser { get; set; }
    public DateTime ReportDate { get; set; }
}
