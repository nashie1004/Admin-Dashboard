using Microsoft.AspNetCore.Mvc;

namespace presentation;

[ApiController]
[Route("/api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet("/getUser")]
    public IActionResult GetUser()
    {
        return Ok("Hello world");
    }
}
