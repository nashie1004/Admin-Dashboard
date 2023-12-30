using MediatR;

namespace application;

public class CreateUserRequest : IRequest<CreateUserResponse>
{
}

public class GetUserRequest : IRequest<GetUserResponse>
{
}
