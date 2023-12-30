using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IMediator _mediator;

    public AuthController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet("/register")]
    public IActionResult Register()
    {
        return Ok("Hello world");
    }

    [HttpGet("/login")]
    public IActionResult Login()
    {
        return Ok("Hello world");
    }
    
    [HttpGet("/forgotPassword")]
    public IActionResult ForgotPassword()
    {
        return Ok("Hello world");
    }
}
