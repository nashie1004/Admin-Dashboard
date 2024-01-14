using domain;

namespace application;
public interface ICommunityRepository : IBaseRepository<Community>
{
    ICollection<CommunityModerators> GetCommunityModerators(long communityId);
    ICollection<CommunityBlockedUsers> GetCommunityBlockedUsers(long communityId);
    ICollection<CommunityGuideline> GetCommunityGuidelines(long communityId);
    ICollection<CommunityFlair> GetCommunityFlairs(long communityId);
    bool CreateCommunityFlairs(ICollection<CommunityFlair> communityFlairs);
}
