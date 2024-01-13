namespace domain;
public class PostReport
{
    public long PostReportId { get; set; }
    public long ReportedByUserId { get; set; }  
    public User ReportByUser { get; set; }  
    public long PostId { get; set; }
    public Post Post { get; set; }
    public DateTime ReportDate { get; set; }
}
