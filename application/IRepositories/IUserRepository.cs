using domain;

namespace application;
public interface IUserRepository : IBaseRepository<User>
{
    ICollection<UserSavedPost> GetUserSavedPosts(long userId);
}
