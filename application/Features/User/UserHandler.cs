using MediatR;
using domain;

namespace application;

public class CreateUserHandler : 
IRequestHandler<CreateUserRequest, CreateUserResponse>,
IRequestHandler<GetUserRequest, GetUserResponse>

{
    private readonly IUserRepository _userRepository;

    public CreateUserHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<CreateUserResponse> Handle(
        CreateUserRequest request, CancellationToken cancellationToken){

        var retVal = _userRepository.Create(new User());

        return new CreateUserResponse();
    }

    public async Task<GetUserResponse> Handle(
        GetUserRequest request, CancellationToken cancellationToken
    ){
        var retVal = _userRepository.GetById(0);

        return new GetUserResponse();
    }
}
