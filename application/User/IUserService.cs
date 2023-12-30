using domain;

namespace application;
public interface IUserService
{
    List<User> GetAllUsers();
    void SetUser();
    bool UpdateUser();
    User GetUser();
}
