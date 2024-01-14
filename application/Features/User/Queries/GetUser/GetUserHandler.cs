using MediatR;
using domain;

namespace application;
public class GetUserHandler : IRequestHandler<GetUserRequest, GetUserResponse>
{
    private readonly IUserRepository _userRepository;

    public GetUserHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<GetUserResponse> Handle(GetUserRequest request, CancellationToken cancellationToken){
        var retVal = _userRepository.Create(new User());

        return new GetUserResponse();
    }
}
