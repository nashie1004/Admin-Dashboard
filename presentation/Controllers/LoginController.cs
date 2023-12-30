using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class LoginController : ControllerBase
{
    [HttpGet("/logg")]
    public IActionResult Base12345()
    {
        return Ok("Hello world");
    }
}
