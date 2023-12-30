using MediatR;

namespace application;
public class CreateUserRequest : IRequest<CreateUserResponse>
{
    public int MyProperty { get; set; }
}
