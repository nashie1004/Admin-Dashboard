using domain;

namespace application;
public interface IPostRepository : IBaseRepository<Post>
{
    bool CreatePostReport(PostReport postReport);
    bool CreatePostFileAttachments(ICollection<PostFileAttachment> postFileAttachments);
    
}
