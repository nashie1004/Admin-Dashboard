using domain;

namespace application;
public interface IUserRepository
{
    List<User> GetAllUsers();
    void SetUser();
    bool UpdateUser();
    User GetUser();
}
