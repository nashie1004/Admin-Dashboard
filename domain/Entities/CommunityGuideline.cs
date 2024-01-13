namespace domain;
public class CommunityGuideline
{
    public long CommunityGuidelineId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public long CommunityId { get; set; }
    public Community Community { get; set; }
}
