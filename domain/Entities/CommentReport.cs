namespace domain;
public class CommentReport
{
    public long CommentReportId { get; set; }   
    public long ReportedByUserId { get; set; }
    public User ReportByUser { get; set; }
    public long CommentId { get; set; }
    public Comment Comment { get; set; }
    public DateTime ReportDate { get; set; }
}
