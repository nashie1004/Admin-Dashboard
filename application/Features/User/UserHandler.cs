using domain;
using MediatR;

namespace application;

public class CreateUserHandler : 
IRequestHandler<CreateUserRequest, CreateUserResponse>
{
    public CreateUserHandler()
    {
        
    }

    public async Task<CreateUserResponse> Handle(
        CreateUserRequest request, CancellationToken cancellationToken){

        var retVal = new CreateUserResponse();

        return retVal;
    }
}
