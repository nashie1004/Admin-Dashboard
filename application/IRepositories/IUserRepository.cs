using domain;

namespace application;
public interface IUserRepository : IBaseRepository<User>
{
    bool AddUserFollowingCommunity(UserFollowingCommunities userFollowingCommunities);
    bool AddUserFollowingUser(UserFollowing userFollowing);
    ICollection<UserFollowers> GetUserFollowers(long userId);
    ICollection<UserFollowing> GetUserFollowings(long userId);
    ICollection<UserBlocks> GetUserBlocks(long userId);
    ICollection<UserSavedPost> GetUserSavedPosts(long userId);
}
