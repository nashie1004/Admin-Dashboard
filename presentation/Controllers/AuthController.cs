using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    [HttpGet("/tesaat")]
    public IActionResult Base123aaaawhat()
    {
        return Ok("Hello world");
    }

    [HttpGet("/authTest")]
    public IActionResult GetTest123()
    {
        return Ok("Hello world");
    }
}
