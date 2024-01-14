using domain;

namespace application;
public interface ICommentRepository : IBaseRepository<Comment>
{
    bool CreateCommentReport(CommentReport commentReport);
}
