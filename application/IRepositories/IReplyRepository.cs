using domain;

namespace application;
public interface IReplyRepository : IBaseRepository<Reply>
{
    bool CreatePostReport(PostReport postReport);
    bool CreatePostFileAttachment(ICollection<PostFileAttachment> postFileAttachments);
    bool UpdatePostFlairs(ICollection<PostFlair> postFlairs);
}
