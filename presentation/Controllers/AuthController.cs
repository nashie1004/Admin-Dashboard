using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
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
